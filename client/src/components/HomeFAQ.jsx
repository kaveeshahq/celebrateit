import React from "react";
import { Link } from "react-router-dom";
import { Clock, Zap, MessagesSquare, Phone } from "lucide-react";
import faqImage from "../assets/faq.png";

const HomeFAQ = () => {
  const supportFeatures = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Average response time under 5 minutes",
    },
    {
      icon: MessagesSquare,
      title: "Live Chat",
      description: "Instant help through our chat system",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct line to our support team",
    },
  ];

  return (
    <div className="mt-16 md:mt-24 pb-20 space-y-20">
      {/* Header Section */}
      <div className="text-center px-4 md:px-16">
        <div className="group inline-block relative cursor-pointer mb-6">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-500">
            Help and Support <span className="text-primary-pink">FAQs</span>
          </p>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get instant answers to your questions and discover how we can make
          your shopping experience even better
        </p>
      </div>

      {/* Main Content Section - Full Width Banner Style */}
      <div className="relative w-full h-[280px] md:h-[340px] lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden mx-auto">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-purple/20 to-primary-pink/20"></div>
        
        <div className="relative h-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-8 gap-8">
          {/* Image Section - Constrained size */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative group max-w-xs lg:max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-purple/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <img
                src={faqImage}
                alt="FAQ Illustration"
                className="relative w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg rounded-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-500 leading-tight">
              Frequently Asked{" "}
              <span className="text-primary-pink">User Questions</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
              Find quick answers to common questions and get assistance whenever
              you need help. Our comprehensive FAQ section covers everything from
              ordering to delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                to="/faq"
                className="px-6 py-2.5 md:px-8 md:py-3 bg-primary-purple hover:bg-primary-purple-dull text-white rounded-lg hover:scale-105 transition-all duration-300 text-sm md:text-base font-semibold"
              >
                Browse All FAQs
              </Link>

              <Link
                to="/contact-us"
                className="px-6 py-2.5 md:px-8 md:py-3 bg-primary-purple hover:bg-primary-purple-dull text-white rounded-lg hover:scale-105 transition-all duration-300 text-sm md:text-base font-semibold"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Support Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-16">
        {supportFeatures.map((feature, index) => (
          <div
            key={index}
            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 text-center transition-all duration-300 hover:scale-105"
          >
            <div className="mb-4 inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-primary">
              <feature.icon size={48} strokeWidth={1.5} />
            </div>

            <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary-purple transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFAQ;