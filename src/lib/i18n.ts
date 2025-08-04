export type Language = 'en' | 'fr';

export interface Translation {
  // Navigation
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    visaAssistance: string;
    studyAbroad: string;
    flightBooking: string;
    housing: string;
    jobs: string;
    parcelShipping: string;
  };
  
  // Common
  common: {
    learnMore: string;
    getStarted: string;
    contactUs: string;
    readMore: string;
    apply: string;
    search: string;
    submit: string;
    next: string;
    previous: string;
    loading: string;
    success: string;
    error: string;
    required: string;
    optional: string;
    close: string;
    open: string;
    yes: string;
    no: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta1: string;
    cta2: string;
    stats: {
      clients: string;
      countries: string;
      successRate: string;
      experience: string;
    };
  };
  
  // Services
  services: {
    title: string;
    subtitle: string;
    visa: {
      title: string;
      description: string;
    };
    study: {
      title: string;
      description: string;
    };
    flights: {
      title: string;
      description: string;
    };
    housing: {
      title: string;
      description: string;
    };
    jobs: {
      title: string;
      description: string;
    };
    parcel: {
      title: string;
      description: string;
    };
  };
  
  // About
  about: {
    title: string;
    subtitle: string;
    story: {
      title: string;
      content: string[];
    };
    achievements: {
      title: string;
      clients: string;
      countries: string;
      successRate: string;
      experience: string;
    };
    values: {
      title: string;
      excellence: {
        title: string;
        description: string;
      };
      integrity: {
        title: string;
        description: string;
      };
      innovation: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
    };
  };
  
  // Contact
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
    };
  };
  
  // Footer
  footer: {
    description: string;
    services: string;
    quickLinks: string;
    destinations: string;
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      subscribe: string;
    };
    social: string;
    copyright: string;
    madeWith: string;
    privacy: string;
    terms: string;
    cookies: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      visaAssistance: "Visa Assistance",
      studyAbroad: "Study Abroad",
      flightBooking: "Flight Booking",
      housing: "Housing",
      jobs: "Jobs & Internships",
      parcelShipping: "Parcel Shipping"
    },
    common: {
      learnMore: "Learn More",
      getStarted: "Get Started",
      contactUs: "Contact Us",
      readMore: "Read More",
      apply: "Apply",
      search: "Search",
      submit: "Submit",
      next: "Next",
      previous: "Previous",
      loading: "Loading...",
      success: "Success!",
      error: "Error",
      required: "Required",
      optional: "Optional",
      close: "Close",
      open: "Open",
      yes: "Yes",
      no: "No"
    },
    hero: {
      title: "Your Gateway to Global Opportunities",
      subtitle: "Travel • Study • Work • Live",
      description: "From visa assistance to study abroad programs, we make your international dreams a reality with expert guidance and personalized support.",
      cta1: "Explore Services",
      cta2: "Get Consultation",
      stats: {
        clients: "Happy Clients",
        countries: "Countries Served",
        successRate: "Success Rate",
        experience: "Years Experience"
      }
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive solutions for all your travel and education needs",
      visa: {
        title: "Visa Assistance",
        description: "Expert guidance for visa applications to Europe, Canada, USA, and more."
      },
      study: {
        title: "Study Abroad",
        description: "Complete support for international education opportunities worldwide."
      },
      flights: {
        title: "Flight Booking",
        description: "Best deals on international flights with flexible booking options."
      },
      housing: {
        title: "Housing Solutions",
        description: "Find perfect accommodation for students and professionals abroad."
      },
      jobs: {
        title: "Jobs & Internships",
        description: "Connect with global career opportunities and internship programs."
      },
      parcel: {
        title: "Parcel Shipping",
        description: "Reliable international shipping services for documents and packages."
      }
    },
    about: {
      title: "About Patrick Travel",
      subtitle: "Your trusted partner for global opportunities since 2019",
      story: {
        title: "Our Story",
        content: [
          "Founded in Cameroon with a vision to bridge the gap between local talent and global opportunities, Patrick Travel Services has been empowering individuals to achieve their international aspirations for over five years.",
          "What started as a small visa assistance service has grown into a comprehensive travel and education consultancy, serving clients across Africa and beyond. Our deep understanding of both local needs and international requirements sets us apart.",
          "We believe that everyone deserves the chance to pursue their dreams, whether it's studying at a world-class university, building a career abroad, or simply exploring new horizons. That's why we're committed to providing accessible, reliable, and professional services to all our clients."
        ]
      },
      achievements: {
        title: "Our Achievements",
        clients: "Satisfied Clients",
        countries: "Partner Countries",
        successRate: "Success Rate",
        experience: "Years of Excellence"
      },
      values: {
        title: "Our Values",
        excellence: {
          title: "Excellence",
          description: "We strive for the highest standards in everything we do."
        },
        integrity: {
          title: "Integrity",
          description: "Honest, transparent, and ethical in all our dealings."
        },
        innovation: {
          title: "Innovation",
          description: "Constantly improving our services with new solutions."
        },
        support: {
          title: "Support",
          description: "Dedicated assistance throughout your journey."
        }
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with our expert team",
      address: "123 Business District, Douala, Cameroon",
      phone: "+237 123 456 789",
      email: "info@patricktravel.cm",
      hours: "Mon - Fri: 8:00 AM - 6:00 PM",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        send: "Send Message"
      }
    },
    footer: {
      description: "Your trusted partner for global opportunities. We specialize in visa assistance, study abroad programs, and comprehensive travel services across Africa, Europe, Canada, and UAE.",
      services: "Our Services",
      quickLinks: "Quick Links",
      destinations: "Popular Destinations",
      newsletter: {
        title: "Stay Updated",
        description: "Get the latest updates on visa requirements, scholarship opportunities, and travel tips.",
        placeholder: "Enter your email",
        subscribe: "Subscribe"
      },
      social: "Follow Us",
      copyright: "Patrick Travel Services. All rights reserved.",
      madeWith: "Made with love in Cameroon.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À Propos",
      contact: "Contact",
      visaAssistance: "Assistance Visa",
      studyAbroad: "Études à l'Étranger",
      flightBooking: "Réservation de Vols",
      housing: "Logement",
      jobs: "Emplois et Stages",
      parcelShipping: "Envoi de Colis"
    },
    common: {
      learnMore: "En Savoir Plus",
      getStarted: "Commencer",
      contactUs: "Nous Contacter",
      readMore: "Lire Plus",
      apply: "Postuler",
      search: "Rechercher",
      submit: "Soumettre",
      next: "Suivant",
      previous: "Précédent",
      loading: "Chargement...",
      success: "Succès !",
      error: "Erreur",
      required: "Requis",
      optional: "Optionnel",
      close: "Fermer",
      open: "Ouvrir",
      yes: "Oui",
      no: "Non"
    },
    hero: {
      title: "Votre Passerelle vers les Opportunités Mondiales",
      subtitle: "Voyager • Étudier • Travailler • Vivre",
      description: "De l'assistance visa aux programmes d'études à l'étranger, nous concrétisons vos rêves internationaux avec des conseils d'experts et un soutien personnalisé.",
      cta1: "Explorer les Services",
      cta2: "Obtenir une Consultation",
      stats: {
        clients: "Clients Satisfaits",
        countries: "Pays Desservis",
        successRate: "Taux de Réussite",
        experience: "Années d'Expérience"
      }
    },
    services: {
      title: "Nos Services",
      subtitle: "Solutions complètes pour tous vos besoins de voyage et d'éducation",
      visa: {
        title: "Assistance Visa",
        description: "Conseils d'experts pour les demandes de visa vers l'Europe, le Canada, les États-Unis et plus."
      },
      study: {
        title: "Études à l'Étranger",
        description: "Soutien complet pour les opportunités d'éducation internationale dans le monde entier."
      },
      flights: {
        title: "Réservation de Vols",
        description: "Meilleures offres sur les vols internationaux avec options de réservation flexibles."
      },
      housing: {
        title: "Solutions de Logement",
        description: "Trouvez le logement parfait pour étudiants et professionnels à l'étranger."
      },
      jobs: {
        title: "Emplois et Stages",
        description: "Connectez-vous avec des opportunités de carrière mondiales et des programmes de stage."
      },
      parcel: {
        title: "Envoi de Colis",
        description: "Services d'expédition internationale fiables pour documents et colis."
      }
    },
    about: {
      title: "À Propos de Patrick Travel",
      subtitle: "Votre partenaire de confiance pour les opportunités mondiales depuis 2019",
      story: {
        title: "Notre Histoire",
        content: [
          "Fondé au Cameroun avec la vision de combler le fossé entre les talents locaux et les opportunités mondiales, Patrick Travel Services aide les individus à réaliser leurs aspirations internationales depuis plus de cinq ans.",
          "Ce qui a commencé comme un petit service d'assistance visa s'est développé en un cabinet de conseil complet en voyage et éducation, servant des clients à travers l'Afrique et au-delà. Notre compréhension approfondie des besoins locaux et des exigences internationales nous distingue.",
          "Nous croyons que chacun mérite la chance de poursuivre ses rêves, qu'il s'agisse d'étudier dans une université de classe mondiale, de construire une carrière à l'étranger, ou simplement d'explorer de nouveaux horizons. C'est pourquoi nous nous engageons à fournir des services accessibles, fiables et professionnels à tous nos clients."
        ]
      },
      achievements: {
        title: "Nos Réalisations",
        clients: "Clients Satisfaits",
        countries: "Pays Partenaires",
        successRate: "Taux de Réussite",
        experience: "Années d'Excellence"
      },
      values: {
        title: "Nos Valeurs",
        excellence: {
          title: "Excellence",
          description: "Nous visons les plus hauts standards dans tout ce que nous faisons."
        },
        integrity: {
          title: "Intégrité",
          description: "Honnête, transparent et éthique dans toutes nos relations."
        },
        innovation: {
          title: "Innovation",
          description: "Amélioration constante de nos services avec de nouvelles solutions."
        },
        support: {
          title: "Soutien",
          description: "Assistance dédiée tout au long de votre parcours."
        }
      }
    },
    contact: {
      title: "Nous Contacter",
      subtitle: "Entrez en contact avec notre équipe d'experts",
      address: "123 Quartier des Affaires, Douala, Cameroun",
      phone: "+237 123 456 789",
      email: "info@patricktravel.cm",
      hours: "Lun - Ven : 8h00 - 18h00",
      form: {
        name: "Nom Complet",
        email: "Adresse Email",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer le Message"
      }
    },
    footer: {
      description: "Votre partenaire de confiance pour les opportunités mondiales. Nous nous spécialisons dans l'assistance visa, les programmes d'études à l'étranger et les services de voyage complets à travers l'Afrique, l'Europe, le Canada et les Émirats arabes unis.",
      services: "Nos Services",
      quickLinks: "Liens Rapides",
      destinations: "Destinations Populaires",
      newsletter: {
        title: "Restez Informé",
        description: "Recevez les dernières mises à jour sur les exigences de visa, les opportunités de bourses et les conseils de voyage.",
        placeholder: "Entrez votre email",
        subscribe: "S'abonner"
      },
      social: "Suivez-nous",
      copyright: "Patrick Travel Services. Tous droits réservés.",
      madeWith: "Fait avec amour au Cameroun.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions de Service",
      cookies: "Politique des Cookies"
    }
  }
};

export function getTranslation(language: Language): Translation {
  return translations[language];
}
