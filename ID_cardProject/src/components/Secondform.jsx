// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getFormFiels, saveFormData } from "../services/opretions/fieldApi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function Secondform() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { _id } = user;
  const { fieldsId, role } = useParams();

  const [formFields, setFormFields] = useState({});
  console.log("formFields: ", formFields);

  // const getFilds = async () => {
  //   const data = await getFormFiels({ _id: fieldsId, role });
  //   if (role === "Student") {
  //     console.log("data in getFilds ", data.user.StudentFields);
  //     setFormFields(data.user?.StudentFields);
  //   } else if (role === "Employee") {
  //     setFormFields(data.user?.EmployeeFields);
  //   } else if (role === "Staff") {
  //     setFormFields(data.user?.StaffFields);
  //   }
  // };
  const getFilds = async () => {
    const data = await getFormFiels({_id: fieldsId});
    setFormFields(data.formfield);
    console.log("data in form: ", data);
  }

  useEffect(() => {
    getFilds();
  }, [fieldsId, role]);

  const [formData, setFormData] = useState({
    _id,
    fieldsId,
    role,
    aadharnumber: "",
    name: "",
    section: "",
    contactNumber: "",
    address: "",
    Class: "",
    dateofBirth: "",
    uploadyourPassport: "",
    admissionNo: "",
    bloodGroup: "",
    designation: "",
    rollNo: "",
    emergencyConNo: "",
    modeOfTransportation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };
  
  console.log("formData in side 2nd form ", formData);
  const handleSubmit = async () => {
    // Handle form submission, for example, send data to an API
    console.log("formData in side 2nd form ", formData);
    const response = await saveFormData(formData, navigate);
    console.log("response : ", response);
  };

  const {
    aadharCard,
    address,
    admissionNumber,
    bloodGroup,
    classN,
    contactNumber,
    dateofBirth,
    designation,
    emergencyContact,
    modeOfTransportation,
    name,
    rollNumber,
    section,
    uploadYourPhoto,
  } = formFields;

  return (
    <div className="mt-6 mb-6">
      <div className="font-[sans-serif] max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <form className="font-[sans-serif] max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">

            {/* Aadhar Number */}
            {aadharCard && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="aadharnumber" className="mb-2 text-sm text-gray-700">
                  Aadhar Number <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="aadharnumber"
                  id="aadharnumber"
                  placeholder="Aadhar Number"
                  value={formData.aadharnumber}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}

            {/* Name */}
            {name && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="name" className="mb-2 text-sm text-gray-700">
                  Name<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Student Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}

            {/* Section */}
            {section && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="section" className="mb-2 text-sm text-gray-700">
                  Section <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="section"
                  placeholder="Section"
                  value={formData.section}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}

            {/* Contact Number */}
            {contactNumber && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="contactNumber" className="mb-2 text-sm text-gray-700">
                  Contact Number <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}

            {/* Address */}
            {address && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="address" className="mb-2 text-sm text-gray-700">
                  Address <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}

            {/* Class */}
            {classN && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="Class" className="mb-2 text-sm text-gray-700">
                  Class <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="Class"
                  placeholder="Class"
                  value={formData.Class}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}

            {/* Admission No */}
            {admissionNumber && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="admissionNo" className="mb-2 text-sm text-gray-700">
                  Admission Number <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="admissionNo"
                  placeholder="Admission Number"
                  value={formData.admissionNo}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}

            {/* Blood Group */}
            {bloodGroup && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="bloodGroup" className="mb-2 text-sm text-gray-700">
                  Blood Group <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="bloodGroup"
                  placeholder="Type here"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}

            {/* Designation */}
            {designation && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="designation" className="mb-2 text-sm text-gray-700">
                  Designation <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}

            {/* Roll Number */}
            {rollNumber && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="rollNo" className="mb-2 text-sm text-gray-700">
                  Roll Number <span className="text-red-700">*</span>
                </label>
                <input
                  type="number"
                  name="rollNo"
                  placeholder="Roll Number"
                  value={formData.rollNo}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}

            {/* Emergency Contact No. */}
            {emergencyContact && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="emergencyConNo" className="mb-2 text-sm text-gray-700">
                  Emergency Contact No. <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="emergencyConNo"
                  placeholder="Emergency Contact No."
                  value={formData.emergencyConNo}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}

            {/* Mode Of Transportation */}
            {modeOfTransportation && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="modeOfTransportation" className="mb-2 text-sm text-gray-700">
                  Mode Of Transportation <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="modeOfTransportation"
                  placeholder="Mode Of Transportation"
                  value={formData.modeOfTransportation}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}

            {/* Date Of Birth */}
            {dateofBirth && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="dateofBirth" className="mb-2 text-sm text-gray-700">
                  Date Of Birth <span className="text-red-700">*</span>
                </label>
                <input
                  type="date"
                  name="dateofBirth"
                  placeholder="Date of Birth"
                  value={formData.dateofBirth}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}

            {/* Upload Your Passport */}
            {uploadYourPhoto && (
              <div className="relative flex flex-col items-start">
                <label htmlFor="uploadyourPassport" className="mb-2 text-sm text-gray-700">
                  Upload Your Passport <span className="text-red-700">*</span>
                </label>
                <input
                  type="file"
                  name="uploadyourPassport"
                  onChange={handleFileChange}
                  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#007bff] rounded transition-all"
                  required
                />
              </div>
            )}
          </div>
          <div className="flex items-center mt-4">
            <input type="checkbox" id="acceptTerms" className="mr-3" required />
            <label htmlFor="acceptTerms" className="text-sm text-gray-700">
              I accept the above information is true and correct <span className="text-red-700">*</span>
            </label>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="mt-8 px-6 py-2.5 text-sm w-[20%] bg-[#007bff] hover:bg-[#006bff] text-white rounded transition-all mb-16"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="mt-8 px-6 py-2.5 text-sm w-[20%] bg-[#007bff] hover:bg-[#006bff] text-white rounded transition-all mb-16"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Secondform;
