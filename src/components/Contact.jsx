import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Info } from 'lucide-react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '966501234567';
    const waMessage = `*طلب تواصل جديد من موقع الحارثي*%0A---------------------------%0A*الاسم:* ${formData.name}%0A*البريد الإلكتروني:* ${formData.email}%0A*رقم الهاتف:* ${formData.phone}%0A*الموضوع:* ${formData.subject}%0A*الرسالة:* ${formData.message}`;
    const waUrl = `https://wa.me/${phoneNumber}?text=${waMessage}`;
    window.open(waUrl, '_blank');
    Swal.fire({
      icon: 'success',
      iconColor: '#d4af37',
      title: 'تم إرسال رسالتك بنجاح!',
      text: 'تم تحويلك إلى واتساب لإكمال التواصل مع خدمة العملاء. سنقوم بالرد عليك فوراً.',
      background: '#0c0c0e',
      color: '#ffffff',
      confirmButtonText: 'حسناً',
      confirmButtonColor: '#d4af37',
      customClass: {
        popup: 'border border-[#d4af37]/20 rounded-3xl',
        confirmButton: 'text-black font-bold px-6 py-2.5 rounded-xl'
      }
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={20} className="text-black" />,
      title: 'اتصل بنا مباشرة',
      details: ['+966 50 123 4567', '+966 11 456 7890'],
      action: 'tel:+966501234567'
    },
    {
      icon: <Mail size={20} className="text-black" />,
      title: 'البريد الإلكتروني',
      details: ['info@alharthi.com', 'sales@alharthi.com'],
      action: 'mailto:info@alharthi.com'
    },
    {
      icon: <MapPin size={20} className="text-black" />,
      title: 'تفضل بزيارتنا',
      details: ['المملكة العربية السعودية، الرياض', 'حي الملك فهد، طريق الملك عبدالعزيز'],
      action: 'https://maps.google.com'
    },
    {
      icon: <Clock size={20} className="text-black" />,
      title: 'أوقات العمل والمعرض',
      details: ['السبت - الخميس: 9:00 ص - 10:00 م', 'الجمعة: 2:00 م - 10:00 م'],
      action: '#'
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs text-[#d4af37] font-bold tracking-widest uppercase mb-3 block">تواصل معنا</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            يسعدنا دائماً <span className="gold-gradient-text gold-glow-text">خدمتك</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#aa7c11] to-[#d4af37] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-base sm:text-lg">
            تواصل معنا اليوم للحصول على عرض سعر مخصص أو لحجز استشارة فنية ومعاينة مجانية لموقعك.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 text-right">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-6">معلومات الاتصال</h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="glass-panel p-5 rounded-2xl flex items-start gap-4 hover:border-[#d4af37]/30 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#d4af37] to-[#aa7c11] p-3 rounded-xl flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-400 text-xs sm:text-sm leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
              <a
                href="tel:+966501234567"
                className="flex items-center justify-center gap-2 bg-[#18181b] border border-[#d4af37]/30 text-[#d4af37] py-3.5 rounded-xl font-bold hover:bg-[#d4af37] hover:text-black transition-all duration-300 text-sm shadow-md"
              >
                <Phone size={16} />
                اتصل بالهاتف الموحد
              </a>
              <a
                href="https://wa.me/966501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600/90 text-white py-3.5 rounded-xl font-bold hover:bg-green-700 transition-all duration-300 text-sm shadow-lg shadow-green-900/10"
              >
                <MessageCircle size={16} />
                محادثة واتساب فورية
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl text-right relative overflow-hidden flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-6">أرسل استفسارك مباشرة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-bold mr-1">الاسم الكامل</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#18181b] text-white p-3.5 rounded-xl border border-white/5 focus:border-[#d4af37] focus:outline-none transition-colors text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-bold mr-1">البريد الإلكتروني</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#18181b] text-white p-3.5 rounded-xl border border-white/5 focus:border-[#d4af37] focus:outline-none transition-colors text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-bold mr-1">رقم الجوال (مع رمز الدولة)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#18181b] text-white p-3.5 rounded-xl border border-white/5 focus:border-[#d4af37] focus:outline-none transition-colors text-sm"
                    placeholder="966XXXXXXXXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-bold mr-1">نوع المعاينة / الاستفسار</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-[#18181b] text-white p-3.5 rounded-xl border border-white/5 focus:border-[#d4af37] focus:outline-none transition-colors text-sm"
                    required
                  >
                    <option value="">اختر القسم المناسب</option>
                    <option value="معاينة مجانية للمكيفات">طلب معاينة فنية مجانية للمكيفات</option>
                    <option value="استفسار عن الأثاث وتفصيل الغرف">استفسار عن أثاث وتفصيل الغرف</option>
                    <option value="طلب عرض أسعار للشركات">طلب عرض أسعار للشركات (أثاث/تكييف)</option>
                    <option value="أخرى">استفسارات عامة أخرى</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-bold mr-1">الرسالة أو تفاصيل الطلب</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full bg-[#18181b] text-white p-3.5 rounded-xl border border-white/5 focus:border-[#d4af37] focus:outline-none transition-colors text-sm resize-none"
                  placeholder="يرجى كتابة مقاسات الغرفة أو تفاصيل الموديل الذي ترغب في الاستفسار عنه..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#aa7c11] to-[#d4af37] text-black font-bold text-base py-3.5 rounded-xl hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg"
              >
                إرسال الطلب عبر واتساب
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section Mockup Card */}
        <div className="mt-16 text-right">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-6 text-center">موقعنا الجغرافي</h3>
            <div className="bg-[#121214] border border-white/5 h-72 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden text-center p-6">
              
              {/* Decorative grid pattern inside map */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-20"></div>
              
              {/* Map pin pulse logo */}
              <div className="relative z-10 w-16 h-16 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                <MapPin size={28} className="text-[#d4af37]" />
              </div>

              <h4 className="text-white font-bold text-lg mb-2 relative z-10">الرياض - حي الملك فهد</h4>
              <p className="text-gray-400 text-xs sm:text-sm max-w-md relative z-10 leading-relaxed font-light">
                مفترق طريق الملك عبدالعزيز مع طريق الملك عبدالله. تتوفر مواقف سيارات خاصة لعملاء المعرض.
              </p>
              
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 bg-[#18181b] border border-white/10 hover:border-[#d4af37]/40 hover:bg-[#d4af37] hover:text-black text-[#d4af37] text-xs font-bold px-5 py-2.5 rounded-xl transition-all duration-300 relative z-10 shadow-md"
              >
                احصل على الاتجاهات في خرائط Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
