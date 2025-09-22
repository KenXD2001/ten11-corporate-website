// Icon types for benefits
export type BenefitIcon = "dollar" | "heart" | "award" | "clock" | "utensils" | "trending-up" | "globe" | "bar-chart" | "users" | "graduation-cap" | "briefcase" | "star" | "calendar" | "coffee" | "home" | "user-check" | "event" | "smile";

export interface Job {
  id: number;
  type: string;
  title: string;
  location: string;
  employmentType: string;
  timeType: string;
  seats: number;
  url: string;
  overview: string;
  aboutRole: string;
  responsibilities: string[];
  requirements: {
    education: string[];
    skills: string[];
  };
  benefits: {
    title: string;
    description: string;
    icon: BenefitIcon;
  }[];
}

export const jobsData: Job[] = [
  {
    id: 1,
    type: "Hotel Management",
    title: "Hotel General Manager",
    location: "Mumbai",
    employmentType: "Full-time",
    timeType: "On-site",
    seats: 2,
    url: "/careers/job/1",
    overview: "Lead our flagship hospitality operations and drive excellence in guest experiences while managing a dynamic team in Mumbai's premier location.",
    aboutRole: "As a Hotel General Manager at Ten 11 Hospitality, you will be responsible for overseeing all aspects of our luxury lounge operations. You'll lead a team of dedicated professionals, ensure exceptional guest experiences, and drive business growth while maintaining our high standards of service excellence. This role offers the opportunity to shape the future of hospitality in India's financial capital.",
    responsibilities: [
      "Oversee daily operations of luxury lounge facilities",
      "Lead and mentor a diverse team of hospitality professionals",
      "Develop and implement strategic business plans",
      "Ensure compliance with hospitality standards and regulations",
      "Manage budgets and financial performance",
      "Build and maintain relationships with key stakeholders",
      "Drive guest satisfaction and loyalty programs",
      "Implement innovative service delivery methods",
      "Coordinate with various departments for seamless operations",
      "Monitor market trends and competitive landscape"
    ],
    requirements: {
      education: [
        "Bachelor's degree in Hospitality Management, Business Administration, or related field",
        "Master's degree preferred",
        "Minimum 8-10 years of progressive hospitality management experience",
        "Experience in luxury hospitality or premium service environments"
      ],
      skills: [
        "Strong leadership and team management abilities",
        "Excellent communication and interpersonal skills",
        "Financial acumen and budget management",
        "Problem-solving and decision-making capabilities",
        "Customer service excellence",
        "Strategic thinking and planning",
        "Multilingual abilities preferred",
        "Technology proficiency in hospitality systems"
      ]
    },
    benefits: [
      {
        title: "Competitive Salary",
        description: "Attractive compensation package with performance bonuses",
        icon: "dollar"
      },
      {
        title: "Health Insurance",
        description: "Comprehensive health coverage for you and your family",
        icon: "heart"
      },
      {
        title: "Professional Development",
        description: "Training programs and career advancement opportunities",
        icon: "award"
      },
      {
        title: "Work-Life Balance",
        description: "Flexible scheduling and paid time off",
        icon: "clock"
      }
    ]
  },
  {
    id: 2,
    type: "Food & Beverage",
    title: "F&B Director",
    location: "Chennai",
    employmentType: "Full-time",
    timeType: "On-site",
    seats: 1,
    url: "/careers/job/2",
    overview: "Direct our food and beverage operations, creating exceptional culinary experiences that define luxury hospitality in Chennai.",
    aboutRole: "The F&B Director will be responsible for overseeing all food and beverage operations across our Chennai locations. You'll work closely with our culinary team to develop innovative menus, ensure quality standards, and create memorable dining experiences for our guests. This role requires a passion for culinary excellence and a deep understanding of luxury hospitality.",
    responsibilities: [
      "Develop and implement F&B strategies and policies",
      "Oversee menu planning and development",
      "Manage vendor relationships and procurement",
      "Ensure food safety and quality standards",
      "Train and develop F&B staff",
      "Monitor costs and profitability",
      "Implement sustainability initiatives",
      "Coordinate with kitchen and service teams",
      "Handle guest feedback and complaints",
      "Stay updated with culinary trends"
    ],
    requirements: {
      education: [
        "Bachelor's degree in Culinary Arts, Hospitality Management, or related field",
        "Certification in Food Safety Management",
        "Minimum 6-8 years of F&B management experience",
        "Experience in luxury or fine dining establishments"
      ],
      skills: [
        "Strong culinary knowledge and menu development",
        "Excellent leadership and team management",
        "Financial management and cost control",
        "Vendor negotiation and relationship management",
        "Food safety and hygiene expertise",
        "Customer service excellence",
        "Innovation and creativity in menu design",
        "Multilingual communication skills"
      ]
    },
    benefits: [
      {
        title: "Competitive Package",
        description: "Attractive salary with performance incentives",
        icon: "dollar"
      },
      {
        title: "Culinary Training",
        description: "Access to world-class culinary workshops",
        icon: "utensils"
      },
      {
        title: "Health Benefits",
        description: "Comprehensive medical and dental coverage",
        icon: "heart"
      },
      {
        title: "Growth Opportunities",
        description: "Clear career progression path",
        icon: "trending-up"
      }
    ]
  },
  {
    id: 3,
    type: "Culinary Arts",
    title: "Executive Chef",
    location: "New Delhi",
    employmentType: "Full-time",
    timeType: "On-site",
    seats: 3,
    url: "/careers/job/3",
    overview: "Lead our culinary team in creating innovative, world-class dining experiences that showcase the best of Indian and international cuisine.",
    aboutRole: "As Executive Chef, you will be the culinary visionary for our New Delhi operations. You'll lead a talented team of chefs, develop innovative menus, and ensure that every dish reflects our commitment to excellence. This role offers the opportunity to shape culinary experiences for discerning guests in India's capital city.",
    responsibilities: [
      "Develop and execute innovative menu concepts",
      "Lead and mentor kitchen staff",
      "Ensure consistent food quality and presentation",
      "Manage kitchen operations and workflow",
      "Control food costs and inventory",
      "Maintain food safety and hygiene standards",
      "Collaborate with F&B team on service delivery",
      "Source and evaluate ingredients and suppliers",
      "Train staff on new techniques and recipes",
      "Stay current with culinary trends and techniques"
    ],
    requirements: {
      education: [
        "Culinary degree from recognized institution",
        "Certification in Food Safety and Hygiene",
        "Minimum 7-10 years of culinary experience",
        "Experience in fine dining or luxury establishments"
      ],
      skills: [
        "Exceptional culinary skills and creativity",
        "Strong leadership and team management",
        "Menu development and cost control",
        "Food safety and sanitation expertise",
        "Time management and organization",
        "Communication and training abilities",
        "Knowledge of international cuisines",
        "Passion for culinary innovation"
      ]
    },
    benefits: [
      {
        title: "Competitive Salary",
        description: "Attractive compensation with performance bonuses",
        icon: "dollar"
      },
      {
        title: "Culinary Excellence",
        description: "Access to premium ingredients and equipment",
        icon: "utensils"
      },
      {
        title: "Professional Growth",
        description: "Opportunities for culinary competitions and recognition",
        icon: "award"
      },
      {
        title: "Health Coverage",
        description: "Comprehensive health and wellness benefits",
        icon: "heart"
      }
    ]
  },
  {
    id: 4,
    type: "Housekeeping",
    title: "Housekeeping Manager",
    location: "Mumbai",
    employmentType: "Full-time",
    timeType: "On-site",
    seats: 4,
    url: "/careers/job/4",
    overview: "Ensure pristine cleanliness and comfort standards across our luxury lounge facilities, maintaining the highest levels of guest satisfaction.",
    aboutRole: "The Housekeeping Manager will oversee all housekeeping operations to ensure our facilities maintain the highest standards of cleanliness and comfort. You'll lead a dedicated team, implement efficient cleaning protocols, and ensure that every guest experiences a spotless, welcoming environment.",
    responsibilities: [
      "Develop and implement housekeeping standards and procedures",
      "Manage housekeeping staff and schedules",
      "Ensure compliance with health and safety regulations",
      "Monitor and control housekeeping supplies and inventory",
      "Conduct regular inspections of facilities",
      "Train staff on cleaning techniques and standards",
      "Coordinate with maintenance for facility upkeep",
      "Handle guest requests and complaints",
      "Implement eco-friendly cleaning practices",
      "Maintain housekeeping budgets and costs"
    ],
    requirements: {
      education: [
        "High school diploma required, Bachelor's degree preferred",
        "Certification in Housekeeping Management",
        "Minimum 5-7 years of housekeeping experience",
        "Experience in hospitality or luxury environments"
      ],
      skills: [
        "Strong organizational and time management skills",
        "Excellent attention to detail",
        "Leadership and team management abilities",
        "Knowledge of cleaning products and techniques",
        "Health and safety compliance expertise",
        "Communication and training skills",
        "Problem-solving and decision-making",
        "Budget management and cost control"
      ]
    },
    benefits: [
      {
        title: "Competitive Pay",
        description: "Attractive salary with overtime opportunities",
        icon: "dollar"
      },
      {
        title: "Health Benefits",
        description: "Medical, dental, and vision coverage",
        icon: "heart"
      },
      {
        title: "Training Programs",
        description: "Professional development and certification support",
        icon: "graduation-cap"
      },
      {
        title: "Work Environment",
        description: "Clean, modern facilities with latest equipment",
        icon: "home"
      }
    ]
  },
  {
    id: 5,
    type: "Front Office",
    title: "Front Office Manager",
    location: "Chennai",
    employmentType: "Full-time",
    timeType: "On-site",
    seats: 2,
    url: "/careers/job/5",
    overview: "Lead our front office operations, ensuring exceptional guest service and seamless check-in experiences for all visitors.",
    aboutRole: "As Front Office Manager, you will be the face of our hospitality operations, leading a team dedicated to providing exceptional guest service. You'll oversee all front office activities, ensure smooth operations, and create memorable first impressions for our guests.",
    responsibilities: [
      "Manage front office staff and operations",
      "Ensure exceptional guest service standards",
      "Handle guest check-in and check-out processes",
      "Resolve guest complaints and issues",
      "Train staff on service excellence",
      "Manage reservations and room assignments",
      "Coordinate with other departments",
      "Maintain front office systems and procedures",
      "Handle VIP guest services",
      "Monitor and improve guest satisfaction"
    ],
    requirements: {
      education: [
        "Bachelor's degree in Hospitality Management or related field",
        "Certification in Guest Services preferred",
        "Minimum 4-6 years of front office experience",
        "Experience in luxury hospitality environments"
      ],
      skills: [
        "Excellent communication and interpersonal skills",
        "Strong leadership and team management",
        "Customer service excellence",
        "Problem-solving and conflict resolution",
        "Multilingual abilities preferred",
        "Technology proficiency in hospitality systems",
        "Attention to detail and organization",
        "Stress management and multitasking"
      ]
    },
    benefits: [
      {
        title: "Competitive Salary",
        description: "Attractive compensation with service bonuses",
        icon: "dollar"
      },
      {
        title: "Guest Interaction",
        description: "Opportunity to work with diverse, international guests",
        icon: "user-check"
      },
      {
        title: "Career Growth",
        description: "Clear advancement opportunities in hospitality",
        icon: "trending-up"
      },
      {
        title: "Health Benefits",
        description: "Comprehensive health and wellness coverage",
        icon: "heart"
      }
    ]
  },
  {
    id: 6,
    type: "Event Management",
    title: "Event Coordinator",
    location: "New Delhi",
    employmentType: "Full-time",
    timeType: "On-site",
    seats: 5,
    url: "/careers/job/6",
    overview: "Coordinate and execute memorable events and special occasions, creating unforgettable experiences for our guests and clients.",
    aboutRole: "The Event Coordinator will be responsible for planning, organizing, and executing various events and special occasions at our facilities. You'll work closely with clients, vendors, and internal teams to ensure every event exceeds expectations and creates lasting memories.",
    responsibilities: [
      "Plan and coordinate events from conception to completion",
      "Work with clients to understand event requirements",
      "Coordinate with vendors and suppliers",
      "Manage event timelines and logistics",
      "Oversee event setup and breakdown",
      "Handle event day coordination",
      "Manage event budgets and costs",
      "Ensure compliance with regulations and permits",
      "Build and maintain vendor relationships",
      "Evaluate event success and gather feedback"
    ],
    requirements: {
      education: [
        "Bachelor's degree in Event Management, Hospitality, or related field",
        "Certification in Event Planning preferred",
        "Minimum 3-5 years of event coordination experience",
        "Experience in hospitality or corporate events"
      ],
      skills: [
        "Excellent organizational and project management skills",
        "Strong communication and negotiation abilities",
        "Creative thinking and problem-solving",
        "Attention to detail and time management",
        "Customer service excellence",
        "Vendor management and relationship building",
        "Budget management and cost control",
        "Stress management and multitasking"
      ]
    },
    benefits: [
      {
        title: "Competitive Package",
        description: "Attractive salary with event-based bonuses",
        icon: "dollar"
      },
      {
        title: "Creative Freedom",
        description: "Opportunity to design unique event experiences",
        icon: "event"
      },
      {
        title: "Networking",
        description: "Build relationships with industry professionals",
        icon: "users"
      },
      {
        title: "Health Benefits",
        description: "Comprehensive medical and wellness coverage",
        icon: "heart"
      }
    ]
  },
  {
    id: 7,
    type: "Sales & Marketing",
    title: "Sales Manager - Hospitality",
    location: "Mumbai",
    employmentType: "Full-time",
    timeType: "Hybrid",
    seats: 3,
    url: "/careers/job/7",
    overview: "Drive business growth through strategic sales initiatives, building relationships with corporate clients and expanding our market presence.",
    aboutRole: "The Sales Manager will be responsible for developing and executing sales strategies to drive revenue growth. You'll build relationships with corporate clients, manage key accounts, and identify new business opportunities in the hospitality sector.",
    responsibilities: [
      "Develop and implement sales strategies and plans",
      "Build and maintain relationships with corporate clients",
      "Identify and pursue new business opportunities",
      "Manage key accounts and client relationships",
      "Prepare and present sales proposals",
      "Negotiate contracts and pricing",
      "Meet and exceed sales targets",
      "Collaborate with marketing team on campaigns",
      "Attend industry events and networking functions",
      "Provide regular sales reports and forecasts"
    ],
    requirements: {
      education: [
        "Bachelor's degree in Business, Marketing, or related field",
        "MBA preferred",
        "Minimum 5-7 years of sales experience",
        "Experience in hospitality or B2B sales"
      ],
      skills: [
        "Strong sales and negotiation skills",
        "Excellent communication and presentation abilities",
        "Relationship building and account management",
        "Strategic thinking and planning",
        "Market analysis and research",
        "CRM and sales software proficiency",
        "Results-driven and target-oriented",
        "Networking and business development"
      ]
    },
    benefits: [
      {
        title: "Competitive Commission",
        description: "Base salary plus attractive commission structure",
        icon: "dollar"
      },
      {
        title: "Flexible Work",
        description: "Hybrid work arrangement with remote options",
        icon: "globe"
      },
      {
        title: "Career Growth",
        description: "Clear path to senior sales leadership roles",
        icon: "trending-up"
      },
      {
        title: "Health Benefits",
        description: "Comprehensive health and wellness coverage",
        icon: "heart"
      }
    ]
  },
  {
    id: 8,
    type: "Revenue Management",
    title: "Revenue Analyst",
    location: "Chennai",
    employmentType: "Full-time",
    timeType: "Remote",
    seats: 2,
    url: "/careers/job/8",
    overview: "Analyze market trends and optimize pricing strategies to maximize revenue and profitability across our hospitality operations.",
    aboutRole: "The Revenue Analyst will play a crucial role in optimizing our revenue through data analysis, market research, and strategic pricing. You'll work with various teams to implement revenue management strategies and ensure maximum profitability.",
    responsibilities: [
      "Analyze market trends and competitive pricing",
      "Develop and implement pricing strategies",
      "Monitor revenue performance and KPIs",
      "Create revenue forecasts and reports",
      "Collaborate with sales and marketing teams",
      "Optimize inventory and capacity management",
      "Conduct market research and analysis",
      "Implement revenue management systems",
      "Provide insights for business decisions",
      "Track and report on revenue metrics"
    ],
    requirements: {
      education: [
        "Bachelor's degree in Business, Economics, or related field",
        "Master's degree in Business Analytics preferred",
        "Minimum 3-5 years of revenue management experience",
        "Experience in hospitality or travel industry"
      ],
      skills: [
        "Strong analytical and quantitative skills",
        "Proficiency in Excel and data analysis tools",
        "Knowledge of revenue management principles",
        "Statistical analysis and forecasting",
        "Communication and presentation skills",
        "Problem-solving and critical thinking",
        "Attention to detail and accuracy",
        "Technology proficiency in analytics tools"
      ]
    },
    benefits: [
      {
        title: "Competitive Salary",
        description: "Attractive compensation with performance bonuses",
        icon: "dollar"
      },
      {
        title: "Remote Work",
        description: "Full remote work flexibility",
        icon: "globe"
      },
      {
        title: "Data Analytics",
        description: "Access to advanced analytics tools and training",
        icon: "bar-chart"
      },
      {
        title: "Health Benefits",
        description: "Comprehensive health and wellness coverage",
        icon: "heart"
      }
    ]
  },
  {
    id: 9,
    type: "Guest Services",
    title: "Guest Relations Manager",
    location: "New Delhi",
    employmentType: "Full-time",
    timeType: "On-site",
    seats: 4,
    url: "/careers/job/9",
    overview: "Enhance guest satisfaction and loyalty through exceptional service delivery and personalized guest experiences.",
    aboutRole: "The Guest Relations Manager will be responsible for ensuring exceptional guest experiences and building lasting relationships. You'll lead a team dedicated to providing personalized service and resolving any guest concerns promptly and professionally.",
    responsibilities: [
      "Manage guest relations team and operations",
      "Ensure exceptional guest service standards",
      "Handle guest complaints and feedback",
      "Develop guest loyalty programs",
      "Train staff on service excellence",
      "Monitor guest satisfaction metrics",
      "Coordinate with other departments for guest needs",
      "Manage VIP guest services",
      "Implement service improvement initiatives",
      "Build and maintain guest relationships"
    ],
    requirements: {
      education: [
        "Bachelor's degree in Hospitality Management or related field",
        "Certification in Customer Service preferred",
        "Minimum 4-6 years of guest service experience",
        "Experience in luxury hospitality environments"
      ],
      skills: [
        "Excellent communication and interpersonal skills",
        "Strong leadership and team management",
        "Customer service excellence",
        "Problem-solving and conflict resolution",
        "Multilingual abilities preferred",
        "Attention to detail and organization",
        "Empathy and emotional intelligence",
        "Technology proficiency in guest service systems"
      ]
    },
    benefits: [
      {
        title: "Competitive Package",
        description: "Attractive salary with service excellence bonuses",
        icon: "dollar"
      },
      {
        title: "Guest Interaction",
        description: "Work with diverse, international guests",
        icon: "smile"
      },
      {
        title: "Service Excellence",
        description: "Training in luxury hospitality standards",
        icon: "star"
      },
      {
        title: "Health Benefits",
        description: "Comprehensive health and wellness coverage",
        icon: "heart"
      }
    ]
  },
  {
    id: 10,
    type: "Culinary Arts",
    title: "Sous Chef",
    location: "Mumbai",
    employmentType: "Full-time",
    timeType: "On-site",
    seats: 6,
    url: "/careers/job/10",
    overview: "Support our Executive Chef in creating exceptional culinary experiences, leading kitchen operations and mentoring junior staff.",
    aboutRole: "As Sous Chef, you will be the right hand of our Executive Chef, supporting all culinary operations and ensuring the highest standards of food quality and presentation. You'll lead kitchen staff, maintain operational efficiency, and contribute to menu development.",
    responsibilities: [
      "Assist Executive Chef in kitchen operations",
      "Lead and mentor kitchen staff",
      "Ensure consistent food quality and presentation",
      "Manage kitchen workflow and timing",
      "Control food costs and inventory",
      "Maintain food safety and hygiene standards",
      "Train staff on cooking techniques",
      "Assist in menu development and testing",
      "Coordinate with service staff",
      "Handle kitchen administration and scheduling"
    ],
    requirements: {
      education: [
        "Culinary degree or equivalent experience",
        "Certification in Food Safety and Hygiene",
        "Minimum 4-6 years of culinary experience",
        "Experience in fine dining or luxury establishments"
      ],
      skills: [
        "Strong culinary skills and creativity",
        "Leadership and team management abilities",
        "Time management and organization",
        "Food safety and sanitation expertise",
        "Communication and training skills",
        "Knowledge of various cooking techniques",
        "Ability to work under pressure",
        "Passion for culinary excellence"
      ]
    },
    benefits: [
      {
        title: "Competitive Salary",
        description: "Attractive compensation with performance bonuses",
        icon: "dollar"
      },
      {
        title: "Culinary Growth",
        description: "Learn from experienced Executive Chef",
        icon: "utensils"
      },
      {
        title: "Leadership Role",
        description: "Opportunity to lead and mentor kitchen staff",
        icon: "users"
      },
      {
        title: "Health Benefits",
        description: "Comprehensive health and wellness coverage",
        icon: "heart"
      }
    ]
  }
];
