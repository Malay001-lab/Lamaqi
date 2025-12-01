import { heroData } from "../../data/constants";
import { Facebook, Linkedin } from "lucide-react";

import heroImage from "../../assets/premium_photo-1661347859297-859b8ae1d7c5.jpg";

const Hero = () => {
  return (
    <section className=" bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container-custom mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full border border-blue-500/50">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-200">
                {heroData.title}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {heroData.subtitle}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              {heroData.description}
            </p>

            {/* <div className="flex flex-wrap gap-8">
              {heroData.stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div
                    className={`p-3 rounded-lg ${
                      index === 0 ? "bg-green-500/20" : "bg-blue-500/20"
                    }`}
                  >
                    {index === 0 ? (
                      <TrendingUp className="w-6 h-6 text-green-400" />
                    ) : (
                      <DollarSign className="w-6 h-6 text-blue-400" />
                    )}
                  </div>
                </div>
              ))}
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Facebook Button */}
              <a
                href="https://www.facebook.com/lamaqiofficial"
                target="_blank"
                className="group bg-gradient-to-br from-blue-600 to-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 text-white"
              >
                <Facebook className="w-10 h-10 group-hover:scale-110 transition-transform" />
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://linkedin.com"
                target="_blank"
                className="group bg-gradient-to-br from-blue-700 to-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 text-white"
              >
                <Linkedin className="w-10 h-10 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Content - With Image */}
          <div className="relative">
            <div className="relative">
              {/* Replace with your actual image */}
              <div className="bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                <div className="bg-gray-800 rounded-xl h-56 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Digital Marketing Analytics"
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Background Effects (hidden on small) */}
            <div className="hidden lg:block absolute -z-10 top-10 -right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="hidden lg:block absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
