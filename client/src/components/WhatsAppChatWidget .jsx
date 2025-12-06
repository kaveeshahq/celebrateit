import React, { useState } from "react";
import { X, Send } from "lucide-react";

const WhatsAppChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const businessWhatsAppNumber = "94759915797"; 

  const handleSendMessage = () => {
    const defaultMessage = "Hi, I'd like to know more about your services!";
    
    let whatsappURL;
    
    if (phoneNumber && phoneNumber.length >= 9) {
      // User wants to chat from their number
      const fullNumber = phoneNumber.startsWith("94") ? phoneNumber : `94${phoneNumber}`;
      whatsappURL = `https://wa.me/${businessWhatsAppNumber}?text=${encodeURIComponent(defaultMessage)}`;
    } else {
      // Direct chat to business number
      whatsappURL = `https://wa.me/${businessWhatsAppNumber}?text=${encodeURIComponent(defaultMessage)}`;
    }
    
    window.open(whatsappURL, "_blank");
    setIsOpen(false);
    setPhoneNumber("");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      </button>

      {/* Chat Widget Modal */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-5 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Hi there 👋</h3>
                <p className="text-sm text-white/90">How can we help you?</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-5 space-y-4">
            <p className="text-gray-700 text-sm">
              We are here to help. Chat with us on WhatsApp for any queries.
            </p>

            {/* Phone Number Input (Optional) */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Your Phone Number (Optional)
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2.5 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">LK +94</span>
                </div>
                <input
                  type="tel"
                  placeholder="Enter Your Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent text-sm"
                  maxLength="10"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Optional - Leave blank to chat directly
              </p>
            </div>

            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg group"
            >
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              <span>Send Us a Text</span>
            </button>

            <p className="text-xs text-center text-gray-500">
              Click to open WhatsApp and start chatting
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default WhatsAppChatWidget;