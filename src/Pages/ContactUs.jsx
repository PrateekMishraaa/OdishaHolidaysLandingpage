import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer';
const ContactUs = () => {
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
    <Navbar/>
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
    <Footer/>
            <ToastContainer/>
    </>
  )
}

export default ContactUs
