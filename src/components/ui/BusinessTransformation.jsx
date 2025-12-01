import { Check, Shield, TrendingUp } from "lucide-react";
import { businessTransformations } from "../../data/constants";
import image1 from "../../assets/image1.avif";
import image2 from "../../assets/image2.avif";
import image3 from "../../assets/image3.avif";
import image4 from "../../assets/image4.avif";

const BusinessTransformations = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-white container-custom">
      {/* Spacer */}
      <div className="h-32 lg:h-20"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-7">
              {/* Section Header */}
              <div className="space-y-5">
                <div className="inline-flex items-center px-4 py-2 rounded-full shadow-sm border border-blue-200 bg-blue-50">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-semibold text-blue-700">
                    {businessTransformations.title}
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  {businessTransformations.subtitle}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {businessTransformations.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 list-none m-0 p-0">
                {businessTransformations.points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content - Images */}
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
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-32 lg:h-20"></div>
    </section>
  );
};

export default BusinessTransformations;
