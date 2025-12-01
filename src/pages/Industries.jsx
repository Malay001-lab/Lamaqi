import React from "react";

const Industries = () => {
  const industries = [
    {
      title: "Banking & Financial Services",
      description: "Shaping the future of digital commerce",
      icon: "🏦",
      gradient: "from-blue-500 to-cyan-500",
      subcategories: [
        "Consumer, Corporate & Investment Banking",
        "Payments & Cards",
      ],
    },
    {
      title: "Healthcare",
      description: "Making healthcare efficient, effective, and affordable",
      icon: "🏥",
      gradient: "from-green-500 to-emerald-500",
      subcategories: ["Digital Health", "Life Sciences"],
    },
    {
      title: "Manufacturing",
      description: "Smarter applications for smart factories",
      icon: "🏭",
      gradient: "from-gray-500 to-blue-500",
      subcategories: ["Automotive & Industrial", "Aerospace & Defense"],
    },
    {
      title: "Media & Entertainment",
      description:
        "Transforming digital advertising with technology & data science",
      icon: "🎬",
      gradient: "from-red-500 to-pink-500",
      subcategories: [
        "Communication Service Providers",
        "Traditional Media & OTT",
      ],
    },
    {
      title: "Retail & CPG",
      description:
        "Renew your customer experience with innovative technology solutions",
      icon: "🛍️",
      gradient: "from-indigo-500 to-purple-500",
      subcategories: [
        "Food & Grocery",
        "Fashion, Apparel & Beauty",
        "Consumer Brands",
        "Quick Serve Restaurants",
      ],
    },
    {
      title: "Technology",
      description: "Driving innovation through cutting-edge solutions",
      icon: "💻",
      gradient: "from-purple-500 to-pink-500",
      subcategories: [
        "AI and Automation",
        "Data and Analytics",
        "Cloud Services",
        "Cybersecurity",
        "Digital Product",
        "Enterprise Tech",
      ],
    },
    {
      title: "Telecom",
      description: "The backbone of modern connectivity",
      icon: "📡",
      gradient: "from-teal-500 to-blue-500",
      subcategories: [],
    },
    {
      title: "Semiconductors",
      description: "The engine behind AI, IoT, and next-gen computing",
      icon: "🔌",
      gradient: "from-amber-500 to-orange-500",
      subcategories: [],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-700 font-semibold text-lg">
              Industries
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Best Solutions for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Business
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We have deep expertise across multiple industries, providing
            tailored HR solutions and consulting services that drive real
            business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${industry.gradient} flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                >
                  {industry.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                  {industry.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {industry.description}
                </p>

                {industry.subcategories.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {industry.subcategories
                      .slice(0, 3)
                      .map((subcategory, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.gradient}`}
                          ></div>
                          <span>{subcategory}</span>
                        </div>
                      ))}
                    {industry.subcategories.length > 3 && (
                      <div className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.gradient}`}
                        ></div>
                        <span>+{industry.subcategories.length - 3} more</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
