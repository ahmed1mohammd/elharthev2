import React, { useState } from 'react';
import { ArrowLeft, Star, Shield, Truck, Zap, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [selectedInterest, setSelectedInterest] = useState('furniture');

  const handleQuickSearch = (e) => {
    e.preventDefault();
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black flex items-center pt-36 sm:pt-44 lg:pt-48 pb-16 overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#aa7c11]/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-right mt-8 lg:mt-0">
            {/* Elegant Small Tag */}
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/20 px-4 py-1.5 rounded-full mb-6 text-[#d4af37] text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <Zap size={14} className="animate-bounce" />
              فخامة التصميم وجودة الأداء تلتقيان
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold mb-6 leading-[1.15] text-white">
              ارتقِ بأسلوب حياتك مع <br />
              <span className="gold-gradient-text gold-glow-text font-black">أثاث راقٍ وتكييف ذكي</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-8 max-w-2xl lg:ml-0 leading-relaxed font-light">
              نصنع لك الفخامة والراحة في آنٍ واحد. تصفح أحدث مجموعات الأثاث المنزلي والمكتبي، 
              واختر من بين أرقى أجهزة التكييف الموفرة للطاقة بأسعار حصرية وضمان ذهبي شامل.
            </p>

            {/* Quick Consultation Selector (Widget) */}
            <form onSubmit={handleQuickSearch} className="glass-panel p-4 sm:p-5 rounded-2xl max-w-xl mb-8 text-right shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#d4af37] to-[#aa7c11]"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-bold mr-1">ما الذي تبحث عنه؟</label>
                  <select 
                    value={selectedInterest}
                    onChange={(e) => setSelectedInterest(e.target.value)}
                    className="w-full bg-[#18181b] border border-white/10 text-white rounded-xl px-3 py-3 text-sm focus:border-[#d4af37] focus:outline-none transition-colors"
                  >
                    <option value="furniture">أثاث منزلي ومكتبي راقي</option>
                    <option value="ac">مكيفات هواء حديثة (سبليت/شباك)</option>
                    <option value="consult">طلب استشارة تصميم وديكور</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-bold mr-1">نطاق الميزانية</label>
                  <select className="w-full bg-[#18181b] border border-white/10 text-white rounded-xl px-3 py-3 text-sm focus:border-[#d4af37] focus:outline-none transition-colors">
                    <option>عرض الكل</option>
                    <option>المستوى الاقتصادي الموفر</option>
                    <option>المستوى المتوسط المميز</option>
                    <option>المستوى الفاخر الحصري</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/5">
                <span className="text-xs text-gray-400 flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-[#d4af37]" />
                  توصيل وتركيب احترافي مجاني في جميع أنحاء الرياض
                </span>
                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#aa7c11] to-[#d4af37] text-black font-bold text-sm px-6 py-3 rounded-xl hover:opacity-95 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
                >
                  اكتشف العروض
                  <ArrowLeft size={16} />
                </button>
              </div>
            </form>

            {/* Core Benefits */}
            <div className="grid grid-cols-3 gap-3 max-w-lg">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-right gap-1 p-2">
                <div className="bg-[#d4af37]/10 p-2.5 rounded-xl border border-[#d4af37]/20 mb-2">
                  <Shield size={20} className="text-[#d4af37]" />
                </div>
                <span className="text-white text-xs sm:text-sm font-bold">ضمان 10 سنوات</span>
                <span className="text-[10px] text-gray-500">حقيقي ومعتمد</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-right gap-1 p-2">
                <div className="bg-[#d4af37]/10 p-2.5 rounded-xl border border-[#d4af37]/20 mb-2">
                  <Truck size={20} className="text-[#d4af37]" />
                </div>
                <span className="text-white text-xs sm:text-sm font-bold">شحن سريع</span>
                <span className="text-[10px] text-gray-500">وتركيب مجاني</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-right gap-1 p-2">
                <div className="bg-[#d4af37]/10 p-2.5 rounded-xl border border-[#d4af37]/20 mb-2">
                  <Star size={20} className="text-[#d4af37]" />
                </div>
                <span className="text-white text-xs sm:text-sm font-bold">تقييم 4.9⭐</span>
                <span className="text-[10px] text-gray-500">من أكثر من 5k عميل</span>
              </div>
            </div>
          </div>

          {/* Left Column: Image with floating elements */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-[420px] lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 border border-[#d4af37]/10 rounded-[2.5rem] transform rotate-3 scale-105 pointer-events-none"></div>

              {/* Main Image Wrapper */}
              <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.1)] group">
                <img 
                  src="/assets/images/Eoi9iKAisxW6.jpg" 
                  alt="معرض الأثاث الفاخر والتكييف" 
                  className="w-full h-[400px] sm:h-[500px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 right-6 left-6 text-right">
                  <span className="text-xs text-[#d4af37] font-bold">معرض الرياض الرئيسي</span>
                  <h3 className="text-white text-lg sm:text-xl font-bold mt-1">صالونات الحارثي الكلاسيكية والمودرن</h3>
                </div>
              </div>

              {/* Floating Element 1: Smart AC Badge */}
              <div className="absolute -top-6 -right-6 z-20 glass-panel px-4 py-3 rounded-2xl flex items-center gap-3 animate-float shadow-xl">
                <div className="bg-[#d4af37]/20 p-2 rounded-xl border border-[#d4af37]/30">
                  <Zap size={18} className="text-[#d4af37] fill-[#d4af37]/30" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400">مكيفات موفرة</p>
                  <p className="text-xs text-white font-bold">عروض خصم تصل لـ 30%</p>
                </div>
              </div>

              {/* Floating Element 2: Star rating */}
              <div className="absolute -bottom-4 -left-6 z-20 glass-panel px-5 py-3 rounded-2xl flex flex-col gap-1.5 animate-float-delayed shadow-xl text-right">
                <div className="flex gap-1 justify-end">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-[#d4af37] fill-[#d4af37]" />
                  ))}
                </div>
                <p className="text-xs text-white font-bold">خدمة عملاء فائقة التميز</p>
                <span className="text-[10px] text-gray-400">دعم متكامل وصيانة سريعة</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce scroll down arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">تصفح الأسفل</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#d4af37] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
