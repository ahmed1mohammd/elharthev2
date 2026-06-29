# موقع أثاث AC - Furniture AC Website

موقع ويب حديث ومتجاوب لعرض وشراء الأثاث، مبني باستخدام React و Vite.

## 🚀 المميزات

- تصميم متجاوب يعمل على جميع الأجهزة
- واجهة مستخدم حديثة وجذابة
- مكونات UI متقدمة باستخدام Radix UI
- تحريك سلس باستخدام Framer Motion
- تصميم مخصص باستخدام Tailwind CSS
- دعم للصور عالية الجودة
- زر واتساب عائم للتواصل المباشر

## 🛠️ التقنيات المستخدمة

- **React 19** - مكتبة واجهة المستخدم
- **Vite** - أداة البناء السريعة
- **Tailwind CSS** - إطار عمل CSS
- **Radix UI** - مكونات UI متقدمة
- **Framer Motion** - مكتبة التحريك
- **React Hook Form** - إدارة النماذج
- **Zod** - التحقق من صحة البيانات

## 📦 التثبيت والتشغيل

### المتطلبات الأساسية
- Node.js (الإصدار 18 أو أحدث)
- npm أو pnpm

### خطوات التثبيت

1. استنساخ المشروع:
```bash
git clone https://github.com/your-username/furniture-ac-website.git
cd furniture-ac-website
```

2. تثبيت التبعيات:
   ```bash
npm install
# أو
   pnpm install
   ```

3. تشغيل المشروع في وضع التطوير:
   ```bash
npm run dev
# أو
pnpm dev
   ```

4. فتح المتصفح على العنوان:
```
http://localhost:5173
```

## 🏗️ أوامر البناء

  ```bash
# بناء المشروع للإنتاج
npm run build

# معاينة البناء
npm run preview

# فحص الكود
npm run lint
  ```

## 📁 هيكل المشروع

```
furniture-ac-website/
├── public/                 # الملفات العامة
│   └── assets/
│       └── images/        # صور الموقع
├── src/
│   ├── components/        # مكونات React
│   │   ├── ui/           # مكونات UI الأساسية
│   │   ├── Header.jsx    # رأس الصفحة
│   │   ├── Hero.jsx      # القسم الرئيسي
│   │   ├── About.jsx     # قسم من نحن
│   │   ├── Products.jsx  # قسم المنتجات
│   │   ├── Offers.jsx    # قسم العروض
│   │   ├── Contact.jsx   # قسم الاتصال
│   │   ├── Footer.jsx    # تذييل الصفحة
│   │   └── WhatsAppFloat.jsx # زر الواتساب
│   ├── hooks/            # React Hooks المخصصة
│   ├── lib/              # المكتبات المساعدة
│   ├── App.jsx           # المكون الرئيسي
│   ├── main.jsx          # نقطة الدخول
│   └── index.css         # الأنماط العامة
├── package.json          # تبعيات المشروع
├── vite.config.js        # إعدادات Vite
└── README.md             # هذا الملف
```

## 🎨 المكونات الرئيسية

### Header
رأس الصفحة مع قائمة التنقل واللوجو.

### Hero
القسم الرئيسي مع صورة خلفية وعنوان جذاب.

### About
قسم "من نحن" يعرض معلومات الشركة.

### Products
عرض المنتجات مع صور وأسعار.

### Offers
عرض العروض الخاصة والخصومات.

### Contact
نموذج الاتصال مع معلومات التواصل.

### Footer
تذييل الصفحة مع روابط مهمة.

### WhatsAppFloat
زر عائم للتواصل عبر واتساب.

## 🔧 التخصيص

### تغيير الألوان
يمكن تخصيص الألوان من خلال ملف `tailwind.config.js`.

### إضافة صور جديدة
ضع الصور في مجلد `public/assets/images/` واستخدمها في المكونات.

### تعديل المحتوى
قم بتعديل النصوص والصور في الملفات المناسبة في مجلد `components/`.

## 📱 التوافق

- ✅ Chrome (الإصدار 90+)
- ✅ Firefox (الإصدار 88+)
- ✅ Safari (الإصدار 14+)
- ✅ Edge (الإصدار 90+)
- ✅ الأجهزة المحمولة (iOS/Android)

## 🚀 النشر

### GitHub Pages
```bash
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

### Netlify
قم برفع مجلد `dist` إلى Netlify أو اربط مستودع GitHub.

### Vercel
قم بربط مستودع GitHub مع Vercel للنشر التلقائي.

## 🤝 المساهمة

نرحب بالمساهمات! يرجى اتباع الخطوات التالية:

1. Fork المشروع
2. إنشاء فرع جديد للميزة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## 📄 الرخصة

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 الدعم

إذا واجهت أي مشاكل أو لديك أسئلة، يرجى:

- فتح issue في GitHub
- التواصل عبر البريد الإلكتروني
- مراجعة الوثائق

---

**تم تطوير هذا المشروع بـ ❤️ باستخدام React و Vite**


# elharthev2

