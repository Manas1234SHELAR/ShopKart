const productDetails = [
  {
    id: 1,
    name: "Samsung Galaxy M14 5G",
    brand: "Samsung",
    category: "Electronics",
    image: "/images/products/Samsung_phone.png",
    rating: 4.4,
    reviews: 1850,
    shortDescription:
      "A powerful 5G smartphone with a large display, long-lasting battery and smooth everyday performance.",
    price: 12499,
    originalPrice: 14999,
    discount: "17%",
    availability: "In Stock",

    description:
      "The Samsung Galaxy M14 5G is designed to deliver a smooth and reliable smartphone experience for everyday users. It combines 5G connectivity with a large immersive display, dependable performance and a long-lasting battery that helps users stay connected throughout the day. Whether you are browsing the internet, watching videos, communicating with friends and family, using social media or completing everyday tasks, the Galaxy M14 5G provides a practical and feature-rich experience. Its stylish design, capable hardware and useful features make it a suitable choice for users looking for a reliable smartphone for everyday use.",

    keyFeatures: [
      "5G Connectivity",
      "Large Immersive Display",
      "Long-lasting 6000 mAh Battery",
      "Powerful Performance",
      "Expandable Storage"
    ],

    specifications: {
      brand: "Samsung",
      model: "Galaxy M14 5G",
      connectivity: "5G",
      battery: "6000 mAh",
      color: "Black",
      warranty: "1 Year"
    },

    customerReviews: [
      {
        name: "Rahul",
        rating: 5,
        comment:
          "Good performance and excellent battery backup for everyday use."
      },
      {
        name: "Sneha",
        rating: 4,
        comment:
          "The phone offers good features and a smooth overall experience."
      }
    ]
  },

  {
    id: 2,
    name: "Puma Running Shoes",
    brand: "Puma",
    category: "Fashion",
    image: "/images/products/puma_shoes.png",
    rating: 3.8,
    reviews: 1320,
    shortDescription:
      "Comfortable and lightweight running shoes designed for daily workouts, walking and active lifestyles.",
    price: 2499,
    originalPrice: 3999,
    discount: "38%",
    availability: "In Stock",

    description:
      "Puma Running Shoes are designed for users who want a comfortable and practical pair of shoes for everyday activities. The lightweight construction helps provide comfortable movement during walking, running and regular workouts. The cushioned design supports the feet during extended use, while the outsole provides grip for everyday surfaces. With a sporty appearance and versatile design, these shoes can be used for fitness sessions, morning walks, casual outings and other active routines. They offer a combination of comfort, flexibility and style for users with an active lifestyle.",

    keyFeatures: [
      "Lightweight Construction",
      "Comfortable Cushioning",
      "Breathable Upper",
      "Flexible Sole",
      "Sporty Everyday Design"
    ],

    specifications: {
      brand: "Puma",
      type: "Running Shoes",
      material: "Synthetic and Mesh",
      sole: "Rubber",
      closure: "Lace-up",
      warranty: "6 Months"
    },

    customerReviews: [
      {
        name: "Amit",
        rating: 5,
        comment:
          "Very comfortable for morning walks and regular workouts."
      },
      {
        name: "Priya",
        rating: 4,
        comment:
          "The shoes look stylish and feel comfortable for daily use."
      }
    ]
  },

  {
    id: 3,
    name: "Amazon Echo Dot",
    brand: "Amazon",
    category: "Electronics",
    image: "/images/products/amazon_echo_dot.png",
    rating: 4.6,
    reviews: 2450,
    shortDescription:
      "A compact smart speaker that provides convenient voice control, music playback and smart-home assistance.",
    price: 3499,
    originalPrice: 4499,
    discount: "22%",
    availability: "In Stock",

    description:
      "Amazon Echo Dot is a compact smart speaker designed to make everyday tasks more convenient through voice interaction. Users can ask questions, play music, set alarms and reminders, check information and control compatible smart devices using voice commands. Its compact size makes it suitable for bedrooms, study areas, living rooms and workspaces without taking up much space. The device can also be used as part of a connected smart-home setup. With its simple design and convenient voice-based controls, the Echo Dot provides an easy way to add smart functionality to everyday routines.",

    keyFeatures: [
      "Voice-controlled Assistant",
      "Compact and Stylish Design",
      "Music and Audio Playback",
      "Smart Home Control",
      "Alarm and Reminder Support"
    ],

    specifications: {
      brand: "Amazon",
      model: "Echo Dot",
      connectivity: "Wi-Fi and Bluetooth",
      speaker: "Built-in Speaker",
      control: "Voice Control",
      warranty: "1 Year"
    },

    customerReviews: [
      {
        name: "Vikas",
        rating: 5,
        comment:
          "Compact speaker with useful voice controls for everyday tasks."
      },
      {
        name: "Neha",
        rating: 4,
        comment:
          "Easy to set up and convenient for playing music and setting reminders."
      }
    ]
  },

  {
    id: 4,
    name: "American Tourister Trolley Bag",
    brand: "American Tourister",
    category: "Fashion",
    image: "/images/products/trolley-bag..png",
    rating: 2.9,
    reviews: 970,
    shortDescription:
      "A durable trolley bag with spacious storage, smooth wheels and a practical design for travel.",
    price: 3299,
    originalPrice: 4999,
    discount: "34%",
    availability: "Out of Stock",

    description:
      "The American Tourister Trolley Bag is designed to make travel more convenient by providing organized storage and easy mobility. Its spacious interior allows users to carry clothing, accessories and other travel essentials while keeping belongings organized. The trolley design and smooth-rolling wheels make it easier to move the bag through airports, railway stations and other travel environments. A sturdy outer construction provides support for regular travel use, while the practical internal layout helps maximize available space. Its clean appearance and functional design make it suitable for short trips, vacations and regular travel requirements.",

    keyFeatures: [
      "Spacious Storage",
      "Smooth Rolling Wheels",
      "Telescopic Handle",
      "Durable Outer Construction",
      "Organized Interior"
    ],

    specifications: {
      brand: "American Tourister",
      type: "Trolley Bag",
      material: "Hard Shell",
      wheelType: "Spinner Wheels",
      closure: "Zip Closure",
      warranty: "3 Years"
    },

    customerReviews: [
      {
        name: "Karan",
        rating: 5,
        comment:
          "The bag has plenty of space and is easy to move while travelling."
      },
      {
        name: "Pooja",
        rating: 4,
        comment:
          "Good design and storage capacity for regular trips."
      }
    ]
  },

  {
    id: 5,
    name: "HP Wireless Keyboard",
    brand: "HP",
    category: "Electronics",
    image: "/images/products/keyboard.png",
    rating: 4.2,
    reviews: 760,
    shortDescription:
      "A comfortable wireless keyboard designed for convenient typing at home, in the office or at a workstation.",
    price: 899,
    originalPrice: 1299,
    discount: "31%",
    availability: "In Stock",

    description:
      "The HP Wireless Keyboard provides a clean and convenient typing experience without the need for a traditional wired connection. Its full-size layout gives users access to commonly used keys and functions, making it suitable for office work, studying, browsing and everyday computer use. The wireless design helps reduce cable clutter around the workspace and provides greater flexibility when positioning the keyboard. Its simple appearance fits well with both home and professional workstations. Designed for practical everyday use, it provides comfortable typing and convenient wireless connectivity for a variety of computing tasks.",

    keyFeatures: [
      "Wireless Connectivity",
      "Full-size Keyboard Layout",
      "Comfortable Key Design",
      "Compact Workspace Setup",
      "Suitable for Everyday Typing"
    ],

    specifications: {
      brand: "HP",
      type: "Wireless Keyboard",
      connectivity: "Wireless",
      layout: "Full-size",
      power: "Battery Powered",
      warranty: "1 Year"
    },

    customerReviews: [
      {
        name: "Rohit",
        rating: 5,
        comment:
          "The keyboard is comfortable for long typing sessions and works well."
      },
      {
        name: "Anjali",
        rating: 4,
        comment:
          "Simple wireless keyboard with a clean design and comfortable keys."
      }
    ]
  },

  {
    id: 6,
    name: "Milton Thermosteel Bottle",
    brand: "Milton",
    category: "Home & Kitchen",
    image: "/images/products/thermos-bottle.png",
    rating: 3.5,
    reviews: 1540,
    shortDescription:
      "A stainless-steel insulated bottle designed to help maintain beverage temperature during travel and everyday use.",
    price: 799,
    originalPrice: 1099,
    discount: "27%",
    availability: "In Stock",

    description:
      "The Milton Thermosteel Bottle is designed for users who want a convenient way to carry beverages throughout the day. Its stainless-steel construction provides a durable solution for regular use, while the insulated design helps maintain the temperature of beverages for longer periods. The bottle is suitable for office use, college, travel, workouts and outdoor activities. Its reusable design also provides a practical alternative to disposable bottles. With a simple and functional appearance, it can easily be carried in a backpack or work bag and used as part of an everyday hydration routine.",

    keyFeatures: [
      "Stainless Steel Construction",
      "Insulated Design",
      "Temperature Retention",
      "Reusable and Durable",
      "Travel-friendly Design"
    ],

    specifications: {
      brand: "Milton",
      type: "Thermosteel Bottle",
      material: "Stainless Steel",
      capacity: "1000 ml",
      insulation: "Double Wall",
      warranty: "1 Year"
    },

    customerReviews: [
      {
        name: "Sahil",
        rating: 5,
        comment:
          "The bottle is sturdy and useful for carrying water throughout the day."
      },
      {
        name: "Meera",
        rating: 4,
        comment:
          "Good quality bottle with a practical design for office and travel."
      }
    ]
  },

  {
    id: 7,
    name: "Maybelline Lipstick Set",
    brand: "Maybelline",
    category: "Beauty",
    image: "/images/products/lipstick-set.png",
    rating: 5,
    reviews: 820,
    shortDescription:
      "A versatile lipstick set featuring multiple shades for everyday looks, occasions and personal styling.",
    price: 399,
    originalPrice: 749,
    discount: "22%",
    availability: "In Stock",

    description:
      "The Maybelline Lipstick Set provides a selection of shades that can be used to create different everyday and occasion-ready looks. The collection is designed for users who enjoy experimenting with different lip colors without purchasing individual shades separately. The smooth application makes it convenient to use as part of a regular makeup routine, while the variety of colors provides flexibility for different outfits and occasions. The set can be useful for everyday styling, parties, events or creating different makeup looks. Its compact packaging also makes it convenient to keep in a makeup bag.",

    keyFeatures: [
      "Multiple Lip Shades",
      "Smooth Application",
      "Easy Everyday Styling",
      "Suitable for Different Occasions",
      "Compact Packaging"
    ],

    specifications: {
      brand: "Maybelline",
      productType: "Lipstick Set",
      finish: "Creamy",
      shades: "Multiple",
      suitableFor: "Everyday and Occasion Use",
      shelfLife: "Refer to Product Packaging"
    },

    customerReviews: [
      {
        name: "Riya",
        rating: 5,
        comment:
          "The set has nice shades and is convenient for creating different looks."
      },
      {
        name: "Ayesha",
        rating: 4,
        comment:
          "Good variety of colors and easy to apply."
      }
    ]
  },

  {
    id: 8,
    name: "Levi's Casual Jeans",
    brand: "Levi's",
    category: "Fashion",
    image: "/images/products/jeans-1.png",
    rating: 4.6,
    reviews: 2100,
    shortDescription:
      "Comfortable casual jeans with a versatile design suitable for everyday outfits and regular wear.",
    price: 1899,
    originalPrice: 2999,
    discount: "37%",
    availability: "In Stock",

    description:
      "Levi's Casual Jeans are designed to provide a versatile clothing option for everyday wear. The denim construction offers a practical balance between comfort and durability, while the classic styling makes the jeans easy to pair with shirts, T-shirts, jackets and casual footwear. They can be worn for college, casual outings, weekend activities or regular everyday use. The simple design allows them to work with a wide range of outfits, making them a useful addition to a casual wardrobe. With their comfortable fit and timeless appearance, these jeans are suitable for users looking for an easy-to-style everyday option.",

    keyFeatures: [
      "Comfortable Denim Fabric",
      "Classic Casual Design",
      "Versatile Styling",
      "Durable Construction",
      "Suitable for Everyday Wear"
    ],

    specifications: {
      brand: "Levi's",
      type: "Casual Jeans",
      material: "Denim",
      fit: "Regular Fit",
      closure: "Button and Zip",
      care: "Machine Wash"
    },

    customerReviews: [
      {
        name: "Arjun",
        rating: 5,
        comment:
          "Comfortable jeans that are easy to pair with different casual outfits."
      },
      {
        name: "Varun",
        rating: 4,
        comment:
          "Good fit and comfortable for regular everyday use."
      }
    ]
  },

  {
    id: 9,
    name: "Bajaj Mixer Grinder",
    brand: "Bajaj",
    category: "Home & Kitchen",
    image: "/images/products/mixer-grinder.png",
    rating: 2.4,
    reviews: 690,
    shortDescription:
      "A practical mixer grinder designed for everyday kitchen tasks such as blending, grinding and food preparation.",
    price: 2799,
    originalPrice: 3499,
    discount: "20%",
    availability: "Out of Stock",

    description:
      "The Bajaj Mixer Grinder is designed to support a variety of everyday kitchen preparation tasks. It can be used for grinding spices, preparing pastes, blending ingredients and handling other common food preparation requirements. The multiple-speed operation allows users to select an appropriate setting depending on the task, while the included jars provide flexibility for different quantities and ingredients. Its compact design makes it suitable for everyday kitchen counters without occupying excessive space. The appliance is intended to make routine food preparation more convenient and efficient for home kitchens.",

    keyFeatures: [
      "Powerful Motor",
      "Multiple Speed Settings",
      "Multiple Grinding Jars",
      "Suitable for Everyday Kitchen Tasks",
      "Compact Countertop Design"
    ],

    specifications: {
      brand: "Bajaj",
      type: "Mixer Grinder",
      motor: "750 W",
      speed: "Multiple Speed Settings",
      jars: "3 Jars",
      warranty: "2 Years"
    },

    customerReviews: [
      {
        name: "Nitin",
        rating: 5,
        comment:
          "Useful mixer grinder for regular kitchen preparation and grinding."
      },
      {
        name: "Kavita",
        rating: 4,
        comment:
          "Good performance and the multiple jars are useful for different tasks."
      }
    ]
  },

  {
    id: 10,
    name: "Canon Inkjet Printer",
    brand: "Canon",
    category: "Electronics",
    image: "/images/products/printer.png",
    rating: 3.2,
    reviews: 540,
    shortDescription:
      "A compact inkjet printer designed for convenient document and color printing at home or in a small office.",
    price: 5499,
    originalPrice: 6499,
    discount: "15%",
    availability: "In Stock",

    description:
      "The Canon Inkjet Printer is designed for users who need a practical printing solution for home, education or small-office requirements. It can be used for everyday documents, assignments, forms and selected color printing tasks. Its compact design helps it fit comfortably into smaller workspaces, making it suitable for study tables, home offices and personal workstations. The printer provides convenient access to printing when physical documents are required and can support a variety of common document-related tasks. Its straightforward design makes it suitable for students, home users and professionals who require an everyday personal printer.",

    keyFeatures: [
      "Inkjet Printing",
      "Document Printing",
      "Color Printing Support",
      "Compact Design",
      "Suitable for Home and Office Use"
    ],

    specifications: {
      brand: "Canon",
      type: "Inkjet Printer",
      printing: "Color and Monochrome",
      connectivity: "USB",
      function: "Print",
      warranty: "1 Year"
    },

    customerReviews: [
      {
        name: "Aditya",
        rating: 5,
        comment:
          "Compact printer that works well for assignments and everyday documents."
      },
      {
        name: "Simran",
        rating: 4,
        comment:
          "Easy to use and suitable for occasional home printing."
      }
    ]
  },

  {
    id: 11,
    name: "Nivea Skincare Combo",
    brand: "Nivea",
    category: "Beauty",
    image: "/images/products/skincare-combo.png",
    rating: 4.5,
    reviews: 1280,
    shortDescription:
      "A convenient skincare combination designed to support a simple and consistent everyday personal-care routine.",
    price: 599,
    originalPrice: 799,
    discount: "25%",
    availability: "In Stock",

    description:
      "The Nivea Skincare Combo brings together everyday personal-care products in one convenient package. It is designed for users who prefer to maintain a simple skincare routine without purchasing individual products separately. The combination can be incorporated into regular morning and evening routines depending on the user's personal preferences and the instructions provided on each product. The compact collection is also convenient for keeping personal-care essentials together at home or while travelling. With its practical combination of skincare products, the set provides an easy way to organize commonly used personal-care items.",

    keyFeatures: [
      "Multiple Skincare Products",
      "Suitable for Everyday Routine",
      "Convenient Combo Packaging",
      "Easy to Carry",
      "Simple Personal-care Solution"
    ],

    specifications: {
      brand: "Nivea",
      productType: "Skincare Combo",
      category: "Personal Care",
      quantity: "Combo Pack",
      usage: "As Directed on Packaging",
      shelfLife: "Refer to Product Packaging"
    },

    customerReviews: [
      {
        name: "Divya",
        rating: 5,
        comment:
          "Convenient combo with useful products for a simple skincare routine."
      },
      {
        name: "Pallavi",
        rating: 4,
        comment:
          "Good value and convenient packaging for everyday personal care."
      }
    ]
  },

  {
    id: 12,
    name: "Cello Non-Stick Pan",
    brand: "Cello",
    category: "Home & Kitchen",
    image: "/images/products/nonstick-pan.png",
    rating: 2.8,
    reviews: 475,
    shortDescription:
      "A practical non-stick pan designed for convenient everyday cooking with easy food release and cleaning.",
    price: 999,
    originalPrice: 1399,
    discount: "29%",
    availability: "In Stock",

    description:
      "The Cello Non-Stick Pan is designed to make everyday cooking more convenient and manageable. Its non-stick cooking surface helps reduce food sticking during preparation and makes the pan easier to clean after use. The practical size makes it suitable for preparing a variety of everyday dishes, including breakfast items, vegetables and quick meals. Its lightweight design allows convenient handling while cooking, and the simple construction makes it suitable for regular home kitchen use. For users looking for an easy-to-maintain cooking pan for everyday meals, this product provides a practical addition to the kitchen.",

    keyFeatures: [
      "Non-stick Cooking Surface",
      "Easy Food Release",
      "Easy to Clean",
      "Lightweight Design",
      "Suitable for Everyday Cooking"
    ],

    specifications: {
      brand: "Cello",
      type: "Non-Stick Pan",
      material: "Aluminium",
      coating: "Non-Stick",
      handle: "Heat-resistant Handle",
      warranty: "1 Year"
    },

    customerReviews: [
      {
        name: "Manoj",
        rating: 4,
        comment:
          "Useful pan for everyday cooking and easy to clean after use."
      },
      {
        name: "Shweta",
        rating: 4,
        comment:
          "Lightweight and convenient for preparing quick meals."
      }
    ]
  }
];

export default productDetails;