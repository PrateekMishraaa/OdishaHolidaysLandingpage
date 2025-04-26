import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from "../assets/banner7.jpg";
import Tour from "../assets/ayodhya.webp";
import Tour2 from "../assets/about-us.jpg";
import Tour3 from "../assets/banner.jpg";
import Tour4 from "../assets/banner4.jpg";
import Tour5 from "../assets/temple.webp";
import Tour6 from "../assets/lion.webp";
import Tour7 from "../assets/beach.webp";
import Tour8 from "../assets/banner7.jpg";
import Tour9 from "../assets/banner6.jpg";
import Tour10 from "../assets/banner5.jpg";
import Tour11 from "../assets/banner3.jpg";
import Tour12 from "../assets/banner8.jpg";
import Tour13 from "../assets/liontwo.jpg";
import Tour14 from "../assets/view.jpg";
import Tour15 from "../assets/nature.webp";
import Tour16 from "../assets/destinations.webp";

const tours = [
  { image: Tour, title: "Varanasi Tour", tours: "1 tour" },
  { image: Tour2, title: "Similipal", tours: "3 tours" },
  { image: Tour3, title: "Satkosia", tours: "9 tours" },
  { image: Tour4, title: "Puri", tours: "26 tours" },
  { image: Tour5, title: "Puri", tours: "30 tours" },
  { image: Tour6, title: "Varanasi Tour", tours: "1 tour" },
  { image: Tour7, title: "Similipal", tours: "3 tours" },
  { image: Tour8, title: "Satkosia", tours: "9 tours" },
  { image: Tour9, title: "Puri", tours: "26 tours" },
  { image: Tour10, title: "Hindu Mandir", tours: "30 tours" },
  { image: Tour11, title: "Varanasi Tour", tours: "1 tour" },
  { image: Tour12, title: "Similipal", tours: "3 tours" },
  { image: Tour13, title: "Satkosia", tours: "9 tours" },
  { image: Tour14, title: "Puri", tours: "26 tours" },
  { image: Tour15, title: "Jagannath", tours: "30 tours" },
];

const Destinations = () => {
  return (
    <>
      <Navbar />
      <section className='min-h-screen w-full'>
        {/* Banner */}
        <div className='h-64 md:h-96 w-full relative'>
          <img src={Banner} alt="Banner" className='h-full w-full object-cover' />
          <p className='absolute font-semibold text-white font-serif text-3xl md:text-6xl bottom-16 md:bottom-32 left-1/2 transform -translate-x-1/2 cursor-pointer hover:text-blue-800 transition'>
            Destinations
          </p>
          <p className='absolute bottom-10 md:bottom-24 left-1/2 transform -translate-x-1/2 text-sm md:text-lg italic font-semibold cursor-pointer hover:underline transition'>
            Explore Tour By Destinations <span className='text-blue-800 font-bold'>Odisha Holidays</span>
          </p>
        </div>

        {/* Heading */}
        <div className='px-4 md:px-20 lg:px-40 py-10'>
          <p className='text-center text-gray-700 text-2xl md:text-4xl font-bold font-serif'>
            Tourist Destinations In <a href="https://odishaholidays.in/" className='text-blue-600 font-bold'>Odisha Holidays</a>
          </p>
          <p className='mt-6 font-semibold italic text-gray-800 text-sm md:text-base'>
            The eastern Indian State of Odisha is a year-round destination for visitors. The numerous natural marvels, tourists’ destinations, Buddhist caves and sites, sea beaches in Puri, Chandrabhaga, Chandipur, and Gopalpur have made Odisha a perfect destination for visitors to throng to Odisha.
          </p>
          <p className='mt-4 font-semibold italic text-gray-800 text-sm md:text-base'>
            The rich culture of lord Jagannath, lord of the Universe, drenches visitors in its divinity and attracts countless devotees across the world. A trip to experience the blend of adventure, natural beauty and religious fervour of Odisha should never be missed.
          </p>
          <p className='mt-4 font-semibold italic text-gray-800 text-sm md:text-base'>
            However, during your trip to Odisha you need to experience some of the spectacular travel spots in the capital city of Odisha – Bhubaneswar. Here below are some of the fantastic places to visit in Bhubanewar.
          </p>
        </div>

        {/* Tour Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-8'>
          {tours.map((tour, index) => (
            <div key={index} className='relative rounded-xl overflow-hidden shadow-lg group'>
              <img src={tour.image} alt={tour.title} className='h-52 md:h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300' />
              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
              {/* Text Content */}
              <div className='absolute bottom-4 left-4 text-white'>
                <h3 className='font-bold text-lg'>{tour.title}</h3>
                <p className='text-sm text-blue-700 italic font-bold'>{tour.tours}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Destinations;
