import React from 'react';
import Photo from '../assets/me-removebg-preview.png'


const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 pt-20 px-6"
        >
            {/* Left Text Section */}
            <div className="flex-1 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                    Hi, I'm <span className="text-indigo-600">Abhishek Sardar</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                    I’m a passionate <span className="font-semibold">MERN Stack Developer</span>
                    who loves creating modern, responsive, and user-friendly web applications.
                </p>
                <div className="space-x-4">
                    <a
                        href="https://github.com/Abhishek-sard/Ticket-Booking"
                        className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
                    >
                        View Projects
                    </a>
                    <a
                        href="https://www.facebook.com/abhiseka.saradara.453948"
                        className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Right Image Section */}
            <div className="flex-1 mt-10 md:mt-0 flex justify-center">
                <img
                    src={Photo}
                    alt="Profile"
                    className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-lg object-cover object-top border-4 border-indigo-600"
                />
            </div>

        </section>
    );
};



export default Home
