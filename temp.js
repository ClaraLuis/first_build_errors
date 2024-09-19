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

    {
      type: "Food Trading",
      slideShow: [
        {
          id: 1,
          image: require("./foodtrading/slideshow1.jpg"),
        },
        {
          id: 2,
          image: require("./foodtrading/slideshow2.jpeg"),
        },
      ],
      products: [
        {
          id: "1",
          image: require("./foodtrading/product1.jpeg"),
          title_en: "Premium Coffee Beans",
          title_ar: "حبوب قهوة ممتازة",
          price: "15.00",
          sale_price: "12.00",
          description:
            "Freshly roasted premium coffee beans with a rich, aromatic flavor.",
        },
        {
          id: "2",
          image: require("./foodtrading/product2.jpeg"),
          title_en: "Organic Green Tea",
          title_ar: "شاي أخضر عضوي",
          price: "10.00",
          sale_price: "8.00",
          description:
            "High-quality organic green tea leaves for a refreshing and healthy drink.",
        },
        {
          id: "3",
          image: require("./foodtrading/product3.jpg"),
          title_en: "Gourmet Olive Oil",
          title_ar: "زيت زيتون فاخر",
          price: "25.00",
          sale_price: "20.00",
          description:
            "Extra virgin olive oil, ideal for cooking and dressings with a smooth, rich taste.",
        },
        {
          id: "4",
          image: require("./foodtrading/product4.jpeg"),
          title_en: "Artisan Chocolate Bars",
          title_ar: "ألواح شوكولاتة فاخرة",
          price: "5.00",
          sale_price: "4.00",
          description:
            "Delicious artisan chocolate bars made from the finest cocoa beans.",
        },
        {
          id: "5",
          image: require("./foodtrading/product5.jpg"),
          title_en: "Handcrafted Jam",
          title_ar: "مربى مصنوع يدويًا",
          price: "7.00",
          sale_price: "6.00",
          description:
            "Sweet and fruity handcrafted jam, perfect for spreading on toast or using in recipes.",
        },
        {
          id: "6",
          image: require("./foodtrading/product6.jpg"),
          title_en: "Spicy Pickles",
          title_ar: "مخللات حارة",
          price: "8.00",
          sale_price: "6.50",
          description:
            "Crunchy and flavorful spicy pickles, a great addition to any meal or snack.",
        },
      ],
      collections: [
        {
          id: "1",
          image: require("./foodtrading/collection1.jpeg"),
          title_en: "International Delicacies",
        },
        {
          id: "2",
          image: require("./foodtrading/collection2.jpeg"),
          title_en: "Healthy Snacks",
        },
      ],
      background: require("./foodtrading/bg.jpeg"),
      callToAction: "Order Now",
    },

    {
      type: "Supermarket2",
      slideShow: [
        {
          id: 1,
          image: require("./supermarket2/slideshow1.jpg"),
        },
        {
          id: 2,
          image: require("./supermarket2/slideshow2.jpg"),
        },
      ],
      products: [
        {
          id: "1",
          image: require("./supermarket2/product1.jpg"),
          title_en: "Avocado",
          title_ar: "أفوكادو",
          price: "2.50",
          sale_price: "2.00",
          description:
            "Ripe and creamy avocados, ideal for salads and guacamole.",
        },
        {
          id: "2",
          image: require("./supermarket2/product2.jpg"),
          title_en: "Brown Rice",
          title_ar: "أرز بني",
          price: "4.00",
          sale_price: "3.50",
          description: "Nutritious brown rice, a perfect addition to any meal.",
        },
        {
          id: "3",
          image: require("./supermarket2/product3.jpg"),
          title_en: "Chicken Breasts",
          title_ar: "صدر دجاج",
          price: "5.50",
          sale_price: "5.00",
          description:
            "Tender and juicy chicken breasts, perfect for grilling or baking.",
        },
        {
          id: "4",
          image: require("./supermarket2/product4.jpg"),
          title_en: "Greek Yogurt",
          title_ar: "زبادي يوناني",
          price: "3.00",
          sale_price: "2.70",
          description:
            "Creamy Greek yogurt, high in protein and great for breakfast.",
        },
        {
          id: "5",
          image: require("./supermarket2/product5.jpg"),
          title_en: "Granola Bars",
          title_ar: "ألواح جرانولا",
          price: "1.50",
          sale_price: "1.30",
          description:
            "Healthy granola bars, perfect for a quick snack on the go.",
        },
        {
          id: "6",
          image: require("./supermarket2/product6.jpeg"),
          title_en: "Orange Juice",
          title_ar: "عصير برتقال",
          price: "3.50",
          sale_price: "3.20",
          description: "Freshly squeezed orange juice, packed with vitamins.",
        },
      ],
      collections: [
        {
          id: "1",
          image: require("./supermarket2/collection1.jpeg"),
          title_en: "Healthy Choices",
        },
        {
          id: "2",
          image: require("./supermarket2/collection2.jpeg"),
          title_en: "Family Favorites",
        },
      ],
      background: require("./supermarket2/bg.jpeg"),
      callToAction: "Add to cart",
    },

    {
      type: "Lighting System",
      slideShow: [
        {
          id: 1,
          image: require("./lightingsystem/slideshow1.jpg"),
        },
        {
          id: 2,
          image: require("./lightingsystem/slideshow2.jpeg"),
        },
      ],
      products: [
        {
          id: "1",
          image: require("./lightingsystem/product1.jpg"),
          title_en: "Modern LED Ceiling Light",
          title_ar: "إضاءة سقف LED عصرية",
          price: "120",
          sale_price: "100",
          description:
            "A sleek and energy-efficient LED ceiling light for modern interiors.",
        },
        {
          id: "2",
          image: require("./lightingsystem/product2.jpeg"),
          title_en: "Smart RGB Floor Lamp",
          title_ar: "مصباح أرضي ذكي RGB",
          price: "150",
          sale_price: "130",
          description:
            "A smart floor lamp with adjustable RGB lighting for a customizable ambiance.",
        },
        {
          id: "3",
          image: require("./lightingsystem/product3.jpg"),
          title_en: "Vintage Pendant Light",
          title_ar: "إضاءة معلقة كلاسيكية",
          price: "80",
          sale_price: "70",
          description:
            "A vintage-style pendant light that adds a touch of elegance to any room.",
        },
        {
          id: "4",
          image: require("./lightingsystem/product4.jpg"),
          title_en: "Outdoor Solar Wall Light",
          title_ar: "إضاءة جدارية خارجية تعمل بالطاقة الشمسية",
          price: "50",
          sale_price: "40",
          description:
            "An eco-friendly outdoor wall light powered by solar energy, perfect for pathways and gardens.",
        },
        {
          id: "5",
          image: require("./lightingsystem/product5.jpeg"),
          title_en: "Crystal Chandelier",
          title_ar: "ثريا كريستال",
          price: "300",
          sale_price: "250",
          description:
            "A luxurious crystal chandelier that brings sophistication and grandeur to any space.",
        },
        {
          id: "6",
          image: require("./lightingsystem/product6.jpg"),
          title_en: "Adjustable Desk Lamp",
          title_ar: "مصباح مكتب قابل للتعديل",
          price: "40",
          sale_price: "35",
          description:
            "A flexible and adjustable desk lamp ideal for workspaces and reading.",
        },
      ],
      collections: [
        {
          id: "1",
          image: require("./lightingsystem/collection1.jpeg"),
          title_en: "Luxury Chandeliers",
        },
        {
          id: "2",
          image: require("./lightingsystem/collection2.jpeg"),
          title_en: "Smart Lighting Systems",
        },
      ],
      background: require("./lightingsystem/bg.jpeg"),
      callToAction: "Add to cart",
    },
    {
      type: "Health Testing Lab",
      slideShow: [
        {
          id: 1,
          image: require("./healthtestinglab/slideshow1.jpeg"),
        },
        {
          id: 2,
          image: require("./healthtestinglab/slideshow2.jpeg"),
        },
      ],
      products: [
        {
          id: "1",
          image: require("./healthtestinglab/service1.jpeg"),
          title_en: "Comprehensive Blood Test",
          title_ar: "اختبار الدم الشامل",
          price: "150",
          sale_price: "120",
          description:
            "A thorough blood test to assess your overall health and detect any potential issues.",
        },
        {
          id: "2",
          image: require("./healthtestinglab/service2.jpeg"),
          title_en: "Cholesterol Screening",
          title_ar: "فحص الكوليسترول",
          price: "80",
          sale_price: "60",
          description:
            "A cholesterol test to measure levels of HDL, LDL, and triglycerides.",
        },
        {
          id: "3",
          image: require("./healthtestinglab/service3.jpeg"),
          title_en: "DNA Genetic Testing",
          title_ar: "اختبار الحمض النووي الجيني",
          price: "300",
          sale_price: "250",
          description:
            "Analyze your genetic makeup to assess health risks and ancestry information.",
        },
        {
          id: "4",
          image: require("./healthtestinglab/service4.jpeg"),
          title_en: "COVID-19 PCR Test",
          title_ar: "اختبار تفاعل البوليميراز المتسلسل لكوفيد-19",
          price: "100",
          sale_price: "80",
          description:
            "PCR test for COVID-19, providing fast and reliable results.",
        },
        {
          id: "5",
          image: require("./healthtestinglab/service5.jpeg"),
          title_en: "Allergy Test",
          title_ar: "اختبار الحساسية",
          price: "200",
          sale_price: "160",
          description:
            "Detect your body's allergic reactions to a wide range of allergens.",
        },
        {
          id: "6",
          image: require("./healthtestinglab/service6.jpeg"),
          title_en: "Hormonal Panel Test",
          title_ar: "اختبار الهرمونات",
          price: "250",
          sale_price: "200",
          description:
            "Check your hormone levels to detect imbalances that may affect your health.",
        },
      ],
      collections: [
        {
          id: "1",
          image: require("./healthtestinglab/collection1.jpg"),
          title_en: "Routine Health Checkups",
        },
        {
          id: "2",
          image: require("./healthtestinglab/collection2.jpeg"),
          title_en: "Specialized Diagnostic Tests",
        },
      ],
      background: require("./healthtestinglab/bg.jpeg"),
      callToAction: "Book a Test",
    },
    {
      type: "Travel Agency",
      slideShow: [
        {
          id: 1,
          image: require("./travelagency/slideshow1.jpeg"),
        },
        {
          id: 2,
          image: require("./travelagency/slideshow2.jpeg"),
        },
      ],
      products: [
        {
          id: "1",
          image: require("./travelagency/package1.jpeg"),
          title_en: "Luxury Maldives Getaway",
          title_ar: "عطلة فاخرة في جزر المالديف",
          price: "5000",
          sale_price: "4500",
          description:
            "Experience a 7-day luxury escape to the Maldives, including overwater villas and exclusive beach access.",
        },
        {
          id: "2",
          image: require("./travelagency/package2.jpeg"),
          title_en: "European Highlights Tour",
          title_ar: "جولة معالم أوروبا",
          price: "4000",
          sale_price: "3500",
          description:
            "Explore the best of Europe with a 10-day guided tour across Paris, Rome, and Barcelona.",
        },
        {
          id: "3",
          image: require("./travelagency/package3.jpeg"),
          title_en: "African Safari Adventure",
          title_ar: "مغامرة سفاري في أفريقيا",
          price: "3000",
          sale_price: "2700",
          description:
            "A thrilling 5-day safari adventure through Kenya's national parks, complete with wildlife viewing and cultural experiences.",
        },
        {
          id: "4",
          image: require("./travelagency/package4.jpeg"),
          title_en: "Asian Cultural Experience",
          title_ar: "تجربة ثقافية آسيوية",
          price: "3500",
          sale_price: "3200",
          description:
            "A 7-day immersive tour of Japan and South Korea, exploring temples, cuisine, and traditions.",
        },
        {
          id: "5",
          image: require("./travelagency/package5.jpeg"),
          title_en: "Tropical Caribbean Cruise",
          title_ar: "رحلة بحرية في الكاريبي",
          price: "2800",
          sale_price: "2500",
          description:
            "Sail across the Caribbean for 5 days, stopping at beautiful islands like Jamaica and the Bahamas.",
        },
        {
          id: "6",
          image: require("./travelagency/package6.jpeg"),
          title_en: "Explore the Wonders of Egypt",
          title_ar: "اكتشف عجائب مصر",
          price: "3200",
          sale_price: "2900",
          description:
            "Discover the ancient history of Egypt with a 6-day tour of the Pyramids, Luxor, and Nile River cruise.",
        },
      ],
      collections: [
        {
          id: "1",
          image: require("./travelagency/collection1.jpeg"),
          title_en: "Family Vacations",
        },
        {
          id: "2",
          image: require("./travelagency/collection2.jpeg"),
          title_en: "Romantic Getaways",
        },
      ],
      background: require("./travelagency/bg.jpeg"),
      callToAction: "Book Your Trip",
    },
    {
      type: "Fish Market",
      slideShow: [
        {
          id: 1,
          image: require("./fishmarket/slideshow1.jpeg"),
        },
        {
          id: 2,
          image: require("./fishmarket/slideshow2.jpeg"),
        },
      ],
      products: [
        {
          id: "1",
          image: require("./fishmarket/product1.jpg"),
          title_en: "Fresh Atlantic Salmon",
          title_ar: "سمك السلمون الأطلسي الطازج",
          price: "20",
          sale_price: "18",
          description:
            "Premium Atlantic salmon, known for its rich flavor and high-quality omega-3 content, sold by the pound.",
        },
        {
          id: "2",
          image: require("./fishmarket/product2.jpeg"),
          title_en: "Wild-Caught Yellowfin Tuna",
          title_ar: "تونة الزعنفة الصفراء الطازجة",
          price: "25",
          sale_price: "22",
          description:
            "Sustainably sourced Yellowfin tuna, perfect for sashimi or grilling, available fresh by the pound.",
        },
        {
          id: "3",
          image: require("./fishmarket/product3.jpeg"),
          title_en: "Jumbo Tiger Shrimp",
          title_ar: "روبيان النمر الجامبو",
          price: "15",
          sale_price: "13",
          description:
            "Large, juicy Tiger shrimp, ideal for grilling or adding to seafood dishes, available fresh or frozen.",
        },
        {
          id: "4",
          image: require("./fishmarket/product4.jpeg"),
          title_en: "Wild Pacific Cod",
          title_ar: "سمك القد الباسيفيكي البري",
          price: "18",
          sale_price: "16",
          description:
            "Flaky and mild-flavored Pacific cod, perfect for frying or baking, sold by the pound.",
        },
        {
          id: "5",
          image: require("./fishmarket/product5.jpeg"),
          title_en: "Live Maine Lobster",
          title_ar: "جراد البحر من ولاية مين",
          price: "40",
          sale_price: "35",
          description:
            "Freshly caught live lobsters from Maine, known for their sweet, tender meat, sold by the piece.",
        },
        {
          id: "6",
          image: require("./fishmarket/product6.jpeg"),
          title_en: "Fresh Black Mussels",
          title_ar: "بلح البحر الأسود الطازج",
          price: "10",
          sale_price: "9",
          description:
            "Delicious black mussels, perfect for steaming or adding to seafood pasta, sold by the pound.",
        },
      ],
      collections: [
        {
          id: "1",
          image: require("./fishmarket/collection1.jpeg"),
          title_en: "Shellfish Selection",
        },
        {
          id: "2",
          image: require("./fishmarket/collection2.jpeg"),
          title_en: "Premium Fish Fillets",
        },
      ],
      background: require("./fishmarket/bg.jpg"),
      callToAction: "Add to cart",
    },

    {
      type: "Healthy",
      slideShow: [
        {
          id: 1,
          image: require("./healthyfood/slideshow1.jpeg"),
        },
        {
          id: 2,
          image: require("./healthyfood/slideshow2.jpeg"),
        },
      ],
      products: [
        {
          id: "1",
          image: require("./healthyfood/product1.jpeg"),
          title_en: "Organic Quinoa",
          title_ar: "كينوا عضوية",
          price: "12",
          sale_price: "10",
          description:
            "High-protein, gluten-free organic quinoa, perfect for salads and side dishes, available in a 1kg pack.",
        },
        {
          id: "2",
          image: require("./healthyfood/product2.jpeg"),
          title_en: "Chia Seeds",
          title_ar: "بذور الشيا",
          price: "8",
          sale_price: "7",
          description:
            "Nutrient-dense chia seeds, great for smoothies, oatmeal, and baking, packed with fiber and omega-3s.",
        },
        {
          id: "3",
          image: require("./healthyfood/product3.jpeg"),
          title_en: "Almond Butter",
          title_ar: "زبدة اللوز",
          price: "15",
          sale_price: "13",
          description:
            "Creamy, all-natural almond butter made from roasted almonds, no added sugar or preservatives.",
        },
        {
          id: "4",
          image: require("./healthyfood/product4.jpeg"),
          title_en: "Organic Coconut Oil",
          title_ar: "زيت جوز الهند العضوي",
          price: "10",
          sale_price: "9",
          description:
            "Cold-pressed organic coconut oil, perfect for cooking, skincare, and hair care, available in a 500ml jar.",
        },
        {
          id: "5",
          image: require("./healthyfood/product5.jpeg"),
          title_en: "Kale Chips",
          title_ar: "رقائق الكالي",
          price: "5",
          sale_price: "4",
          description:
            "Crispy, baked kale chips seasoned with sea salt, a healthy and delicious snack alternative.",
        },
        {
          id: "6",
          image: require("./healthyfood/product6.jpeg"),
          title_en: "Vegan Protein Powder",
          title_ar: "مسحوق البروتين النباتي",
          price: "25",
          sale_price: "22",
          description:
            "Plant-based protein powder made from peas, rice, and hemp, perfect for post-workout shakes and smoothies.",
        },
      ],
      collections: [
        {
          id: "1",
          image: require("./healthyfood/collection1.jpeg"),
          title_en: "Superfoods",
        },
        {
          id: "2",
          image: require("./healthyfood/collection2.jpeg"),
          title_en: "Organic Snacks",
        },
      ],
      background: require("./healthyfood/bg.jpeg"),
      callToAction: "Add to cart",
    },
    {
      type: "dental_instruments",
      slideShow: [
        {
          id: 1,
          image: require("./dental_instruments/slideshow1.jpeg"),
        },
        {
          id: 2,
          image: require("./dental_instruments/slideshow2.jpeg"),
        },
      ],
      products: [
        {
          id: "1",
          image: require("./dental_instruments/instrument1.jpeg"),
          images: [
            {
              id: "1",
              image: require("./dental_instruments/instrument1.jpeg"),
            },
          ],
          title_en: "Dental Mirror",
          title_ar: "مرآة الأسنان",
          price: "20",
          sale_price: "15",
          description:
            "High-quality dental mirror with an ergonomic handle for accurate visual examination of the oral cavity.",
        },
        {
          id: "2",
          image: require("./dental_instruments/instrument2.jpeg"),
          images: [
            {
              id: "1",
              image: require("./dental_instruments/instrument2.jpeg"),
            },
          ],
          title_en: "Dental Probe",
          title_ar: "مسبار الأسنان",
          price: "25",
          sale_price: "20",
          description:
            "Durable stainless steel dental probe for detecting cavities and periodontal pockets.",
        },
        {
          id: "3",
          image: require("./dental_instruments/instrument3.jpeg"),
          images: [
            {
              id: "1",
              image: require("./dental_instruments/instrument3.jpeg"),
            },
          ],
          title_en: "Extraction Forceps",
          title_ar: "ملقط خلع الأسنان",
          price: "100",
          sale_price: "90",
          description:
            "Precision-engineered extraction forceps designed for tooth removal with minimal trauma.",
        },
        {
          id: "4",
          image: require("./dental_instruments/instrument4.jpeg"),
          images: [
            {
              id: "1",
              image: require("./dental_instruments/instrument4.jpeg"),
            },
          ],
          title_en: "Scaler",
          title_ar: "مكشطة الأسنان",
          price: "30",
          sale_price: "25",
          description:
            "A professional-grade dental scaler for removing plaque and tartar buildup effectively.",
        },
      ],
      collections: [
        {
          id: "1",
          image: require("./dental_instruments/collection1.jpeg"),
          title_en: "Examination Instruments",
        },
        {
          id: "2",
          image: require("./dental_instruments/collection2.jpeg"),
          title_en: "Surgical Instruments",
        },
      ],
      background: require("./dental_instruments/bg.jpeg"),
      callToAction: "Add to Cart",
    },
  ],
};
