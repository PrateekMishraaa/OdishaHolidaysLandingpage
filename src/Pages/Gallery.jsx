import React from 'react'
import Navbar from '../Components/Navbar'
import About1 from "../assets/about-us.jpg";
import BannerOne from "../assets/banner2.jpg";
import BannerTwo from "../assets/banner3.jpg";
import BannerThree from "../assets/banner3.jpg";
import BannerFour from "../assets/banner4.jpg";
import BannerFive from "../assets/banner5.jpg"
import BannerSix from "../assets/banner6.jpg";
import BannerSeven from "../assets/banner7.jpg";
import BannerEight from "../assets/newbanner.jpg";
import Footer from '../Components/Footer';
const Gallery = () => {
  return (
    <>
    <Navbar/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                        <div className="w-full h-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <img src={About1} alt="Odisha Beach" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="w-full h-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <img src={BannerOne} alt="Odisha Temple" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="w-full h-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <img src={BannerTwo} alt="Odisha Festival" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="w-full h-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <img src={BannerThree} alt="Odisha Beach" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="w-full h-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <img src={BannerFour} alt="Odisha Temple" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="w-full h-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <img src={BannerFive} alt="Odisha Festival" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="w-full h-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <img src={BannerSix} alt="Odisha Festival" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="w-full h-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <img src={BannerSeven} alt="Odisha Festival" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="w-full h-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <img src={BannerEight} alt="Odisha Festival" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                    </div>
                    <Footer/>
    </>
  )
}

export default Gallery
