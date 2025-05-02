import React from 'react';
import Navbar from '../Components/Navbar';
import Package from "../assets/package.jpg";
import Trip from "../assets/trip.png";
import Baba from "../assets/baba.webp";
import Chilika from "../assets/chilika.webp";
import Dance from "../assets/dance.webp";
import Daringbadi from "../assets/daringbadi.webp";
import Honeymoon from "../assets/honeymoon.webp";
import Jagannath from "../assets/jagannath.webp";
import Janambhumi from "../assets/janambhumi.webp"
import Kalyani from "../assets/kalyani.webp"
import Kashmir from "../assets/kashmir.webp"
import Kolkata from "../assets/kolkata.webp"
import Lingaraga from "../assets/lingaraga.webp"
import Odisha from "../assets/odisha.webp"
import Packagee from "../assets/package.jpg"
import Park from "../assets/park.webp"
import Ratha from "../assets/ratha.webp"
import Satkosia from "../assets/satkosia.webp"
import Tourone from "../assets/tour.webp"
import Tourtwo from "../assets/tour1.jpg"
import Tourthree from "../assets/tour2.jpg"
import Tourfour from "../assets/tour3.jpg"
import Tourfive from "../assets/tour4.jpg"
import Toursix from "../assets/tour5.jpg"
import Tribal from "../assets/tribal.webp"
import Valley from "../assets/valley.webp"
import Wildlife from "../assets/wildlife.webp"
import Temple from "../assets/temple.webp"
import TempleTour from "../assets/templetour.webp"
import Footer from '../Components/Footer';
const Packages = () => {
    const tour = [
        { title: "GOLDEN TRIANGLE WITH DARINGBADI TOUR PACKAGES",image:Baba, date: "02 Nights/03 Days Tour" },
        { title: "PURI GANGASAGAR TOUR PACKAGES",image:Chilika, date: "05 Nights/06 Days Tour" },
        { title: "TRIBAL TOUR OF ODISHA", image:Dance, date: "09 Nights/10 Days Tour" },
        { title: "GOLDEN TRIANGLE TOUR PACKAGES OF ODISHA", image:Daringbadi, date: "02 Nights/03 Days Tour" },
        // { title: "VARANASI, PRAYAGRAJ AND AYODHYA SHREE RAM LALA JANMBHOOMI TOUR", image:Honeymoon, date: "07 Nights/08 Days Tour" },
        { title: "WILDLIFE TOUR PACKAGES ODISHA", image:Jagannath, date: "06 Nights/07 Days Tour" },
        { title: "PILGRIMAGE TOUR OF PURI JAGANNATH DHAM, GANGASAGAR AND BAIDYANATH DHAM", image:Janambhumi, date: "08 Nights/09 Days Tour" },
        { title: "ODISHA HONEYMOON TOUR PACKAGES", image:Kalyani, date: "04 Nights/05 Days Tour" },
        { title: "Odisha Family Tour Packages", image:Kashmir, date: "04 Nights/05 Days Tour" },
        { title: "Jagannath Puri and Konark Packages Tour", image:Kolkata, date: "04 Nights/05 Days" },
        { title: "Jagannath Puri and Konark Packages Tour",image:Lingaraga, date: "01 Night/02 Days" },
        { title: "Spiritual Tour Packages Odisha", image:Odisha, date: "05 Nights/06 Days" },
        { title: "Odisha Adventure Tour Packages", image:Packagee, date: "08 Nights/09 Days" },
        { title: "Satkosia Wildlife Tour Packages", image:Park, date: "03 Nights/04 Days" },
        { title: "Senior Citizen Tour Packages of Odisha", image:Ratha, date: "06 Nights/07 Days" },
        { title: "Best of Wildlife Tour Package Odisha", image:Satkosia, date: "02 Nights/03 Days" },
        { title: "Simlipal National Park Tour Packages",image:Tourone, date: "02 Nights/03 Days" },
        { title: "Golden Triangle with Bhitarkanika Tour Packages",image:Tourtwo, date: "07 Nights/08 Days" },
        { title: "Puri Jagannath Rath Yatra Tour Packages of Odisha",image:Tourthree, date: "03 Nights/04 Days" },
        { title: "Puri Vizag Araku Valley Tour Package",image:Tourfour, date: "02 Nights/03 Days" },
        { title: "Koraput Tour Package Itinerary",image:Tourfive, date: "02 Nights/03 Days" },
        { title: "Puri-Jagannath Temple",image:Toursix, date: "02 Nights/03 Days" },
        { title: "Heavenly Odisha Tour",image:Tribal, date: "03 Nights/04 Days" },
        { title: "Puri-Bhubaneswar",image:Valley, date: "04 Nights/05 Days" },
        { title: "The Tribal Treasure",image:Wildlife, date: "13 Nights/14 Days" },
        { title: "Golden Triangle Odisha",image:Temple, date: "07 Nights/08 Days" },
        { title: "Jagannath Puri - Gangasagar Tour",image:TempleTour, date: "06 Nights/07 Days" },
    ];

    return (
        <>
            <Navbar />
            <section className="relative h-[32rem] w-full overflow-hidden">
                <img src={Package} alt="package-bg" className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 ">
                    <h1 className="text-yellow-400 text-6xl font-extrabold drop-shadow-lg">EXPLORE</h1>
                    <p className="text-white text-3xl italic mt-1">And Find</p>
                    <p className="text-white text-6xl font-extrabold mt-2">Packages</p>
                    <img src={Trip} alt="" className="h-32 mt-4" />
                </div>
            </section>

            <section className="w-full px-8 py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-4 font-serif">
                        ODISHA TOUR PACKAGES
                    </h2>
                    <p className="text-center text-gray-600 mb-12">
                        Odisha is known for its enduring charm and beauty, rich antiquity, and cultural heritage. 
                        With a long coastline, pristine beaches, and untouched landscapes, every location has its own 
                        unique story to tell. Explore the spiritual, natural, and adventurous experiences Odisha has to offer!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tour.map((item, index) => (
                          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                          <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                          <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.date}</p>
                            <a href="/contact" className='h-10 w-32 relative left-60 p-1  bg-blue-600 font-semibold text-gray-900 rounded-xl'>Enquiry now</a>
                          </div>
                        </div>

                        ))}
                        
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Packages;
