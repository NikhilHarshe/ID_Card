import React from 'react'
import template from "../assets/Horizoltal JD Template.jpeg"
import { useLocation } from 'react-router-dom'

const IdCardJDHorizontal = () => {
    const location = useLocation();
    const data = location.state?.item
    console.log("data1 : ", data);
    // const data = {
    //     Class: "2",
    //     aadharnumber: null,
    //     address: "fdsaf fdafd fdsa fdsa fdsa fdsa fdsa NAGPUR",
    //     admin: "6675bc86fb1c650717d0c649",
    //     admissionNo: null,
    //     bloodGroup: null,
    //     contactNumber: 9999999999,
    //     dateofBirth: "2024-03-26T00:00:00.000Z",
    //     designation: null,
    //     emergencyConNo: null,
    //     formField: "667bb9cf4f33bd8ca473f2f8",
    //     modeOfTransportation: null,
    //     name: "RAM dfdsa fdsafdsa",
    //     role: "Staff",
    //     rollNo: null,
    //     schoolName: "J D",
    //     section: "C",
    //     uploadyourPassport:"https://res.cloudinary.com/djc3fsuzx/image/upload/v1719388395/IDCards/ycui6eod2i8jmmchbuzi.jpg"
    //     , __v: 0,
    //     _id: "667bba484f33bd8ca473f2fc"
    // }
    let date = ""
    if(data.dateofBirth) {
        date = data?.dateofBirth.slice(0,10)
    }
    return (
        <div className=' bg-gray-200 '>
            <div className=' flex relative justify-center w-11/12 mx-auto py-10'>
                <img className=' relative' height={40} src={template} alt="" />
                <img className=' absolute top-[18rem] left-[12rem] h-[18rem] rounded-lg' width={236}  src={data?.uploadyourPassport} alt="" />
                <div className=' absolute top-[19rem] left-[31rem] font-semibold text-3xl '>
                    {data.name && <p className=' w-[39rem]'><span className=' font-bold pr-3'>Name: </span> {data.name}</p>}
                    {data.role && <p><span className=' font-bold pr-3'>Role:</span> {data.role}</p>}
                    {data.Class && <p><span className=' font-bold pr-3'>Class:</span> {data.Class}</p>}
                    {data.section && <p><span className=' font-bold pr-3'>Section:</span> {data.section} </p>}
                    {date && <p><span className=' font-bold pr-3'>DOB:</span> {date}</p>}
                    {data.designation && <p><span className=' font-bold pr-3'>Designation: </span> {data.designation}</p>}
                    {data.bloodGroup && <p><span className=' font-bold pr-3'>Blood Group:</span> {data.bloodGroup}</p>}
                    {data.address && <p className=' w-[39rem]'><span className=' font-bold pr-3'>Address:</span> {data.address}</p>}
                </div>
            </div>
        </div>
    )
}

export default IdCardJDHorizontal
