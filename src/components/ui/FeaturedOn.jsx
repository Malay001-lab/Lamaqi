import { useState, useEffect } from "react";
import { featuredOn } from "../../data/constants";

const FeaturedOn = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 4;

  // Group companies into slides of 4
  const groupedCompanies = [];
  for (let i = 0; i < featuredOn.companies.length; i += slidesToShow) {
    groupedCompanies.push(featuredOn.companies.slice(i, i + slidesToShow));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev >= groupedCompanies.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Slide every 3 sec

    return () => clearInterval(interval);
  }, [groupedCompanies.length]);

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container-custom">
        <h3 className="text-lg font-semibold text-center text-gray-600 mb-8">
          {featuredOn.title}
        </h3>

        {/* Mobile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:hidden items-center justify-center">
          {featuredOn.companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center p-2">
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Desktop Slider */}
        <div className="hidden md:block relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {groupedCompanies.map((slideCompanies, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full flex items-center justify-around px-8"
              >
                {slideCompanies.map((company, companyIndex) => (
                  <div
                    key={companyIndex}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-14 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 max-w-[140px]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
