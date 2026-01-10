// src/data/siteData.js

// ============================================
// CONTACT INFORMATION
// ============================================
export const CONTACT_INFO = {
  email: 'khudafereen@gmail.com',
  phone: '+994 70 387 38 37',
  phoneAlt: '+994 50 747 47 44',
  address: 'Nizami Street, Baku',
  calendlyLink: 'https://calendly.com/khudafereen/konsultasiya',
  
  workingHours: {
    weekday: 'Monday to Friday: 09:00 - 18:00',
    saturday: 'Saturday: 10:00 - 12:00'
  },
  
  social: {
    instagram: 'https://instagram.com/thekhudafereen',
    whatsapp: 'https://wa.me/994703873837',
    facebook: 'https://facebook.com/thekhudafereen'
  }
};

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
  {
    id: 1,
    value: '900+',
    label: 'Uğurlu tələbə',
    icon: '🎓'
  },
  {
    id: 2,
    value: '91%+',
    label: 'Qəbul faizi',
    icon: '✅'
  },
  {
    id: 3,
    value: '20+',
    label: 'Təqaüd proqramı',
    icon: '💰'
  },
  {
    id: 4,
    value: '50+',
    label: 'Partner universitet',
    icon: '🏛️'
  }
];

// ============================================
// INTERNATIONAL SCHOLARSHIPS
// ============================================
export const INTERNATIONAL_SCHOLARSHIPS = [
  {
    id: 1,
    name: 'Erasmus Mundus',
    country: 'Avropa Birliyi',
    flag: '🇪🇺'
  },
  {
    id: 2,
    name: 'Fulbright',
    country: 'ABŞ',
    flag: '🇺🇸'
  },
  {
    id: 3,
    name: 'Chevening',
    country: 'Böyük Britaniya',
    flag: '🇬🇧'
  },
  {
    id: 4,
    name: 'DAAD',
    country: 'Almaniya',
    flag: '🇩🇪'
  },
  {
    id: 5,
    name: 'Stipendium Hungaricum',
    country: 'Macarıstan',
    flag: '🇭🇺'
  },
  {
    id: 6,
    name: 'Smartsup Scholarship',
    country: 'Fransa',
    flag: '🇫🇷'
  },
  {
    id: 7,
    name: 'Korea State Scholarship (KAIST)',
    country: 'Cənubi Koreya',
    flag: '🇰🇷'
  },
  {
    id: 8,
    name: 'CSC Scholarship',
    country: 'Çin',
    flag: '🇨🇳'
  },
  {
    id: 9,
    name: 'Finland State Scholarship',
    country: 'Finlandiya',
    flag: '🇫🇮'
  },
  {
    id: 10,
    name: 'Swedish Institute Scholarship',
    country: 'İsveç',
    flag: '🇸🇪'
  },
  {
    id: 11,
    name: 'MAECI / Invest your Talent',
    country: 'İtaliya',
    flag: '🇮🇹'
  },
  {
    id: 12,
    name: 'Romanian Government Scholarship',
    country: 'Rumıniya',
    flag: '🇷🇴'
  },
  {
    id: 13,
    name: 'Lithuanian State Scholarship',
    country: 'Litva',
    flag: '🇱🇹'
  },
  {
    id: 14,
    name: 'Ireland State Scholarship',
    country: 'İrlandiya',
    flag: '🇮🇪'
  },
  {
    id: 15,
    name: 'Latvian State Scholarship',
    country: 'Latviya',
    flag: '🇱🇻'
  },
  {
    id: 16,
    name: 'Stefan Banach (NAWA)',
    country: 'Polşa',
    flag: '🇵🇱'
  }
];

// ============================================
// AZERBAIJAN SCHOLARSHIPS
// ============================================
export const AZERBAIJAN_SCHOLARSHIPS = [
  {
    id: 1,
    name: 'Xaricdə Təhsil üzrə Dövlət Proqramı',
    description: 'Dövlət Proqramı 2022–2028',
    flag: '🇦🇿'
  },
  {
    id: 2,
    name: 'Hökumətlərarası Təqaüd Proqramı (HTP)',
    description: 'Macarıstan, Çin, Rumıniya, Qazaxıstan və s.',
    flag: '🇦🇿'
  }
];

// ============================================
// UNIVERSITY SCHOLARSHIPS INFO
// ============================================
export const UNIVERSITY_SCHOLARSHIPS = {
  title: 'Universitetlərin Daxili Təqaüdləri',
  description: 'Bir çox ölkədə universitetlər öz daxili təqaüd proqramları təklif edir',
  countries: [
    'Niderland',
    'Kanada', 
    'ABŞ',
    'Birləşmiş Krallıq',
    'Polşa'
  ]
};

