import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Find out our missions!": "Find out our missions!",
      "Your Trusted Partner in Digital Innovation.": "Your Trusted Partner in Digital Innovation.",
      "We blend creativity with cutting-edge technology to craft customized solutions that meet the unique needs of modern businesses. Partner with us to bring your vision to life and stay ahead in the digital landscape.": "We blend creativity with cutting-edge technology to craft customized solutions that meet the unique needs of modern businesses. Partner with us to bring your vision to life and stay ahead in the digital landscape.",
      "Get Started": "Get Started",
      "Watch Our Features": "Watch Our Features",
      "Our Story": "Our Story",
      "Let's Talk":"Let's Talk",
      "Hide Story": "Hide Story",
      "Explore more":"Explore more",
      "Read Our Story": "Read Our Story",
      "Innovation and Passion in Product Design": "Innovation and Passion in Product Design",
      "Guiding You Through Our Journey and Creative Evolution": "Guiding You Through Our Journey and Creative Evolution",
      "Hear! What Our Customers Have to Say": "Hear! What Our Customers Have to Say",
      "See More Reviews": "See More Reviews",
      "Our Work Experience":"Our Work Experience",
      "Journey Through Development : Unveiling Our Work Experience. A Comprehensive Exploration of our dev Journey and Professional Evolution.":"Journey Through Development : Unveiling Our Work Experience. A Comprehensive Exploration of our dev Journey and Professional Evolution.",
      "Frequently Asked Questions": "Frequently Asked Questions",
      "Navigating Common Queries to Ensure a Seamless Experience with Sirius": "Navigating Common Queries to Ensure a Seamless Experience with Sirius",
      "Let's Stay connected": "Let's Stay connected",
      "Get in Touch": "Get in Touch",
      "View Work": "View Work",
      "Join Our Sirius Community and Unlock Your Brand's Potential": "Join Our Sirius Community and Unlock Your Brand's Potential",
      "Solutions": "Solutions",
      "Resources": "Resources",
      "About": "About",
      "About Us":"About Us",
      "Features":"Features",
      "Welcome to Sirius, where innovation meets usability. We specialize in crafting cutting-edge software solutions, developing dynamic web and mobile applications, and designing intuitive user interfaces. Our mission is to transform ideas into impactful digital experiences that resonate with users worldwide. With a passion for technology and a commitment to excellence, we are your trusted partner in navigating the digital landscape.Let's build the future together.":"Welcome to Sirius, where innovation meets usability. We specialize in crafting cutting-edge software solutions, developing dynamic web and mobile applications, and designing intuitive user interfaces. Our mission is to transform ideas into impactful digital experiences that resonate with users worldwide. With a passion for technology and a commitment to excellence, we are your trusted partner in navigating the digital landscape.Let's build the future together.",
      "Privacy Policy": "Privacy Policy",
      "Cookies": "Cookies",
      "Security": "Security",
      "Legal Document": "Legal Document",
      "Company": "Company",
      "Careers": "Careers",
      "FAQ": "FAQ",
      "Contact Us": "Contact Us",
      "UI/UX Service": "UI/UX Service",
      "Creating user-friendly interfaces and experiences.": "Creating user-friendly interfaces and experiences.",
      "Software Dev": "Software Dev",
      "Developing robust software solutions.": "Developing robust software solutions.",
      "AI Based Solutions": "AI Based Solutions",
      "Leveraging AI for innovative solutions.": "Leveraging AI for innovative solutions.",
      "Social Media Ads": "Social Media Ads",
      "Managing and optimizing social media campaigns.": "Managing and optimizing social media campaigns.",
      "What's Sirius?": "What's Sirius?",
      "Sirius is a dynamic team of software developers based in Mostaganem. We specialize in creating innovative mobile and web applications, as well as software solutions using a variety of technologies. We also design intuitive UI/UX interfaces and develop AI-based applications.": "Sirius is a dynamic team of software developers based in Mostaganem. We specialize in creating innovative mobile and web applications, as well as software solutions using a variety of technologies. We also design intuitive UI/UX interfaces and develop AI-based applications.",
      "Why should I work with Sirius?": "Why should I work with Sirius?",
      "Working with Sirius means partnering with a team dedicated to transforming your ideas into impactful digital experiences. Our commitment to excellence, innovative approach, and expertise in multiple technologies ensure that we deliver top-notch solutions tailored to your needs.": "Working with Sirius means partnering with a team dedicated to transforming your ideas into impactful digital experiences. Our commitment to excellence, innovative approach, and expertise in multiple technologies ensure that we deliver top-notch solutions tailored to your needs.",
      "What services does Sirius provide?": "What services does Sirius provide?",
      "Sirius provides a wide range of services, including software development, mobile and web application development, UI/UX design, and AI-based solutions. We are equipped to handle projects of varying complexities and deliver solutions that meet your business requirements.": "Sirius provides a wide range of services, including software development, mobile and web application development, UI/UX design, and AI-based solutions. We are equipped to handle projects of varying complexities and deliver solutions that meet your business requirements.",
      "How can I contact customer support?": "How can I contact customer support?",
      "You can contact our customer support by visiting the Contact Us page on our website or by emailing us at support@sirius.com. We are here to assist you with any queries or support you may need.": "You can contact our customer support by visiting the Contact Us page on our website or by emailing us at support@sirius.com. We are here to assist you with any queries or support you may need.",
      "View Project":"View Project",
      "Crafting intuitive and engaging user experiences for digital products":"Crafting intuitive and engaging user experiences for digital products",
      "UI/UX Design Services":"UI/UX Design Services",
      "AI-Based Applications":"AI-Based Applications",
      "Innovative AI solutions to transform your business processes":"Innovative AI solutions to transform your business processes",
      "Software Development":"Software Development",
      "Building robust software solutions tailored to your business needs":"Building robust software solutions tailored to your business needs",
      "Coming Soon !":"Coming Soon !"
    }
  },
  fr: {
    translation: {
      "Find out our missions!": "Découvrez nos missions!",
      "Your Trusted Partner in Digital Innovation.": "Votre partenaire de confiance en innovation numérique.",
      "We blend creativity with cutting-edge technology to craft customized solutions that meet the unique needs of modern businesses. Partner with us to bring your vision to life and stay ahead in the digital landscape.": "Nous allions créativité et technologie de pointe pour concevoir des solutions personnalisées répondant aux besoins uniques des entreprises modernes. Partenaires avec nous pour concrétiser votre vision et rester en tête dans le paysage numérique.",
      "Get Started": "Commencer",
      "Watch Our Features": "Découvrez Nos Fonctionnalités",
      "Our Story": "Notre Histoire",
      "Hide Story": "Cacher",
      "Let's Talk":"Entrer en contact",
      "Explore more":"Explore plus",
      "Read Our Story": "Lire Notre Histoire",
      "Innovation and Passion in Product Design": "Innovation et Passion dans la Conception de Produits",
      "Guiding You Through Our Journey and Creative Evolution": "Vous guider tout au long de notre parcours et de notre évolution créative",
      "Hear! What Our Customers Have to Say": "Écoutez! Ce Que Nos Clients Ont à Dire",
      "See More Reviews": "Voir Plus d'Avis",
      "Our Work Experience":"Notre expérience de travail",
      "Journey Through Development : Unveiling Our Work Experience. A Comprehensive Exploration of our dev Journey and Professional Evolution.":"Parcours de développement : dévoiler notre expérience de travail. Une exploration complète de notre parcours de développement et de notre évolution professionnelle.",
      "Frequently Asked Questions": "Questions Fréquemment Posées",
      "Navigating Common Queries to Ensure a Seamless Experience with Sirius": "Naviguer à Travers les Questions Courantes pour Assurer une Expérience Fluide avec Sirius",
      "Let's Stay connected": "Restons Connectés",
      "Get in Touch": "Entrer en Contact",
      "View Work": "Voir Travaux",
      "Join Our Sirius Community and Unlock Your Brand's Potential": "Rejoignez Notre Communauté Sirius et Libérez le Potentiel de Votre Marque",
      "Solutions": "Solutions",
      "Resources": "Ressources",
      "About": "À Propos",
      "About Us":"À Propos de nous",
      "Features":"Fonctionnalités",
      "Welcome to Sirius, where innovation meets usability. We specialize in crafting cutting-edge software solutions, developing dynamic web and mobile applications, and designing intuitive user interfaces. Our mission is to transform ideas into impactful digital experiences that resonate with users worldwide. With a passion for technology and a commitment to excellence, we are your trusted partner in navigating the digital landscape.Let's build the future together.":"Bienvenue chez Sirius, où l'innovation rencontre la convivialité. Nous sommes spécialisés dans la création de solutions logicielles de pointe, le développement d'applications Web et mobiles dynamiques et la conception d'interfaces utilisateur intuitives. Notre mission est de transformer les idées en expériences numériques percutantes qui trouvent un écho auprès des utilisateurs du monde entier. Passionnés de technologie et engagés envers l'excellence, nous sommes votre partenaire de confiance pour naviguer dans le paysage numérique.Construisons l'avenir ensemble.",
      "Privacy Policy": "Politique de Confidentialité",
      "Cookies": "Cookies",
      "Security": "Sécurité",
      "Legal Document": "Document Légal",
      "Company": "Entreprise",
      "Careers": "Carrières",
      "FAQ": "FAQ",
      "Contact Us": "Contactez-nous",
      "UI/UX Service": "Service UI/UX",
      "Creating user-friendly interfaces and experiences.": "Créer des interfaces et expériences conviviales.",
      "Software Dev": "Développement Logiciel",
      "Developing robust software solutions.": "Développer des solutions logicielles robustes.",
      "AI Based Solutions": "Solutions Basées sur l'IA",
      "Leveraging AI for innovative solutions.": "Exploiter l'IA pour des solutions innovantes.",
      "Social Media Ads": "Publicités sur les Réseaux Sociaux",
      "Managing and optimizing social media campaigns.": "Gérer et optimiser les campagnes sur les réseaux sociaux.",
      "What's Sirius?": "Qu'est-ce que Sirius?",
      "Sirius is a dynamic team of software developers based in Mostaganem. We specialize in creating innovative mobile and web applications, as well as software solutions using a variety of technologies. We also design intuitive UI/UX interfaces and develop AI-based applications.": "Sirius est une équipe dynamique de développeurs de logiciels basée à Mostaganem. Nous nous spécialisons dans la création d'applications mobiles et web innovantes, ainsi que de solutions logicielles utilisant diverses technologies. Nous concevons également des interfaces UI/UX intuitives et développons des applications basées sur l'IA.",
      "Why should I work with Sirius?": "Pourquoi devrais-je travailler avec Sirius?",
      "Working with Sirius means partnering with a team dedicated to transforming your ideas into impactful digital experiences. Our commitment to excellence, innovative approach, and expertise in multiple technologies ensure that we deliver top-notch solutions tailored to your needs.": "Travailler avec Sirius signifie collaborer avec une équipe dédiée à transformer vos idées en expériences numériques percutantes. Notre engagement envers l'excellence, notre approche innovante et notre expertise dans de multiples technologies garantissent que nous livrons des solutions de premier ordre adaptées à vos besoins.",
      "What services does Sirius provide?": "Quels services Sirius fournit-il?",
      "Sirius provides a wide range of services, including software development, mobile and web application development, UI/UX design, and AI-based solutions. We are equipped to handle projects of varying complexities and deliver solutions that meet your business requirements.": "Sirius fournit une large gamme de services, y compris le développement de logiciels, le développement d'applications mobiles et web, la conception UI/UX et les solutions basées sur l'IA. Nous sommes équipés pour gérer des projets de complexité variable et fournir des solutions répondant aux exigences de votre entreprise.",
      "How can I contact customer support?": "Comment puis-je contacter le support client?",
      "You can contact our customer support by visiting the Contact Us page on our website or by emailing us at support@sirius.com. We are here to assist you with any queries or support you may need.": "Vous pouvez contacter notre support client en visitant la page Contactez-nous sur notre site Web ou en nous envoyant un courriel à support@sirius.com. Nous sommes là pour vous aider avec toutes les questions ou le soutien dont vous pourriez avoir besoin.",
      "View Project":"Voir Projet",
      "Crafting intuitive and engaging user experiences for digital products":"Créer des expériences utilisateur intuitives et engageantes pour les produits numériques",
      "UI/UX Design Services":"Services de conception UI/UX",
      "AI-Based Applications":"Applications basées sur l'IA",
      "Innovative AI solutions to transform your business processes":"Des solutions d'IA innovantes pour transformer vos processus métiers",
      "Software Development":"Développement de logiciels",
      "Building robust software solutions tailored to your business needs":"Créer des solutions logicielles robustes adaptées aux besoins de votre entreprise",
      "Coming Soon !":"À venir !"
    }
  }
};

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
