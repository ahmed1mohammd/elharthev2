import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Clock, ArrowLeft } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'المنتجات', href: '#products' },
    { name: 'اتصل بنا', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Contact Bar */}
      <div className="bg-[#0c0c0e] border-b border-white/5 py-2 px-4 transition-all duration-300">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-2">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 text-gray-400">
            <a href="tel:+966501234567" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
              <Phone size={14} className="text-[#d4af37]" />
              <span dir="ltr">+966 50 123 4567</span>
            </a>
            <a href="mailto:info@alharthi.com" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
              <Mail size={14} className="text-[#d4af37]" />
              <span>info@alharthi.com</span>
            </a>
            <div className="hidden sm:flex items-center gap-2">
              <Clock size={14} className="text-[#d4af37]" />
              <span>9:00 ص - 10:00 م</span>
            </div>
          </div>
          <div className="font-medium text-[#d4af37] text-center md:text-right text-xs sm:text-sm gold-glow-text">
            مرحباً بكم في معرض الحارثي الفاخر للأثاث والتكييف
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`w-full transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-[#d4af37]/20' : 'bg-black/40 backdrop-blur-sm py-5 border-b border-white/5'}`}>
        <nav className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-wide gold-gradient-text">الحارثي</span>
                <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
              </div>
              <span className="text-xs sm:text-sm text-gray-400 self-end mb-1 mr-1 hidden sm:inline-block">للأثاث والتكييف</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="relative text-gray-300 hover:text-white font-medium text-sm transition-colors py-2 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/966501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#aa7c11] via-[#d4af37] to-[#ffd700] text-black px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.25)]"
              >
                طلب استشارة مجانية
                <ArrowLeft size={16} />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-[#d4af37] transition-colors p-2 rounded-lg bg-white/5 border border-white/10"
                aria-label="القائمة"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[280px] bg-[#0c0c0e]/95 backdrop-blur-lg border-l border-[#d4af37]/10 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-extrabold gold-gradient-text">الحارثي</span>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#d4af37] transition-colors p-2 rounded-lg bg-white/5"
            >
              <X size={18} />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-[#d4af37] font-bold text-lg transition-colors pb-2 border-b border-white/5"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Drawer Footer info */}
        <div className="flex flex-col gap-4 mt-auto">
          <a
            href="https://wa.me/966501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#aa7c11] to-[#d4af37] text-black text-center py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg"
          >
            تواصل معنا مباشرة
          </a>
          <div className="text-center text-xs text-gray-500">
            معرض الحارثي © {new Date().getFullYear()}
          </div>
        </div>
      </div>

      {/* Overlay backdrop for mobile menu */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300 md:hidden"
        ></div>
      )}
    </header>
  );
};

export default Header;
