import { ourCommitment } from "../../data/constants";
import { Target, Zap, Clock, Shield, ArrowRight } from "lucide-react";

const OurCommitment = () => {
  const icons = [Target, Zap, Clock, Shield];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header with Graphics */}
          <div className="text-center mb-20 relative">
            {/* Floating Graphics */}
            <div className="absolute -top-4 left-1/4 w-6 h-6 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -top-2 right-1/4 w-4 h-4 bg-blue-200 rounded-full opacity-40"></div>

            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-blue-100 shadow-sm mb-8">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                {ourCommitment.title}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {ourCommitment.subtitle}
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {ourCommitment.description}
            </p>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {ourCommitment.stats.map((stat, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="group relative p-8 text-center bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Stat Number */}
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>

                    {/* Stat Label */}
                    <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>

          {/* CTA with Trust Indicators */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-8">
              <button className="group bg-blue-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3">
                <span>{ourCommitment.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Bottom Graphics */}
          <div className="mt-20 flex justify-center items-center gap-12 opacity-30">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
