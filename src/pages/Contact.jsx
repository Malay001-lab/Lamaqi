import React from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full bg-[#F8FAFD]  pb-32">
      {/* Top Blue Section */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-blue-900 text-white py-44 px-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-20 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-16 -translate-x-20"></div>
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-8xl font-bold leading-tight">
            Contact Lamaqi
            <br />
            <span className="block pt-2">Today.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-3xl opacity-90">
            Contact us today and try our services for HR Analytics and
            Consulting.
          </p>
        </div>
      </div>

      {/* White Contact Box */}
      <div className="container mx-auto max-w-6xl px-6 relative -mt-24">
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-gray-200">
          <h3 className="text-sm tracking-wider text-gray-500 font-semibold mb-8">
            CONTACT US
          </h3>

          {/* Location */}
          <div className="flex items-center gap-4 py-4 border-b border-gray-200">
            <div className="p-2 bg-blue-100 rounded-full">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-lg text-gray-700">East Delhi, 110092, New Delhi, India.</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 py-4 border-b border-gray-200">
            <div className="p-2 bg-purple-100 rounded-full">
              <Mail className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-lg text-gray-700">info@lamaqi.com</p>
          </div>

          {/* Social Media Section */}
          <div className="py-4">
            <h4 className="text-sm font-semibold text-gray-600 mb-3">
              Connect with us on social media:
            </h4>

            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a
                href="#"
                className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition"
              >
                <svg
                  className="w-5 h-5 text-blue-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.9-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V24h-4v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-4V8z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition"
              >
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35A1.33 1.33 0 000 1.325v21.351A1.33 1.33 0 001.325 24h11.5v-9.294H9.691v-3.622h3.134V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.795.717-1.795 1.766v2.318h3.587l-.467 3.622h-3.12V24h6.127A1.33 1.33 0 0024 22.675V1.325A1.33 1.33 0 0022.675 0z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition"
              >
                <svg
                  className="w-5 h-5 text-sky-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337 3a9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.476 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.562A4.903 4.903 0 01.96 9.1v.061A4.919 4.919 0 004.9 14a4.9 4.9 0 01-2.224.084A4.918 4.918 0 006.92 17.548a9.868 9.868 0 01-6.102 2.106c-.395 0-.788-.023-1.175-.068A13.945 13.945 0 007.548 22c9.142 0 14.307-7.721 13.995-14.646A9.93 9.93 0 0024 4.557z" />
                </svg>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
