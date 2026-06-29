import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = '966501234567'; // Al-Harthi WhatsApp & Call number
  const message = 'مرحباً، أود الاستفسار عن منتجاتكم وعروضكم الحالية.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const telUrl = `tel:+${phoneNumber}`;

  return (
    <div 
      className="fixed left-6 bottom-6 z-50 flex flex-col items-center gap-3"
      style={{ direction: 'ltr' }} // Keep elements vertically aligned neatly
    >
      {/* Call Floating Action Button */}
      <a
        href={telUrl}
        className="bg-gradient-to-r from-[#aa7c11] to-[#d4af37] text-black w-14 h-14 flex items-center justify-center rounded-full shadow-[0_4px_15px_rgba(212,175,55,0.35)] hover:scale-110 transition-transform duration-300 relative group"
        aria-label="اتصل بنا الآن عبر الهاتف"
      >
        <Phone size={22} className="stroke-[2.5]" />
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-[#0c0c0e] text-white border border-[#d4af37]/20 text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
          اتصل بنا الآن
        </span>
      </a>

      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25d366] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform duration-300 relative group"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle size={24} className="fill-white/10 stroke-[2.5]" />
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-[#0c0c0e] text-white border border-[#d4af37]/20 text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
          تواصل عبر واتساب
        </span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
