import Link from "next/link";

export const siteConfig = {
  name: "AxioVital",
  description: "Enterprise-grade Healthcare Operating System powered by security, interoperability, and artificial intelligence.",
  mainNav: [
    { title: "Platform", href: "/platform" },
    { title: "Solutions", href: "/solutions" },
    { title: "Products", href: "/products" },
    { title: "AI Features", href: "/ai-features" },
    { title: "Resources", href: "/resources" },
    { title: "Pricing", href: "/pricing" },
  ],
  dropdowns: {
    solutions: [
      { title: "Providers", href: "/providers", description: "Care coordination and smart charting solutions." },
      { title: "Hospitals", href: "/hospitals", description: "Multi-facility synchronization & bed management." },
      { title: "Clinics", href: "/clinics", description: "Streamlined operational and clinical workflows." },
      { title: "Laboratories", href: "/laboratories", description: "Digital diagnostics routing & AI assistance." },
      { title: "Patients", href: "/patients", description: "Personal portal, AXIO Card & MyHealthcare App." },
    ],
    company: [
      { title: "About Us", href: "/about" },
      { title: "Careers", href: "/careers" },
      { title: "Customer Stories", href: "/customer-stories" },
      { title: "Documentation", href: "/documentation" },
      { title: "Contact", href: "/contact" },
    ],
    products: [
      { title: "AXIO-ID", href: "/products#axio-id", description: "Unified digital identity token for clinical systems." },
      { title: "AXIO Card", href: "/products#axio-card", description: "Hardware-secured smart patient credential." },
      { title: "AxioAI", href: "/products#axioai", description: "Autonomous clinical documentation & analytics assistant." },
      { title: "AxioInsights", href: "/products#axioinsights", description: "Predictive population analytics & performance dashboards." },
      { title: "AxioConnect", href: "/products#axioconnect", description: "FHIR-compliant global interoperability engine." },
      { title: "MyHealthcare App", href: "/products#myhealthcare", description: "Patient-centered mobile companion & portal." },
    ]
  }
};
