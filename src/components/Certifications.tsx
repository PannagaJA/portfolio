import {
  Calendar,
  Award,
  Briefcase,
  Cloud,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [disableHover, setDisableHover] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const achievements = [
    {
      title: "React Bootcamp",
      description: "Completed React Bootcamp organized by LetsUpgrade.",
      date: "2025-03-01",
      type: "Bootcamp",
      icon: BookOpen,
      certificate: "/certificates/react-bootcamp.pdf",
    },
    {
      title: "AWS Academy Cloud Foundations",
      description: "Completed AWS Academy Cloud Foundations program.",
      date: "2024-12-01",
      type: "Certification",
      icon: Cloud,
      certificate: "/certificates/aws-cloud-foundations.pdf",
    },
    {
      title: "Backend Bootcamp",
      description: "Completed Backend Bootcamp at DevTown.",
      date: "2024-02-01",
      type: "Bootcamp",
      icon: BookOpen,
      certificate: "/certificates/backend-bootcamp.pdf",
    },
    {
      title: "AI-ML Virtual Internship",
      description: "Completed AI-ML Virtual Internship organized by AICTE.",
      date: "2024-04-01",
      type: "Internship",
      icon: Award,
      certificate: "/certificates/ai-ml-internship.pdf",
    },
    {
      title: "Android Developer Internship",
      description: "Completed Android Developer Internship at AICTE.",
      date: "2024-07-01",
      type: "Internship",
      icon: Briefcase,
      certificate: "/certificates/android-internship.pdf",
    },
    {
      title: "Python (Basic)",
      description: "Completed Python (Basic) certification on HackerRank.",
      date: "2023-02-01",
      type: "Certification",
      icon: BookOpen,
      certificate: "/certificates/python-basic.pdf",
    },
    {
      title: "Research Methodology",
      description: "Completed Research Methodology course via Infosys Springboard.",
      date: "2024-12-01",
      type: "Course",
      icon: BookOpen,
      certificate: "/certificates/research-methodology.pdf",
    },
    {
      title: "Programming Fundamentals: Algorithms, Sorting & Searching",
      description: "Completed programming fundamentals course on Infosys Springboard.",
      date: "2025-01-01",
      type: "Course",
      icon: BookOpen,
      certificate: "/certificates/programming-fundamentals.pdf",
    },
    {
      title: "Explore Text-to-Speech with IBM Watson",
      description: "Completed IBM SkillsBuild workshop on Text-to-Speech with Watson.",
      date: "2024-10-01",
      type: "Workshop",
      icon: Cloud,
      certificate: "/certificates/ibm-tts.pdf",
    },
    {
      title: "Microsoft Learn Student Ambassador – Backend Web Development Bootcamp",
      description: "Completed Backend Web Development Bootcamp via Microsoft Learn Student Ambassador program.",
      date: "2024-05-01",
      type: "Bootcamp",
      icon: BookOpen,
      certificate: "/certificates/microsoft-backend.pdf",
    },
    {
      title: "Hack-A-City 2.0 – AI/ML Hackathon",
      description: "Participated in Hack-A-City 2.0 AI/ML Hackathon at City Engineering College.",
      date: "2024-06-01",
      type: "Hackathon",
      icon: Award,
      certificate: "/certificates/hack-a-city-2.pdf",
    },
    {
      title: "Arduitron (ENJIEO – IEEE AMEC 2022)",
      description: "Participated in Arduitron event organized by IEEE AMEC at AMC Engineering College.",
      date: "2023-08-01",
      type: "Event",
      icon: Award,
      certificate: "/certificates/arduitron.pdf",
    },
    {
      title: "Webinar: Future of Tech (AI & LLMs)",
      description: "Attended Webinar on AI & LLMs at AMC Engineering College.",
      date: "2024-04-01",
      type: "Webinar",
      icon: BookOpen,
      certificate: "/certificates/future-of-tech.pdf",
    },
    {
      title: "Winner - Mind Me Hackathon 2025",
      description: "Secured 2nd place at T John Engineering College Hackathon for project 'Mind Me'.",
      date: "2025-03-13",
      type: "Hackathon",
      icon: Award,
      certificate: "/certificates/mind-me-hackathon.pdf",
    },
  ];

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const scrollCard = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    setDisableHover(true);
    setIsAutoScrolling(false);
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const gap = 16;
    const scrollAmount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
    const start = container.scrollLeft;
    const end = start + scrollAmount;
    const duration = 600;
    const startTime = performance.now();
    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);
      container.scrollLeft = start + (end - start) * easedProgress;
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    setTimeout(() => {
      setIsAutoScrolling(true);
      setDisableHover(false);
    }, duration + 200);
  };

  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    let scrollInterval: NodeJS.Timeout;
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollBy({ left: 1, behavior: "smooth" });
        }
      }, 20);
    };
    const stopAutoScroll = () => clearInterval(scrollInterval);
    if (isAutoScrolling) startAutoScroll();
    return () => stopAutoScroll();
  }, [isAutoScrolling]);

  const renderRow = (reverse = false) => (
    <div className="relative w-[65%] mx-auto overflow-hidden my-4 group hidden md:block">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />
      <div className={`flex gap-4 min-w-max animate-scroll ${reverse ? "reverse" : ""}`}>
        {[...achievements, ...achievements].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={`${item.title}-${idx}`} className="flex-shrink-0">
              <Card className="group/card glass-card glass-hover w-56 h-[220px] relative cert-card">
                <CardHeader className="flex flex-col items-center justify-center gap-2 p-3 h-full">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-center group-hover/card:text-primary">
                    {item.title}
                  </h3>
                  <Badge variant="secondary" className="text-[10px]">
                    {item.type}
                  </Badge>
                </CardHeader>
                <CardContent
                  className="cert-card-content absolute bottom-0 left-0 w-full bg-background/95 backdrop-blur-md p-3
                            opacity-0 translate-y-6 group-hover/card:translate-y-0 group-hover/card:opacity-100
                            transition-all duration-300 hidden md:block"
                >
                  <p className="text-xs text-muted-foreground line-clamp-3 mb-2 text-center">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3" />
                    {formatDate(item.date)}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full glass-card text-xs"
                    onClick={() => setSelectedCertificate(item.certificate)}
                  >
                    View
                  </Button>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Certifications & Achievements
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          A continuous showcase of my growth, achievements, and certifications.
        </p>
      </motion.div>

      {/* Desktop */}
      {renderRow(false)}
      {renderRow(true)}

      {/* Mobile */}
      <div className="relative mt-4 md:hidden">
        <Button
          size="sm"
          className={`absolute top-1/2 left-2 -translate-y-1/2 rounded-full p-2 bg-background/90 backdrop-blur-md z-50 shadow
            ${disableHover ? "pointer-events-none" : "hover:bg-primary/20"}`}
          onClick={() => scrollCard("left")}
        >
          <ChevronLeft className="h-5 w-5 text-primary" />
        </Button>
        <div
          className="overflow-x-auto scrollbar-hide"
          ref={scrollRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-4 px-4 flex-nowrap">
            {[...achievements, ...achievements].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card
                  key={idx}
                  className="glass-card w-64 flex-shrink-0 flex flex-col justify-between h-80"
                >
                  <CardHeader className="flex flex-col items-center justify-center gap-2 p-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-center">
                      {item.title}
                    </h3>
                    <Badge variant="secondary" className="text-[10px]">
                      {item.type}
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 flex flex-col justify-between h-full">
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground text-center">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(item.date)}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full glass-card text-xs mt-2"
                      onClick={() => setSelectedCertificate(item.certificate)}
                    >
                      View
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        <Button
          size="sm"
          className={`absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-2 bg-background/90 backdrop-blur-md z-50 shadow
            ${disableHover ? "pointer-events-none" : "hover:bg-primary/20"}`}
          onClick={() => scrollCard("right")}
        >
          <ChevronRight className="h-5 w-5 text-primary" />
        </Button>
      </div>

      {/* Dialog */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-2xl w-full px-4 sm:px-6 rounded-2xl">
          <DialogHeader>
            <DialogTitle>Certificate Preview</DialogTitle>
            <DialogDescription>
              Preview and download your certificate.
            </DialogDescription>
          </DialogHeader>

          {selectedCertificate && (
            <motion.div
              className="mt-6 w-full max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-background shadow-lg">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <div style={{ height: '60vh' }}>
                    <Viewer fileUrl={selectedCertificate} />
                  </div>
                </Worker>
              </div>

              <div className="flex justify-between items-center mt-3 px-2">
                <Button
                  variant="ghost"
                  onClick={() => setSelectedCertificate(null)}
                  className="glass-card glass-hover hover:bg-primary hover:text-primary-foreground border-primary/20"
                >
                  Close Preview
                </Button>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-card glass-hover hover:bg-primary hover:text-primary-foreground border-primary/20"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = selectedCertificate!;
                        link.download = selectedCertificate!.split('/').pop() || 'certificate.pdf';
                        link.click();
                      }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Certificate
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;
