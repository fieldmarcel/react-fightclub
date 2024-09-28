import React from "react";

const Footer = () => {
  return (
    <footer className=" sm:foot  text-white py-8 px-4">
      <div className="flex flex-col sm:flex-row justify-evenly items-start space-y-6 sm:space-y-0 sm:space-x-6">
        {/* Map Section */}
        <div className="flex flex-col items-center space-y-2">
          <div className="text-lg font-semibold"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.806867484492!2d78.03428358019836!3d15.76135294587414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5dc3bfcf99645%3A0x52358ddcfb659cb9!2sIndian%20Institute%20Of%20Information%20Technology%2C%20Design%20%26%20Manufacturing%2C%20Kurnool!5e0!3m2!1sen!2sin!4v1726664723576!5m2!1sen!2sin"
           width="390"
            height="250"
            className="rounded-lg shadow-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
<div>
        {/* Contact Section */}
        <div className="flex flex-col items-center space-y-2">
          <div className="text-lg font-semibold">Contact Us</div>
          <div className="text-gray-400">123 Street, Bengaluru, India</div>
          <div className="text-gray-400">Phone: +91 8840237676</div>
          <div className="text-gray-400">Email: info@example.com</div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="text-lg font-semibold">Follow Us</div>
          <div className="space-y-2">
            <ul className="text-gray-400 space-y-1">
              <li><a href="#" className="hover:text-yellow-300">Instagram</a></li>
              <li><a href="#" className="hover:text-yellow-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-yellow-300">Pinterest</a></li>
              <li><a href="#" className="hover:text-yellow-300">YouTube</a></li>
              <li><a href="#" className="hover:text-yellow-300">Twitter</a></li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-600"></div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm">
        © 2024 TITAN. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
