import React from "react";

const Careers = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 font-semibold text-lg">
                We are hiring!
              </span>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Join Our
              </h1>
              <span className="bg-gradient-to-r text-5xl md:text-6xl font-bold from-blue-600 to-purple-600 bg-clip-text text-transparent ">
                Growing Team!
              </span>
            </div>

            <p className="text-xl text-gray-600 ">
              Be part of our dynamic team of professionals who are shaping the
              future of HR analytics and consulting. Explore exciting career
              opportunities and grow with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 flex items-center gap-5 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                <span>View Open Positions</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button> */}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <div className="bg-white rounded-xl h-80 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-4xl text-white mx-auto mb-6">
                    💼
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Career Opportunities
                  </h3>
                  <p className="text-gray-600">
                    Submit your profile and discover your next career move
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Send us your resume and let's start a conversation about your
                future at Lamaqi.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 inline-block">
                <div className="text-2xl font-bold mb-2">
                  Submit your profile to:
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  info@lamaqi.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
