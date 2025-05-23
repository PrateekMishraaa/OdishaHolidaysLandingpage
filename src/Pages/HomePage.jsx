import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import BannerNine from "../assets/banner9.jpg";
import About1 from "../assets/about-us.jpg";
import BannerOne from "../assets/banner2.jpg";
import BannerTwo from "../assets/banner3.jpg";
import BannerThree from "../assets/banner3.jpg";
import BannerFour from "../assets/banner4.jpg";
import BannerFive from "../assets/banner5.jpg"
import BannerSix from "../assets/banner6.jpg";
import BannerSeven from "../assets/banner7.jpg";
import BannerEight from "../assets/newbanner.jpg";
import { MdFlight } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import Footer from '../Components/Footer';
import { MdGroups } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
const HomePage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    console.log(handleChange);


    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("All fields are required");
            return;
        }

        try {
            const response = await axios.post("https://odishaholidaysbackend.onrender.com/api/sendmail", formData, {
                headers: {
                    "Content-Type": "application/json", 
                },
            });

            toast.success("Message sent successfully!");
           
            setFormData({
                name: "",
                email: "",
                message: ""
            })
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            <Navbar />

            <section
                className="relative min-h-screen w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${BannerEight})` }}
            >
                
                <div className="absolute inset-0  bg-opacity-60 z-0" />

                
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4 sm:px-8">
                <p className="text-base sm:text-4xl md:text-4xl font-serif font-medium leading-relaxed max-w-xl sm:max-w-2xl px-4 py-4  bg-opacity-10 text-white rounded-2xl border border-blue-400 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-opacity-20 mb-2">
                      Welcome To Odisha Holidays
                    </p>

                    <p className="text-base sm:text-lg md:text-xl font-serif font-medium leading-relaxed max-w-xl sm:max-w-2xl px-4 py-4  bg-opacity-10 text-white rounded-2xl border border-blue-400 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-opacity-20">
                        Discover the enchanting beauty of Odisha, India – explore its rich cultural heritage, pristine beaches, ancient temples, and vibrant festivals for an unforgettable travel experience.
                    </p>
                </div>
            </section>


            
            <section className="min-h-[50vh] w-full bg-[#f3ece3] p-10">
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

              
              
            </section>
            <section className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black px-6 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 font-serif">
                        Popular Destinations
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto my-4 rounded-full"></div>


                    <h3 className="text-xl md:text-2xl text-white font-light italic mb-2">
                        Journey into the heart of heritage and nature
                    </h3>


                    <p className="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto italic">
                        Discover the most enchanting places to visit in Odisha that will leave you mesmerized.
                        From spiritual sanctuaries and ancient architecture to pristine beaches and serene lakes,
                        each destination tells a story worth exploring.
                    </p>

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
                            image: BannerNine,
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


                                <div className="flex justify-center items-center space-x-1">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <svg
                                            key={starIndex}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 ${starIndex < Math.floor(dest.rating)
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
            

            <section className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black font-serif text-white px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                        Tour & <span className="text-blue-400">Services</span>
                    </h2>
                    <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-300">
                        Odisha Holidays offers a personalized and exceptional travel experience. We specialize in custom Odisha tour packages, including cultural tours, beach holidays, tribal heritage tours, and wildlife safaris. Our local experts ensure your Odisha holiday is unforgettable with top-tier customer service and expert guidance.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-12">
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-gray-600 hover:scale-105 transition-transform duration-300 shadow-lg">
                        <div className="text-4xl text-yellow-400 mb-4 text-center">🚌</div>
                        <h3 className="text-2xl font-bold text-center mb-2 text-slate-900">Odisha Tour Packages</h3>
                        <p className="text-sm text-center text-blue-700 font-semibold">
                            Explore the best Odisha tour packages with scenic beauty, cultural experiences, and unforgettable memories. Book your Odisha holidays today!
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-gray-600 hover:scale-105 transition-transform duration-300 shadow-lg">
                        <div className="text-4xl text-green-400 mb-4 text-center">🏨</div>
                        <h3 className="text-2xl font-bold text-center mb-2 text-slate-900">Hotel Bookings</h3>
                        <p className="text-sm text-center text-blue-700 font-semibold">
                            Find top hotel bookings for a comfortable stay with great amenities. Discover the best hotels for your next trip to Odisha and beyond.
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-gray-600 hover:scale-105 transition-transform duration-300 shadow-lg">
                        <div className="text-4xl text-pink-400 mb-4 text-center">🚗</div>
                        <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">Cab Bookings</h3>
                        <p className="text-sm text-center text-blue-700 font-semibold">
                            Get reliable and affordable cab bookings for sightseeing, airport transfers, and local commutes. Choose the best cab service for your trip.
                        </p>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-gray-600 hover:scale-105 transition-transform duration-300 shadow-lg">
                        <div className="text-4xl text-pink-400 mb-4 text-center"><MdFlight className='ml-36' /></div>
                        <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">Air Ticket</h3>
                        <p className="text-sm text-center text-blue-700 font-semibold">
                            Book affordable air tickets to Odisha and major Indian cities. Get the best flight deals with our easy booking process for both domestic and international flights.
                        </p>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-gray-600 hover:scale-105 transition-transform duration-300 shadow-lg">
                        <div className="text-4xl text-orange-400 mb-4 text-center"><PiStudent className='ml-36' /></div>
                        <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">Students Group</h3>
                        <p className="text-sm text-center text-blue-700 font-semibold">
                            Plan group tours for students with special discounts. Discover tailor-made travel packages for student groups visiting Odisha for educational purposes.
                        </p>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-gray-600 hover:scale-105 transition-transform duration-300 shadow-lg">
                        <div className="text-4xl text-green-700 mb-4 text-center"><MdGroups className='ml-36' /></div>
                        <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">MICE-GROUPS</h3>
                        <p className="text-sm text-center text-blue-700 font-semibold">
                            Book MICE (Meetings, Incentives, Conferences, and Exhibitions) group packages for your business needs. Get corporate travel services for seamless business events.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href='https://odishaholidays.in/services-odisha-holidays.html' className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black cursor-pointer font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-pink-500/40 transition-all">
                        Discover All Services
                    </a>
                </div>
            </section>
            <section className="bg[#f3ece3]gradient-to-b from-black via-gray-900 to-black py-16 px-6 text-white font-serif">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-800 to-pink-900">
                        What Our Travelers Say
                    </h2>
                    <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-gray-900">
                        Hear from some of our delighted explorers who’ve uncovered the magic of Odisha with us.
                    </p>
                    <p className="text-md md:text-lg mt-3 max-w-3xl mx-auto text-gray-900 italic">
                        Whether it’s the spiritual serenity of ancient temples or the golden sunsets over quiet beaches, these real stories reflect the unforgettable moments our travelers experienced. Their words speak louder than ours.
                    </p>
                    <p className="text-md md:text-base mt-6 text-gray-900">
                        We believe in crafting journeys that are more than just vacations — they’re lifelong memories.
                    </p>
                </div>


                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                          
                            location: "Delhi, India",
                            feedback:
                                "An unforgettable experience! From the serenity of Chilika Lake to the grandeur of Konark Sun Temple — everything was perfectly arranged.",
                            
                        },
                        {
                        
                            location: "Mumbai, India",
                            feedback:
                                "I never imagined Odisha had so much beauty to offer. The entire trip was smooth, scenic, and absolutely memorable!",
                          
                        },
                        {
                          
                            location: "Ahmedabad, India",
                            feedback:
                                "Highly recommended! The guides were knowledgeable, the stays were cozy, and I felt connected to the roots of Indian culture.",
                            
                        }
                    ].map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={testimonial.img}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full border-2 border-yellow-400"
                                />
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-900">{testimonial.location}</p>
                                </div>
                            </div>
                            <p className="text-gray-900 italic">“{testimonial.feedback}”</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="min-h-screen w-full bg-gradient-to-br from-[#f5f3ef] to-[#e8e2d6] flex items-center justify-center px-4 py-10">
                <div className="bg-gray-900 shadow-2xl rounded-3xl p-10 w-full max-w-2xl transition-all duration-300 ">
                    <h2 className="text-4xl font-extrabold text-center text-white mb-10 font-serif tracking-tight ">
                        Get in Touch
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6 ">
                        <div>
                            <label htmlFor="name" className="block text-sm text-white font-semibold font-serif mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c89f70] focus:border-[#c89f70] transition-all duration-300 font-medium"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm text-white font-semibold font-serif mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c89f70] focus:border-[#c89f70] transition-all duration-300 font-medium"
                                placeholder="example@domain.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm text-white font-semibold font-serif mb-1">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c89f70] focus:border-[#c89f70] transition-all duration-300 font-medium resize-none"
                                placeholder="Let us know how we can help you..."
                            ></textarea>
                        </div>
                        <div className="flex justify-center pt-4">
                            <button
                                type="submit"
                                className="bg-[#0d3b66] hover:bg-[#092e4d] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out font-serif text-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>


            <section className="w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-black py-16 px-6 text-white font-serif">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-red-400 mb-6">
                        Want to Know More?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-8">
                        Explore detailed information, packages, gallery, and personalized services by visiting our official website.
                    </p>

                    <a
                        href="https://odishaholidays.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-black text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 hover:shadow-yellow-400/50 transition-all"
                    >
                        Visit Official Website
                    </a>

                    <p className="mt-6 text-sm text-gray-400">
                        Stay connected and explore Odisha like never before.
                    </p>
                </div>
            </section>

            <Footer />
            <ToastContainer />
        </>
    );
};

export default HomePage;
