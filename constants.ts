import { Config } from './types';

export const CONFIG: Config = {
  brand: {
    name: "VisibilityBoost",
    tagline: "Rendez votre business visible",
    legalName: "VisibilityBoost",
    headquartersCity: "Tunis",
    country: "Tunisie"
  },
  trustFace: {
    id: 3,
    name: "Farouk Daboussi",
    role: "Chef d'Équipe & Fondateur",
    title: "Ingénieur IA & Croissance",
    photo: "https://media.licdn.com/dms/image/v2/D4E03AQHQYIkBf__zDg/profile-displayphoto-crop_800_800/B4EZgaEavxHgAI-/0/1752784023127?e=1769644800&v=beta&t=ZfyuTSEI4S7ot3-ppzyLawRodvx9TiR6dit_hmAgpJQ",
    education: {
      degree: "Ingénieur Datascience & IA",
      university: "TEKUP University",
      graduationYear: "2025",
      specialization: "IA"
    },
    experience: {
      yearsTotal: "3 ans",
      projectsLed: "50+ projets",
      specialtyFocus: "Résultats Garantis"
    },
    expertise: [
      "IA",
      "Analyse de Marché",
      "Visibilité",
      "Direction Technique"
    ],
    personalAchievements: [
      "A aidé 50+ PME à croître",
      "Expert Google",
      "Créateur de solutions IA"
    ],
    bio: "J'assure que votre téléphone n'arrête pas de sonner.",
    linkedin: "https://www.linkedin.com/in/farouk-daboussi-12131b220/",
    contactDirect: {
      phone: "+216 47 001 034",
      email: "faroukdaboussi@VisibilityBoost.tn",
      whatsapp: "21647001034"
    }
  },
  team: [
    {
      id: 1,
      name: "Hamza Daboussi",
      role: "Expert Web & Google",
      title: "Design & Vitesse",
      photo: "https://media.licdn.com/dms/image/v2/D4E03AQFBcsWQxfd_kg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718210682696?e=1769644800&v=beta&t=nBf2Rc3W1ajke0_AndVhI4VYNOUrN_aXRv67YqxvTgA",
      education: { degree: "Ingénieur Info", university: "ISSATso", graduationYear: "2019", specialization: "Web" },
      experience: { years: "5 ans", projectsCompleted: "60+ sites" },
      expertise: ["Sites rapides", "Design efficace", "SEO Google", "UX"],
      personalAchievements: ["12 entreprises page 1 Google"],
      bio: "Je crée des sites qui plaisent à vos clients et Google.",
      linkedin: "https://www.linkedin.com/in/hamza-daboussi-73a322216/"
    },
    {
      id: 2,
      name: "Sonia Ben Ali",
      role: "Sécurité & Technique",
      title: "Gardienne des données",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      education: { degree: "Ingénieur Sécurité", university: "Sup'Com", graduationYear: "2019", specialization: "Cybersécurité" },
      experience: { years: "5 ans", projectsCompleted: "50+ infras" },
      expertise: ["Protection", "Bases de données", "Systèmes robustes"],
      personalAchievements: ["0 site piraté en 5 ans"],
      bio: "Votre site fonctionne 24/24 en sécurité.",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Yassine Ferchichi",
      role: "Créateur Contenu",
      title: "Vidéo & Réseaux",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      education: { degree: "Master Design", university: "ISAM", graduationYear: "2020", specialization: "Branding" },
      experience: { years: "4 ans", projectsCompleted: "100+ créations" },
      expertise: ["Vidéo Pro", "Identité Visuelle", "Pub réseaux", "Community"],
      personalAchievements: ["Millions de vues générées"],
      bio: "Je rends votre marque irrésistible.",
      linkedin: "#"
    }
  ],
  problemsSolutions: {
    headline: "Votre entreprise mérite d'être vue",
    subheadline: "3 problèmes empêchent vos clients de vous trouver",
    problems: [
        {
        id: 1,
        painPoint: "Peu de clients malgré Google Maps et réseaux",
        emotion: "😤 Fatigué ?",
        realCase: { before: "Peu d'appels malgré visibilité.", after: "Clients trouvent tout en 1 clic.", metric: "x3 appels" },
        symptoms: ["Peu d’appels", "Infos dispersées", "Clients perdus"],
        solution: { what: "Site officiel centralisé", how: ["Relier Google Maps", "Infos claires", "Boutons Appel/WhatsApp"], guarantee: "Facile à contacter", price: "Inclus" },
        cta: "Je veux être trouvé"
        },
        {
        id: 2,
        painPoint: "Pas de site officiel, paraît moins sérieux",
        emotion: "😟 Inquiet ?",
        realCase: { before: "Patients hésitent", after: "Réservation facile", metric: "+95 RDV" },
        symptoms: ["Demande infos", "Page visitée puis perdue", "Image non pro"],
        solution: { what: "Site pro", how: ["Services clairs", "Photos & avis", "Formulaire/WhatsApp"], guarantee: "Gagne confiance", price: "1,200 TND" },
        cta: "Image professionnelle"
        },
        {
        id: 3,
        painPoint: "Pubs ne ramènent presque aucun client",
        emotion: "😩 Déçu ?",
        realCase: { before: "Beaucoup de vues, zéro RDV", after: "Clics convertis en clients", metric: "+40% messages" },
        symptoms: ["Vues sans clients", "Pas de lien clair", "Pubs inefficaces"],
        solution: { what: "Page simple pour pubs", how: ["Offres expliquées", "Boutons visibles", "Parcours clair"], guarantee: "Pubs efficaces", price: "Inclus" },
        cta: "Mes pubs rapportent"
        }
    ]
  },
  teamAchievements: {
    headline: "Nos clients ont réussi",
    subheadline: "Chiffres réels",
    successStories: [
      { id: 1, businessType: "Garage", location: "Ariana", challenge: "Invisible", before: { visits: "0", status: "Invisible" }, after: { visits: "600/mois", status: "Complet" }, timeframe: "2 mois", keyActions: ["Google Maps", "SiteWeb", "SEO"], clientQuote: "Garage plein.", impactHighlight: "#1 local" }
    ],
    overallStats: { totalClients: "50+", avgVisIncrease: "600%", revenueGrowth: "+78%", roiMoyen: "450%" }
  },
  portfolio: [
    { id: 1, name: "Le Jasmin", category: "Resto", screenshot: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", results: { rank: "#1", calls: "+40%" }, tags: ["Google Maps", "Site Pro"] },
    { id: 2, name: "Clinique Sourire", category: "Santé", screenshot: "https://images.unsplash.com/photo-1629909608135-ca29ed974bb9?auto=format&fit=crop&q=80&w=800", results: { RDV: "95/mois", speed: "Rapide" }, tags: ["Booking", "Médical"] },
    { id: 3, name: "Boutique Zahra", category: "Mode", screenshot: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", results: { Ventes: "+60%", social: "Actif" }, tags: ["E-commerce", "Vidéo"] },
    { id: 4, name: "Garage Auto Pro", category: "Service", screenshot: "https://images.unsplash.com/photo-1486006396113-ad7301fd3c3b?auto=format&fit=crop&q=80&w=800", results: { Maps: "#1", Devis: "78/m" }, tags: ["SEO", "Simple"] }
  ],
  services: {
    headline: "Nos Offres Claires",
    subheadline: "Choisissez le pack adapté",
    packages: [
        { id: "starter", name: "Lancement", tagline: "Présence sur Internet", price: "600 TND", originalPrice: "1000 TND", popular: false, bestFor: ["Artisans", "Nouveaux commerces"], deliveryTime: "2 sem.", paymentOptions: ["2 fois"], included: [{ category: "Site", items: ["Site vitrine simple", "Texte optimisé", "Galerie photo", "Boutons Appel/WhatsApp"] }, { category: "Google", items: ["Audit Google Maps", "Description fiche", "Publication photos et avis"] }], notIncluded: ["E-commerce", "Vidéos longues"], cta: "Démarrer", ctaLink: "#contact" },
        { id: "business", name: "Croissance", tagline: "Dépasser concurrents", price: "1,600 TND", originalPrice: "2,500 TND", popular: true, bestFor: ["PME", "Restos"], deliveryTime: "4 sem.", paymentOptions: ["3 fois"], included: [{ category: "Site Pro", items: ["Contenu détaillé", "Témoignages", "Formulaire/WhatsApp", "Tracking simple"] }, { category: "Marketing", items: ["SEO local", "Audit réseaux", "Mini-formation"] }], notIncluded: ["E-commerce complet"], cta: "Choisir Croissance", ctaLink: "#contact" },
        { id: "premium", name: "Domination", tagline: "Leader marché", price: "3,000 TND", originalPrice: "5,200 TND", popular: false, featured: true, bestFor: ["Boutiques", "Grandes marques"], deliveryTime: "6 sem.", paymentOptions: ["4 fois"], included: [{ category: "Ultra Tech", items: ["E-commerce complet", "Paiements sécurisés", "Chatbot IA"] }, { category: "Visibilité", items: ["SEO 6 mois", "Vidéo promo", "Support 6 mois"] }], notIncluded: ["Budget pub"], cta: "Dominer", ctaLink: "#contact" }
    ],
    extensions: {
        items: [
            { id: "chatbot", name: "Assistant IA", description: "Réponse 24/24", price: "400 TND", included: ["Script 20 questions", "Intégration WhatsApp"], compatibleWith: ["Business", "Premium"] },
            { id: "seo-intensive", name: "Boost Google", description: "Monter sur Google", price: "2,500 TND", included: ["4 articles/mois", "5 liens locaux"], compatibleWith: ["Starter", "Business"] },
            { id: "security", name: "Bouclier Sécurité", description: "Protégez vos données", price: "1,200 TND", included: ["Sauvegarde journalière", "Pare-feu & alertes"], compatibleWith: ["Tous packs"] },
            { id: "video", name: "Vidéo Promo", description: "Montrez votre savoir-faire", price: "400 TND", included: ["Tournage 1/2 journée", "Montage pro 60s"], compatibleWith: ["Tous packs"] },
            { id: "social", name: "Pack Réseaux", description: "Images et posts", price: "300 TND/mois", included: ["8 visuels & textes/mois", "Modération 5j/7"], compatibleWith: ["Tous packs"] }
        ]
    }
  },
  faq: [
    { question: "Temps pour avoir des clients ?", answer: "Site prêt 2-4 sem., Google top 3-6 mois." },
    { question: "Paiement en plusieurs fois ?", answer: "Oui, 2, 3 ou 4 fois sans frais." }
  ],
  articles: [],
  ctas: {
    whatsappFloat: { message: "Bonjour VisibilityBoost, je veux être visible !", buttonText: "Besoin d'aide ?" }
  }
};
