import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2 bg-black">
      <div className="w-full sm:py-10 py-8">
        <h1 className="sm:text-5xl text-4xl font-bold text-white mb-4 tracking-tight">
          About Shortly
        </h1>
        <p className="text-gray-400 text-base leading-relaxed mb-12 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          Shortly simplifies URL shortening for efficient sharing. Easily
          generate, manage, and track your shortened links with our powerful
          platform designed for modern link management needs.
        </p>
        <div className="space-y-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          <div className="flex items-start gap-5 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <FaLink className="text-gray-300 text-3xl mt-1 flex-shrink-0" />
            <div>
              <h2 className="sm:text-2xl text-xl font-bold text-white mb-2">
                Simple URL Shortening
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Experience the ease of creating short, memorable URLs in just a
                few clicks. Our intuitive interface and quick setup process
                ensure you can start shortening URLs without any hassle.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <FaShareAlt className="text-gray-300 text-3xl mt-1 flex-shrink-0" />
            <div>
              <h2 className="sm:text-2xl text-xl font-bold text-white mb-2">
                Powerful Analytics
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Gain insights into your link performance with our comprehensive
                analytics dashboard. Track clicks, geographical data, and
                referral sources to optimize your marketing strategies.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <FaEdit className="text-gray-300 text-3xl mt-1 flex-shrink-0" />
            <div>
              <h2 className="sm:text-2xl text-xl font-bold text-white mb-2">
                Enhanced Security
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Rest assured with our robust security measures. All shortened
                URLs are protected with advanced encryption, ensuring your data
                remains safe and secure.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <FaChartLine className="text-gray-300 text-3xl mt-1 flex-shrink-0" />
            <div>
              <h2 className="sm:text-2xl text-xl font-bold text-white mb-2">
                Fast and Reliable
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Enjoy lightning-fast redirects and high uptime with our reliable
                infrastructure. Your shortened URLs will always be available and
                responsive, ensuring a seamless experience for your users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;