import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConceptSection } from './components/ConceptSection';
import { PillarsSection } from './components/PillarsSection';
import { FrameworkSection } from './components/FrameworkSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { DiagnosticTool } from './components/DiagnosticTool';
import { BrandManifesto } from './components/BrandManifesto';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Montserrat',sans-serif]">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Single-Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Brand Mockup Aesthetics & Core Slogan */}
        <Hero />

        {/* 2. The Concept: FLOW + LEAN + HUMAN & Central Purpose */}
        <ConceptSection />

        {/* 3. The 4 Strategic Pillars & Guiding Questions */}
        <PillarsSection />

        {/* 4. Brand Architecture, LSS-A Framework & Método A.L.E.X.™ */}
        <FrameworkSection />

        {/* 5. The 5 Brand Applications / Business Divisions */}
        <ApplicationsSection />

        {/* 6. Interactive Flow Maturity Diagnostic Simulator */}
        <DiagnosticTool />

        {/* 7. Brand Manifesto & Core Commitments */}
        <BrandManifesto />

        {/* 8. Contact & Diagnostic Booking Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Service Selector */}
      <FloatingWhatsApp />
    </div>
  );
}
