import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SingleBooking = () => {
    const [booking, setBooking]: any = useState([]);
    const [user] = useAuthState(auth);
    const orderNumber = Math.round(Math.random() * 100000)
    useEffect(() => {
        const email = user?.email
        const url = `http://localhost:8000/myitems?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [user])

    const total = booking.reduce((accumulator: any, object: any) => {
        return accumulator + object.price;
    }, 0);

    return (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #{orderNumber}</h1>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full font-mono">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800 font-mono mb-4">Customer’s Cart</p>

                        {
                            booking.map((item: any) => (<div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full mb-5">
                                <div className="w-full md:w-40">
                                    <img className="w-full hidden md:block" src={item.decrImg1} alt="dress" />
                                </div>
                                <div className="  flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0  ">
                                    <div className="w-full flex flex-col justify-start items-start space-y-2">
                                        <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800 ">{item.service}</h3>
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-sm leading-none text-gray-800">
                                                <span className="text-gray-500">Package: </span> {item.package}
                                            </p>
                                            <p className="text-sm leading-none text-gray-800">
                                                <span className="text-gray-500">Location: </span> {item.location}
                                            </p>
                                            <p className="text-sm leading-none text-gray-800">
                                                <span className="text-gray-500">Date: </span> {item.date}
                                            </p>
                                            <p className="text-sm leading-none text-gray-800">
                                                <span className="text-gray-500">Time: </span> {item.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-8 items-start w-full">
                                        <p className="text-base xl:text-lg leading-6 text-gray-800">01</p>
                                        <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">${item.price}</p>
                                    </div>
                                </div>
                            </div>))
                        }
                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base leading-4 text-gray-600">${total}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6  font-mono">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800" >You Are Ordering {booking.length} Service</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                    <div className="w-8 h-8">
                                        <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="text-lg leading-6 font-semibold text-gray-800">
                                            DPD Order
                                            <br />
                                            <span className="font-normal">Total Amount </span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold leading-6 text-gray-800">${total}</p>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                    <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <img className="w-20 rounded-[50%]" src={user.photoURL} alt="avatar" />
                                <div className=" flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4 text-left text-gray-800">{user.displayName}</p>
                                </div>
                            </div>

                            <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="cursor-pointer text-sm leading-5 text-gray-800">{user.email}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBooking;