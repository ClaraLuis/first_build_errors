export const data = {
  templates: [
    {
      type: "Real Estate",
      slideShow: [
        {
          id: 1,
          image: require("./reaestate/slideshow1.jpg"),
        },
        {
          id: 2,
          image: require("./reaestate/slideshow2.jpg"),
        },
      ],
      products: [
        {
          id: "1",
          image: require("./reaestate/v1.jpg"),
          images: [
            {
              id: "1",
              image: require("./reaestate/v1.jpg"),
            },
          ],
          title_en: "Modern Beachfront Villa",
          title_ar: "فيلا حديثة على الواجهة البحرية",
          price: "10000",
          sale_price: "9000",
          description:
            "A stunning beachfront villa with contemporary design and ocean views.",
        },
        {
          id: "2",
          image: require("./reaestate/v2.jpg"),
          images: [
            {
              id: "1",
              image: require("./reaestate/v2.jpg"),
            },
          ],
          title_en: "Luxury Mountain Retreat",
          title_ar: "ملاذ فاخر في الجبال",
          price: "12000",
          sale_price: "10000",
          description:
            "A luxurious retreat nestled in the mountains, offering breathtaking views and privacy.",
        },
        {
          id: "3",
          image: require("./reaestate/v3.jpeg"),
          images: [
            {
              id: "1",
              image: require("./reaestate/v3.jpeg"),
            },
          ],
          title_en: "Spacious Urban Mansion",
          title_ar: "قصر حضري واسع",
          price: "15000",
          sale_price: "12000",
          description:
            "An expansive mansion in the heart of the city, combining luxury and convenience.",
        },
        {
          id: "4",
          image: require("./reaestate/v4.jpeg"),
          images: [
            {
              id: "1",
              image: require("./reaestate/v4.jpeg"),
            },
          ],
          title_en: "Elegant Countryside Estate",
          title_ar: "عقار أنيق في الريف",
          price: "18000",
          sale_price: "14000",
          description:
            "An elegant estate in the countryside, offering serene surroundings and upscale amenities.",
        },
        {
          id: "5",
          image: require("./reaestate/v5.jpeg"),
          images: [
            {
              id: "1",
              image: require("./reaestate/v5.jpeg"),
            },
          ],
          title_en: "Contemporary Suburban Home",
          title_ar: "منزل عصري في الضواحي",
          price: "20000",
          sale_price: "16000",
          description:
            "A modern home in a suburban setting, perfect for families and comfortable living.",
        },
        {
          id: "6",
          image: require("./reaestate/v6.jpeg"),
          images: [
            {
              id: "1",
              image: require("./reaestate/v6.jpeg"),
            },
          ],
          title_en: "Opulent City Penthouse",
          title_ar: "بنتهاوس فاخر في المدينة",
          price: "22000",
          sale_price: "18000",
          description:
            "An opulent penthouse in the city, offering unrivaled luxury and panoramic views.",
        },
      ],
      collections: [
        {
          id: "1",
          image: require("./reaestate/c1.jpeg"),
          title_en: "Exclusive Gated Community",
        },
        {
          id: "2",
          image: require("./reaestate/c2.jpeg"),
          title_en: "Premium Residential Complex",
        },
      ],
      background: require("./reaestate/bg.jpeg"),
      callToAction: "Add to Cart",
    },
    {
      type: "Beauty Salon",
      slideShow: [
        {
          id: 1,
          image: require("./beautysalon/slideshow1.jpg"),
        },
        {
          id: 2,
          image: require("./beautysalon/slideshow2.jpg"),
        },
      ],
      products: [
        {
          id: "1",
          image: require("./beautysalon/service1.jpeg"),
          title_en: "Classic Facial",
          title_ar: "علاج وجه كلاسيكي",
          price: "50",
          sale_price: "45",
          description:
            "A rejuvenating classic facial to refresh and revitalize your skin.",
        },
        {
          id: "2",
          image: require("./beautysalon/service2.jpeg"),
          title_en: "Luxury Spa Massage",
          title_ar: "تدليك سبا فاخر",
          price: "80",
          sale_price: "70",
          description:
            "An indulgent spa massage to relieve stress and enhance relaxation.",
        },
        {
          id: "3",
          image: require("./beautysalon/service3.jpeg"),
          title_en: "Manicure & Pedicure",
          title_ar: "تقليم الأظافر والقدمين",
          price: "40",
          sale_price: "35",
          description:
            "A complete manicure and pedicure service for perfectly groomed hands and feet.",
        },
        {
          id: "4",
          image: require("./beautysalon/service4.jpeg"),
          title_en: "Haircut & Styling",
          title_ar: "قص الشعر وتصفيفه",
          price: "60",
          sale_price: "55",
          description:
            "Professional haircut and styling to give you a fresh and trendy look.",
        },
        {
          id: "5",
          image: require("./beautysalon/service5.jpeg"),
          title_en: "Hair Coloring",
          title_ar: "تلوين الشعر",
          price: "100",
          sale_price: "90",
          description:
            "Premium hair coloring service with the latest techniques and trends.",
        },
        {
          id: "6",
          image: require("./beautysalon/service6.jpeg"),
          title_en: "Eyebrow Shaping",
          title_ar: "تشكيل الحواجب",
          price: "30",
          sale_price: "25",
          description:
            "Expert eyebrow shaping to enhance your facial features.",
        },
      ],
      collections: [
        {
          id: "1",
          image: require("./beautysalon/collection1.jpeg"),
          title_en: "Pamper Packages",
        },
        {
          id: "2",
          image: require("./beautysalon/collection2.jpeg"),
          title_en: "Seasonal Offers",
        },
      ],
      background: require("./beautysalon/bg.jpg"),
      callToAction: "Book Now",
    },
    {
      type: "Supermarket",
      slideShow: [
        {
          id: 1,
          image: require("./supermarket/slideshow1.jpg"),
        },
        {
          id: 2,
          image: require("./supermarket/slideshow2.jpeg"),
        },
      ],
      products: [
        {
          id: "1",
          image: require("./supermarket/product1.jpeg"),
          title_en: "Fresh Apples",
          title_ar: "تفاح طازج",
          price: "3.00",
          sale_price: "2.50",
          description: "Crisp and juicy apples, perfect for a healthy snack.",
        },
        {
          id: "2",
          image: require("./supermarket/product2.jpeg"),
          title_en: "Organic Milk",
          title_ar: "حليب عضوي",
          price: "1.50",
          sale_price: "1.20",
          description:
            "High-quality organic milk, free from artificial hormones.",
        },
        {
          id: "3",
          image: require("./supermarket/product3.jpeg"),
          title_en: "Whole Wheat Bread",
          title_ar: "خبز القمح الكامل",
          price: "2.00",
          sale_price: "1.80",
          description:
            "Nutritious whole wheat bread, ideal for sandwiches and toast.",
        },
        {
          id: "4",
          image: require("./supermarket/product4.jpg"),
          title_en: "Extra Virgin Olive Oil",
          title_ar: "زيت زيتون بكر ممتاز",
          price: "6.00",
          sale_price: "5.50",
          description:
            "Premium extra virgin olive oil, perfect for cooking and dressing.",
        },
        {
          id: "5",
          image: require("./supermarket/product5.jpg"),
          title_en: "Fresh Chicken Breasts",
          title_ar: "صدور دجاج طازجة",
          price: "7.00",
          sale_price: "6.50",
          description:
            "Tender and juicy chicken breasts, ideal for grilling or baking.",
        },
        {
          id: "6",
          image: require("./supermarket/product6.jpg"),
          title_en: "Assorted Cheeses",
          title_ar: "أجبان متنوعة",
          price: "5.00",
          sale_price: "4.50",
          description:
            "A selection of delicious cheeses, perfect for cheese platters.",
        },
      ],
      collections: [
        {
          id: "1",
          image: require("./supermarket/collection1.jpeg"),
          title_en: "Weekly Specials",
        },
        {
          id: "2",
          image: require("./supermarket/collection2.jpeg"),
          title_en: "Organic Products",
        },
      ],
      background: require("./supermarket/bg.jpg"),
      callToAction: "Add to cart",
    },
  ],
};
