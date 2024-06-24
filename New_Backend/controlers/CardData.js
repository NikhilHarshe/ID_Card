const Fields = require("../models/RequiredFields")
const User = require("../models/UserData");
const CardData = require("../models/CardData")


const filterEmptyValues = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => value !== "")
    );
};

exports.saveCardData = async (req, res) => {
    try {
        const { _id, role, aadharnumber, name, section, contactNumber, address, Class, dateofBirth, uploadyourPassport, admissionNo, bloodGroup, designation, rollNo, emergencyConNo, modeOfTransportation } = req.body;

        // console.log("req.body : ", req.body);

        // Create a new CardData document
        const cardData = new CardData({
            aadharnumber: aadharnumber || null,
            name: name.trim(),
            section: section.trim(),
            contactNumber: contactNumber || null,
            address: address.trim(),
            Class: Class.trim(),
            dateofBirth: dateofBirth ? new Date(dateofBirth) : null,
            uploadyourPassport,
            admissionNo: admissionNo || null,
            bloodGroup: bloodGroup.trim(),
            designation: designation.trim(),
            rollNo: rollNo || null,
            emergencyConNo: emergencyConNo || null,
            modeOfTransportation: modeOfTransportation.trim(),
            role: role.trim(),
            user: _id // Assuming _id is the user ID
        });

        // Save the document to the database
        const savedData =await cardData.save();
        // console.log("savedData : ", savedData);

        const updatedAdmin = User.findByIdAndUpdate(_id, {$push : {CardData : savedData._id}});

        return res.status(200).json({
            success: true,
            // userData,
            savedData,
            updatedAdmin,
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