import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, ChevronLeft, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'عبدالرحمن العتيبي',
      role: 'فيلا سكنية - حي الملقا',
      content: 'تعاملت مع الحارثي لتأثيث الصالون الرئيسي وغرف النوم بالكامل، بالإضافة لتركيب مكيفات LG سبليت. جودة الأخشاب لا يعلى عليها، والتركيب كان في منتهى الاحترافية والسرعة. المكيفات باردة وهادئة جداً.',
      rating: 5,
      product: 'أثاث منزلي متكامل + تكييف سبليت',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120'
    },
    {
      id: 2,
      name: 'سارة الدوسري',
      role: 'شقة مودرن - حي الياسمين',
      content: 'أكثر ما أعجبني هو الخدمة الاستشارية المجانية قبل الشراء. جاء الفني وقاس الغرف واقترح سعة التكييف المناسبة ونوع الأثاث. السعر كان مناسباً جداً مقارنة بالجودة والضمان الممتد لـ 10 سنوات.',
      rating: 5,
      product: 'طقم صالون رويال + مكيفات سبليت',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120'
    },
    {
      id: 3,
      name: 'م. خالد الحربي',
      role: 'مكتب شركة ريادة - طريق الملك فهد',
      content: 'قمنا بتجهيز مقر شركتنا الجديد بالكامل من الحارثي (مكاتب المدراء، كراسي أرغونومية، وطاولات اجتماعات) بالإضافة لنظام التكييف. جودة الأثاث المكتبي ساعدت الموظفين على العمل بارتياح كبير. أنصح بهم بشدة.',
      rating: 5,
      product: 'تجهيز أثاث مكتبي بالكامل',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120'
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs text-[#d4af37] font-bold tracking-widest uppercase mb-3 block">آراء شركاء النجاح</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            ماذا يقولون <span className="gold-gradient-text gold-glow-text">عن الحارثي</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#aa7c11] to-[#d4af37] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-base sm:text-lg">
            فخورون بثقة آلاف العملاء في جميع أنحاء المملكة. رضاكم هو سر ريادتنا وتميزنا.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          {/* Quote Icon */}
          <div className="absolute -top-12 right-6 sm:right-16 text-[#d4af37]/10 pointer-events-none">
            <Quote size={120} className="fill-[#d4af37]/5" />
          </div>

          {/* Testimonial Active Slide */}
          <div className="glass-panel p-8 sm:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-[#d4af37]/30">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 text-center md:text-right">
              
              {/* Avatar and Rating */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#d4af37] mb-4">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-0.5 justify-center mb-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#d4af37] fill-[#d4af37]" />
                  ))}
                </div>
                <span className="bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap mt-1">
                  {testimonials[activeIndex].product}
                </span>
              </div>

              {/* Review Content */}
              <div className="flex-1 flex flex-col justify-between h-full pt-2">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-light italic">
                  "{testimonials[activeIndex].content}"
                </p>
                <div>
                  <h4 className="text-white font-extrabold text-lg sm:text-xl">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="bg-[#18181b] border border-white/5 text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/30 p-3 rounded-full transition-all duration-300"
              aria-label="المراجع السابق"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-[#d4af37] w-6' : 'bg-gray-700'
                  }`}
                  aria-label={`شريحة رقم ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-[#18181b] border border-white/5 text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/30 p-3 rounded-full transition-all duration-300"
              aria-label="المراجع التالي"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
