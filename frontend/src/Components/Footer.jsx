import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { assets } from "../assets/Assest";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-300 px-6 py-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={assets.logo} alt="logo" className="w-12 sm:w-16" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">
              Nadee Villa and Tourism
            </h2>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Discover the breathtaking beauty of Sri Lanka — from misty highlands
            to golden beaches. Your journey of wonder begins here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-emerald-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/villa" className="hover:text-emerald-400 transition">
                Luxury Villas
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-emerald-400" /> nadevillasandtours21@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-emerald-400" /> +94 71 978 0312
            </li>
          
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <p className="text-sm text-gray-400 mb-4">
            Stay connected with us for travel inspiration, tips, and offers.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-emerald-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-emerald-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-emerald-500 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Explore Lanka Travels. All rights reserved.
        <br />
        <span className="text-gray-400">
          Crafted with ❤️ in Sri Lanka — Explore. Dream. Discover.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
