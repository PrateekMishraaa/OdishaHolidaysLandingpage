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
import BannerSeven from "../assets/banner7.jpg";
import BannerEight from "../assets/banner8.jpg";
import Footer from '../Components/Footer';
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 mb-6 font-serif">
            About Odisha Holidays
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-4 font-serif">
            Odisha Holidays is your gateway to explore the rich culture, ancient temples, and pristine landscapes of Odisha, India. We offer curated travel experiences, ensuring you get the most out of your visit to this vibrant and historic state. Whether you're looking for spiritual experiences, adventure activities, or cultural immersion, we have something for everyone.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4 font-serif">
            Our team of experts is dedicated to providing you with personalized travel itineraries, local insights, and the best accommodations to make your journey truly unforgettable. Join us in discovering the hidden gems of Odisha, from its untouched beaches to its colorful festivals.
          </p>
          <a
            href="https://odishaholidays.in/about-odisha-holidays.html"
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
          <div className="w-full h-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={BannerSeven} alt="Odisha Festival" className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="w-full h-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={BannerEight} alt="Odisha Festival" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black px-6 py-12">
      <div className="text-center mb-12">
  <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 font-serif">
    Popular Destinations
  </h2>

  {/* Decorative underline */}
  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto my-4 rounded-full"></div>

  {/* Subheading */}
  <h3 className="text-xl md:text-2xl text-white font-light italic mb-2">
    Journey into the heart of heritage and nature
  </h3>

  {/* Main paragraph */}
  <p className="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto italic">
    Discover the most enchanting places to visit in Odisha that will leave you mesmerized. 
    From spiritual sanctuaries and ancient architecture to pristine beaches and serene lakes, 
    each destination tells a story worth exploring.
  </p>

  {/* Inspirational travel quote */}
  <p className="text-sm md:text-base text-gray-300 italic mt-6 max-w-xl mx-auto">
    "Travel isn’t always about reaching a destination, it's about discovering yourself along the way." – Rakesh
  </p>
</div>


  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 font-serif">
    {[
      {
        title: "Puri Beach",
        image: BannerOne,
        special: true,
        rating: 4.8,
      },
      {
        title: "Konark Sun Temple",
        image: BannerTwo,
        special: false,
        rating: 4.9,
      },
      {
        title: "Chilika Lake",
        image: BannerThree,
        special: false,
        rating: 4.7,
      },
      {
        title: "Lingaraja Temple",
        image: BannerFour,
        special: true,
        rating: 4.9,
      },
      {
        title: "Hirakud Dam",
        image: BannerFive,
        special: false,
        rating: 4.6,
      },
      {
        title: "Dhauli Shanti Stupa",
        image: BannerSix,
        special: false,
        rating: 4.5,
      },
    ].map((dest, index) => (
      <div
        key={index}
        className="relative rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-10 backdrop-blur-md hover:scale-105 transition-transform duration-300 border border-gray-700"
      >
        {/* Badge */}
        {dest.special && (
          <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 text-xs font-bold rounded-full shadow-lg">
            Must Visit
          </div>
        )}

        <div className="relative">
          <img
            src={dest.image}
            alt={dest.title}
            className="w-full h-60 object-cover"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
            <a href='https://odishaholidays.in/' className="px-6 py-2 cursor-pointer bg-white text-black font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition">
              View More
            </a>
          </div>
        </div>

        <div className="p-4 text-white">
          <h3 className="text-xl font-bold mb-2 text-center text-gray-900">{dest.title}</h3>
          <p className="text-sm text-center mb-2 text-gray-900">
            Explore the timeless beauty and spiritual charm of {dest.title}, one of Odisha’s most iconic places.
          </p>

          {/* Rating */}
          <div className="flex justify-center items-center space-x-1">
            {[...Array(5)].map((_, starIndex) => (
              <svg
                key={starIndex}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${
                  starIndex < Math.floor(dest.rating)
                    ? "text-yellow-600"
                    : "text-gray-800"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.234 3.794a1 1 0 00.95.69h3.993c.969 0 1.371 1.24.588 1.81l-3.23 2.346a1 1 0 00-.364 1.118l1.234 3.794c.3.921-.755 1.688-1.538 1.118l-3.23-2.346a1 1 0 00-1.176 0l-3.23 2.346c-.783.57-1.838-.197-1.538-1.118l1.234-3.794a1 1 0 00-.364-1.118L2.228 9.22c-.783-.57-.38-1.81.588-1.81h3.993a1 1 0 00.95-.69l1.234-3.794z" />
              </svg>
            ))}
            <span className="text-sm text-gray-800">({dest.rating})</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    <Footer/>

    </>
  );
};

export default HomePage;
