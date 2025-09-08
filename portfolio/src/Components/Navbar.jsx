import { useState } from "react";
import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-8xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1
          onClick={() => {
            setOpen(false); 
            window.scrollTo({ top: 0, behavior: "smooth" }); 
          }}
          className="text-2xl font-bold text-indigo-600 cursor-pointer"
        >
          Abhishek-Sardar
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
