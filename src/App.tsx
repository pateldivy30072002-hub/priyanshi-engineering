import { AboutContact, Certifications, ClientsSlider, EngineeringProcess, Footer, Hero, Navbar, Portfolio, ProjectShowcase, Services } from "./components";

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-cream relative font-sans selection:bg-red/25 selection:text-cream overflow-x-hidden">
      {/* 1. Brand Header */}
      <Navbar />

      {/* 2. Light Blueprint & Electric Lightning Hero Section */}
      <Hero />

      {/* 3. The Engineering Flow (01-09 Stage Workflow) */}
      <EngineeringProcess />

      {/* 4. Product Ranges Portfolio (01-05 Ranges with Plates list) */}
      <Portfolio />

      {/* 5. Lifecycle Services (Beyond Products 01-06 up to 33 kV) */}
      <Services />

      {/* 6. Work Experience & Major Projects Track Record (Flagship + 8 Projects) */}
      <ProjectShowcase />

      {/* 7. Stats & QHSE Safety/Quality Commitments */}
      <Certifications />

      {/* 8. Clients & Principal Brands dual infinite marquee slider */}
      <ClientsSlider />

      {/* 9. About & Contact Coordinates, interactive circuit diagram & secure form */}
      <AboutContact />

      {/* 10. Final brand sub-bar */}
      <Footer />
    </div>
  );
}
