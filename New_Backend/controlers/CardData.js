const Fields = require("../models/RequiredFields")
const User = require("../models/UserData");
const CardData = require("../models/CardData");
const { uploadImageToCloudinary } = require("../utils/imageUploader");


// const filterEmptyValues = (obj) => {
//     return Object.fromEntries(
//         Object.entries(obj).filter(([key, value]) => value !== "")
//     );
// };

exports.saveCardData = async (req, res) => {
    try {
        const { fieldsId, _id, role, aadharnumber, name, section, contactNumber, address, Class, dateofBirth,  admissionNo, bloodGroup, designation, rollNo, emergencyConNo, modeOfTransportation } = req.body;

        console.log("req.body1 : ", req.body);
        console.log("req.files : ", req.files)

        const fieldData = await Fields.findById(fieldsId);
        if (!fieldData) {
            return res.status(403).json({
                success: false,
                message: "fieldData Not Found",
            })
        }

        console.log("FieldData ", fieldData);

        let imgUrl = ""
        if (req.files) {
            const img = req.files.uploadyourPassport;
            const Folder = process.env.FOLDER_NAME;
            const responce = await uploadImageToCloudinary(img, Folder);
            imgUrl = responce.secure_url
        }

        // Create a new CardData document
        const cardData = new CardData({
            aadharnumber: aadharnumber || null,
            name: name.trim(),
            section: section.trim(),
            contactNumber: contactNumber || null,
            address: address.trim(),
            Class: Class.trim(),
            dateofBirth: dateofBirth ? new Date(dateofBirth) : null,
            uploadyourPassport: imgUrl,
            admissionNo: admissionNo || null,
            bloodGroup: bloodGroup ? bloodGroup.trim() : null,
            designation: designation ? designation.trim() : null,
            rollNo: rollNo || null,
            emergencyConNo: emergencyConNo || null,
            modeOfTransportation: modeOfTransportation ? modeOfTransportation.trim() : null,
            role: role.trim(),
            admin: _id, // Assuming _id is the user ID
            schoolName: fieldData.schoolName,
            formField: fieldData._id,
        });

        // Save the document to the database
        const savedData = await cardData.save();

        // Update the User document
        const updatedAdmin = await User.findByIdAndUpdate(_id, { $push: { CardData: savedData._id } }, { new: true });
        const updatedFieldsData = await Fields.findByIdAndUpdate(fieldsId, { $push: { user: savedData._id } }, { new: true });

        return res.status(200).json({
            success: true,
            savedData,
            updatedAdmin,
            updatedFieldsData,
            message: "User Data Saved Successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

exports.getAllEntryes = async(req, res) => {
    try{

        console.log("insid function ")
        const data = await CardData.find();

        console.log("data ", data);

        if(!data){
            return res.status(404).json({
                success: false,
                message: "Data Not Present",
            })
        }

        return res.status(200).json({
            success: true,
            data,
            message: "Data Get Successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}