import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react"; // Icons for cards

const About = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const ref = useRef<HTMLDivElement | null>(null);
  const [lineHeight, setLineHeight] = useState(0);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 150px", "end 50px"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);

  // Data
  const workExperience = [
    {
      date: "Sept 2024 – Present",
      role: "Software Engineer",
      org: "Stalight Technology – Bengaluru",
      points: [
        "Developed “NeuroCampus”, an AI-powered academic management platform",
        "Engineered full-stack solution using Django, React, PostgreSQL, and AWS",
        "Designed role-based dashboards for Admin, HOD, Faculty, and Students",
        "Built features including face recognition attendance, JWT/OTP auth, AI-assisted Q&A, and PDF/CSV exports",
      ],
      tags: ["Django", "ReactJS", "PostgreSQL", "AWS", "AI/ML"],
    },
    {
      date: "Feb 2025 – May 2025",
      role: "Software Development Intern",
      org: "Castlerockin Pvt Ltd – Bengaluru",
      points: [
        "Built responsive frontend interfaces using React.js and Tailwind CSS",
        "Integrated APIs with backend services, improving real-time data flow",
        "Enhanced UI/UX performance and ensured cross-browser compatibility",
        "Worked on debugging, deployment, and version control with GitHub",
      ],
      tags: ["ReactJS", "TailwindCSS", "API Integration", "GitHub"],
    },
  ];

  const education = [
    {
      date: "Aug 2022 – Present",
      role: "Bachelor of Engineering in Computer Science (AI & ML)",
      org: "A.M.C. Engineering College, Bangalore",
      points: [
        "Specialized in Artificial Intelligence & Machine Learning",
        "Consistently strong academic performance",
        "SGPA: SEM1 – 8.85 | SEM2 – 8.30 | SEM3 – 9.10 | SEM4 – 8.42 | SEM5 – 8.77 | SEM6 – 8.94",
      ],
      tags: ["AI", "ML", "Cloud Computing"],
    },
    {
      date: "2020 – 2022",
      role: "PUC in Science",
      org: "PES PU College, Shivamogga",
      points: ["PCMC Stream", "Secured 89% overall"],
      tags: ["Mathematics", "Physics", "Computer Science"],
    },
  ];

  const getTabData = () => (activeTab === "experience" ? workExperience : education);

  // Update line height dynamically
  useEffect(() => {
    if (ref.current) {
      const content = ref.current.querySelector(".timeline-content") as HTMLElement;
      if (content) {
        setLineHeight(content.offsetHeight - 50); // adjust so dot stays within line
      }
    }
  }, [activeTab]);

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-responsive max-w-5xl mx-auto space-y-12">
        {/* --- About Me Section --- */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Currently pursuing B.E. in Computer Science & Engineering (AIML) at AMC Engineering College, Bengaluru. 
            I'm passionate about building scalable applications and intelligent platforms that solve real-world problems.
            My journey includes working as a Software Engineer at Stalight Technology, where I developed 
            "NeuroCampus" – an AI-powered academic management platform using Django, React, PostgreSQL, and AWS 
            with features like face recognition attendance and AI-assisted Q&A.
            <br /><br />
            I believe in continuous learning and 
            creating technology that makes a meaningful impact.
          </p>
        </div>

        {/* --- Feature Cards --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-background border rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <Code2 className="w-6 h-6 text-primary mb-2" />
            <h3 className="font-semibold text-lg">Full-Stack Development</h3>
            <p className="text-muted-foreground text-sm">
              Proficient in React, Django, Node.js, PostgreSQL, and AWS. Built scalable web applications and APIs.
            </p>
          </div>
          <div className="bg-background border rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <Lightbulb className="w-6 h-6 text-primary mb-2" />
            <h3 className="font-semibold text-lg">AI/ML Innovation</h3>
            <p className="text-muted-foreground text-sm">
              Specialized in computer vision, OpenAI API integration, face recognition systems, and AI-powered chatbots.
            </p>
          </div>
          <div className="bg-background border rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <Rocket className="w-6 h-6 text-primary mb-2" />
            <h3 className="font-semibold text-lg">Project Leadership</h3>
            <p className="text-muted-foreground text-sm">
              Led development of NeuroCampus platform and multiple AI-powered solutions from concept to deployment.
            </p>
          </div>
          <div className="bg-background border rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <Users className="w-6 h-6 text-primary mb-2" />
            <h3 className="font-semibold text-lg">Team Collaboration</h3>
            <p className="text-muted-foreground text-sm">
              Coordinator at AMC E-CELL, hackathon winner, and active contributor to the tech community.
            </p>
          </div>
        </div>

        {/* --- Tabs Section --- */}
        <div>
          {/* Tabs */}
          <div className="flex justify-center mb-10 space-x-4">
            {["experience", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    activeTab === tab
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20"
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative flex" ref={ref}>
            {/* Line */}
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-muted-foreground/30" />

            {/* Dot */}
            <motion.div
              className="absolute left-[10px] w-4 h-4 bg-primary rounded-full shadow-lg"
              style={{ y }}
            />

            {/* Content */}
            <div className="timeline-content pl-12 space-y-12 w-full">
              {getTabData().map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-background rounded-xl shadow-lg border p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{item.role}</h3>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                    <p className="text-primary mb-3">{item.org}</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-3">
                      {item.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
