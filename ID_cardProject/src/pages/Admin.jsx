import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllData } from '../services/opretions/fieldApi';
import { IoMdDoneAll, IoMdSearch } from 'react-icons/io';
import { FaUsersViewfinder } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const { Token } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [schoolName, setSchoolName] = useState("");
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const res = await getAllData(Token);
            setData(res.data?.data);
        } catch (error) {
            console.log("error : ", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const filterSchoolNames = (data, filterSchoolName) => {
            return data.filter((item) =>
                item.schoolName.toLowerCase().includes(filterSchoolName.toLowerCase())
            );
        };

        const filteredData = filterSchoolNames(data, schoolName);
        setData1(filteredData);
    }, [data, schoolName]);

    const handleFieldChange = (e) => {
        const { value } = e.target;
        setSchoolName(value);
    };

    const navigateHandler = (item) => {
        if (item.template === "Vertical") {
            navigate("/IdCardV", { state: { item } });
        } else {
            navigate("/IdCardH", { state: { item } });
        }
    };

    return (
        <div className="w-11/12 mx-auto my-10">
            <div className="overflow-x-auto">
                <div className=' flex w-full gap-5 justify-center mb-12 align-middle items-center relative'>
                    <label htmlFor="schoolName" className=' text-2xl'>
                        Enter School Name <span className=' text-red-500'>*</span>
                    </label>
                    <IoMdSearch className=' text-3xl absolute left-[24.5%] text-blue-600' />
                    <input
                        type="text"
                        value={schoolName}
                        name='schoolName'
                        onChange={handleFieldChange}
                        placeholder='Enter School Name Here....'
                        className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-[70%] text-sm border outline-[#007bff] rounded transition-all placeholder:text-xl pl-[48px] text-xl"
                    />

                    {/* <button className=' px-5 py-2 text-xl bg-blue-600 text-white rounded-lg flex gap-2 justify-center items-center align-middle'>
                        <IoMdSearch className=' text-3xl' /> Search
                    </button> */}
                </div>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="py-2 px-4 text-left">Name</th>
                            <th className="py-2 px-4 text-left">Contact</th>
                            <th className="py-2 px-4 text-left">School</th>
                            <th className="py-2 px-4 text-left">Role</th>
                            <th className="py-2 px-4 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data1.length > 0 ? (
                                data1.map((item) => (
                                    <tr key={item._id} className="border-b hover:bg-gray-50">
                                        <td className="py-2 px-4">{item.name}</td>
                                        <td className="py-2 px-4">{item.contactNumber}</td>
                                        <td className="py-2 px-4">{item.schoolName}</td>
                                        <td className="py-2 px-4">{item.role}</td>
                                        <td className="py-2 px-4">
                                            <button
                                                className="bg-gray-200 text-blue-600 px-4 py-2 rounded text-2xl"
                                                title="View Data"
                                                onClick={() => navigateHandler(item)}
                                            >
                                                <FaUsersViewfinder />
                                            </button>
                                            <button
                                                className="bg-gray-200 text-green-600 px-4 py-2 text-2xl rounded ml-5"
                                                title="Approve Data"
                                            >
                                                <IoMdDoneAll />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className=' text-4xl font-bold my-16 w-[40rem] bg-red-300 py-3 px-5 text-center'>
                                        Data not present
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
