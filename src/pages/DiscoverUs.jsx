import React from "react";

const DiscoverUs = () => {
  const services = [
    {
      title: "Global Talent Procurement",
      description:
        "We assist in procuring the best talent across INDIA, UK, EU, ME & US for small, mid-size, and Fortune 500 companies across various industries.",
      icon: "🌍",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "High-Performing Teams",
      description:
        "With a deep talent network and industry experience, we build high-performing teams that deliver results - on time and with precision.",
      icon: "⚡",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Value Delivery",
      description:
        "We are committed to delivering value through accelerated time-to-productivity, flexible resource allocation, higher retention rates, and efficient knowledge transfer.",
      icon: "🎯",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Inclusive Partnerships",
      description:
        "We bring growth, equality, and inclusion into our vendor and supplier ecosystem by expanding opportunities and partnering with small and medium businesses.",
      icon: "🤝",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What We Do?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to delivering value through accelerated
            time-to-productivity, flexible and effective resource allocation,
            higher retention rates, consistency of skills and process, more
            efficient knowledge transfer, and the ability to focus on results
            rather than staff management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              ></div>

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Customers, Talents & Investors Sections */}
        <div className="relative">
          {[
            {
              title: "Our Customers",
              points: [
                "50+ delighted customers",
                "We partner with small, mid-size, and Fortune 500 companies across various industries",
                "We collaborate with our customers on their purpose-led transformation journeys",
                "We create long-term sustainable partnerships",
                "Our aim is to contribute to the success of our customers business endeavours",
              ],
              gradient: "from-indigo-500 via-purple-500 to-blue-500",
              icon: "🏢",
              stats: "50+",
              statLabel: "Customers",
            },
            {
              title: "Our Talents",
              points: [
                "It begins with our people",
                "Our dedicated delivery team helps find the best talent for your business goals",
                "We are seasoned professionals who embody drive, determination, and excellence",
                "We create a culture where each employee is a champion of equity and feels safe bringing their authentic self to work",
              ],
              gradient: "from-pink-500 via-rose-500 to-red-500",
              icon: "🌟",
              stats: "500+",
              statLabel: "Talents",
            },
            {
              title: "Investors",
              points: [
                "We collaborate with our partners to constantly evolve our business",
                "Investments in learning and leadership development",
                "Pave progression paths for our associates and teams",
                "Focus on sustainable growth and value creation",
              ],
              gradient: "from-amber-500 via-orange-500 to-yellow-500",
              icon: "📈",
              stats: "99%",
              statLabel: "Satisfaction",
            },
          ].map((section, index) => (
            <section
              key={index}
              className="relative py-20 md:py-28 border-b border-gray-100"
            >
              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${section.gradient} flex items-center justify-center text-4xl shadow-md`}
                    >
                      {section.icon}
                    </div>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {section.title}
                  </h2>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                    <div
                      className={`text-7xl font-extrabold bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                    >
                      {section.stats}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-700">
                        {section.statLabel}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                  {section.points.map((point, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-5 bg-white/70 border border-gray-200 rounded-xl p-6 transition-all hover:shadow-lg hover:border-gray-300"
                    >
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r ${section.gradient} text-white font-bold`}
                      >
                        {i + 1}
                      </div>
                      <p className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverUs;
