import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#ffffff] text-black py-8 border-t-4 border-[#ecf0f0] rounded-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Small Logo and Contact */}
        <div className="flex-shrink-0 mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <img src="/ShelterAfrique logo.png" alt="Small Logo" className="h-24" />
          <div className="mt-4 ml-5" >
          <h3 className="text-lg font-semibold ml-4">Contact Us</h3>
            <div className="flex items-center mt-2 ml-5">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <p className="ml-3">Call us: +254-20-4978000</p>
            </div>
            <div className="flex items-center mt-2 ml-5">
              <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2" />
              <p className="ml-3">info@shelterafrique.org</p>
            </div>

          </div>
        </div>

        {/* Basics */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">About</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-4 md:mb-0 flex flex-col items-center">
          <h3 className="text-sm font-semibold mb-2">Sign up for our newsletter</h3>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
            <button className="px-4 py-2 mr-5 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200 p-2 rounded-r-full focus:outline-none focus:ring-2 focus:ring-blue-500">
              Subscribe
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-600">You can unsubscribe at any time.</p>
        </div>
      </div>
    </footer>
  );
}
