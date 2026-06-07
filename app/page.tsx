import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { WhyAgk } from "@/components/sections/WhyAgk";
import { Software } from "@/components/sections/Software";
import { GlobalFootprint } from "@/components/sections/GlobalFootprint";
import { Process } from "@/components/sections/Process";
import { CostComparison } from "@/components/sections/CostComparison";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Anant Global KPO",
  alternateName: "AGK",
  url: "https://anantglobalkpo.com",
  description:
    "Chartered Accountant-led accounting outsourcing partner for CPA firms, accounting firms, real estate, e-commerce and SMEs.",
  email: "admin@anantglobalkpo.com",
  telephone: "+91-9327230005",
  address: {
    "@type": "PostalAddress",
    streetAddress: "G 50, West Field Mall, Ghod Dod Rd, Adarsh Society, Athwa",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395001",
    addressCountry: "IN",
  },
  areaServed: ["US", "United States", "Global"],
  sameAs: ["https://www.linkedin.com/in/aviagarwal31"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Anant Global KPO — Offshore Accounting Outsourcing",
  serviceType: [
    "Bookkeeping",
    "Accounting",
    "Accounts Payable",
    "Accounts Receivable",
    "Payroll Processing",
    "Financial Reporting",
    "FP&A",
    "Virtual CFO",
  ],
  provider: { "@type": "Organization", name: "Anant Global KPO" },
  areaServed: { "@type": "Country", name: "United States" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Hero />
      <Trust />
      <Stats />
      <Services />
      <Industries />
      <WhyAgk />
      <Software />
      <GlobalFootprint />
      <Process />
      <CostComparison />
      <About />
      <Team />
      <Faq />
      <Contact />
    </>
  );
}
