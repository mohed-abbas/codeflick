// Services data for CodeFlick
import { Service } from '@/lib/types';

export const servicesData: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies and best practices.",
    icon: "🌐",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Friendly",
      "Modern Frameworks"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    pricing: {
      starting: "$2,500",
      type: "project"
    }
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    icon: "📱",
    features: [
      "Cross-Platform",
      "Native Performance",
      "Offline Support",
      "Push Notifications"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    pricing: {
      starting: "$5,000",
      type: "project"
    }
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that prioritize user experience and drive engagement.",
    icon: "🎨",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
    pricing: {
      starting: "$1,500",
      type: "project"
    }
  },
  {
    id: "ecommerce-solutions",
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms that drive sales and provide seamless shopping experiences.",
    icon: "🛒",
    features: [
      "Payment Integration",
      "Inventory Management",
      "Analytics Dashboard",
      "Multi-platform Support"
    ],
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
    pricing: {
      starting: "$3,500",
      type: "project"
    }
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies that boost your online presence and drive growth.",
    icon: "📈",
    features: [
      "SEO Optimization",
      "Social Media Management",
      "Content Marketing",
      "Analytics & Reporting"
    ],
    technologies: ["Google Analytics", "Facebook Ads", "LinkedIn", "HubSpot"],
    pricing: {
      starting: "$800",
      type: "hourly"
    }
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
    icon: "☁️",
    features: [
      "Auto Scaling",
      "High Availability",
      "Security Compliance",
      "Cost Optimization"
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker"],
    pricing: {
      starting: "$150",
      type: "hourly"
    }
  }
];