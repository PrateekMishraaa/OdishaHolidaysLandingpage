import React from 'react'
import { IoLocationSharp, IoCallOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest,FaYoutube } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
const Footer = () => {
    return (
        <footer className='w-full bg-[#63d7ec] text-white font-serif px-8 py-10'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>

                {/* Contact Us */}
                <div className='space-y-4'>
                    <h3 className='text-2xl font-bold text-white'>Contact Us</h3>
                    <div className='flex items-start gap-2'>
                        <IoLocationSharp className='text-white text-xl mt-1' />
                        <p className='text-sm'>
                            Plot No: 236, 1st Floor, Rout Complex,<br />
                            Cuttack Road, Bhubaneswar - 751006
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaUser className='text-text-white text-lg' />
                        <p className='text-sm'>Mr. Amit Dhanda</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoCallOutline className='text-text-white text-lg' />
                        <a href='' className='text-sm'>+91 9971834101</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoCallOutline className='text-text-white text-lg' />
                        <p className='text-sm'>+91 8743000609</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoCallOutline className='text-text-white text-lg' />
                        <p className='text-sm'>+91 8743000613</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoCallOutline className='text-text-white text-lg' />
                        <p className='text-sm'>+91 8744060002</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BiLogoGmail className='text-text-white text-lg' />
                        <a href='welcome@odishaholidays.in' className='text-sm'>welcome@odishaholidays.in</a>
                    </div>
                </div>

                {/* About Us */}
                <div className='space-y-4'>
                    <h3 className='text-2xl font-bold text-white'>Services</h3>
                    <ul className='space-y-2 text-sm'>
                        <li className='hover:text-yellow-400 cursor-pointer'>Home</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>Hotels</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>Tour</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>Car Rentals</li>
                    </ul>
                </div>

                {/* Services */}
                <div className='space-y-4'>
                    <h3 className='text-2xl font-bold text-white'>Resources</h3>
                    <ul className='space-y-2 text-sm'>
                        <li className='hover:text-yellow-400 cursor-pointer'>About Us</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>Our Services</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>Travel Blog</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>Contact</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>Cancellation Policy</li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className='space-y-4'>
                    <h3 className='text-2xl font-bold text-white'>About-Us</h3>
                    <p>Odisha Holidays specializes in providing exceptional travel experiences across Odisha. Our goal is to ensure customer satisfaction by offering **the best holiday packages, wildlife adventures, pilgrimage tours, and nature retreats at competitive prices.**</p>
                    <ul className='space-y-2 text-sm flex  gap-4 text-white'>
            <li className='hover:text-yellow-400 cursor-pointer'><a href="https://www.facebook.com/OdishaHolidays.in"><CiFacebook className='text-2xl text-white hover:text-blue-900 transition'/></a></li>
             <li className='hover:text-yellow-400 cursor-pointer'><a href="https://x.com/OdishaHolidays"><FaXTwitter className='text-2xl text-white hover:text-black transition'/></a></li>
            <li className='hover:text-yellow-400 cursor-pointer'><a href="https://in.pinterest.com/Odishaholidays/_saved/"><FaPinterest className='text-2xl text-white hover:text-red-600 transition'/></a></li>
           <li className='hover:text-yellow-400 cursor-pointer'><a href="https://www.instagram.com/odishaholidays/"><LuInstagram className='text-2xl text-white hover:text-pink-900 transition'/></a></li>
            <li className='hover:text-yellow-400 cursor-pointer'><a href="https://www.youtube.com/channel/UCdGqp-2xTHhJfLHJqkaIS7A"><FaYoutube className='text-2xl text-white hover:text-red-900 transition'/></a></li>
          </ul>
                </div>

            </div>

            {/* Footer bottom */}
         <div className='flex gap-20'>
         <div className='mt-10 border-t border-gray-700 pt-4 text-center text-sm text-white'>
                © 2024 Odisha Holidays. All rights reserved.
            </div>
            <div className='mt-10 border-t border-gray-700 pt-4 text-center text-sm text-white'>
               Terms & Condition | Privacy Policy
            </div>
         </div>
        </footer>
    )
}

export default Footer;
