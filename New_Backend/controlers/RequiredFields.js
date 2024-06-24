const Fields = require("../models/RequiredFields")
const User = require("../models/UserData");


exports.CreateFields = async (req, res) => {
    try {
      const {
        template,
        role,
        name = false,
        classN = false,
        section = false,
        dateofBirth = false,
        admissionNumber = false,
        rollNumber = false,
        contactNumber = false,
        emergencyContact = false,
        bloodGroup = false,
        uploadYourPhoto = false,
        address = false,
        modeOfTransportation = false,
        designation = false,
        aadharCard = false,
        _id
      } = req.body;
  
      // Find the user by _id
      const user = await User.findById(_id);
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      console.log("User found: ", user);
  
      // Create a new Fields document
      const fields = await Fields.create({
        template,
        role,
        name,
        classN,
        section,
        dateofBirth,
        admissionNumber,
        rollNumber,
        contactNumber,
        emergencyContact,
        bloodGroup,
        uploadYourPhoto,
        address,
        modeOfTransportation,
        designation,
        aadharCard,
        user: _id
      });
      console.log("Fields created: ", fields);
  
      // Update the user based on the role
      if (role === "Student") {
        user.StudentFields = fields._id;
      } else if (role === "Employee") {
        user.EmployeeFields = fields._id;
      } else if (role === "Staff") {
        user.StaffFields = fields._id;
      }
  
      // Save the updated user
      const savedUser = await user.save();
      console.log("User updated: ", savedUser);
  
      // Respond with success
      return res.status(200).json({
        success: true,
        fields,
        message: "Fields created successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

