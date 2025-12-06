import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Printer } from "lucide-react";
import Seo from "../components/Seo";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    contactNumber: '',
    email: '',
    comments: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong");
      }
      toast.success("Message sent successfully!")
      setFormData({
        firstName: '',
        lastName: '',
        address: '',
        contactNumber: '',
        email: '',
        comments: ''
      });
    } catch (err) {
      alert("❌ Failed to send message: " + err.message);
    }
  };

  const contactInfo = [
    { 
      title: "Address", 
      content: "123 Food Street, Food City", 
      icon: MapPin,
    },
    { 
      title: "Email", 
      content: "support@foodcity.com", 
      icon: Mail,
    },
    { 
      title: "Telephone", 
      content: "+1 (234) 567-890", 
      icon: Phone,
    },
    { 
      title: "Fax", 
      content: "+1 (234) 567-891", 
      icon: Printer,
    },
  ];

  return (
    <> 

          <Seo
        title="Celebrateit - Contact Us
        
        
        "
        description="Here is the ordered products by customer."
      />   
      <div className="px-6 md:px-24 py-12 space-y-16 overflow-hidden">
        {/* Breadcrumb */}
        {/* <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">Get in Touch</span>
          </div>
        </nav> */}

        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            <span className="text-gray-500">Here to</span> help!
          </h1>
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Your feedback and enquiry is important to us, so we will endeavour to respond to you at our earliest. Your feedback will help us continuously improve ourselves to make it better for you and our other valued Customers.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              In the meantime if your enquiry is urgent and you require immediate assistance, our Customer Care team is here to assist you (Refer below for other ways to contact us)
            </p>
          </div>
        </div>

        {/* Contact Info Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {contactInfo.map((tile, index) => {
            const IconComponent = tile.icon;
            return (
              <div
                key={index}
                className="group bg-white text-primary p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border border-gray-100 hover:text-primary-purple"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary-purple/10 transition-all duration-300">
                    <IconComponent className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:font-bold transition-all duration-300">
                  {tile.title}
                </h3>
                <p className="text-gray-600 group-hover:text-primary-purple group-hover:font-medium transition-all duration-300 break-words">
                  {tile.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              Get In Touch
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('firstName')}
                    onBlur={() => setFocusedField('')}
                    className="border-2 border-gray-200 rounded-xl px-4 py-3 w-full transition-all duration-300 focus:border-[#603393] focus:ring-2 focus:ring-[#603393]/20 focus:outline-none hover:border-gray-300 bg-gray-50 focus:bg-white"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#603393] to-[#603393] transition-all duration-300 ${focusedField === 'firstName' ? 'w-full' : 'w-0'}`}></div>
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('lastName')}
                    onBlur={() => setFocusedField('')}
                    className="border-2 border-gray-200 rounded-xl px-4 py-3 w-full transition-all duration-300 focus:border-[#603393] focus:ring-2 focus:ring-[#603393]/20 focus:outline-none hover:border-gray-300 bg-gray-50 focus:bg-white"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#603393] to-[#603393] transition-all duration-300 ${focusedField === 'lastName' ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>
              
              <div className="relative group">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('address')}
                  onBlur={() => setFocusedField('')}
                  className="border-2 border-gray-200 rounded-xl px-4 py-3 w-full transition-all duration-300 focus:border-[#603393] focus:ring-2 focus:ring-[#603393]/20 focus:outline-none hover:border-gray-300 bg-gray-50 focus:bg-white"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#603393] to-[#603393] transition-all duration-300 ${focusedField === 'address' ? 'w-full' : 'w-0'}`}></div>
              </div>
              
              <div className="relative group">
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('contactNumber')}
                  onBlur={() => setFocusedField('')}
                  className="border-2 border-gray-200 rounded-xl px-4 py-3 w-full transition-all duration-300 focus:border-[#603393] focus:ring-2 focus:ring-[#603393]/20 focus:outline-none hover:border-gray-300 bg-gray-50 focus:bg-white"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#603393] to-[#603393] transition-all duration-300 ${focusedField === 'contactNumber' ? 'w-full' : 'w-0'}`}></div>
              </div>
              
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  className="border-2 border-gray-200 rounded-xl px-4 py-3 w-full transition-all duration-300 focus:border-[#603393] focus:ring-2 focus:ring-[#603393]/20 focus:outline-none hover:border-gray-300 bg-gray-50 focus:bg-white"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#603393] to-[#603393] transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
              </div>
              
              <div className="relative group">
                <textarea
                  name="comments"
                  placeholder="Comments"
                  rows="5"
                  value={formData.comments}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('comments')}
                  onBlur={() => setFocusedField('')}
                  className="border-2 border-gray-200 rounded-xl px-4 py-3 w-full transition-all duration-300 focus:border-[#603393] focus:ring-2 focus:ring-[#603393]/20 focus:outline-none hover:border-gray-300 bg-gray-50 focus:bg-white resize-none"
                ></textarea>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#603393] to-[#603393] transition-all duration-300 ${focusedField === 'comments' ? 'w-full' : 'w-0'}`}></div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-4 bg-gradient-to-r from-[#603393] to-[#603393] cursor-pointer text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;