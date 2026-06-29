import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'هل توجد رسوم إضافية لخدمات التوصيل والتركيب للأثاث والمكيفات؟',
      answer: 'لا، التوصيل والتركيب مجانيان بالكامل لجميع العملاء داخل مدينة الرياض والمناطق المجاورة لها. يتم النقل والتركيب بواسطة فنيين ونجارين محترفين لضمان التركيب الفني الصحيح.'
    },
    {
      question: 'ما هي مدة الضمان المعتمدة وكيف يمكنني الاستفادة منها؟',
      answer: 'نقدم ضماناً ذهبياً ممتداً يصل إلى 10 سنوات على الهياكل والأخشاب للأثاث، و10 سنوات على كباسات المكيفات (الكمبريسور). للاستفادة من الضمان، يمكنك فقط الاتصال بنا أو مراسلتنا برقم الفاتورة وسيقوم فريق الصيانة بزيارتك فوراً.'
    },
    {
      question: 'هل تتوفر لديكم خيارات الدفع بالتقسيط؟',
      answer: 'نعم، نوفر حلول تقسيط ميسرة ومرنة بالتعاون مع كبرى الشركات التمويلية في المملكة (مثل تمارا وتابي) بدون فوائد أو رسوم خفية. يمكنك الاستفسار عن تفاصيل التقسيط عبر التواصل معنا عبر واتساب.'
    },
    {
      question: 'هل يمكنني تعديل مقاسات أو ألوان الأثاث المعروض ليناسب منزلي؟',
      answer: 'نعم بالتأكيد! نوفر قسماً خاصاً للتفصيل والطلبات الخاصة، حيث يمكنك اختيار الألوان ونوع القماش ونوع الخشب وإجراء تعديلات على المقاسات بما يتناسب تماماً مع مساحة منزلك.'
    },
    {
      question: 'ما هي خدمة المعاينة المجانية للمكيفات قبل الشراء؟',
      answer: 'هي خدمة نرسل بموجبها مهندساً مختصاً لموقعك (منزل أو مكتب) لمعاينة المساحة وحساب حجم الأحمال الحرارية واقتراح عدد الوحدات وسعة التكييف المناسبة لضمان التبريد الفعال وتوفير الكهرباء، وذلك مجاناً وبدون أي التزام بالشراء.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-[#0a0a0c] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs text-[#d4af37] font-bold tracking-widest uppercase mb-3 block">الأسئلة الشائعة</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            لديك سؤال؟ <span className="gold-gradient-text gold-glow-text">إليك الإجابات</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#aa7c11] to-[#d4af37] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-base sm:text-lg">
            قمنا بجمع أكثر الأسئلة التي يطرحها عملاؤنا لمساعدتك في اتخاذ القرار المناسب.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`glass-panel rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen ? 'border-[#d4af37]/40 bg-[#121214]/80' : 'border-white/5 hover:border-white/10'
                }`}
              >
                {/* FAQ Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-right focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-xl border transition-colors ${isOpen ? 'bg-[#d4af37]/10 border-[#d4af37]/20 text-[#d4af37]' : 'bg-[#18181b] border-white/5 text-gray-400'}`}>
                      <HelpCircle size={18} />
                    </div>
                    <span className={`font-bold text-sm sm:text-base transition-colors ${isOpen ? 'text-[#d4af37]' : 'text-white'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    size={18} 
                    className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-[#d4af37]' : ''
                    }`}
                  />
                </button>

                {/* FAQ Answer Panel */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="p-5 sm:p-6 pt-0 sm:pt-0 text-gray-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 mr-12 pr-1.5 font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
