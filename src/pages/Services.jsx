import React from "react";

const Services = () => {
  const services = [
    {
      title: "Global Hiring",
      description: "INDIA, UK, EU, ME & US",
      icon: "🌍",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "General Staffing",
      description: "Comprehensive staffing solutions",
      icon: "📊",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Professional Staffing",
      description: "Expert professional placements",
      icon: "💼",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Permanent Staffing",
      description: "Long-term employment solutions",
      icon: "👥",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "RPO",
      description: "Recruitment Process Outsourcing",
      icon: "⚡",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Marketing",
      description: "Talent marketing strategies",
      icon: "🎯",
      gradient: "from-teal-500 to-green-500",
    },
    {
      title: "Training",
      description: "Professional development programs",
      icon: "📚",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-700 font-semibold text-lg">
              Lamaqi Services
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HR Solutions
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end HR services designed to transform your talent
            acquisition, management, and development strategies for sustainable
            business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                  >
                    {service.icon}
                  </div>

                  <div className="bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-50 px-4 py-2 rounded-full transform group-hover:scale-105 transition-all duration-300">
                    <span className="text-sm font-semibold text-gray-700">
                      {service.description}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
