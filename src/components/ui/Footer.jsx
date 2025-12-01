import { footerData } from "../../data/constants";
import { Mail, MapPin, ArrowRight, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Lamaqi
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                HR Analytics and Consulting
              </p>
            </div>
            <div className="flex items-start space-x-3 mb-4">
              <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-gray-400 text-sm">{footerData.address}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <p className="text-gray-400 text-sm">
                {footerData.email.replace("(a)", "@")}
              </p>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 relative inline-block text-white">
              Support
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {footerData.support.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 relative inline-block text-white">
              Company
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-green-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {footerData.company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section - Big and Prominent */}
          <div>
            <h4 className="font-bold text-2xl mb-6 relative inline-block text-white">
              Follow Us
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              Stay connected with us for the latest updates and insights
            </p>

            <div className="grid grid-cols-1 gap-2 mb-2 mt-2">
              <a
                href="https://www.facebook.com/lamaqiofficial"
                className="group rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex gap-3 items-center"
              >
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center transition-colors">
                  <Facebook className="w-7 h-7 text-white" />
                </div>
                <span className="text-white font-semibold text-md">
                  Facebook
                </span>
              </a>

              <a
                href="https://linkedin.com#"
                className="group rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex gap-3  items-center"
              >
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center transition-colors">
                  <Linkedin className="w-7 h-7 text-white" />
                </div>
                <span className="text-white font-semibold text-md">
                  LinkedIn
                </span>
              </a>
            </div>

            <div className="flex group mt-5">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 bg-gray-800 text-white rounded-l-xl focus:outline-none focus:ring-blue-500 flex-grow border border-gray-700 focus:border-blue-500 transition-all text-sm"
              />
              <button className="bg-gradient-to-br from-blue-500 to-blue-600 px-4 py-3 rounded-r-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        {/* <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">{footerData.copyright}</p>
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center lg:justify-start">
                {footerData.poweredBy}
                <Heart className="w-3 h-3 text-red-500 mx-1" />
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div> */}

        {/* Decorative Element */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
