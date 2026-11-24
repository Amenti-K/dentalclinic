export type IconName =
  | "sparkles" | "shield" | "scan" | "smile" | "align" | "heart"
  | "baby" | "brush";

export interface NavItem { label: string; href: string }
export interface Stat { value: string; label: string }
export interface Service { name: string; description: string; icon: IconName }
export interface CareStep { title: string; text: string }
export interface GalleryItem { image: string; alt: string; span?: "wide" | "tall" | "normal" }
export interface FAQ { question: string; answer: string }

export const clinicData = {
  brand: {
    name: "Shine",
    dentalName: "Speciality Dental Clinic",
    tagline: "Speciality dental care in Addis Ababa.",
    shortName: "Shine Speciality Dental Clinic",
    initials: "S",
  },
  contact: {
    phone: "+251 91 187 2865",
    phoneHref: "tel:+251911872865",
    address: "Addis Ababa",
    city: "Ethiopia",
    mapHref: "https://www.google.com/maps/search/?api=1&query=Shine+Speciality+Dental+Clinic+Addis+Ababa",
  },
  social: [
    { label: "TikTok", href: "https://www.tiktok.com/@shine_dentalclinic" },
  ],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Care", href: "#team" },
    { label: "Your visit", href: "#visit" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Shine Speciality Dental Clinic",
    headline: "A brighter smile begins with thoughtful care.",
    accent: "brighter smile",
    description: "Explore dental care, braces, fillings, and teeth whitening at Shine Speciality Dental Clinic in Addis Ababa.",
    primaryCta: "Call to book",
    secondaryCta: "Explore our services",
    image: "/images/hero.jpg",
    imageAlt: "Illustrative close-up of a dental examination",
    trustLine: "Based in Addis Ababa, Ethiopia",
  },
  stats: [
    { value: "01", label: "Braces & alignment" },
    { value: "02", label: "Dental fillings" },
    { value: "03", label: "Teeth whitening" },
    { value: "04", label: "Replacement teeth" },
  ] satisfies Stat[],
  about: {
    eyebrow: "About Shine",
    heading: "Dental care for the smile you want to share.",
    description: "Shine Speciality Dental Clinic serves patients in Addis Ababa. Call to ask about available services, treatment options, and appointment times.",
    image: "/images/about.jpg",
    imageAlt: "Illustrative image of a dental treatment room",
    philosophyTitle: "Start with a conversation",
    philosophy: "Contact the clinic to confirm which services are available and how to plan your visit.",
    reasons: ["Braces and orthodontic care", "Fillings and restorative treatments", "Whitening and replacement teeth"],
  },
  services: [
    { name: "Braces & Orthodontics", description: "Ask Shine about braces and orthodontic treatment options.", icon: "align" },
    { name: "Dental Fillings", description: "Call the clinic to discuss fillings and available restorative care.", icon: "shield" },
    { name: "Teeth Whitening", description: "Ask about teeth whitening services and whether they suit your needs.", icon: "sparkles" },
    { name: "Replacement Teeth", description: "Contact the clinic to learn about artificial teeth and replacement options.", icon: "scan" },
  ] satisfies Service[],
  whyUs: {
    eyebrow: "Why contact Shine",
    heading: "Clear answers for your next step.",
    description: "Get in touch directly to discuss your dental needs and confirm what the clinic currently offers.",
    benefits: [
      { title: "Discuss your needs", text: "Tell the clinic what you would like help with and ask about suitable next steps." },
      { title: "Confirm available care", text: "Check directly which treatments and appointment times are currently available." },
      { title: "Ask about costs", text: "Request current pricing and any preparation details before arranging a visit." },
      { title: "Speak with the clinic", text: "Call Shine in Addis Ababa for the most up-to-date information." },
    ],
  },
  careSteps: [
    { title: "Dental care", text: "Ask the clinic about its current general and restorative dental services." },
    { title: "Braces & alignment", text: "Contact Shine to discuss braces and orthodontic treatment." },
    { title: "Smile treatments", text: "Ask about whitening and replacement teeth options." },
  ] satisfies CareStep[],
  booking: {
    eyebrow: "Appointments",
    heading: "Ready to talk about your smile?",
    description: "Call Shine to ask about availability and arrange an appointment. This demo page does not submit or store appointment requests.",
    callToAction: "Call Shine",
  },
  visitSteps: [
    { title: "Confirm the details", text: "Ask the clinic to confirm its current opening hours and exact location before your visit." },
    { title: "Share what you need", text: "Mention whether you are asking about braces, fillings, whitening, or replacement teeth." },
    { title: "Plan your appointment", text: "Call Shine directly to discuss the next steps and appointment availability." },
  ] satisfies CareStep[],
  gallery: [
    { image: "/images/gallery-1.jpg", alt: "Illustrative dental clinic reception area", span: "wide" },
    { image: "/images/gallery-2.jpg", alt: "Illustrative dental equipment", span: "tall" },
    { image: "/images/gallery-3.jpg", alt: "Illustrative dental treatment room", span: "normal" },
  ] satisfies GalleryItem[],
  faq: [
    { question: "How do I arrange an appointment?", answer: "Call Shine at +251 91 187 2865 to ask about availability and arrange your visit." },
    { question: "Where is the clinic located?", answer: "Public listings place Shine Speciality Dental Clinic in Addis Ababa, Ethiopia. Call to confirm the exact address before travelling." },
    { question: "What services are available?", answer: "Public posts mention braces, fillings, teeth whitening, and replacement teeth. Contact the clinic to confirm its current services and treatment options." },
    { question: "What are the clinic's opening hours?", answer: "I could not verify current opening hours from public listings. Please call the clinic before visiting." },
  ] satisfies FAQ[],
  footer: {
    description: "Speciality dental care in Addis Ababa.",
    copyright: "Shine Speciality Dental Clinic. All rights reserved.",
  },
  seo: {
    title: "Shine Speciality Dental Clinic | Addis Ababa",
    description: "Contact Shine Speciality Dental Clinic in Addis Ababa about braces, fillings, teeth whitening, and replacement teeth.",
  },
};
