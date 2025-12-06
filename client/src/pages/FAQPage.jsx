import React, { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { Cloud, Mail, MessageCircle, Phone } from "lucide-react";

const FAQPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const faqCategories = [
    "All",
    "Orders & Delivery",
    "Products",
    "Account",
    "Payments",
    "Returns",
  ];

  const faqs = [
    {
      id: 1,
      category: "Orders & Delivery",
      question: "How do I track my order?",
      answer:
        "Once your order is confirmed, you'll receive a tracking number via email and SMS. You can use this number to monitor your delivery status in real-time through our website, mobile app, or by calling our customer service. You'll also receive automatic updates about your order progress including when it's being prepared, packed, dispatched, and out for delivery.",
    },
    {
      id: 2,
      category: "Orders & Delivery",
      question: "What are your delivery hours?",
      answer:
        "We deliver from 7:00 AM to 10:00 PM, 7 days a week including holidays. Same-day delivery is available for orders placed before 2:00 PM, subject to availability in your area. Express delivery (within 2 hours) is available from 9:00 AM to 8:00 PM for an additional fee. You can also schedule deliveries up to 7 days in advance.",
    },
    {
      id: 3,
      category: "Orders & Delivery",
      question: "Can I modify my order after placing it?",
      answer:
        "Orders can be modified within 30 minutes of placement through your account dashboard or by calling customer service. After 30 minutes, our team begins preparing your order and modifications may not be possible. However, you can contact our customer service for urgent changes - we'll do our best to accommodate if the order hasn't been dispatched yet.",
    },
    {
      id: 4,
      category: "Orders & Delivery",
      question: "What if I'm not home during delivery?",
      answer:
        "Our delivery team will attempt to contact you 15 minutes before arrival. If you're not available, we offer several options: reschedule delivery for the same day (if before 6 PM), schedule for the next day, or leave with a trusted neighbor (with your consent). For perishable items, we recommend being available or designating someone to receive the order.",
    },
    {
      id: 5,
      category: "Products",
      question: "Do you offer fresh produce guarantees?",
      answer:
        "Absolutely! We guarantee the freshness and quality of all our produce. If you're not satisfied with any item's quality, we offer free replacements or full refunds within 24 hours of delivery. Our quality team hand-picks every item, and we work directly with local farms to ensure maximum freshness. We also have a 'Best Before' guarantee on all perishable items.",
    },
    {
      id: 6,
      category: "Products",
      question: "How do you ensure food safety?",
      answer:
        "Food safety is our top priority. We maintain strict temperature controls throughout our supply chain, conduct regular quality checks, and follow all food safety regulations. Our warehouses are certified and regularly audited. All our delivery vehicles are refrigerated, and our staff undergo regular food safety training.",
    },
    {
      id: 7,
      category: "Products",
      question: "Do you have organic and eco-friendly options?",
      answer:
        "Yes! We have a dedicated organic section with certified organic produce, dairy, and pantry items. We also offer eco-friendly packaging options and partner with sustainable brands. Look for our 'Green Choice' label on products that meet our environmental standards.",
    },
    {
      id: 8,
      category: "Account",
      question: "How do I create an account?",
      answer:
        "Creating an account is easy! Click 'Sign Up' on our homepage, enter your email and phone number, create a password, and verify your account through the confirmation email or SMS. You can also sign up using your Google or Facebook account for faster registration.",
    },
    {
      id: 9,
      category: "Account",
      question: "I forgot my password. How do I reset it?",
      answer:
        "Click 'Forgot Password' on the login page, enter your registered email address, and we'll send you a password reset link. The link is valid for 1 hour. You can also reset your password using your registered phone number via SMS verification.",
    },
    {
      id: 10,
      category: "Account",
      question: "How do I update my delivery address?",
      answer:
        "You can update your delivery address in your account settings under 'Address Book'. You can save multiple addresses and set a default one. During checkout, you can also add a new address or select from your saved addresses. Changes to your default address will apply to future orders.",
    },
    {
      id: 11,
      category: "Payments",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, Apple Pay, Google Pay, and cash on delivery. All online transactions are secured with 256-bit SSL encryption. We also offer installment payment options for orders above $100 through our partner services.",
    },
    {
      id: 12,
      category: "Payments",
      question: "Is my payment information secure?",
      answer:
        "Yes, absolutely. We use industry-standard encryption and never store your complete payment information on our servers. All payments are processed through secure, PCI-compliant payment gateways. We also use fraud detection systems to protect against unauthorized transactions.",
    },
    {
      id: 13,
      category: "Payments",
      question: "When will I be charged for my order?",
      answer:
        "For online payments, you'll be charged immediately upon order confirmation. For cash on delivery, payment is collected at the time of delivery. If an item is out of stock and removed from your order, we'll automatically refund the difference within 3-5 business days.",
    },
    {
      id: 14,
      category: "Returns",
      question: "What is your return policy?",
      answer:
        "We offer a hassle-free return policy. Non-perishable items can be returned within 7 days of delivery if unopened and in original packaging. For perishable items, we offer replacements or refunds within 24 hours if you're not satisfied with the quality. Simply contact our customer service to initiate a return.",
    },
    {
      id: 15,
      category: "Returns",
      question: "How do I return a damaged item?",
      answer:
        "If you receive a damaged item, please contact us immediately with photos of the damage. We'll arrange for a replacement or full refund without requiring you to return the damaged item. For future reference, please inspect your order upon delivery and report any issues within 2 hours.",
    },
    {
      id: 16,
      category: "Returns",
      question: "How long does it take to process refunds?",
      answer:
        "Refunds are typically processed within 24-48 hours of return approval. The time to reflect in your account depends on your payment method: 3-5 business days for credit/debit cards, 1-2 business days for digital wallets, and immediate for store credit. You'll receive an email confirmation once the refund is processed.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <>
      <Seo
        title="Celebrateit - FAQs"
        description="Browse our fresh and organic grocery selection."
      />
      <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-16">
        {/* Header */}
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          {/* <nav className="mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary font-medium">FAQ</span>
            </div>
          </nav> */}

          {/* Page Title */}
          <div
            className="text-center mb-12 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-500 mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, delivery,
              products, and more. Can't find what you're looking for? Our
              support team is here to help!
            </p>
          </div>

          {/* Search and Filter Section */}
          <div
            className="mb-12 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {faqCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 cursor-pointer rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-primary-purple text-white shadow-lg transform scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:transform hover:scale-105"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Results Count */}
          <div
            className="mb-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <p className="text-gray-600 text-lg">
              Showing{" "}
              <span className="font-semibold text-primary">
                {filteredFAQs.length}
              </span>{" "}
              {filteredFAQs.length === 1 ? "result" : "results"}
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-6 mb-16">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-xl animate-slide-in-up opacity-0"
                  style={{
                    animationDelay: `${0.8 + index * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-start hover:bg-gray-50 transition-colors duration-300 group"
                  >
                    <div className="flex-1 mr-4">
                      <div className="flex items-center mb-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mr-3">
                          {faq.category}
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`transform transition-transform duration-300 text-primary flex-shrink-0 ${
                        expandedFAQ === index ? "rotate-45" : ""
                      }`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedFAQ === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <div className="h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 mb-4"></div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 animate-fade-in-up">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or browse different categories
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dull transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Contact Support Section */}
          <div
            className="bg-gradient-to-r from-primary/20 via-primary/5 to-primary-purple/20 rounded-3xl p-8 md:p-12 text-center animate-fade-in-up opacity-0"
            style={{ animationDelay: "1.0s", animationFillMode: "forwards" }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-500 mb-4">
              Still Need Help?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our friendly customer
              support team is available 24/7 to help you with any questions or
              concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Start Chat */}
              <button className="group relative px-8 py-4 cursor-pointer bg-primary-purple text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden flex items-center gap-2">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

                <MessageCircle size={20} className="relative z-10" />
                <span className="relative z-10">Start Chat</span>
              </button>

              {/* Call Support */}
              <a href="tel:+18001234567">
                <button className="group relative px-8 py-4 cursor-pointer bg-primary-purple text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden flex items-center gap-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

                  <Phone size={20} className="relative z-10" />
                  <span className="relative z-10">Call Support</span>
                </button>
              </a>

              {/* Contact Form */}
              <Link
                to="/contact-us"
                className="group relative px-8 py-4 cursor-pointer bg-primary-purple text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden flex items-center gap-2"
              >
                <Mail size={20} className="relative z-10" />
                <span className="relative z-10">Contact Form</span>
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slide-in-up {
            0% {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }

          .animate-slide-in-up {
            animation: slide-in-up 0.8s ease-out forwards;
          }

          /* Smooth transitions for filter buttons */
          button:hover {
            animation: subtle-bounce 0.3s ease-in-out;
          }

          @keyframes subtle-bounce {
            0%,
            100% {
              transform: scale(1.05);
            }
            50% {
              transform: scale(1.08);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default FAQPage;
