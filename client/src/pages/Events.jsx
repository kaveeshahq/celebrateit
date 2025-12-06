import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Cake, 
  PartyPopper, 
  Crown, 
  Music, 
  Gift,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Sparkles,
  Camera,
  Users
} from "lucide-react";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventTypes = [
    {
      id: 1,
      title: "Weddings",
      icon: Heart,
      description: "Make your special day unforgettable with our complete wedding packages",
      color: "bg-primary-pink",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      features: ["Floral Decorations", "Custom Cakes", "Gift Hampers", "Complete Setup"]
    },
    {
      id: 2,
      title: "Birthdays",
      icon: Cake,
      description: "Celebrate another year of joy with our amazing birthday packages",
      color: "bg-primary-purple",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      features: ["Birthday Cakes", "Balloon Decorations", "Party Supplies", "Gift Ideas"]
    },
    {
      id: 3,
      title: "Engagements",
      icon: Sparkles,
      description: "Start your journey together with our elegant engagement setups",
      color: "bg-primary",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
      features: ["Ring Ceremony Setup", "Floral Arrangements", "Photography Props", "Sweet Treats"]
    },
    {
      id: 4,
      title: "Bride to Be",
      icon: Crown,
      description: "Celebrate the bride-to-be with our special bridal shower packages",
      color: "bg-primary-pink",
      image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=800&q=80",
      features: ["Bridal Decorations", "Custom Cakes", "Party Favors", "Photo Booth Props"]
    },
    {
      id: 5,
      title: "Corporate Events",
      icon: Users,
      description: "Professional event solutions for your business gatherings",
      color: "bg-primary-purple",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      features: ["Corporate Gifts", "Catering Services", "Event Setup", "Branded Materials"]
    },
    {
      id: 6,
      title: "All Parties",
      icon: PartyPopper,
      description: "From baby showers to anniversaries, we've got you covered",
      color: "bg-primary",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      features: ["Custom Themes", "Decorations", "Party Supplies", "Entertainment Ideas"]
    }
  ];

  const services = [
    {
      icon: Gift,
      title: "Custom Packages",
      description: "Tailored event packages to match your vision and budget"
    },
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Complete planning and coordination for stress-free celebrations"
    },
    {
      icon: Camera,
      title: "Decoration Setup",
      description: "Professional decoration and setup services for your venue"
    },
    {
      icon: Music,
      title: "Complete Solutions",
      description: "From invitations to party favors, we handle everything"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative mt-4 h-[400px] md:h-[200px] lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden mb-12 shadow-2xl">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=80"
            alt="Events by Celebrateit"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-primary-pink/80 via-primary-purple/80 to-primary/80"></div> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-6 md:px-10">
          <div className="mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto">
              <PartyPopper className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Events by <span className="text-primary">Celebrateit</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-8">
            Transform your special moments into unforgettable memories with our complete event solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0759915797"
              className="group flex items-center gap-2 bg-white text-primary-purple px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone size={20} className="group-hover:rotate-12 transition-transform" />
              <span>Call Us Now</span>
            </a>
            <Link
              to="/contact-us"
              className="group flex items-center gap-2 bg-primary-purple text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white"
            >
              <Mail size={20} />
              <span>Get Quote</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Event Types Grid */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Events We <span className="text-primary-pink">Celebrate</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {eventTypes.map((event) => {
            const IconComponent = event.icon;
            return (
              <div
                key={event.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedEvent(event.id === selectedEvent ? null : event.id)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${event.color} opacity-60`}></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>

                  {/* Features */}
                  {selectedEvent === event.id && (
                    <div className="space-y-2 mt-4 animate-fade-in">
                      {event.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-purple" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                      <Link
                        to="/contact-us"
                        className="inline-block mt-4 bg-primary-purple text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary-purple/90 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-16 bg-gradient-to-br from-primary-pink/10 via-primary-purple/10 to-primary/10 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-500 mb-4">
            Our <span className="text-primary-pink">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive event solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-pink to-primary-purple rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-pink/50 via-primary-purple/50 to-primary/50 rounded-3xl p-8 md:p-12 text-center text-white mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Plan Your Event?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Let's create an unforgettable celebration together. Contact us today for a free consultation!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0759915797"
            className="inline-flex items-center gap-2 bg-white text-primary-purple px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Phone size={20} />
            <span>Celebrate Hotline</span>
          </a>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white"
          >
            <Mail size={20} />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;