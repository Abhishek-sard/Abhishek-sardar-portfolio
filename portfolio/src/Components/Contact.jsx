import React from "react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen bg-white px-6 md:px-20 py-20 flex flex-col items-center"
        >
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">
                    Contact <span className="text-indigo-600">Me</span>
                </h2>
                <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                    Feel free to reach out to me for projects, collaboration, or just to say hi!
                </p>
            </div>

            {/* Contact Container */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Contact Info */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
                    <p className="text-gray-600">
                        I’m open for work and collaborations. Here’s how you can reach me:
                    </p>
                    <div className="space-y-4 text-gray-700">
                        <p><span className="font-semibold">Email:</span> sadarabhishek14@gmail.com</p>
                        <p><span className="font-semibold">Phone:</span> 9811342113</p>
                        <p><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/abhishek-sardar-bb5b242a3/" target="_blank" className="text-indigo-600 hover:underline">linkedin.com/Abhishek Sardar</a></p>
                        <p><span className="font-semibold">GitHub:</span> <a href="https://github.com/Abhishek-sard" target="_blank" className="text-indigo-600 hover:underline">github.com/Abhishek-sard</a></p>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-6 w-full">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
