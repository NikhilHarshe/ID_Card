import React, { useEffect, useRef, useState } from 'react';
import VTemp1 from "../assets/VTemp1.jpeg"
import VTemp2 from "../assets/VTemp2.jpeg"
import VTemp3 from "../assets/VTemp3.jpeg"
import VTemp4 from "../assets/VTemp4.jpeg"
import HTemp1 from "../assets/HTemp1.jpeg"
import HTemp2 from "../assets/HTemp2.jpeg"
import HTemp3 from "../assets/HTemp3.jpeg"
import HTemp4 from "../assets/HTemp4.jpeg"
import HTemp5 from "../assets/HTemp5.jpeg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllData } from '../services/opretions/fieldApi';
import IdCardJDVertical from './IdCardJDVertical';

const Templates = () => {
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

    console.log("data in temp page ", data)

    const [Temp, setTemp] = useState("/src/assets/VTemp1.jpeg");
    console.log("Temp img : ", Temp);


    const array1 = [
        VTemp1,
        VTemp2,
        VTemp3,
        VTemp4,
    ]
    const array2 = [
        HTemp1,
        HTemp2,
        HTemp3,
        HTemp4,
        HTemp5,
    ]
    return (
        <>
            <div className=' w-full flex'>
                <div className=' w-[25%]  '>
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        spaceBetween={30}
                        mousewheel={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Mousewheel, Pagination, Navigation]}
                        className="mySwiper h-[40rem] px-3 py-3 "
                    >
                        {
                            array1.map((image, index) => (
                                <SwiperSlide onClick={() => setTemp(image)} className=' '><img className=' border-2 border-red-500' width={400} src={image} alt="Vtemp1" /> </SwiperSlide>
                            ))
                        }
                        {
                            array2.map((image, index) => (
                                <SwiperSlide className=' ' onClick={() => setTemp(image)}><img className=' border-2 border-red-500' src={image} alt="Vtemp1" /> </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className=' w-[75%] flex flex-wrap justify-evenly gap-3 pt-3'>
                    {/* 1  */}
                    {
                        Temp.slice(12, -5) === "VTemp1" && data.map((item, index) => (
                            <div className=' flex justify-center align-middle items-center shadow-lg '>
                                <div className=' w-[22.2rem] bg-green-400 border relative '>
                                    <img src={Temp} alt="" className='  z-0' />
                                    <img className=' w-[7rem] h-[8.8rem] top-[8.8rem] left-[7.5rem] rounded-xl absolute  ' src={item.uploadyourPassport} alt="" />
                                    <div className=' z-50 absolute top-[18.5rem] left-[1.5rem] font-semibold text-xl '>
                                        <p><span className=' font-bold'>Name:</span> {item.name}</p>
                                        {item.role && <p><span className=' font-bold'>Role:</span> {item.role}</p>}
                                        {item.Class && <p><span className=' font-bold'>Class:</span> {item.Class}</p>}
                                        {item.section && <p><span className=' font-bold'>Section:</span> {item.section} </p>}
                                        {/* {date && <p><span className=' font-bold'>DOB:</span> {date}</p>} */}
                                        {item.designation && <p><span className=' font-bold'>Designation: </span> {item.designation}</p>}
                                        {item.bloodGroup && <p><span className=' font-bold'>Blood Group:</span> {item.bloodGroup}</p>}
                                        {item.address && <p className=' w-[19rem]'><span className=' font-bold'>Address:</span> {item.address}</p>}
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {/* 2 */}
                    {
                        Temp.slice(12, -5) === "VTemp2" && data.map((item, index) => (
                            <div className=' flex justify-center align-middle items-center shadow-lg '>
                                <div className=' w-[22.2rem] bg-green-400 border relative '>
                                    <img src={Temp} alt="" className='  z-0' />
                                    <img className=' w-[9rem] h-[10.3rem] top-[11.7rem] left-[6.5rem] rounded-xl absolute  ' src={item.uploadyourPassport} alt="" />
                                    <div className=' z-50 absolute top-[23rem] left-[1.5rem] font-semibold text-xl '>
                                        <p><span className=' font-bold'>Name:</span> {item.name}</p>
                                        {item.role && <p><span className=' font-bold'>Role:</span> {item.role}</p>}
                                        {item.Class && <p><span className=' font-bold'>Class:</span> {item.Class}</p>}
                                        {item.section && <p><span className=' font-bold'>Section:</span> {item.section} </p>}
                                        {/* {date && <p><span className=' font-bold'>DOB:</span> {date}</p>} */}
                                        {item.designation && <p><span className=' font-bold'>Designation: </span> {item.designation}</p>}
                                        {item.bloodGroup && <p><span className=' font-bold'>Blood Group:</span> {item.bloodGroup}</p>}
                                        {item.address && <p className=' w-[19rem]'><span className=' font-bold'>Address:</span> {item.address}</p>}
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {/* 3 */}
                    {
                        Temp.slice(12, -5) === "VTemp3" && data.map((item, index) => (
                            <div className=' flex justify-center align-middle items-center shadow-lg '>
                                <div className=' w-[22.2rem] bg-green-400 border relative '>
                                    <img src={Temp} alt="" className='  z-0' />
                                    <img className=' w-[7.9rem] h-[10.2rem] top-[9.3rem] left-[7.1rem] rounded-xl absolute  ' src={item.uploadyourPassport} alt="" />
                                    <div className=' z-50 absolute top-[21rem] left-[1.5rem] font-semibold text-xl '>
                                        <p><span className=' font-bold'>Name:</span> {item.name}</p>
                                        {item.role && <p><span className=' font-bold'>Role:</span> {item.role}</p>}
                                        {item.Class && <p><span className=' font-bold'>Class:</span> {item.Class}</p>}
                                        {item.section && <p><span className=' font-bold'>Section:</span> {item.section} </p>}
                                        {/* {date && <p><span className=' font-bold'>DOB:</span> {date}</p>} */}
                                        {item.designation && <p><span className=' font-bold'>Designation: </span> {item.designation}</p>}
                                        {item.bloodGroup && <p><span className=' font-bold'>Blood Group:</span> {item.bloodGroup}</p>}
                                        {item.address && <p className=' w-[19rem]'><span className=' font-bold'>Address:</span> {item.address}</p>}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {/* 4 */}
                    {
                        Temp.slice(12, -5) === "VTemp4" && data.map((item, index) => (
                            <div className=' flex justify-center align-middle items-center shadow-lg '>
                                <div className=' w-[22.2rem] bg-green-400 border relative '>
                                    <img src={Temp} alt="" className='  z-0' />
                                    <img className=' w-[5.8rem] h-[7.7rem] top-[13.6rem] left-[15rem] rounded-xl absolute  ' src={item.uploadyourPassport} alt="" />
                                    <div className=' z-50 absolute top-[14rem] left-[1.5rem] font-semibold text-xl '>
                                        <p className=' w-[13.3rem] '><span className=' font-bold'>Name:</span> {item.name}</p>
                                        {item.role && <p><span className=' font-bold'>Role:</span> {item.role}</p>}
                                        {item.Class && <p><span className=' font-bold'>Class:</span> {item.Class}</p>}
                                        {item.section && <p><span className=' font-bold'>Section:</span> {item.section} </p>}
                                        {/* {date && <p><span className=' font-bold'>DOB:</span> {date}</p>} */}
                                        {item.designation && <p><span className=' font-bold'>Designation: </span> {item.designation}</p>}
                                        {item.bloodGroup && <p><span className=' font-bold'>Blood Group:</span> {item.bloodGroup}</p>}
                                        {item.address && <p className=' w-[19rem]'><span className=' font-bold'>Add.:</span> {item.address}</p>}
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {/* 1 */}
                    {
                        Temp.slice(12, -5) === "HTemp1" && data.map((item, index) => (
                            <div className=' flex justify-center align-middle items-center shadow-lg '>
                                <div className=' w-[22.2rem] bg-green-400 border relative '>
                                    <img src={Temp} alt="" className='  z-0' />
                                    <img className=' w-[4.7rem] h-[6rem] top-[6rem] left-[0.7rem] absolute  ' src={item.uploadyourPassport} alt="" />
                                    <div className=' z-50 absolute top-[6rem] left-[6.5rem] leading-[1.1rem] font-semibold '>
                                        <p className=' w-[15.5rem] '><span className=' font-bold'>Name:</span> {item.name}</p>
                                        {item.role && <p><span className=' font-bold'>Role:</span> {item.role}</p>}
                                        {item.Class && <p><span className=' font-bold'>Class:</span> {item.Class}</p>}
                                        {item.section && <p><span className=' font-bold'>Section:</span> {item.section} </p>}
                                        {/* {date && <p><span className=' font-bold'>DOB:</span> {date}</p>} */}
                                        {item.designation && <p><span className=' font-bold'>Designation: </span> {item.designation}</p>}
                                        {item.bloodGroup && <p><span className=' font-bold'>Blood Group:</span> {item.bloodGroup}</p>}
                                        {item.address && <p className=' w-[15.5rem]'><span className=' font-bold'>Add.:</span> {item.address}</p>}
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {/* 2 */}
                    {
                        Temp.slice(12, -5) === "HTemp2" && data.map((item, index) => (
                            <div className=' flex justify-center align-middle items-center shadow-lg '>
                                <div className=' w-[22.2rem] bg-green-400 border relative '>
                                    <img src={Temp} alt="" className='  z-0' />
                                    <img className=' w-[5.6rem] h-[6.89rem] top-[4.1rem] left-[0.9rem] absolute  ' src={item.uploadyourPassport} alt="" />
                                    <div className=' z-50 absolute top-[4.5rem] left-[8rem] leading-[1.1rem] font-semibold '>
                                        <p className=' w-[15.5rem] '><span className=' font-bold'>Name:</span> {item.name}</p>
                                        {item.role && <p><span className=' font-bold'>Role:</span> {item.role}</p>}
                                        {item.Class && <p><span className=' font-bold'>Class:</span> {item.Class}</p>}
                                        {item.section && <p><span className=' font-bold'>Section:</span> {item.section} </p>}
                                        {/* {date && <p><span className=' font-bold'>DOB:</span> {date}</p>} */}
                                        {item.designation && <p><span className=' font-bold'>Designation: </span> {item.designation}</p>}
                                        {item.bloodGroup && <p><span className=' font-bold'>Blood Group:</span> {item.bloodGroup}</p>}
                                        {item.address && <p className=' w-[14rem]'><span className=' font-bold'>Add.:</span> {item.address}</p>}
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {/* 3 */}
                    {
                        Temp.slice(12, -5) === "HTemp3" && data.map((item, index) => (
                            <div className=' flex justify-center align-middle items-center shadow-lg '>
                                <div className=' w-[22.2rem] bg-green-400 border relative '>
                                    <img src={Temp} alt="" className='  z-0' />
                                    <img className=' w-[5.1rem] h-[6rem] top-[5.3rem] left-[1.4rem] absolute  ' src={item.uploadyourPassport} alt="" />
                                    <div className=' z-50 absolute top-[5.5rem] left-[7.8rem] leading-[1.1rem] font-semibold '>
                                        <p className=' w-[14.3rem] '><span className=' font-bold'>Name:</span> {item.name}</p>
                                        {item.role && <p><span className=' font-bold'>Role:</span> {item.role}</p>}
                                        {item.Class && <p><span className=' font-bold'>Class:</span> {item.Class}</p>}
                                        {item.section && <p><span className=' font-bold'>Section:</span> {item.section} </p>}
                                        {/* {date && <p><span className=' font-bold'>DOB:</span> {date}</p>} */}
                                        {item.designation && <p><span className=' font-bold'>Designation: </span> {item.designation}</p>}
                                        {item.bloodGroup && <p><span className=' font-bold'>Blood Group:</span> {item.bloodGroup}</p>}
                                        {item.address && <p className=' w-[14rem]'><span className=' font-bold'>Add.:</span> {item.address}</p>}
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {/* 4 */}
                    {
                        Temp.slice(12, -5) === "HTemp4" && data.map((item, index) => (
                            <div className=' flex justify-center align-middle items-center shadow-lg '>
                                <div className=' w-[22.2rem] bg-green-400 border relative '>
                                    <img src={Temp} alt="" className='  z-0' />
                                    <img className=' w-[5.2rem] h-[6.8rem] top-[4.7rem] left-[1.2rem] absolute  ' src={item.uploadyourPassport} alt="" />
                                    <div className=' z-50 absolute top-[4.2rem] left-[7.8rem] leading-[1.1rem] font-semibold '>
                                        <p className=' w-[14.3rem] '><span className=' font-bold'>Name:</span> {item.name}</p>
                                        {item.role && <p><span className=' font-bold'>Role:</span> {item.role}</p>}
                                        {item.Class && <p><span className=' font-bold'>Class:</span> {item.Class}</p>}
                                        {item.section && <p><span className=' font-bold'>Section:</span> {item.section} </p>}
                                        {/* {date && <p><span className=' font-bold'>DOB:</span> {date}</p>} */}
                                        {item.designation && <p><span className=' font-bold'>Designation: </span> {item.designation}</p>}
                                        {item.bloodGroup && <p><span className=' font-bold'>Blood Group:</span> {item.bloodGroup}</p>}
                                        {item.address && <p className=' w-[14rem]'><span className=' font-bold'>Add.:</span> {item.address}</p>}
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {/* 5 */}
                    {
                        Temp.slice(12, -5) === "HTemp5" && data.map((item, index) => (
                            <div className=' flex justify-center align-middle items-center shadow-lg '>
                                <div className=' w-[22.2rem] bg-green-400 border relative '>
                                    <img src={Temp} alt="" className='  z-0' />
                                    <img className=' w-[4.9rem] h-[6.65rem] top-[4.65rem] left-[0.8rem] rounded-lg absolute  ' src={item.uploadyourPassport} alt="" />
                                    <div className=' z-50 absolute top-[4.2rem] left-[7rem] leading-[1.1rem] font-semibold '>
                                        <p className=' w-[14.3rem] '><span className=' font-bold'>Name:</span> {item.name}</p>
                                        {item.role && <p><span className=' font-bold'>Role:</span> {item.role}</p>}
                                        {item.Class && <p><span className=' font-bold'>Class:</span> {item.Class}</p>}
                                        {item.section && <p><span className=' font-bold'>Section:</span> {item.section} </p>}
                                        {/* {date && <p><span className=' font-bold'>DOB:</span> {date}</p>} */}
                                        {item.designation && <p><span className=' font-bold'>Designation: </span> {item.designation}</p>}
                                        {item.bloodGroup && <p><span className=' font-bold'>Blood Group:</span> {item.bloodGroup}</p>}
                                        {item.address && <p className=' w-[15.1rem]'><span className=' font-bold'>Add.:</span> {item.address}</p>}
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    );
};

export default Templates;
