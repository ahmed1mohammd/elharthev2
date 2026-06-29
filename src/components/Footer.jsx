import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowLeft, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'منتجاتنا المميزة', href: '#products' },
    { name: 'اتصل بنا', href: '#contact' }
  ];

  const productCategories = [
    { name: 'أثاث صالونات وغرف معيشة', href: '#products' },
    { name: 'غرف نوم كلاسيك ومودرن', href: '#products' },
    { name: 'أثاث مكاتب تنفيذي متكامل', href: '#products' },
    { name: 'مكيفات سبليت ذكية', href: '#products' },
    { name: 'مكيفات شباك موفرة للطاقة', href: '#products' }
  ];

  const serviceOffers = [
    { name: 'المعاينة والرفع الفني المجاني', href: '#about' },
    { name: 'التوصيل والتركيب الاحترافي السريع', href: '#about' },
    { name: 'الصيانة الدورية وعقود الضمان الذهبي', href: '#about' },
    { name: 'تفصيل الأثاث حسب رغبة العميل', href: '#about' }
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: '#', name: 'Facebook' },
    { icon: <Twitter size={18} />, href: '#', name: 'Twitter' },
    { icon: <Instagram size={18} />, href: '#', name: 'Instagram' },
    { icon: <Youtube size={18} />, href: '#', name: 'YouTube' }
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-[#f4f4f5] border-t border-white/5 pt-16">
      
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/35 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-right">
          
          {/* Column 1: Company Brand & Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <span className="text-2xl font-black gold-gradient-text gold-glow-text">الحارثي</span>
              <span className="text-xs text-gray-400 self-end mb-1 mr-1">للأثاث والتكييف</span>
            </a>
            
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              الخيار الأول في المملكة لتأمين الأثاث الراقي وأنظمة التكييف ذات الجودة العالية. 
              نسعى دائماً لتقديم خدمات متكاملة تليق بعملائنا وتدوم طويلاً.
            </p>
            
            <div className="space-y-3.5 pt-2">
              <a href="tel:+966501234567" className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] text-sm transition-colors">
                <div className="bg-[#18181b] border border-white/5 p-2 rounded-lg">
                  <Phone size={14} className="text-[#d4af37]" />
                </div>
                <span dir="ltr">+966 50 123 4567</span>
              </a>
              <a href="mailto:info@alharthi.com" className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] text-sm transition-colors">
                <div className="bg-[#18181b] border border-white/5 p-2 rounded-lg">
                  <Mail size={14} className="text-[#d4af37]" />
                </div>
                <span>info@alharthi.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="bg-[#18181b] border border-white/5 p-2 rounded-lg">
                  <MapPin size={14} className="text-[#d4af37]" />
                </div>
                <span>الرياض، حي الملك فهد، طريق الملك عبدالعزيز</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 lg:mr-8">
            <h3 className="text-base font-extrabold text-white mb-6 uppercase tracking-wider relative">
              <span className="pb-2 border-b-2 border-[#d4af37]">روابط</span> سريعة
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <ArrowLeft size={10} className="text-gray-600" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products Categories (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-extrabold text-white mb-6 uppercase tracking-wider">
              <span className="pb-2 border-b-2 border-[#d4af37]">فئات</span> المعروضات
            </h3>
            <ul className="space-y-3 text-sm">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <ArrowLeft size={10} className="text-gray-600" />
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services & Offers (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-extrabold text-white mb-6 uppercase tracking-wider">
              <span className="pb-2 border-b-2 border-[#d4af37]">خدمات</span> العميل
            </h3>
            <ul className="space-y-3 text-sm">
              {serviceOffers.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <ArrowLeft size={10} className="text-gray-600" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup (Glass panel design) */}
      <div className="bg-black py-12 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent"></div>
            
            <div className="text-center lg:text-right">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                اشترك في نشرة <span className="text-[#d4af37]">العروض الحصرية</span>
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm font-light">
                كن أول من يعلم بالتخفيضات الكبرى وأحدث تشكيلات الأثاث الفاخرة مباشرة عبر بريدك الإلكتروني.
              </p>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 min-w-[320px] lg:min-w-[420px]">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 bg-[#18181b] text-white p-3.5 rounded-xl border border-white/5 focus:border-[#d4af37] focus:outline-none text-sm text-right"
                required
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-[#aa7c11] to-[#d4af37] text-black font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-95 transition-opacity whitespace-nowrap shadow-md"
              >
                اشترك الآن
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer Credits */}
      <div className="bg-[#08080a] py-6 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right">
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3 order-1 md:order-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-[#18181b] border border-white/5 hover:border-[#d4af37]/35 text-gray-400 hover:text-[#d4af37] p-3 rounded-full hover:scale-105 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-xs sm:text-sm order-2 md:order-1 flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <span>© {currentYear} الحارثي للأثاث والتكييف. جميع الحقوق محفوظة.</span>
              <span className="hidden sm:inline">|</span>
              <a 
                href="https://wa.me/201023973147"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37]/80 hover:text-[#d4af37] transition-colors"
              >
                تطوير وابتكار © CodeSage
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={handleScrollTop}
              className="bg-[#18181b] hover:bg-[#d4af37] text-gray-400 hover:text-black p-3 rounded-full transition-all duration-300 border border-white/5 hover:border-transparent order-3"
              aria-label="الرجوع للأعلى"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
