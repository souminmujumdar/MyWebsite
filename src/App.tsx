import { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Zap,
  Star,
  ArrowRight,
  MousePointer,
} from "lucide-react";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Tech and AI-inspired premium images
  const heroImages = [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop", // AI Brain/Neural networks
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop", // Machine Learning visualization
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop", // AI/Neural network visualization
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&h=1080&fit=crop", // Programming code on screen
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop", // Computer science abstract
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop", // Data visualization charts
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&h=1080&fit=crop", // Programming/coding
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&h=1080&fit=crop", // AI/Technology circuits
  ];

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = ["hero", "projects", "education", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const imageRotation = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(imageRotation);
    };
  }, [heroImages.length]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Shantipath - Meditation App",
      team: "Team of 4",
      year: "2025",
      description:
        "Android meditation application based on ancient Upanishad teachings with modern AI integration",
      highlights: [
        "Play Store deployable mobile application",
        "Ancient wisdom meets modern technology",
        "Personalized meditation guidance using AI",
        "Comprehensive Sanskrit text integration",
      ],
      tech: [
        "Java",
        "Kotlin",
        "Android UI",
        "SQL",
        "Generative AI",
        "Mobile Development",
      ],
      icon: <Star className="text-red-500" size={32} />,
      gradient: "from-red-500 to-pink-500",
      status: "ongoing",
    },
    {
      title: "AI-Powered Diabetes Management Chatbot",
      team: "Team of 2",
      year: "2025",
      description:
        "Comprehensive web-based AI chatbot for diabetes risk assessment using Random Forest Classifier",
      highlights: [
        "Selected for Industry Conclave – Project showcased at college-industry event",
        "Integrated Gemini API for natural language processing",
        "Personalized health recommendations system",
      ],
      tech: [
        "Python",
        "AI/ML",
        "Random Forest",
        "Gemini API",
        "Web Development",
      ],
      icon: <Zap className="text-red-500" size={32} />,
      gradient: "from-red-500 to-pink-600",
      link: "https://github.com/souminmujumdar/DiaBotAI-Your-AI-Ally-in-Diabetes-Care",
    },
    {
      title: "AI News Summarization Application",
      team: "Team of 2",
      year: "2024",
      description:
        "Streamlit-based web application for personalized news retrieval and summarization",
      highlights: [
        "Implemented sentiment analysis using NLTK and Hugging Face Transformers",
        "User-friendly interface for customized news consumption",
        "Advanced natural language processing capabilities",
      ],
      tech: [
        "Python",
        "Streamlit",
        "NLTK",
        "Hugging Face",
        "Sentiment Analysis",
      ],
      icon: <Code className="text-red-500" size={32} />,
      gradient: "from-orange-500 to-red-500",
      link: "https://github.com/souminmujumdar/NewsBit-Bite-sized-News-Powered-by-AI",
    },
    {
      title: "Smart Traffic Congestion Analysis System",
      team: "Team of 4",
      year: "2023",
      description:
        "Comprehensive traffic analysis solution for Pune city using GTFS data",
      highlights: [
        "Led team of 4 members in developing the solution",
        "Analyzed 366+ routes using GTFS data specifications",
        "Interactive Power BI dashboards for real-time visualization",
        "Random Forest Classifier for congestion prediction",
      ],
      tech: ["Python", "Power BI", "GTFS", "Random Forest", "Data Analysis"],
      icon: <Star className="text-red-500" size={32} />,
      gradient: "from-red-600 to-orange-500",
    },
  ];

  const skills = {
    "Programming Languages": ["Java", "SpringBoot", "SQL", "Python"],
    "Web Technologies": ["HTML/CSS", "JavaScript", "React.js", "Flask"],
  };

  const education = [
    {
      course: "B.Tech Computer Science Engineering",
      institute: "Symbiosis Institute of Technology (SIT), Pune",
      year: "2022-2026",
      status: "pursuing",
      icon: <Code className="text-red-500" size={28} />,
      color: "from-red-500 to-orange-500",
    },
    {
      course: "Diploma In Business Management",
      institute: "Symbiosis Institute of Business Management (SIBM), Pune",
      year: "2022-2025",
      marks: "7.2 CGPA",
      status: "completed",
      icon: <Briefcase className="text-red-500" size={28} />,
      color: "from-red-600 to-red-400",
    },
    {
      course: "Class 12th",
      institute: "DAV Public School, Aundh, Pune",
      year: "2021-2022",
      marks: "79.2%",
      icon: <GraduationCap className="text-red-500" size={28} />,
      color: "from-orange-500 to-red-500",
      link: "https://drive.google.com/file/d/1djwEatPzUb4NKZBKi0LPnvVU7WaKsI8b/view?usp=drive_link",
    },
    {
      course: "Class 10th",
      institute: "DAV Public School, Aundh, Pune",
      year: "2020-2021",
      marks: "89.3%",
      icon: <Award className="text-red-500" size={28} />,
      color: "from-red-400 to-pink-500",
      link: "https://drive.google.com/file/d/1D92oIRiw5lx7XHBZdM-KMGyHEEhkmQ3t/view?usp=drive_link",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-mono relative">
      {/* Animated cursor follower */}
      <div
        className="fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${activeSection === "hero" ? 1.5 : 1})`,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-700 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl border-b border-red-500/20" />
        <div className="relative max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-3xl font-black bg-gradient-to-r from-white via-red-500 to-red-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-500 cursor-pointer">
            SOUMIN MUJUMDAR
          </div>
          <div className="hidden md:flex space-x-12">
            {["Projects", "Education", "Contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative text-lg font-semibold transition-all duration-500 hover:text-red-400 group ${
                  activeSection === item.toLowerCase()
                    ? "text-red-500"
                    : "text-white"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500 group-hover:w-full" />
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex space-x-4">
            {[
              { icon: Mail, href: "mailto:souminmujumdar@gmail.com" },
              { icon: Github, href: "https://github.com/souminmujumdar" },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/soumin-mujumdar-a3b4aa351",
              },
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={href}
                href={href}
                className="p-3 bg-white/5 hover:bg-red-500/20 rounded-full hover:text-red-400 transition-all duration-500 hover:scale-110 hover:rotate-12 backdrop-blur-sm border border-white/10 hover:border-red-500/30"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Dynamic background with parallax */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-2000 ${
                index === currentImageIndex
                  ? "opacity-60 scale-100"
                  : "opacity-0 scale-110"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-red-900/50" />
        </div>

        {/* Floating tech elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated binary code streams */}
          <div className="absolute top-10 left-10 text-red-500/20 font-mono text-sm animate-pulse opacity-30">
            01001000 01100101 01101100 01101100 01101111
          </div>
          <div
            className="absolute top-32 right-20 text-red-400/20 font-mono text-xs animate-pulse opacity-20"
            style={{ animationDelay: "1s" }}
          >
            {"<AI>Learning</AI>"}
          </div>
          <div
            className="absolute bottom-20 left-20 text-orange-500/20 font-mono text-xs animate-pulse opacity-25"
            style={{ animationDelay: "2s" }}
          >
            def innovate(): return success
          </div>

          {/* Floating geometric elements */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/5 blur-3xl animate-pulse`}
              style={{
                width: `${200 + i * 50}px`,
                height: `${200 + i * 50}px`,
                left: `${10 + i * 20}%`,
                top: `${10 + i * 15}%`,
                animationDelay: `${i * 1000}ms`,
                animationDuration: `${3000 + i * 1000}ms`,
              }}
            />
          ))}

          {/* Tech icons floating */}
          <div
            className="absolute top-1/4 left-1/4 text-red-500/10 animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "4s" }}
          >
            <Code size={48} />
          </div>
          <div
            className="absolute top-1/3 right-1/4 text-orange-500/10 animate-bounce"
            style={{ animationDelay: "1.5s", animationDuration: "5s" }}
          >
            <Zap size={40} />
          </div>
          <div
            className="absolute bottom-1/3 left-1/3 text-red-400/10 animate-bounce"
            style={{ animationDelay: "2.5s", animationDuration: "3s" }}
          >
            <Star size={36} />
          </div>
        </div>

        {/* Hero content */}
        <div
          className={`relative z-10 text-center max-w-6xl mx-auto px-8 transition-all duration-1500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-700 cursor-default leading-tight">
              SOUMIN
              <br />
              <span className="text-6xl md:text-8xl bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                MUJUMDAR
              </span>
            </h1>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-6">
            <Zap className="text-red-500 animate-pulse" size={32} />
            <p className="text-2xl md:text-4xl text-white font-light tracking-wide">
              Computer Science Engineer & AI Developer
            </p>
            <Star className="text-red-500 animate-spin" size={32} />
          </div>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            Hi, I am Soumin Mujumdar
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-12 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-orange-500 rounded-full text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/40 flex items-center justify-center space-x-3"
            >
              <span>View Projects</span>
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform duration-300"
                size={20}
              />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-12 py-4 border-2 border-red-500 hover:bg-red-500 rounded-full text-red-500 hover:text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/40"
            >
              Connect Now
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          <MousePointer className="text-red-500 mb-2" size={24} />
          <ChevronDown className="text-red-500" size={40} />
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-12 right-12 flex flex-col space-y-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-1 h-8 rounded-full transition-all duration-500 ${
                index === currentImageIndex
                  ? "bg-gradient-to-b from-red-500 to-red-600 shadow-lg shadow-red-500/50"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent">
              INNOVATIVE
              <br />
              <span className="text-red-500">PROJECTS</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI solutions and applications that solve real-world
              problems
            </p>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              TECHNICAL ARSENAL
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {Object.entries(skills).map(([category, techList]) => (
                <div
                  key={category}
                  className="bg-gradient-to-r from-black/60 to-gray-900/40 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/60 transition-all duration-500 backdrop-blur-xl"
                >
                  <h4 className="text-2xl font-bold text-red-400 mb-6">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {techList.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-white rounded-full text-sm font-semibold border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-r from-black/70 to-gray-900/50 p-10 rounded-3xl border border-red-500/20 hover:border-red-500/60 transition-all duration-700 hover:scale-[1.02] backdrop-blur-xl hover:shadow-2xl hover:shadow-red-500/20 transform hover:-translate-y-2`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: isLoaded
                    ? "fadeInUp 1s ease-out forwards"
                    : "none",
                }}
              >
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div
                    className={`flex-shrink-0 p-6 bg-gradient-to-br ${project.gradient} rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  >
                    {project.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-4">
                      <h3 className="text-3xl font-bold text-white group-hover:text-red-400 transition-colors duration-500">
                        {project.title}
                      </h3>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mt-2 lg:mt-0">
                        <span className="text-red-400 font-mono text-lg bg-red-500/10 px-4 py-2 rounded-full">
                          {project.year}
                        </span>
                        <span className="text-gray-300 font-semibold mt-2 lg:mt-0">
                          {project.team}
                        </span>
                      </div>
                    </div>

                    <p className="text-xl text-gray-300 mb-6 group-hover:text-white transition-colors duration-500">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-red-400 mb-3">
                        Key Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-gray-300 flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                            <span className="group-hover:text-white transition-colors duration-500">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-red-400 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.link && (
                      <div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/40"
                        >
                          View Project Details
                          <ArrowRight
                            className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
                            size={20}
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Work & Achievements */}
          <div className="mt-20 pt-20 border-t border-red-500/20">
            <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              SOCIAL IMPACT & ACHIEVEMENTS
            </h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Social Work */}
              <div className="bg-gradient-to-r from-black/60 to-gray-900/40 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/60 transition-all duration-500 backdrop-blur-xl hover:scale-105">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl">
                    <Award className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      ISKCON Pune Collaboration
                    </h4>
                    <p className="text-red-400">Team of 4 Members | 2024</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Contributed to fundraising platform development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Co-developed intelligent chatbot for temple services
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Created digital solutions for religious guidance
                    </span>
                  </li>
                </ul>
              </div>

              {/* Achievements */}
              <div className="bg-gradient-to-r from-black/60 to-gray-900/40 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/60 transition-all duration-500 backdrop-blur-xl hover:scale-105">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                    <Star className="text-white" size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Recognition & Leadership
                  </h4>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Completed Diploma In Business Management alongside Btech
                      degree
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Industry Conclave Selection for Diabetes Chatbot
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Council Member - Event Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent">
              EDUCATION
              <br />
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-r from-black/60 to-gray-900/40 p-10 rounded-3xl border border-red-500/20 hover:border-red-500/60 transition-all duration-700 hover:scale-105 backdrop-blur-xl hover:shadow-2xl hover:shadow-red-500/20 transform hover:-translate-y-2`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: isLoaded
                    ? "fadeInUp 1s ease-out forwards"
                    : "none",
                }}
              >
                <div className="flex items-start space-x-8">
                  <div
                    className={`flex-shrink-0 p-6 bg-gradient-to-br ${edu.color} rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  >
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                      <h3 className="text-3xl font-bold text-white group-hover:text-red-400 transition-colors duration-500">
                        {edu.course}
                      </h3>
                      <span className="text-red-400 font-mono text-lg bg-red-500/10 px-4 py-2 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-xl text-gray-300 mb-6 group-hover:text-white transition-colors duration-500">
                      {edu.institute}
                    </p>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`px-6 py-3 bg-gradient-to-r ${edu.color} text-white rounded-full font-bold text-lg shadow-lg`}
                      >
                        {edu.marks}
                      </span>
                      {edu.status && (
                        <span className="px-6 py-3 bg-white/10 text-white rounded-full font-semibold text-lg backdrop-blur-sm">
                          {edu.status}
                        </span>
                      )}
                    </div>
                    {edu.link && (
                      <div className="mt-6">
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/40"
                        >
                          View Marksheet
                          <ArrowRight
                            className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
                            size={20}
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "ur[](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-red-900/20 to-black/80" />
        </div>

        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-12 bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent">
            LET'S CREATE
            <br />
            <span className="text-red-500">SOMETHING AMAZING</span>
          </h2>

          <p className="text-2xl text-gray-300 mb-20 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to collaborate on groundbreaking AI solutions and premium web
            experiences? Let's turn your vision into reality.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email",
                info: "souminmujumdar@gmail.com",
                color: "from-red-500 to-pink-500",
              },
              {
                icon: Github,
                title: "GitHub",
                info: "github.com/souminmujumdar",
                color: "from-red-600 to-red-400",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                info: "linkedin.com/in/soumin-mujumdar",
                color: "from-orange-500 to-red-500",
              },
            ].map(({ icon: Icon, title, info, color }, index) => (
              <div
                key={title}
                className="group bg-black/60 p-10 rounded-3xl border border-red-500/20 hover:border-red-500/60 transition-all duration-700 hover:scale-105 backdrop-blur-xl hover:shadow-2xl hover:shadow-red-500/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`p-6 bg-gradient-to-br ${color} rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-all duration-500`}
                >
                  <Icon size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-500 break-all">
                  {info}
                </p>
              </div>
            ))}
          </div>

          <a
            href="mailto:souminmujumdar@gmail.com"
            className="group inline-flex items-center space-x-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-orange-500 px-16 py-6 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 text-xl font-bold"
          >
            <Mail size={24} />
            <span>Start Conversation</span>
            <ArrowRight
              className="group-hover:translate-x-2 transition-transform duration-300"
              size={24}
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-500/30 py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="text-4xl font-black bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent mb-6">
            SOUMIN MUJUMDAR
          </div>
          <p className="text-gray-400 mb-8 text-lg">
            Engineered with Technology-inspired excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-500">
            © 2025 All Rights Reserved • Crafted with Precision
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
