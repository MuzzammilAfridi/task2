import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-100 text-green-900 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg">Get in touch</h3>
            <p className="text-sm">support@amrutam.co.in</p>
            <p className="text-sm">
              Amrutam Pharmaceuticals Pvt Ltd., <br />
              Chitragupt Ganj, Nai Sadak, Lashkar, <br />
              Gwalior - 474001
            </p>
            <p className="text-sm">+91 9713171999</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-900 hover:text-green-700 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-900 hover:text-green-700 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-900 hover:text-green-700 text-xl"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-900 hover:text-green-700 text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-900 hover:text-green-700 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-900 hover:text-green-700 text-xl"
            >
              <FaPinterest />
            </a>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="font-semibold text-lg">Information</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy for Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping and Returns Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  International Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  For Businesses, Hotels and Resorts
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="font-semibold text-lg">
              Subscribe to our Newsletter and join Amrutam Family today!
            </h3>
            <form className="flex mt-5">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full h-[56px] px-4 py-2 border border-green-300 rounded-l-3xl focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#000000] text-white px-4 py-2 rounded-r-3xl hover:bg-green-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
