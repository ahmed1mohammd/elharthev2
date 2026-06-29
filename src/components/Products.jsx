import React, { useState } from 'react';
import { Eye, Heart, X, MessageCircle, Info, ShieldCheck, Settings } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'all', name: 'جميع المعروضات' },
    { id: 'home-furniture', name: 'أثاث منزلي' },
    { id: 'office-furniture', name: 'أثاث مكتبي' },
    { id: 'air-conditioners', name: 'مكيفات هواء' }
  ];

  const products = [
    {
      id: 1,
      name: 'طقم صالون فاخر - رويال الملكي',
      category: 'home-furniture',
      price: '15,000',
      image: "/assets/images/Eoi9iKAisxW6.jpg",
      description: 'طقم صالون عصري بتصميم إيطالي فريد يجمع بين الأناقة والراحة الفائقة.',
      specs: {
        'الخامات': 'خشب زان أحمر روماني طبيعي + إسفنج عالي الكثافة',
        'عدد القطع': '4 قطع (أريكة ثلاثية + أريكة ثنائية + 2 كرسي فوتيه)',
        'الضمان': '10 سنوات ضد عيوب التصنيع',
        'بلد المنشأ': 'تصميم إيطالي - تجميع محلي'
      }
    },
    {
      id: 2,
      name: 'مكتب رئيس تنفيذي - مودرن لوكس',
      category: 'office-furniture',
      price: '8,500',
      image: "/assets/images/5orAehTZDESL.webp",
      description: 'مكتب رئيس بتصميم حديث ومساحة عمل واسعة مع خزانة جانبية ذكية لتنظيم الملفات.',
      specs: {
        'الأبعاد': '200 سم (طول) × 90 سم (عرض) × 75 سم (ارتفاع)',
        'الخامات': 'خشب MDF معالج ومقاوم للخدش والحرارة مع إطار معدني مطلي كهربائياً',
        'الضمان': '5 سنوات ضمان شامل',
        'الملحقات': 'طاولة جانبية مدمجة + وحدة أدراج بقفل مركزي'
      }
    },
    {
      id: 3,
      name: 'مكيف سبليت LG إنفيرتر - 18 ألف وحدة',
      category: 'air-conditioners',
      price: '2,800',
      image: "/assets/images/mkzA9UcxUyM0.jpg",
      description: 'مكيف هواء سبليت ذكي وموفر للطاقة بفضل تقنية المكبس العاكس المزدوج (Dual Inverter).',
      specs: {
        'سعة التبريد': '18,000 وحدة (1.5 طن)',
        'كفاءة الطاقة': 'فئة أ+ (توفير كهرباء يصل إلى 60%)',
        'الضمان': '10 سنوات على الضاغط (الكمبريسور) + سنتين ضمان شامل',
        'التقنيات': 'تنظيف تلقائي + فلتر حماية ضد البكتيريا والغبار + تحكم عبر التطبيق الذكي ThinQ'
      }
    },
    {
      id: 4,
      name: 'غرفة نوم كاملة - إمبريال الذهبية',
      category: 'home-furniture',
      price: '12,000',
      image: "/assets/images/7vZDGNzx3tiS.jpg",
      description: 'غرفة نوم كاملة بتصميم عصري راقٍ وألوان هادئة تضيف الفخامة لمنزلك.',
      specs: {
        'مكونات الغرفة': 'سرير مزدوج (180x200 سم) + دولاب 6 درف + تسريحة مع مرآة + 2 كومودينو',
        'الخامات': 'خشب معاكس طبيعي عالي الجودة مع تشطيبات ذهبية مقاومة لتغير اللون',
        'الضمان': '10 سنوات صيانة وضمان',
        'ملاحظة': 'توصيل وتركيب مجاني بواسطة فنيي المعرض المعياريين'
      }
    },
    {
      id: 5,
      name: 'كرسي مكتب تنفيذي أرغونومي',
      category: 'office-furniture',
      price: '1,200',
      image: "/assets/images/SI4el2FwFutE.webp",
      description: 'كرسي مكتب بتصميم مريح جداً يدعم العمود الفقري والرقبة لساعات العمل الطويلة.',
      specs: {
        'نوع الدعم': 'دعم قطني قابل للتعديل + مسند رأس متحرك',
        'الخامات': 'شبك طبي شبكي يسمح بالتهوية + قاعدة هيدروليكية من الألومنيوم المقوى',
        'الضمان': '3 سنوات ضمان شامل',
        'أقصى وزن': 'يتحمل حتى 150 كجم كحد أقصى'
      }
    },
    {
      id: 6,
      name: 'مكيف شباك سوبر جنرال - 18 ألف وحدة',
      category: 'air-conditioners',
      price: '1,500',
      image: "/assets/images/EpVYHBMNDlhz.jpg",
      description: 'مكيف شباك كلاسيكي بكفاءة تبريد قوية وتوزيع هواء مثالي رباعي الاتجاهات.',
      specs: {
        'سعة التبريد': '18,000 وحدة تبريد فعلي',
        'نوع الضاغط': 'ضاغط روتاري قوي ومصمم للمناطق شديدة الحرارة',
        'الضمان': '5 سنوات على الضاغط + سنتين ضمان شامل',
        'التحكم': 'لوحة تحكم يدوية سهلة الاستخدام + ريموت كنترول لاسلكي'
      }
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const getWhatsAppLink = (product) => {
    const phoneNumber = '966501234567';
    const message = `مرحباً معرض الحارثي، أود الاستفسار عن تفاصيل وطلب شراء المنتج: ${product.name} (السعر: ${product.price} ريال)`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="products" className="relative py-24 bg-[#0a0a0c] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs text-[#d4af37] font-bold tracking-widest uppercase mb-3 block">كتالوج المعروضات</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            منتجاتنا <span className="gold-gradient-text gold-glow-text">المميزة</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#aa7c11] to-[#d4af37] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-base sm:text-lg">
            شاهد باقة مختارة من أرقى قطع الأثاث المنزلي والمكتبي، وأحدث تشكيلات أجهزة التكيف الموثوقة.
          </p>
        </div>

        {/* Categories Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#aa7c11] to-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                  : 'bg-[#18181b] text-gray-400 border border-white/5 hover:text-white hover:bg-[#202024]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-panel rounded-[1.5rem] overflow-hidden group shadow-xl transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-[0_10px_35px_-10px_rgba(212,175,55,0.15)] flex flex-col h-full"
            >
              {/* Product Image and Overlay */}
              <div className="relative h-64 overflow-hidden bg-zinc-950">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Visual hover buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                  <button 
                    onClick={() => openProductDetails(product)}
                    className="bg-[#d4af37] text-black p-3.5 rounded-full hover:bg-yellow-400 transition-colors shadow-lg"
                    title="عرض التفاصيل والمواصفات"
                  >
                    <Eye size={20} />
                  </button>
                  <a 
                    href={getWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black p-3.5 rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                    title="طلب عبر الواتساب"
                  >
                    <MessageCircle size={20} className="text-green-600 fill-green-600/10" />
                  </a>
                </div>
                {/* Category tag */}
                <span className="absolute top-4 right-4 bg-black/75 backdrop-blur-xs text-[#d4af37] text-[11px] font-bold px-3 py-1 rounded-full border border-[#d4af37]/20 z-10">
                  {categories.find(c => c.id === product.category)?.name}
                </span>
              </div>
              
              {/* Product Details */}
              <div className="p-6 flex flex-col flex-1 text-right justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">{product.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">{product.description}</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <div className="text-right">
                    <span className="text-[10px] text-gray-500 block">السعر التقريبي</span>
                    <span className="text-white font-black text-xl sm:text-2xl">{product.price}</span>
                    <span className="text-xs text-[#d4af37] mr-1">ريال</span>
                  </div>
                  
                  <button 
                    onClick={() => openProductDetails(product)}
                    className="bg-[#18181b] border border-white/10 hover:border-[#d4af37]/40 hover:bg-[#d4af37] hover:text-black text-[#d4af37] text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-1.5"
                  >
                    عرض المواصفات
                    <Info size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Product Details Dialog Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop blur overlay */}
          <div 
            onClick={closeProductDetails}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
          ></div>
          
          {/* Dialog Container */}
          <div className="relative w-full max-w-3xl bg-[#0c0c0e] border border-[#d4af37]/20 rounded-3xl overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in duration-300 text-right">
            
            {/* Close button */}
            <button 
              onClick={closeProductDetails}
              className="absolute top-4 left-4 bg-white/5 border border-white/10 text-white hover:text-[#d4af37] p-2 rounded-full z-20 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Left Side: Product Image */}
              <div className="relative h-64 md:h-auto min-h-[300px] bg-zinc-950">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#0c0c0e] via-transparent to-transparent opacity-90"></div>
              </div>

              {/* Right Side: Product Details & Specs */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-[10px] font-bold px-3 py-1 rounded-full inline-block mb-3">
                    {categories.find(c => c.id === selectedProduct.category)?.name}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">{selectedProduct.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{selectedProduct.description}</p>
                  
                  {/* Specs list */}
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Settings size={14} className="text-[#d4af37]" />
                    المواصفات الفنية والتفاصيل
                  </h4>
                  
                  <div className="space-y-2.5 mb-8">
                    {Object.entries(selectedProduct.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center text-xs py-1.5 border-b border-white/5">
                        <span className="text-[#d4af37] font-bold">{key}</span>
                        <span className="text-gray-300 text-left max-w-[70%]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer and Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
                  <div className="text-right w-full sm:w-auto">
                    <span className="text-[10px] text-gray-500 block">السعر المعتمد بالمعرض</span>
                    <span className="text-white font-black text-2xl sm:text-3xl">{selectedProduct.price}</span>
                    <span className="text-xs text-[#d4af37] mr-1">ريال سعودي</span>
                  </div>
                  
                  <div className="flex gap-3 w-full sm:w-auto">
                    <a
                      href={getWhatsAppLink(selectedProduct)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial bg-gradient-to-r from-[#aa7c11] to-[#d4af37] text-black font-bold text-sm px-6 py-3 rounded-xl hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageCircle size={16} />
                      طلب شراء الآن
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
