import React from 'react';
import { Link } from 'react-router-dom';
import { Beef, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Beef className="h-8 w-8 text-ranch-400" />
              <span className="text-xl font-ranch font-bold">Finney Ranch</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Three generations of sustainable ranching in the heart of Nebraska's Sandhills, 
              providing premium quality beef directly from our family ranch to your table. 
              Committed to traditional values and exceptional quality.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-ranch-400" />
                <span className="text-gray-300">(308) 546-2345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-ranch-400" />
                <span className="text-gray-300">info@finneyranch.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-ranch-400" />
                <span className="text-gray-300">Mullen, Nebraska 69152</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-ranch-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/family" className="text-gray-300 hover:text-ranch-400 transition-colors">
                  Our Family
                </Link>
              </li>
              <li>
                <Link to="/ranch" className="text-gray-300 hover:text-ranch-400 transition-colors">
                  The Ranch
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-ranch-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-ranch-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pre-order" className="text-gray-300 hover:text-ranch-400 transition-colors">
                  Bulk Pre-Orders
                </Link>
              </li>
              <li>
                <span className="text-gray-300">Custom Processing</span>
              </li>
              <li>
                <span className="text-gray-300">Delivery Available</span>
              </li>
              <li>
                <span className="text-gray-300">Ranch Tours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Finney Ranch. All rights reserved. 
            <span className="mx-2">|</span>
            Proudly serving families from the Nebraska Sandhills
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
     