// ============================================
// SERVICE PACKAGES
// ============================================
export const PACKAGES = [
  {
    id: 'basic',
    name: 'Basic',
    popular: false,
    services: [
      '3 Universitet müraciəti',
      'Motivasiya məktubu (1 ixtisas)',
      'CV hazırlanması',
      'Araşdırma'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    popular: false,
    services: [
      '5 Universitet müraciəti',
      'Motivasiya məktubu (1 ixtisas)',
      'CV hazırlanması',
      '2 Akademik təqaüd müraciəti',
      'Araşdırma'
    ]
  },
  {
    id: 'standard-plus',
    name: 'Standard Plus',
    popular: true,
    badge: 'Populyar',
    services: [
      '8 Universitet müraciəti',
      'Motivasiya məktubu',
      'CV hazırlanması',
      '3 Akademik təqaüd müraciəti',
      'Yataqxana dəstəyi (rəsmi)',
      'Visa dəstəyi',
      'Araşdırma'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum',
    popular: false,
    services: [
      '13 Universitet müraciəti',
      'Motivasiya məktubu (2 ədəd)',
      'CV hazırlanması',
      '5 Akademik təqaüd müraciəti',
      'Yataqxana dəstəyi (rəsmi)',
      'Müsahibə hazırlığı (7 dəfə)',
      'Visa dəstəyi',
      '2 Akademik referans',
      'IELTS qeydiyyat dəstəyi (BC)',
      'Visa müsahibə hazırlığı (3 dəfə)',
      'Araşdırma',
      'Partner universitetlərdə xüsusi dəstək'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    popular: false,
    featured: true,
    badge: 'Ən Yaxşı',
    services: [
      'Limitsiz Universitet müraciəti',
      'Limitsiz Akademik təqaüd müraciəti',
      'Motivasiya məktubu (2 ədəd)',
      'CV hazırlanması',
      'Universitetdaxili akademik təqaüd',
      'Visa müsahibə hazırlığı (limitsiz)',
      'Visa dəstəyi (sənədləşmə)',
      'Diplom və əlavəsi tərcümə-təsdiq',
      'Xüsusi kurator (əməkdaş)',
      '2 Akademik recommendation',
      '1 Biznes recommendation',
      'Partner universitetlərdə xüsusi dəstək',
      'Yataqxana dəstəyi (rəsmi)',
      'Yataqxana dəstəyi (özəl)',
      'IELTS qeydiyyat dəstəyi (BC)',
      'Araşdırma'
    ]
  }
];

// ============================================
// MAIN SERVICES
// ============================================
export const SERVICES = [
  {
    id: 1,
    title: 'Universitet Seçimi',
    description: 'İxtisasınıza və büdcənizə uyğun ən yaxşı universitetləri seçirik',
    icon: '🎓',
    features: [
      '50+ Partner universitet',
      'Pulsuz məsləhət',
      'Müqayisəli təhlil'
    ]
  },
  {
    id: 2,
    title: 'Təqaüd Müraciəti',
    description: '20+ təqaüd proqramına professional müraciət hazırlığı',
    icon: '💰',
    features: [
      'Dövlət təqaüdləri',
      'Beynəlxalq proqramlar',
      'Universitet təqaüdləri'
    ]
  },
  {
    id: 3,
    title: 'Sənəd Hazırlığı',
    description: 'Motivasiya məktubu, CV və bütün tələb olunan sənədlər',
    icon: '📝',
    features: [
      'Professional CV',
      'Motivasiya məktubu',
      'Referans məktubları'
    ]
  },
  {
    id: 4,
    title: 'Visa Dəstəyi',
    description: 'Visa müraciəti və müsahibə hazırlığında tam dəstək',
    icon: '✈️',
    features: [
      'Sənəd hazırlığı',
      'Müsahibə təlimi',
      'Qəbul təminatı'
    ]
  },
  {
    id: 5,
    title: 'IELTS Hazırlıq',
    description: 'IELTS qeydiyyatı və hazırlıq prosesində məsləhət',
    icon: '📚',
    features: [
      'Qeydiyyat dəstəyi',
      'Təlim məsləhəti',
      'British Council'
    ]
  },
  {
    id: 6,
    title: 'Yataqxana & Yaşayış',
    description: 'Rəsmi və özəl yataqxana seçimi və qeydiyyat',
    icon: '🏠',
    features: [
      'Rəsmi yataqxana',
      'Özəl mənzil',
      'Qiymət müqayisəsi'
    ]
  }
];

// ============================================
// PROCESS STEPS
// ============================================
export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Pulsuz Konsultasiya',
    description: 'İlk görüşdə sizin hədəflərinizi və imkanlarınızı müəyyənləşdiririk',
    icon: '💬'
  },
  {
    id: 2,
    title: 'Araşdırma və Planlaşdırma',
    description: 'Sizə uyğun universitetləri və təqaüd proqramlarını seçirik',
    icon: '🔍'
  },
  {
    id: 3,
    title: 'Sənəd Hazırlığı',
    description: 'Professional CV, motivasiya məktubu və digər sənədləri hazırlayırıq',
    icon: '📄'
  },
  {
    id: 4,
    title: 'Müraciət',
    description: 'Universitet və təqaüd müraciətlərini göndəririk',
    icon: '📨'
  },
  {
    id: 5,
    title: 'Qəbul və Visa',
    description: 'Qəbul məktubundan sonra visa prosesində dəstək oluruq',
    icon: '✅'
  },
  {
    id: 6,
    title: 'Yola Salma',
    description: 'Yataqxana, bilet və ilk günlər üçün məsləhətlər veririk',
    icon: '🎉'
  }
];

// ============================================
// COUNTRIES (Popular destinations)
// ============================================
export const COUNTRIES = [
  {
    id: 1,
    name: 'Almaniya',
    flag: '🇩🇪',
    universities: '15+',
    scholarships: ['DAAD', 'Erasmus+'],
    image: '/images/countries/germany.jpg'
  },
  {
    id: 2,
    name: 'Polşa',
    flag: '🇵🇱',
    universities: '12+',
    scholarships: ['NAWA', 'Universitet təqaüdləri'],
    image: '/images/countries/poland.jpg'
  },
  {
    id: 3,
    name: 'Türkiyə',
    flag: '🇹🇷',
    universities: '8+',
    scholarships: ['Türkiyə Bursu', 'YÖK'],
    image: '/images/countries/turkey.jpg'
  },
  {
    id: 4,
    name: 'Macarıstan',
    flag: '🇭🇺',
    universities: '10+',
    scholarships: ['Stipendium Hungaricum'],
    image: '/images/countries/hungary.jpg'
  },
  {
    id: 5,
    name: 'Çexiya',
    flag: '🇨🇿',
    universities: '7+',
    scholarships: ['Dövlət təqaüdü'],
    image: '/images/countries/czech.jpg'
  },
  {
    id: 6,
    name: 'İtaliya',
    flag: '🇮🇹',
    universities: '9+',
    scholarships: ['MAECI', 'Invest Your Talent'],
    image: '/images/countries/italy.jpg'
  }
];

// ============================================
// FAQ
// ============================================
export const FAQ = [
  {
    id: 1,
    question: 'Xidmətləriniz pulsuzdurmu?',
    answer: 'İlk konsultasiyamız tamamilə pulsuzdur. Paket qiymətləri seçdiyiniz xidmətə görə dəyişir.'
  },
  {
    id: 2,
    question: 'Təqaüd almaq şansım nə qədərdir?',
    answer: 'Akademik göstəricilərinizə və seçdiyiniz proqrama görə dəyişir. Orta hesabla müştərilərimizin 70%-i təqaüd alır.'
  },
  {
    id: 3,
    question: 'Hansı ölkələrə müraciət edə bilərəm?',
    answer: 'Avropa, ABŞ, Kanada, Asiya ölkələri daxil olmaqla 20+ ölkəyə müraciət dəstəyi veririk.'
  },
  {
    id: 4,
    question: 'Prosess nə qədər vaxt aparır?',
    answer: 'Orta hesabla 4-6 ay. Təqaüd müraciətləri üçün 6-8 ay planlaşdırmaq lazımdır.'
  },
  {
    id: 5,
    question: 'IELTS olmadan müraciət edə bilərəmmi?',
    answer: 'Bəzi universitetlər IELTS tələb etmir və ya alternativ qəbul edir. Sizə uyğun variantları tapırıq.'
  }
];

// ============================================
// TESTIMONIALS
// ============================================
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Nigar Əliyeva',
    university: 'Technical University of Munich',
    country: 'Almaniya',
    image: '/images/testimonials/student-1.jpg',
    text: 'The Khudafereen sayəsində DAAD təqaüdü qazandım və indi Münhendə təhsil alıram. Hər addımda yanımda oldular!'
  },
  {
    id: 2,
    name: 'Rəşad Məmmədov',
    university: 'University of Warsaw',
    country: 'Polşa',
    image: '/images/testimonials/student-2.jpg',
    text: 'Professional yanaşma və dəstək. Sənəd hazırlığından visaya qədər hər şeyi əhatə etdilər.'
  },
  {
    id: 3,
    name: 'Aysel Həsənova',
    university: 'Erasmus University Rotterdam',
    country: 'Niderland',
    image: '/images/testimonials/student-3.jpg',
    text: 'Erasmus Mundus təqaüdü almağıma kömək etdilər. Ən yaxşı qərar idi!'
  }
];