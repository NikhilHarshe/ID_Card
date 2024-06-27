import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createFields } from '../services/opretions/fieldApi';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const FormsFields = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const templateType = location.state?.template || "";
  console.log("temp ", templateType);
  console.log("user  in fields : ", user);
  const { _id } = user;

  const [formData, setFormData] = useState({
    schoolName: "",
    _id: _id,
    template: templateType,
    role: '',
    name: false,
    classN: false,
    section: false,
    dateofBirth: false,
    admissionNumber: false,
    rollNumber: false,
    contactNumber: false,
    emergencyContact: false,
    bloodGroup: false,
    uploadYourPhoto: false,
    address: false,
    modeOfTransportation: false,
    designation: false,
    aadharCard: false
  });

  const [linkURL, setLinkURL] = useState("");



  const fields = [
    "name",
    "classN",
    "section",
    "dateofBirth",
    "admissionNumber",
    "rollNumber",
    "contactNumber",
    "emergencyContact",
    "bloodGroup",
    "uploadYourPhoto",
    "address",
    "modeOfTransportation",
    "designation",
    "aadharCard"
  ];

  const handleRoleChange = (e) => {
    if (formData.role !== '') {
      setFormData({
        schoolName:"",
        name: false,
        classN: false,
        section: false,
        dateofBirth: false,
        admissionNumber: false,
        rollNumber: false,
        contactNumber: false,
        emergencyContact: false,
        bloodGroup: false,
        uploadYourPhoto: false,
        address: false,
        modeOfTransportation: false,
        designation: false,
        aadharCard: false
      });

      for (let key in fields) {
        setFormData({
          ...formData,
          [key]: unchecked
        });
      }
    }
    const { value } = e.target;
    setFormData({
      ...formData,
      role: value
    });
  };

  const handleFieldChange = (e) => {
    if (formData.role === '') {
      toast.error("First Select Role");
      return
    }
    if (formData.schoolName === '' && e.target.name !== "schoolName") {
      toast.error("Place Enter School Name");
      return
    }
    const { name, checked, value } = e.target;
    const selectedCount = Object.values(formData).filter(value => value === true).length;
    const maxSelections = formData.role === 'Student' ? 7 : 10;

    if (checked && selectedCount >= maxSelections) {
      alert("For student, you can select only 7 checkboxes and for others, you can select only 10 checkboxes");
      return; // Prevent further selections if limit is reached
    }

    if (name === "schoolName") {
      setFormData({
        ...formData,
        [name]: value
      });
    } else {
      setFormData({
        ...formData,
        [name]: checked
      });
    }
  };

  console.log("Form data in FormFiels : ", formData);
  const handleSubmit = async() => {
    // Navigate to the second form and pass the form data
    console.log("Form data in FormFiels : ", formData);
    // navigate('/detailsform', { state: { formData } });

    const data = await createFields(formData);
    console.log("created fields data ", data);
    // const link = `https://id-card-wheat.vercel.app/detailsform/${data._id}/${formData.role}`
    // const link = `http://localhost:5173/detailsform/${data._id}/${formData.role}`
    const link = `https://id-card-wheat.vercel.app/#/detailsform/${data._id}/${formData.role}`
    console.log("link : ", link);
    setLinkURL(link);
  };

  // const [copySuccess, setCopySuccess] = useState('');

  const handleCopyClick = async (e) => {
    e.preventDefault();
    if(linkURL === ""){
      return
    }
    try {
      await navigator.clipboard.writeText(linkURL);
      // setCopySuccess('Copied!');
      toast.success("Link Copied!");
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold p-4 md:p-10">WideSoftech Pvt. Ltd</h1>
          <p className="mb-4 md:mb-10">Select fields to be added in the ID Card</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="student"
              name="role"
              className="w-4 h-4 md:w-5 md:h-5"
              value="Student"
              onChange={handleRoleChange}
            />
            <label htmlFor="student" className="text-sm text-black ml-2 md:ml-4">
              Student
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="staff"
              name="role"
              className="w-4 h-4 md:w-5 md:h-5"
              value="Staff"
              onChange={handleRoleChange}
            />
            <label htmlFor="staff" className="text-sm text-black ml-2 md:ml-4">
              Staff
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="employee"
              name="role"
              className="w-4 h-4 md:w-5 md:h-5"
              value="Employee"
              onChange={handleRoleChange}
            />
            <label htmlFor="employee" className="text-sm text-black ml-2 md:ml-4">
              Employee
            </label>
          </div>
        </div>
      </div>

      <form className="font-[sans-serif] max-w-4xl mx-auto">
        <div className=' flex flex-col'>
          <div className=' flex w-full gap-5 justify-center mb-12 align-middle items-center '>
            <label htmlFor="schoolName" className=' text-2xl'>Enter School Name <span className=' text-red-500'>*</span> </label>
            <input type="text" value={formData.schoolName} name='schoolName' onChange={handleFieldChange} placeholder='Enter School Name Here'  className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-[70%] text-sm border outline-[#007bff] rounded transition-all"/>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {
              fields.map((field, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border rounded capitalize">
                    {field}
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name={field}
                      className="h-5 w-5 ml-2"
                      checked={formData[field]}
                      onChange={handleFieldChange}
                    />
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className=' flex gap-3'>
          <div className=' flex w-full'>
            <button
              className="mt-8 px-6 py-2.5 text-sm w-[20%] bg-[#c7def7] hover:bg-[#c7d9f3] text-gray-900 rounded mb-16"
              onClick={handleCopyClick}
            >
              Copy link
            </button>
            <div className='mt-8 px-6 py-2.5 text-sm rounded mb-16 border border-gray-500 w-full '>{linkURL}</div>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-8 px-6 py-2.5 text-sm w-[20%] bg-[#007bff] hover:bg-[#006bff] text-white rounded mb-16"
          >
            Generate Link
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormsFields;
