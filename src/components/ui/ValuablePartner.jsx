import { valuablePartner } from "../../data/constants";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";
import image1 from "../../assets/image1.avif";
import image2 from "../../assets/image2.avif";
import image3 from "../../assets/image3.avif";
import image4 from "../../assets/image4.avif";

const ValuablePartner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Right Side - Image Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {/* Top Left Image */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={image1}
                  alt="Team collaboration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                <Shield className="w-4 h-4 text-blue-600" />
              </div>
            </div>

            {/* Top Right Image */}
            <div className="relative group mt-4 sm:mt-8">
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={image2}
                  alt="Analytics dashboard"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
            </div>

            {/* Bottom Left Image */}
            <div className="relative group -mt-4">
              <div className="aspect-square bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={image3}
                  alt="Business meeting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Right Image */}
            <div className="relative group mt-4">
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={image4}
                  alt="Data analysis"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-blue-100">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700">
                {valuablePartner.title}
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {valuablePartner.subtitle}
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed">
              {valuablePartner.description}
            </p>

            {/* CTA Button */}
            <div className="flex items-center space-x-6">
              <button className="group bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                <span>{valuablePartner.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuablePartner;
