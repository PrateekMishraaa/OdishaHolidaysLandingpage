import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from "../assets/banner8.jpg"
import Temple from "../assets/temple.webp"
import Fish from "../assets/fish.webp"
import Bhubhneswar from "../assets/bhubaneswar.webp"
import Beach from "../assets/beach.webp"
import Lion from "../assets/lion.webp"
import Footer from '../Components/Footer'
const Attractions = () => {
    return (
        <>
            <Navbar />
            <section className='min-h-screen w-full'>
                <div className='h-72 w-full relative'>
                    <img src={Banner} alt="" className='h-full w-full object-cover' />
                    <p className='absolute font-semibold text-white font-serif text-6xl bottom-32 left-1/2 transform -translate-x-1/2 cursor-pointer hover:text-blue-800 transition'>Attractions</p>
                </div>
                <div className='h-full w-full'>
                    <div className='min-h-96 w-full  flex flex-col md:flex-row p-6 md:p-10'>
                        <div className='h-full w-full md:w-1/2'>
                            <img src={Temple} alt="Temple" className='h-full w-full object-cover cursor-pointer' />
                        </div>
                        <div className='w-full md:w-1/2 p-4 md:p-6'>
                            <p className='text-2xl font-bold font-serif mb-4'>Temple</p>
                            <p className='text-sm font-semibold text-gray-700 italic'>The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu – one of the trinity of supreme divinity in Hinduism. The Puri temple is famous for its annual Ratha Yatra, or chariot festival, in which the three principal deities are pulled on huge and elaborately decorated temple cars.</p>
                            <a href="https://odishaholidays.in/" className='h-10 w-10  relative top-4 p-2 italic text-blue-700 font-semibold rounded-2xl'>Read more</a>
                        </div>
                    </div>
                    <div className='min-h-96 w-full  flex flex-col md:flex-row p-6 md:p-10'>
                       
                        <div className='w-full md:w-1/2 p-4 md:p-6'>
                            <p className='text-2xl font-bold font-serif mb-4'>Lakes and Waterfalls</p>
                            <p className='text-sm font-semibold text-gray-700 italic'>Odisha is abode to plenty of natural attractions, wildlife sanctuaries, temples, beaches, and resources worth seeing and visiting. Also, the state is enriched with umpteen waterfalls and lakes scattered all over the region. One must not miss exploring these as there is no doubt it is the place to be for a relaxing getaway. The top-notch and worth checking out […]</p>
                            <a href="https://odishaholidays.in/" className='h-10 w-10  relative top-4 p-2 italic text-blue-700 font-semibold rounded-2xl'>Read more</a>
                        </div>
                        <div className='h-full w-full md:w-1/2'>
                            <img src={Fish} alt="Temple" className='h-full w-full object-cover cursor-pointer' />
                        </div>
                    </div>
                    <div className='min-h-96 w-full  flex flex-col md:flex-row p-6 md:p-10'>
                        <div className='h-full w-full md:w-1/2'>
                            <img src={Bhubhneswar} alt="Temple" className='h-full w-full object-cover cursor-pointer' />
                        </div>
                        <div className='w-full md:w-1/2 p-4 md:p-6'>
                            <p className='text-2xl font-bold font-serif mb-4'>Buddhist Heritage</p>
                            <p className='text-sm font-semibold text-gray-700 italic'>Buddhism has played a pivotal role in Odisha’s historical and cultural development. Indeed, the state is blessed with many iconic Buddhist heritage sites and spots that Buddhists and tourists prefer to visit from all corners of the world. Though Lord Buddha never visited, the land Buddhism is preached and practised at many places here to date, especially the famous Diamond […]</p>
                            <a href="https://odishaholidays.in/" className='h-10 w-10  relative top-4 p-2 italic text-blue-700 font-semibold rounded-2xl'>Read more</a>
                        </div>
                    </div>
                    <div className='min-h-96 w-full  flex flex-col md:flex-row p-6 md:p-10'>
                       
                        <div className='w-full md:w-1/2 p-4 md:p-6'>
                            <p className='text-2xl font-bold font-serif mb-4'>Beaches</p>
                            <p className='text-sm font-semibold text-gray-700 italic'>Odisha is among the splendid states situated in the Eastern part of the country, endowed with a long coastline and crystal-clear beaches. When we think of beaches, almost everyone looks for solace, introspection, and fun. If you are one of the beach lovers, Odisha is “THE” destination to be at, taking you somewhere beyond imagination.</p>
                            <a href="https://odishaholidays.in/" className='h-10 w-10  relative top-4 p-2 italic text-blue-700 font-semibold rounded-2xl'>Read more</a>
                        </div>
                        <div className='h-full w-full md:w-1/2'>
                            <img src={Beach} alt="Temple" className='h-full w-full object-cover cursor-pointer' />
                        </div>
                    </div>
                    <div className='min-h-96 w-full  flex flex-col md:flex-row p-6 md:p-10'>
                        <div className='h-full w-full md:w-1/2'>
                            <img src={Lion} alt="Temple" className='h-full w-full object-cover cursor-pointer' />
                        </div>
                        <div className='w-full md:w-1/2 p-4 md:p-6'>
                            <p className='text-2xl font-bold font-serif mb-4'>Wildlife and Bird Sanctuaries</p>
                            <p className='text-sm font-semibold text-gray-700 italic'>The captivating south-eastern Odisha state is home to plenty of variety found in flora and fauna. The host of bird and wildlife sanctuaries is evident, with each one being unique and spectacular and every nature lover’s delight. Undeniably, the state is among one of the most pristine destinations of the country, blessed with the most exceptional wildlife and natural resources […]</p>
                            <a href="https://odishaholidays.in/" className='h-10 w-10  relative top-4 p-2 italic text-blue-700 font-semibold rounded-2xl'>Read more</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Attractions