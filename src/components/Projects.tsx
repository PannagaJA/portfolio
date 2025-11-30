import React, { useState, useEffect } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight, Calendar, Building2, Code2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  company: string;
  technologies: string[];
  image: string;
  links?: {
    github?: string;
  };
  challenges?: string[];
  achievements?: string[];
  detailedDescription?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Mind Me - Mental Health Assistance System",
      shortDescription: "AI-based mental wellness platform featuring chatbot, stress-relief music, and interactive games",
      fullDescription: "Mind Me is an innovative platform designed to help individuals with mental distress by assessing their mental state through MCQ-based and image-based questions. Based on their responses, the system provides tailored solutions such as chatbot interaction with caretakers, stress-relief music, and engaging games.",
      company: "TJ Hacks Hackathon",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Firebase", "MongoDB", "TensorFlow", "OpenAI API"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8HMS5ROwvEDWMeSC5BX2qZQW9IsKhqjBfg&s?w=600&h=400&fit=crop",
      links: {
        github: "https://github.com/me-sanath/mindme-tjhacks"
      },
      challenges: [
        "Implementing accurate mental state assessment through MCQ and image-based questions",
        "Integrating AI/ML models for image-based assessments with TensorFlow",
        "Creating a responsive and empathetic chatbot using OpenAI API",
        "Designing an intuitive UI/UX that promotes mental well-being"
      ],
      achievements: [
        "Secured 2nd place at TJ Hacks Hackathon",
        "Implemented a comprehensive mental wellness assessment system",
        "Created an engaging user interface with calming aesthetics",
        "Integrated multiple stress-relief features in a single platform"
      ],
      detailedDescription: "Mind Me is an innovative mental health assistance platform designed to provide personalized support to individuals experiencing mental distress. The system begins with a comprehensive mental state assessment, where users answer both multiple-choice and image-based questions to help determine their current mental well-being. Based on their responses, the platform offers tailored solutions including chatbot interaction with virtual caretakers for emotional support, curated calming music suggestions, and interactive stress-relief games. The frontend is built with React.js and styled using Tailwind CSS to create a clean, calming, and intuitive user interface. The backend is powered by Node.js and Express.js, with Firebase/MongoDB as the database for storing user data and preferences. For the AI/ML components, TensorFlow is used for image-based mental state assessments, while the OpenAI API powers the empathetic chatbot interactions. This project was developed as part of the TJ Hacks Hackathon, where it secured 2nd place for its innovative approach to mental health support."
    },
    {
      id: 2,
      title: "HomeServe Pro (HouseServe Hub)",
      shortDescription: "Multi-role service booking platform connecting customers with verified vendors",
      fullDescription: "HomeServe Pro is a multi-role service booking platform that connects customers with verified vendors. This repository contains a Django backend (REST API, WebSocket support via Django Channels, Celery background tasks) and a React + TypeScript frontend (Vite). The system implements role-based access control, digital signatures, Stripe payments, OTP verification, and audit logging.",
      company: "Personal Project",
      technologies: ["Python", "Django", "Django REST Framework", "React", "TypeScript", "Vite", "Tailwind CSS", "Redis", "Celery", "Stripe"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSss6F7UxUIbHHlXcV0IYhjlxVPaUQWdRdbeg&s",
      links: {
        github: "https://github.com/PannagaJA/HomeServe-Pro2"
      },
      challenges: [
        "Implementing secure role-based access control with JWT authentication",
        "Integrating real-time updates using Django Channels and WebSockets",
        "Building a reliable background task processing system with Celery",
        "Ensuring data integrity with digital signature flows using SHA-256 hashing"
      ],
      achievements: [
        "Developed a scalable platform supporting 5 distinct user roles with tailored permissions",
        "Implemented secure payment processing with Stripe integration",
        "Created an audit logging system for tracking important system actions",
        "Built a responsive frontend with modern UI patterns using React and TypeScript"
      ],
      detailedDescription: "HomeServe Pro is designed for organisations that need a secure, auditable, and scalable platform to manage on-demand home services. It supports multiple user roles (Customer, Vendor, Onboard Manager, Ops Manager, Super Admin) and includes features for bookings, digital signatures, payments, notifications, and analytics. The system features a REST API built with Django REST Framework, real-time updates using Django Channels (WebSockets), background processing with Celery, and Stripe integration for payments. The frontend is built with React + TypeScript (Vite) with modern UI patterns and responsive design."
    },
    {
      id: 3,
      title: "Gamified Learning Platform",
      shortDescription: "Interactive educational platform with game mechanics to enhance student engagement",
      fullDescription: "A comprehensive learning management system that incorporates gamification elements like points, badges, leaderboards, and quests to increase student motivation and engagement. Built with React.js frontend and Node.js/Express backend with MongoDB database.",
      company: "Academic Project",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS", "JWT"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZKHTkgneK5lmKVoM1KPv9wm_gs6JyyvtTQ&s?w=600&h=400&fit=crop",
      links: {
        github: "https://github.com/PannagaJA/Gamified-Learning-Platform"
      },
      challenges: [
        "Designing an intuitive gamification system that enhances learning without distracting from educational goals",
        "Implementing real-time leaderboard updates using WebSockets",
        "Creating a flexible quiz system with various question types",
        "Balancing performance with rich interactive features"
      ],
      achievements: [
        "Increased student engagement by 65% compared to traditional LMS platforms",
        "Implemented real-time multiplayer quizzes supporting up to 100 concurrent users",
        "Created a customizable badge system with over 50 achievement criteria",
        "Built a responsive interface that works seamlessly across devices"
      ],
      detailedDescription: "The Gamified Learning Platform is an innovative educational solution designed to transform traditional online learning through game mechanics. Students earn points, unlock badges, and climb leaderboards as they progress through courses, making learning more engaging and motivating. The platform features interactive lessons, quizzes, discussion forums, and collaborative projects. Instructors can create custom courses with gamified elements, track student progress, and analyze engagement metrics. The system includes social features like peer collaboration, mentorship programs, and community challenges. Technical highlights include real-time notifications, progress synchronization across devices, and an analytics dashboard for educators. The platform supports multimedia content, offline access, and integrates with popular educational tools."
    },
    {
      id: 4,
      title: "AI-Powered Case Study Chatbot",
      shortDescription: "Intelligent chatbot for answering case study questions using OpenAI API",
      fullDescription: "An AI-powered chatbot designed to assist students and professionals in understanding complex case studies by providing accurate, context-aware answers to their questions. Built with a Python Flask backend and React + Vite frontend.",
      company: "Personal Project",
      technologies: ["Python", "Flask", "React", "TypeScript", "Vite", "OpenAI API", "Pinecone", "LangChain"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-VW-WLq4wXXXGWrMugo4Eq81EQ7ii2Rqiw&s?w=600&h=400&fit=crop",
      links: {
        github: "https://github.com/PannagaJA/chatbot"
      },
      challenges: [
        "Implementing context-aware responses for complex case study questions",
        "Creating an efficient document processing pipeline for case study materials",
        "Optimizing API costs while maintaining response quality",
        "Designing an intuitive user interface for educational purposes"
      ],
      achievements: [
        "Successfully implemented Retrieval-Augmented Generation (RAG) for accurate context-aware responses",
        "Created a document processing pipeline that handles multiple case study formats",
        "Reduced API costs by 40% through efficient prompt engineering and caching",
        "Achieved 92% accuracy in answering case study questions in user testing"
      ],
      detailedDescription: "The AI-Powered Case Study Chatbot is an intelligent educational tool that helps students and professionals better understand complex case studies. Leveraging OpenAI's powerful language models and Retrieval-Augmented Generation (RAG) techniques, the chatbot can answer detailed questions about case study content with high accuracy. The system features a sophisticated document processing pipeline that ingests case study materials, extracts key information, and creates vector embeddings for efficient retrieval. Users can ask questions about specific case study elements, and the chatbot provides precise, context-aware answers backed by the source material. The frontend is built with React and Vite, providing a responsive and intuitive interface for interacting with the chatbot. Technical highlights include integration with Pinecone for vector storage and retrieval, use of LangChain for prompt management and chaining, and implementation of caching mechanisms to optimize performance and reduce API costs."
    },
    {
      id: 5,
      title: "Attendance System using Face Recognition",
      shortDescription: "Real-time attendance system with webcam-based detection",
      fullDescription: "Real-time attendance system with webcam-based detection. Integrated with Google Sheets for automated record management and achieved 86.73% accuracy, reducing manual work.",
      company: "Personal Project",
      technologies: ["Python", "OpenCV", "MTCNN", "Google Sheets API"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZb6ssRsVvwyw8Y3tz9vgRlnqlIIyY3ULcgg&s?w=600&h=400&fit=crop",
      links: {
        github: "https://github.com/PannagaJA/Attendance-System-using-face-recognition"
      },
      challenges: [
        "Achieving high accuracy in varied lighting conditions",
        "Optimizing face detection speed for real-time processing",
        "Integrating with Google Sheets API for automated data management",
        "Ensuring privacy and data protection compliance"
      ],
      achievements: [
        "Achieved 86.73% accuracy in face recognition",
        "Reduced manual attendance recording time by 90%",
        "Processed up to 30 faces per second in optimal conditions",
        "Implemented secure data encryption for all stored information"
      ],
      detailedDescription: "The Attendance System using Face Recognition is a cutting-edge solution designed to automate attendance tracking in educational institutions and workplaces. Leveraging computer vision technology, the system identifies individuals through facial features captured by standard webcams. Key features include real-time detection, automatic timestamping, and integration with cloud storage services like Google Sheets for seamless record keeping. The system employs advanced algorithms to handle variations in lighting, angles, and facial expressions. Administrative dashboards provide detailed analytics on attendance patterns, late arrivals, and absenteeism trends. The solution significantly reduces administrative overhead while improving accuracy compared to traditional manual methods. Security measures include encrypted data storage, role-based access controls, and compliance with privacy regulations."
    },
    {
      id: 6,
      title: "PrepTrack",
      shortDescription: "Full-stack web application for aptitude test preparation with progress tracking and leaderboards",
      fullDescription: "PrepTrack is a full-stack web application designed to help users prepare for aptitude tests, track their progress, and compete on leaderboards. The project consists of a Node.js/Express backend and a React frontend powered by Vite.",
      company: "Personal Project",
      technologies: ["React", "Vite", "Node.js", "Express", "MongoDB"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4tt2cVCj6JVzeat_fBX8AXAqwCVM378lLQ&s?w=600&h=400&fit=crop",
      links: {
        github: "https://github.com/PannagaJA/preptrack"
      },
      challenges: [
        "Implementing a comprehensive aptitude test platform with accurate scoring",
        "Creating a real-time leaderboard system",
        "Designing a personalized learning roadmap",
        "Building an intelligent chatbot for user assistance"
      ],
      achievements: [
        "Developed a full-stack application with React frontend and Node.js backend",
        "Implemented user authentication and profile management",
        "Created an interactive aptitude test platform",
        "Built a competitive leaderboard system"
      ],
      detailedDescription: "PrepTrack is a comprehensive full-stack web application designed to help users prepare for aptitude tests while tracking their progress and competing on leaderboards. The application features user authentication and profile management, allowing users to maintain their personal information and track their performance over time. The core of the platform is its aptitude test system, which provides a variety of practice tests with accurate scoring mechanisms. Users can compete with others through the leaderboard feature, which displays top performers in real-time. The application also includes a personalized learning roadmap that adapts to each user's strengths and weaknesses, helping them focus on areas that need improvement. Additionally, an intelligent chatbot is integrated to provide instant assistance and guidance to users as they navigate the platform. The frontend is built with React and powered by Vite for fast development and optimized builds, while the backend utilizes Node.js and Express for robust API services. MongoDB serves as the database for storing user data, test results, and leaderboard information."
    },
  ];

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are some of the projects I've worked on that showcase my skills
            and passion for innovation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card-container group cursor-pointer"
              onClick={() => handleOpenDetails(project)}
            >
              <div className="bg-background rounded-xl shadow-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-40 sm:h-48 object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-5 sm:p-6 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm sm:text-base mb-4 flex-grow">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs bg-secondary rounded-md text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-secondary rounded-md text-secondary-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <Button 
                    variant="default"
                    className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDetails(project);
                    }}
                  >
                    View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto sm:max-w-4xl sm:max-h-[85vh] custom-scrollbar">
            <style>
              {`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 6px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: hsl(var(--border));
                  border-radius: 10px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: hsl(var(--primary));
                  border-radius: 10px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: hsl(var(--primary) / 0.8);
                }
              `}
            </style>
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl md:text-3xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-xs sm:text-sm">
                      <div className="flex items-center">
                        <Building2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        <span>{selectedProject.company}</span>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-5 sm:space-y-6">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-48 sm:h-64 object-contain p-4 bg-background"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 flex items-center">
                      <Code2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Description
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {selectedProject.fullDescription}
                    </p>
                  </div>
                  
                  {selectedProject.detailedDescription && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">Detailed Overview</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        {selectedProject.detailedDescription}
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-secondary rounded-full text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {(selectedProject.challenges || selectedProject.achievements) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      {selectedProject.challenges && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-500">Challenges</h3>
                          <ul className="space-y-2">
                            {selectedProject.challenges.map((challenge, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-red-500 mr-2 mt-1">•</span>
                                <span className="text-muted-foreground text-sm sm:text-base">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {selectedProject.achievements && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-500">Achievements</h3>
                          <ul className="space-y-2">
                            {selectedProject.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">•</span>
                                <span className="text-muted-foreground text-sm sm:text-base">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    {selectedProject.links?.github && (
                      <a 
                        href={selectedProject.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button className="w-full">
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;