import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from "../assets/banner.jpg";
import About1 from "../assets/about-us.jpg";
import BannerOne from "../assets/banner2.jpg";
import BannerTwo from "../assets/banner3.jpg";
import BannerThree from "../assets/banner3.jpg";
import BannerFour from "../assets/banner4.jpg";
import BannerFive from "../assets/banner5.jpg"
import BannerSix from "../assets/banner6.jpg";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-opacity-60 z-0" />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-4 bg-opacity-80 rounded-3xl w-[85%] sm:w-[70%] md:w-[60%] mt-40 cursor-pointer hover:scale-105 transition-transform duration-300">
            Welcome to Odisha Holidays
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-white font-serif font-semibold leading-relaxed h-40 w-[80%] md:w-[70%] bg-opacity-80 p-6 rounded-3xl shadow-lg backdrop-blur-md border-4 border-gradient-to-r from-blue-300 to-purple-300 transition-all duration-300 hover:bg-blue-500 hover:border-blue-500">
            "Discover the enchanting beauty of Odisha, India – explore its rich cultural heritage, pristine beaches, ancient temples, and vibrant festivals for an unforgettable travel experience."
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="min-h-[50vh] w-full bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 p-10">
        <div className="w-full h-auto cursor-pointer bg-black text-blue-900 p-8 rounded-2xl shadow-lg hover:bg-gray-900 hover:text-yellow-400 text-white transition">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 mb-6">
            About Odisha Holidays
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Odisha Holidays is your gateway to explore the rich culture, ancient temples, and pristine landscapes of Odisha, India. We offer curated travel experiences, ensuring you get the most out of your visit to this vibrant and historic state. Whether you're looking for spiritual experiences, adventure activities, or cultural immersion, we have something for everyone.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Our team of experts is dedicated to providing you with personalized travel itineraries, local insights, and the best accommodations to make your journey truly unforgettable. Join us in discovering the hidden gems of Odisha, from its untouched beaches to its colorful festivals.
          </p>
          <a
            href="/"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold text-xl rounded-full transition duration-300 hover:bg-blue-700 hover:scale-105"
          >
            Learn More
          </a>
        </div>

        {/* Image Grid */}
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
        </div>
      </section>
    </>
  );
};

export default HomePage;
