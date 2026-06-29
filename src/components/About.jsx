import React from 'react';
import { Users, Award, Clock, MapPin, CheckCircle, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users size={32} className="text-[#d4af37]" />,
      number: '+5000',
      label: 'عميل سعيد يثق بنا'
    },
    {
      icon: <Award size={32} className="text-[#d4af37]" />,
      number: '+15',
      label: 'سنة من التميز والريادة'
    },
    {
      icon: <Clock size={32} className="text-[#d4af37]" />,
      number: '24/7',
      label: 'دعم فني واستشارات مجانية'
    },
    {
      icon: <MapPin size={32} className="text-[#d4af37]" />,
      number: '+50',
      label: 'مدينة نغطيها بالكامل'
    }
  ];

  const coreValues = [
    {
      title: 'معاينة فنية مجانية',
      description: 'نرسل مهندسينا لمعاينة الموقع وتحديد حجم المكيفات المناسب وتوزيع الأثاث الأمثل مجاناً.',
      icon: <Eye size={20} className="text-black" />
    },
    {
      title: 'أعلى معايير الجودة',
      description: 'نستورد أخشابنا من أفضل الغابات الأوروبية، ومكيفاتنا مجهزة بضواغط إنفيرتر موفرة للطاقة.',
      icon: <ShieldCheck size={20} className="text-black" />
    },
    {
      title: 'خدمة ما بعد البيع',
      description: 'عقود صيانة دورية للمكيفات وخدمة ضمان ممتد تغطي قطع الغيار واليد العاملة فوراً.',
      icon: <HeartHandshake size={20} className="text-black" />
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs text-[#d4af37] font-bold tracking-widest uppercase mb-3 block">قصتنا ورؤيتنا</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            من نحن في <span className="gold-gradient-text gold-glow-text">الحارثي</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#aa7c11] to-[#d4af37] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            نحن شريكك المثالي لتأثيث بيتك ومكتبك وتأمين الجو المثالي له. على مدى أكثر من 15 عاماً، 
            التزمنا بتقديم حلول متكاملة تدمج بين جمال التصميم وعصرية الأثاث وقوة أجهزة التكييف.
          </p>
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Right Column: Values & Description */}
          <div className="lg:col-span-7 space-y-8 text-right">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                تأثيث وتكييف متكامل تحت <span className="text-[#d4af37]">سقف واحد</span>
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 font-light">
                من الصالونات المودرن الفاخرة إلى غرف النوم المريحة ومطابخ المستقبل، نوفر أثاثاً يدوم طويلاً. 
                وبجانب الأثاث، نقوم بتجهيز منزلك بأقوى أنظمة التكييف المركزي والسبليت من كبرى الشركات العالمية مثل LG وGree، 
                مع فنيين محترفين للتثبيت.
              </p>
            </div>

            {/* Core Values / Features Cards */}
            <div className="space-y-4">
              {coreValues.map((value, index) => (
                <div key={index} className="glass-panel p-5 rounded-2xl flex items-start gap-4 hover:border-[#d4af37]/30 transition-all duration-300">
                  <div className="bg-gradient-to-br from-[#d4af37] to-[#aa7c11] p-3 rounded-xl flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base sm:text-lg mb-1">{value.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Column: Premium Framed Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(212,175,55,0.08)] group">
              <img 
                src="/assets/images/TaHLLJOUnWt9.jpg" 
                alt="معرض الحارثي الفاخر" 
                className="w-full h-[380px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
              
              {/* Overlaid stats summary */}
              <div className="absolute bottom-6 right-6 left-6 text-right">
                <div className="inline-flex items-center gap-1.5 bg-[#d4af37]/10 border border-[#d4af37]/20 px-3 py-1 rounded-full text-[#d4af37] text-xs font-semibold mb-2">
                  <CheckCircle size={12} />
                  معرضنا الرئيسي بالرياض
                </div>
                <h4 className="text-white text-lg font-bold">مساحة عرض تتجاوز 2000 متر مربع</h4>
                <p className="text-xs text-gray-400 mt-1">تضم أحدث تشكيلات الأثاث والمكيفات تحت سقف واحد</p>
              </div>
            </div>

            {/* Decorative layout boxes */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-[#d4af37]/20 rounded-2xl pointer-events-none -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4af37]/5 rounded-[2.5rem] pointer-events-none -z-10 blur-md"></div>
          </div>
        </div>

        {/* Section Divider Line */}
        <div className="section-divider mb-16"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl text-center flex flex-col items-center justify-center gap-2 group"
            >
              <div className="bg-[#18181b] border border-white/5 p-4 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-white mt-2 group-hover:text-[#d4af37] transition-colors">{stat.number}</div>
              <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
