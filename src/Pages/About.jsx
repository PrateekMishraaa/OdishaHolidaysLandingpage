import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Image from "../assets/tourism.jpg";
import TempleTour from "../assets/templetour.webp";
import DancingGirl from "../assets/girl.webp";

const About = () => {
    return (
        <>
            <Navbar />
            <section className="min-h-screen w-full">
                {/* Hero Section */}
                <div className="h-64 md:h-72 w-full relative">
                    <img src={Image} alt="Tourism" className="h-full w-full object-cover" />
                    <p className="absolute font-semibold text-white font-serif text-3xl md:text-6xl bottom-10 md:bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer hover:text-blue-800 transition">
                        About Us
                    </p>
                </div>

                {/* About Us Section */}
                <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center p-6 md:p-14 gap-8">
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <p className="text-2xl md:text-4xl font-semibold italic text-gray-700 px-2 md:px-10">
                            About Us
                        </p>
                        <p className="text-sm md:text-base font-semibold italic text-gray-500 py-4 px-2 md:px-8 text-justify">
                            Change is important for all, no matter the age, and planning a perfect getaway from everyday hustle and bustle could be a tedious task.
                            Fortunately, Siddhi Kalyani Holidays Private Limited is here to make things hassle-free and smooth for travelers planning their visit to Odisha from all corners of the world.
                            We have unparalleled experience in the industry, and what ensures the rest is our customized itineraries and packages, special reservation services, competitive prices, and giving the utmost priority to the customer.
                            As one of the leading tour and travel agencies in Odisha, we ensure to turn your travel experience into a memorable one.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={TempleTour} alt="Temple Tour" className="w-full h-80 md:h-full object-cover rounded-xl shadow-lg cursor-pointer" />
                    </div>
                </div>

                {/* Trusted User Experience Section */}
                <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center p-6 md:p-14 gap-8">
                    <div className="w-full md:w-1/2">
                        <img src={DancingGirl} alt="Dancing Girl" className="w-full h-80 md:h-full object-cover rounded-xl shadow-lg cursor-pointer" />
                    </div>
                    <div className="w-full md:w-1/2 bg-gray-100 rounded-xl p-6 md:p-10">
                        <p className="text-2xl md:text-5xl font-semibold italic text-gray-700 mb-6">
                            Trusted and Prompt User Experience
                        </p>
                        <div>
                            <p className="text-sm md:text-base font-semibold italic text-gray-500 mb-4 text-justify">
                                Since our establishment, we have been reckoned and approved by Odisha Tourism, Government of India. Based in Bhubaneswar, Odisha, we specialize in most of the B2B and B2C service dealings. Our core differentiators helping us outdo our competitors are:
                            </p>
                            <ul className="list-disc list-inside text-sm md:text-base font-semibold italic text-gray-500 space-y-2">
                                <li>Trusted and prompt user experience</li>
                                <li>Customized itineraries and packages</li>
                                <li>Affordable pricing</li>
                                <li>24×7 support via e-mail, chat, phone</li>
                                <li>Consideration of personal requests or services, if any</li>
                                <li>Assurance of lifetime holidaying experience in Odisha</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* About Services Section */}
                <div className="w-full flex flex-col items-center text-center p-6 md:p-14">
                    <p className="text-3xl md:text-4xl font-semibold italic text-gray-700 mb-6">
                        About Services
                    </p>
                    <p className="text-sm md:text-base font-semibold italic text-gray-500 mb-4 px-4 md:px-20 text-justify">
                        Siddhi Kalyani Holidays Private Limited is among Odisha’s fastest-growing tour and travel operators, providing impeccable services.
                        We have a passionate and dedicated staff working round the clock to make your holiday experience one of the best possible.
                        What are you even waiting for? Be ready and all set to explore stunning Odisha with the top travel agency in Odisha and cherish lifetime memories forever.
                    </p>
                    <p className="text-sm md:text-base font-semibold italic text-gray-500 px-4 md:px-20 text-justify">
                        We distinguish ourselves by being more service-oriented and continually striving to exceed our customers’ expectations.
                        In the travel industry, where you can have plenty of options in terms of tour agents, Odisha’s one and only Siddhi Kalyani Holidays Private Limited assures to serve ‘exact and more’ you seek, rely upon, and desire.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;
