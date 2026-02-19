import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";

// Lazy load heavier components
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Blog = lazy(() => import("@/components/Certifications"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading skeleton component
const SectionSkeleton = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center space-y-4">
      <div className="h-8 bg-muted rounded w-64"></div>
      <div className="h-4 bg-muted rounded w-48"></div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ScrollProgress />
      <main className="relative">
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>  
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>  
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>  
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>  
          <Blog />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>  
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
