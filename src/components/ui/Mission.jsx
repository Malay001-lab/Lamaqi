import React from "react";
import { Rocket, Eye } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 relative z-10">
          {/* Mission Card */}
          <div className="group relative p-[2px] rounded-3xl bg-gradient-to-br from-blue-200 via-indigo-200 to-blue-300 shadow-md hover:shadow-2xl transition-all duration-500">
            <div className="bg-white rounded-3xl p-8 md:p-12 h-full transition-all duration-300 group-hover:bg-blue-50/30 backdrop-blur-xl">
              <div className="w-16 h-16 bg-white border border-blue-200 rounded-2xl flex items-center justify-center shadow-sm mb-7 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-5">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To help businesses reinvent how they leverage technologies of
                tomorrow to achieve and exceed their goals. Empowering client
                success through exceptional talent, and an unwavering
                partnership.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative p-[2px] rounded-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-purple-300 shadow-md hover:shadow-2xl transition-all duration-500">
            <div className="bg-white rounded-3xl p-8 md:p-12 h-full transition-all duration-300 group-hover:bg-purple-50/30 backdrop-blur-xl">
              <div className="w-16 h-16 bg-white border border-purple-200 rounded-2xl flex items-center justify-center shadow-sm mb-7 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-5">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide services that enable companies to prosper in a world
                that is constantly changing. To be at the forefront of business
                transformations - with core principles that never go out of
                style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
