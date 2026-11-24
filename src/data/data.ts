export type IconName =
  | "sparkles" | "shield" | "scan" | "smile" | "align" | "heart"
  | "baby" | "brush";

export interface NavItem { label: string; href: string }
export interface Stat { value: string; label: string }
export interface Service { name: string; description: string; icon: IconName }
export interface Doctor { name: string; title: string; specialization: string; bio: string; image: string }
export interface Testimonial { name: string; treatment: string; quote: string; rating: number; image: string }
export interface GalleryItem { image: string; alt: string; span?: "wide" | "tall" | "normal" }
export interface FAQ { question: string; answer: string }

export const clinicData = {
  brand: { name: "Luméra", dentalName: "Dental Studio", tagline: "Thoughtful care. Remarkable smiles.", shortName: "Luméra", initials: "L" },
  contact: {
    phone: "(555) 014-8820",
    phoneHref: "tel:+15550148820",
    email: "hello@lumeradental.example",
    address: "184 Willow Avenue, Suite 200",
    city: "Brookfield, NY 11201",
    hours: ["Mon–Thu: 8:00 am – 6:00 pm", "Friday: 8:00 am – 3:00 pm", "Saturday: By appointment"],
  },
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Private dental care",
    headline: "Dentistry designed around your smile.",
    accent: "Designed around",
    description: "Comfortable, considered dental care for every stage of life—delivered with clinical precision and a genuinely personal touch.",
    primaryCta: "Book an appointment",
    secondaryCta: "Explore our services",
    image: "/images/hero.jpg",
    imageAlt: "Dentist welcoming a patient in a bright modern clinic",
    trustLine: "Trusted by 4,800+ smiles",
  },
  stats: [
    { value: "4,800+", label: "Happy patients" },
    { value: "18", label: "Years of care" },
    { value: "12", label: "Dental specialists" },
    { value: "98%", label: "Patient satisfaction" },
  ] satisfies Stat[],
  about: {
    eyebrow: "About Luméra",
    heading: "Modern dentistry with a human heart.",
    description: "We believe exceptional dentistry begins with listening. Our Brookfield team pairs advanced technology with unhurried appointments, so every visit feels clear, comfortable, and completely tailored to you.",
    image: "/images/about.jpg",
    imageAlt: "Bright and welcoming Luméra dental treatment suite",
    philosophyTitle: "Care that feels different",
    philosophy: "From your first conversation to every follow-up, we focus on clear guidance, gentle techniques, and lasting oral health.",
    reasons: ["Calm, judgment-free experience", "Technology-led, minimally invasive care", "Transparent plans with no surprises"],
  },
  services: [
    { name: "General Dentistry", description: "Preventive exams, fillings, and everyday care for a healthy smile.", icon: "shield" },
    { name: "Cosmetic Dentistry", description: "Thoughtfully planned enhancements that still look naturally yours.", icon: "sparkles" },
    { name: "Teeth Whitening", description: "Safe, effective professional whitening with beautifully even results.", icon: "smile" },
    { name: "Dental Implants", description: "Precise, lasting tooth replacement planned around your comfort.", icon: "scan" },
    { name: "Orthodontics", description: "Clear aligners and modern braces for confident, healthy alignment.", icon: "align" },
    { name: "Root Canal Treatment", description: "Comfort-focused treatment that preserves your natural tooth.", icon: "heart" },
    { name: "Pediatric Dentistry", description: "Friendly, positive visits that help young smiles thrive.", icon: "baby" },
    { name: "Dental Cleaning", description: "Meticulous hygiene care and practical advice for long-term wellness.", icon: "brush" },
  ] satisfies Service[],
  whyUs: {
    eyebrow: "Why choose us",
    heading: "Everything your smile deserves.",
    description: "A more considered kind of dental care.",
    benefits: [
      { title: "Experienced specialists", text: "A collaborative team with decades of combined experience." },
      { title: "Advanced technology", text: "Digital scans and precision imaging for better outcomes." },
      { title: "Comfort comes first", text: "Calm appointments, gentle techniques, and clear explanations." },
      { title: "Transparent planning", text: "Personalized options and costs, explained before treatment." },
    ],
  },
  doctors: [
    { name: "Dr. Elena Marlow", title: "Lead Dentist", specialization: "Cosmetic & Restorative Dentistry", bio: "Elena combines an artistic eye with a gentle approach, creating natural-looking smiles that feel like you.", image: "/images/doctor-1.jpg" },
    { name: "Dr. Marcus Chen", title: "Dental Surgeon", specialization: "Implants & Oral Surgery", bio: "Marcus is known for precise planning and for making complex treatment feel reassuring and straightforward.", image: "/images/doctor-2.jpg" },
    { name: "Dr. Sofia Patel", title: "Orthodontist", specialization: "Invisalign & Smile Alignment", bio: "Sofia helps patients of all ages achieve confident alignment through clear, individualized plans.", image: "/images/doctor-3.jpg" },
  ] satisfies Doctor[],
  booking: {
    eyebrow: "Appointments",
    heading: "Let’s plan your visit.",
    description: "Tell us a little about what you need. This is a demo request and will not create or confirm a real appointment.",
    successTitle: "Thank you, your request is ready.",
    successText: "In a live booking system, our care coordinator would contact you shortly to confirm a suitable time.",
  },
  testimonials: [
    { name: "Amelia R.", treatment: "Cosmetic dentistry", quote: "The entire experience felt calm and thoughtful. They listened, explained every option, and gave me a smile that looks completely natural.", rating: 5, image: "/images/patient-1.jpg" },
    { name: "Daniel K.", treatment: "Dental implants", quote: "I was nervous about the process, but every step was clear. The team was kind, professional, and the result has changed how I smile.", rating: 5, image: "/images/patient-2.jpg" },
    { name: "Priya S.", treatment: "General dentistry", quote: "This is the first dental practice where I feel truly relaxed. They are thorough without rushing and always explain what matters.", rating: 5, image: "/images/patient-3.jpg" },
  ] satisfies Testimonial[],
  gallery: [
    { image: "/images/gallery-1.jpg", alt: "Modern Luméra reception area", span: "wide" },
    { image: "/images/gallery-2.jpg", alt: "Advanced dental equipment", span: "tall" },
    { image: "/images/gallery-3.jpg", alt: "Comfortable treatment room", span: "normal" },
  ] satisfies GalleryItem[],
  faq: [
    { question: "Do you accept new patients?", answer: "Yes. We welcome new patients and can arrange a first visit for an examination, conversation, and personalized recommendations." },
    { question: "What should I bring to my first appointment?", answer: "Please bring a photo ID, insurance details if applicable, a list of medications, and any recent dental records or x-rays you may have." },
    { question: "Do you offer payment plans?", answer: "We offer several flexible payment options and will explain all fees and available plans before treatment begins." },
    { question: "I feel anxious about dental visits. Can you help?", answer: "Absolutely. Our team uses a calm, step-by-step approach and offers options to make longer or more complex appointments more comfortable." },
  ] satisfies FAQ[],
  footer: {
    description: "Considered dentistry for healthy, confident smiles.",
    copyright: "Luméra Dental Studio. All rights reserved.",
  },
  seo: {
    title: "Luméra Dental Studio | Modern Dental Care",
    description: "Premium, patient-focused dental care in Brookfield, from preventive visits and cosmetic dentistry to implants and orthodontics.",
  },
};
