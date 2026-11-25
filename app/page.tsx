"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Download, Mail, MapPin, Code2, Layers3, Lightbulb, ChevronDown, Monitor, Briefcase, Database, Layout, Wrench } from "lucide-react";
import { FiGithub as Github, FiInstagram as Instagram, FiLinkedin as Linkedin } from "react-icons/fi";

// Project Categories
const PROJECT_CATEGORIES = {
  ALL: "all",
  COMPANY: "company",
  PERSONAL: "personal",
};

const sourceProjects = [
  {
    id: "erp-pos",
    title: "ERP & POS Management System",
    category: "company",
    categoryLabel: "Company Work",
    company: "D3innovatives",
    type: "Company · D3innovatives",
    description:
      "Enterprise ERP with 10+ core modules (Inventory, Billing, POS), 40+ reusable React components, 20+ REST APIs via TanStack React Query, barcode scanning, and ESC/POS thermal printing.",
    tech: "React, TypeScript, TanStack React Query, Tailwind CSS, REST APIs",
    tags: ["React", "TypeScript", "TanStack Query", "Tailwind CSS", "REST API"],
    liveUrl: "https://app.erpgen.com/auth/login",
    githubUrl: null,
    cta: "Live Demo",
    image: "/erp.webp",
    gradient: "from-emerald-400 to-cyan-500",
    featured: true,
  },
  {
    id: "overprint",
    title: "OverPrint Desktop Application",
    category: "company",
    categoryLabel: "Company Work",
    company: "D3innovatives",
    type: "Company · D3innovatives",
    description:
      "Desktop printing bridge utility linking web POS applications to USB and network thermal printers; WebSocket communication, automated printer discovery, packaged with PyInstaller.",
    tech: "Python, WebSocket, PyInstaller, Desktop Utility",
    tags: ["Python", "WebSocket", "PyInstaller", "Desktop"],
    liveUrl: null,
    githubUrl: null,
    cta: "Internal Tool",
    image: "/covers/overprint.svg",
    gradient: "from-orange-400 to-red-600",
    featured: true,
  },
  {
    id: "d3media-scraper",
    title: "D3Media Scraper",
    category: "company",
    categoryLabel: "Company Work",
    company: "D3innovatives",
    type: "Company · D3innovatives",
    description:
      "FastAPI service that safely crawls websites with Scrapy and turns public data into competitor intelligence: SEO and content comparison, social and Meta ads insights, and client reports in PDF, HTML and JSON.",
    tech: "Python, FastAPI, Scrapy, React, SQLite",
    tags: ["Python", "FastAPI", "Scrapy", "React", "SQLite"],
    liveUrl: null,
    githubUrl: null,
    cta: "Internal Tool",
    image: "/covers/d3media-scraper.svg",
    gradient: "from-teal-400 to-emerald-600",
    featured: true,
  },
  {
    id: "d3-sms",
    title: "D3 SMS",
    category: "company",
    categoryLabel: "Company Work",
    company: "D3innovatives",
    type: "Company · D3innovatives",
    description:
      "Android app that forwards incoming SMS to configured webhooks, even when the app is closed. Smart matching rules, templated JSON payloads, retries with backoff and optional HMAC signing, all stored on the phone.",
    tech: "Flutter, Kotlin, WorkManager, Android",
    tags: ["Flutter", "Kotlin", "WorkManager", "Android"],
    liveUrl: null,
    githubUrl: null,
    cta: "Internal Tool",
    image: "/covers/d3-sms.svg",
    gradient: "from-orange-500 to-red-600",
    featured: true,
  },
  {
    id: "betterinu-website",
    title: "Betterinu Website",
    category: "company",
    categoryLabel: "Company Work",
    company: "Betterinu",
    type: "Company · Betterinu",
    description:
      "The marketing website for Betterinu (betterinu.com): a 3D-animated site that introduces Betty, Kerala's first AI learning companion, and collects leads. Built solo with React, Three.js, GSAP and Node.js as part of the Betterinu platform.",
    tech: "React, Three.js, GSAP, Node.js",
    tags: ["React", "Three.js", "GSAP", "Node.js"],
    liveUrl: null,
    publicUrl: "https://betterinu.com", // the public website: the only link shown for this company project
    githubUrl: null,
    cta: "Visit website",
    image: "/betterinu-website.webp",
    gradient: "from-lime-400 to-teal-500",
    featured: true,
  },
  {
    id: "betterinu-lms",
    title: "Betterinu Platform",
    category: "company",
    categoryLabel: "Company Work",
    company: "Betterinu",
    type: "Company · Betterinu",
    description:
      "Three separate apps, sole developer, in production since May 2026.\n" +
      "• Student LMS: Next.js, TypeScript, TanStack Query, Supabase Auth, PostgreSQL. Courses, curriculum, weekly tasks and reviews, attendance and leave. Used by 30+ students.\n" +
      "• Admin Panel: Next.js, TypeScript, TanStack Query, Supabase, PostgreSQL. Student and course administration, plus HRMS, finance, CRM and Meta Ads analytics. Used daily by 10+ employees for attendance, leave, tasks and work reports.\n" +
      "• Marketing Website (betterinu.com): React, Three.js, GSAP, Node.js. 3D-animated site with lead collection.",
    tech: "Next.js, TypeScript, TanStack Query, Supabase, PostgreSQL, React, Three.js, GSAP, Node.js",
    tags: ["Next.js", "TypeScript", "TanStack Query", "Supabase", "PostgreSQL", "React", "Three.js", "GSAP", "Node.js"],
    liveUrl: "https://betterinu-admin-v1-jj9b.vercel.app/admin/loginext",
    githubUrl: null,
    cta: "Live Demo",
    image: "/lms.jpeg",
    gradient: "from-lime-400 to-teal-500",
    featured: true,
  },
  {
    id: "crm-live",
    repo: "CRM", // links this entry to its GitHub repo so it is not listed twice
    title: "CRM Live Project",
    category: "company",
    categoryLabel: "Company Work",
    company: "Irohub Infotech",
    type: "Company · Irohub Infotech",
    description:
      "MERN CRM with JWT authentication, role-based access control (RBAC), RESTful APIs for clients/business records, interactive dashboards, and optimized MongoDB schema design.",
    tech: "MongoDB, Express, React, Node.js, JWT, RBAC",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    liveUrl: null,
    githubUrl: null,
    cta: "Internal Platform",
    image: "/covers/crm-live.svg",
    gradient: "from-blue-500 to-indigo-600",
    featured: true,
  },
  {
    id: "moneytrack",
    title: "MoneyTrack",
    category: "personal",
    categoryLabel: "Personal Project",
    company: null,
    type: "Personal Mobile App",
    description:
      "Offline-first automatic expense management app with SMS transaction detection, duplicate prevention, category analytics, smart budgets, and encrypted SQLite persistence.",
    tech: "Flutter, Dart, Riverpod, Drift, SQLite",
    tags: ["Flutter", "Dart", "Riverpod", "Drift", "SQLite"],
    liveUrl: "https://github.com/saviyo9037/money-tracking-app",
    githubUrl: "https://github.com/saviyo9037/money-tracking-app",
    cta: "GitHub",
    image: "/moneytrac.jpeg",
    gradient: "from-amber-400 to-rose-500",
    featured: true,
  },
  {
    id: "apzxrtra-lms",
    title: "Apzxrtra LMS",
    category: "company",
    categoryLabel: "Company Work",
    company: "D3innovatives",
    type: "Company · D3innovatives",
    description:
      "Enterprise Academic ERP & LMS with AI study planning, student/faculty portals, placement ERP, ATS resume matcher, and fee/EMI management dashboards.",
    tech: "Next.js 15, React 19, TypeScript, Tailwind CSS",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://github.com/saviyo9037/lms",
    githubUrl: "https://github.com/saviyo9037/lms",
    cta: "GitHub",
    image: "/apzxrtra.webp",
    gradient: "from-sky-400 to-violet-500",
    featured: true,
  },
  {
    id: "nova-voice-os",
    title: "NOVA Voice OS",
    category: "personal",
    categoryLabel: "Personal Project",
    company: null,
    type: "Personal AI Project",
    description:
      "Modular AI-powered voice operating system with real-time speech-to-text, LLM intent processing, multilingual TTS synthesis, and offline NLP fallback architecture.",
    tech: "React, TypeScript, Node.js, Express, Sarvam AI, OpenAI, Framer Motion",
    tags: ["React", "TypeScript", "Node.js", "Express", "Sarvam AI", "OpenAI"],
    liveUrl: "https://github.com/saviyo9037/speech-ai",
    githubUrl: "https://github.com/saviyo9037/speech-ai",
    cta: "GitHub",
    image: "/covers/nova-voice-os.svg",
    gradient: "from-fuchsia-500 to-indigo-500",
    featured: true,
  },
  {
    id: "rabbit-ecommerce",
    title: "Rabbit-Ecommerce",
    category: "personal",
    categoryLabel: "Personal Project",
    company: null,
    type: "Personal Project",
    description:
      "Full-stack MERN e-commerce application with dynamic product filtering, cart & checkout pipelines, user auth, and scalable order management REST endpoints.",
    tech: "MERN Stack, React, Node.js, MongoDB, Express, REST API",
    tags: ["MERN", "React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://rabbit-h7kc.vercel.app/",
    githubUrl: null,
    cta: "Live Demo",
    image: "/rabbit.webp",
    gradient: "from-rose-500 to-purple-600",
    featured: false,
  },
  {
    id: "labcare-clinical-os",
    title: "LabCare Clinical OS",
    category: "personal",
    categoryLabel: "Personal Project",
    company: null,
    type: "Prototype · Live Demo",
    description:
      "Automated diagnostic intelligence and laboratory clinical OS prototype featuring specimen tracking, technician queue orchestration, and live demo clinic workflows.",
    tech: "TypeScript, React, Node.js, Express, Healthcare Systems, Role-based Auth",
    tags: ["Prototype", "TypeScript", "React", "Laboratory", "Live Demo"],
    language: "TypeScript",
    updatedAt: "2026-11-23T12:00:00Z",
    liveUrl: "https://lab-clinic-management.vercel.app",
    githubUrl: null,
    cta: "Prototype Demo",
    image: "/labcare-dashboard.png",
    gradient: "from-cyan-500 to-blue-600",
    featured: false,
  },
  {
    id: "lab-clinic-management",
    repo: "Lab-clinic-Management",
    title: "Lab Management System",
    category: "personal",
    categoryLabel: "Freelance Project",
    company: null,
    type: "Freelance Project",
    description:
      "Developed a laboratory management system to streamline diagnostic lab operations—handling patient registration & management, laboratory test management, sample collection tracking, test result management, digital report generation, billing & payment management, and real-time dashboard analytics.\n\nObjective: To reduce manual work, improve accuracy, and make laboratory operations faster and more efficient.",
    tech: "Next.js, React, TypeScript, Node.js, MongoDB",
    tags: ["Freelance", "Next.js", "TypeScript", "React", "Node.js", "MongoDB"],
    language: "TypeScript",
    updatedAt: "2026-11-20T12:00:00Z",
    liveUrl: null,
    githubUrl: null,
    cta: "Private Freelance Project",
    hideLinks: true,
    private: true,
    freelance: true,
    image: "",
    gradient: "from-purple-600 to-indigo-700",
    featured: false,
  },
  {
    id: "hospital-management",
    title: "Hospital Management",
    category: "personal",
    categoryLabel: "Personal Project",
    company: null,
    type: "Personal Project",
    description:
      "Healthcare management platform featuring role-based dashboards, appointment scheduling workflows, real-time messaging, and patient record management.",
    tech: "React, Node.js, Express, Healthcare Systems, Role-based Auth",
    tags: ["React", "Node.js", "Express", "Role Auth"],
    liveUrl: "https://hospital-frontend-phi-sandy.vercel.app",
    githubUrl: null,
    cta: "Live Demo",
    image: "/hospital.webp",
    gradient: "from-teal-400 to-emerald-600",
    featured: false,
  },
  {
    id: "buildcraft-construction",
    title: "BuildCraft Construction Website",
    category: "personal",
    categoryLabel: "Upcoming",
    statusLabel: "Upcoming",
    company: null,
    type: "Upcoming Project",
    description:
      "A minimal, responsive portfolio website concept for a construction company, featuring services, project showcases with status filters, a founder profile and video section, and contact calls to action. This is a frontend prototype; backend, database and admin features are not included.",
    tech: "HTML, CSS, JavaScript, Responsive Web Design",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    liveUrl: "https://buildcraft-construction-rho.vercel.app",
    githubUrl: "https://github.com/saviyo9037/testing-",
    cta: "Preview",
    image: "",
    gradient: "from-stone-400 to-amber-700",
    featured: true,
  },
];

const projects=sourceProjects.map(p=>({name:p.title,desc:p.description,tags:p.tags,image:p.id==='erp-pos'?'/erp.png':p.id==='betterinu-lms'?'/lms.jpeg':p.id==='moneytrack'?'/moneytrac.jpeg':p.image?'https://raw.githubusercontent.com/saviyo9037/portfolio/main/public'+p.image:'',label:p.categoryLabel,category:p.category,link:p.hideLinks?null:p.publicUrl||p.liveUrl||p.githubUrl}));

const skillCategories = [
  { title: "Frontend", skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Redux", "TanStack Query"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "PHP", "Python", "FastAPI", "REST API"] },
  { title: "Database", skills: ["MongoDB", "MySQL", "SQLite"] },
  { title: "Tools", skills: ["Git", "GitHub", "Postman", "VS Code", "XAMPP"] },
  { title: "Other", skills: ["WebSocket", "AI / LLM", "STT / TTS", "CRUD Operations", "JWT / Session Authentication"] }
];

export default function Home(){
 const [scrolled,setScrolled]=useState(false);
 const [menuOpen,setMenuOpen]=useState(false);
 const [filter,setFilter]=useState("All");
 useEffect(()=>{const fn=()=>setScrolled(scrollY>30);addEventListener("scroll",fn);return()=>removeEventListener("scroll",fn)},[]);
 return <main>
  <nav className={`nav ${scrolled?"navSolid":""}`}>
   <a className="brand" href="#home">Savi<span>yo</span></a>
   <div className={`navLinks ${menuOpen?'open':''}`} onClick={()=>setMenuOpen(false)}>
     <a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#education">Education</a><a href="#contact">Contact</a>
   </div>
   <div style={{display:'flex', gap:'15px', alignItems:'center'}}>
     <a className="navCta" href="#contact">Let's Talk <ArrowUpRight size={14}/></a>
     <button className="menuBtn" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
       {menuOpen ? <X size={24}/> : <Menu size={24}/>}
     </button>
   </div>
  </nav>

  <section id="home" className="hero">
   <div className="heroGlow blue"></div><div className="heroGlow orange"></div><div className="grain"></div>
   <div className="heroCopy">
    <div className="eyebrow">Hi, I'm</div>
    <h1>Savi<span>yo</span> George</h1>
    <h2>Websites & software that work for your business</h2>
    <h3 style={{fontSize: '14px', color: '#ff6b24', marginTop: '-12px', marginBottom: '18px', fontWeight: 'normal', letterSpacing: '1px', textTransform: 'uppercase'}}>MERN & PHP · Web Applications · Business Solutions</h3>
    <p>I help businesses in Kerala build modern websites, online stores and custom software to attract customers and simplify everyday operations.</p>
    <div className="actions"><a className="primary" href="#contact">Let's Work Together <ArrowUpRight size={16}/></a><a className="secondary" href="#projects">Explore my work <ArrowUpRight size={15}/></a></div>
    <div className="socials"><a href="https://github.com/saviyo9037" target="_blank" rel="noreferrer"><Github size={17}/></a><a href="https://linkedin.com/in/saviyo-george" target="_blank" rel="noreferrer"><Linkedin size={17}/></a><a href="mailto:saviyogeorge903734@gmail.com"><Mail size={17}/></a></div>
    <div className="availabilityBadge" style={{marginTop: '25px', display: 'inline-block', fontSize: '11px', color: '#aaa', border: '1px solid rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '30px', background: 'rgba(255,255,255,0.03)'}}>
      <span style={{color: '#00e676', marginRight: '8px'}}>●</span>Open to freelance project enquiries
    </div>
    <br/><a className="scrollHint" href="#about"><ChevronDown size={16}/> Scroll down</a>
   </div>
   <div className="heroShowcase"><div className="showcaseGlow"/><div className="showcaseMain"><div className="showcaseBar"><span>● ● ●</span><span>BUSINESS SOFTWARE / 01</span></div><img src="/erp.png" alt="ERP and POS project dashboard"/><div className="showcaseCaption"><b>Smarter business operations.</b><small>ERP · POS · Inventory</small></div></div><div className="showcaseMobile"><div className="phoneNotch"/><img src="/moneytrac.jpeg" alt="MoneyTrack mobile application"/></div><div className="showcaseTag">✦ Custom digital solutions</div></div>
   
   
  </section>

  <section id="about" className="about section">
   <div className="aboutImage"><div className="aboutPortrait"><img src="/saviyo-cutout.png" alt="Saviyo George"/></div><div className="aboutIdentity"><b>Saviyo George</b><span>Full Stack Developer · Kerala</span><div><strong>40+</strong> UI components <strong>20+</strong> API integrations</div></div></div>
   <div className="aboutContent">
    <div className="label">● ABOUT ME</div><h2>Turning ideas<br/>into digital <em>experiences.</em></h2>
    <p>I'm Saviyo George, a Full Stack Developer with hands-on experience building responsive and scalable web applications using the MERN stack, PHP and modern web technologies. I enjoy solving real-world problems through clean code, practical architecture and meaningful user experiences.</p>
    <div className="miniStats"><span><MapPin size={15}/> India<br/><small>Based</small></span><span><Code2 size={15}/> Full Stack<br/><small>Developer</small></span><span><Layers3 size={15}/> Modern<br/><small>Technologies</small></span></div>
   </div>
   <div className="strengths">
    <div><i><Code2/></i><b>Clean & Scalable Code</b><small>Writing maintainable and efficient code for real-world applications.</small></div>
    <div><i><Layers3/></i><b>Modern Technologies</b><small>Working with modern frameworks and tools to build practical solutions.</small></div>
    <div><i><Lightbulb/></i><b>Problem Solving</b><small>Turning complex workflows and requirements into simple digital solutions.</small></div>
    <div><i><MapPin/></i><b>Business-Oriented Development</b><small>Building software around real business needs, workflows and user requirements.</small></div>
   </div>
  </section>

  <section id="services" className="services section dark">
    <div className="sectionHead"><div><div className="label">● WHAT I DO</div><h2>Services <em>I Offer.</em></h2></div></div>
    <p className="sectionIntro">From a new business website to a complete management system — solutions tailored to your goals.</p>
    <div className="serviceGrid">
      <article className="serviceCard"><i><Monitor size={22}/></i><h3>Web Application Development</h3><p>Custom web applications using MERN, PHP and modern frontend technologies.</p><div style={{fontSize: '11px', color: '#ff6b24', marginTop: '10px', fontWeight: 'bold'}}>React · Next.js · Node.js · PHP</div><ArrowUpRight className="sIcon" size={16}/></article>
      <article className="serviceCard"><i><Briefcase size={22}/></i><h3>Business Management Solutions</h3><p>Practical software solutions for business workflows, management and operations.</p><div style={{fontSize: '11px', color: '#ff6b24', marginTop: '10px', fontWeight: 'bold'}}>ERP · POS · CRM · LMS</div><ArrowUpRight className="sIcon" size={16}/></article>
      <article className="serviceCard"><i><Database size={22}/></i><h3>API Development & Integration</h3><p>REST APIs, authentication, third-party integrations and backend services.</p><div style={{fontSize: '11px', color: '#ff6b24', marginTop: '10px', fontWeight: 'bold'}}>Node.js · Express · REST API</div><ArrowUpRight className="sIcon" size={16}/></article>
      <article className="serviceCard"><i><Layout size={22}/></i><h3>Business Websites & Online Stores</h3><p>Mobile-friendly websites, product catalogues and enquiry flows that help customers discover your business.</p><div style={{fontSize: '11px', color: '#ff6b24', marginTop: '10px', fontWeight: 'bold'}}>React · Next.js · Tailwind CSS</div><ArrowUpRight className="sIcon" size={16}/></article>
      <article className="serviceCard"><i><Wrench size={22}/></i><h3>Maintenance & Support</h3><p>Bug fixes, improvements, feature updates and ongoing technical support.</p><ArrowUpRight className="sIcon" size={16}/></article>
    </div>
  </section>

  <section className="what-i-build section dark" style={{paddingTop: '20px', paddingBottom: '80px', textAlign: 'center'}}>
    <h3 style={{fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#888', marginBottom: '25px'}}>From idea to working product.</h3>
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', color: '#ccc', fontSize: '13px', fontWeight: 'bold'}}>
      <span>Business Systems</span> <span style={{color: '#ff6b24'}}>•</span> <span>Web Applications</span> <span style={{color: '#ff6b24'}}>•</span> <span>Dashboards</span> <span style={{color: '#ff6b24'}}>•</span> <span>APIs</span> <span style={{color: '#ff6b24'}}>•</span> <span>Automation</span>
    </div>
  </section>

  <section id="projects" className="projects section">
   <div className="sectionHead"><div><div className="label">● FEATURED WORK</div><h2>Selected <em>Projects.</em></h2></div><a className="outline" href="https://github.com/saviyo9037">View GitHub <ArrowUpRight size={15}/></a></div>
   <p className="sectionIntro">A selection of products and systems I've worked on across business, education, finance and AI.</p>
   <div className="projectFilters">{["All","Company Work","Freelance Project","Personal Project"].map(f=><button key={f} onClick={()=>setFilter(f)} aria-pressed={filter===f}>{f}</button>)}</div><div className="projectGrid">{projects.filter(p=>filter==="All"||p.label===filter).map((p,i)=><article className="projectCard" key={p.name}><div className="projectVisual">{p.image && <img src={p.image} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0}}/>}<span style={{position:"relative",zIndex:1,background:p.image?"rgba(0,0,0,0.5)":"",padding:p.image?"2px 5px":"",borderRadius:"4px",color:p.image?"#fff":"#ff7840"}}>0{i+1}</span>{p.label && <span style={{position:"absolute", top: "15px", right: "15px", zIndex:1, background:"var(--orange)", color: "#fff", padding:"4px 10px", borderRadius:"20px", fontSize:"9px", fontWeight: "bold"}}>{p.label}</span>}<div className="visualLines" style={{position:"relative",zIndex:1}}></div></div><div className="projectBody"><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>{p.link&&<a className="projectLink" href={p.link} target="_blank" rel="noreferrer">Explore project <ArrowUpRight size={14}/></a>}</div></article>)}</div>
  </section>

  <section id="experience" className="experience section dark">
   <div className="expIntro"><div className="label">● MY JOURNEY</div><h2>Experience<br/><em>& Background.</em></h2><p>A timeline of my professional journey.</p><span className="scribble">Growth<br/>Never<br/>Stops!</span></div>
   <div className="timeline">
    <article><time>NOW</time><div className="dot active"></div><div><h3>D3innovatives <span>Apr 2026 · Present</span></h3><b>MERN Stack Developer</b><p>Developed 10+ ERP modules, 40+ reusable React components and integrated 20+ REST APIs. Worked on barcode and thermal printer integrations.</p></div></article>
    <article><time>6 MONTHS</time><div className="dot"></div><div><h3>Irohub Infotech <span>Jun–Dec 2025</span></h3><b>MERN Stack Developer Intern</b><ul style={{marginTop: '10px', marginLeft: '15px', color: '#ccc', fontSize: '14px', lineHeight: '1.6'}}><li>Worked on real-time projects using MongoDB, Express.js, React and Node.js</li><li>Developed responsive web applications</li><li>Worked with REST APIs, routing and frontend integration</li></ul></div></article>
    <article><time>TRAINING</time><div className="dot"></div><div><h3>Avodha <span>Aug 2024–Feb 2025</span></h3><b>PHP Full Stack Training / Internship</b><p>Hands-on training and project-based experience with PHP, MySQL and web development.</p></div></article>
   </div>
  </section>

  <section id="education" className="education section">
     <div className="sectionHead"><div><div className="label">● ACADEMICS</div><h2>Education<br/><em>& Degrees.</em></h2></div></div>
     <div className="timeline" style={{marginTop: '40px', borderLeft: '1px solid #e0ddd5'}}>
        <article><time>2021—24</time><div className="dot" style={{borderColor: 'var(--paper)'}}></div><div><h3>Sree Sabareesa College Murikkumvayal <span>2021 — 2024</span></h3><b>Bachelor of Computer Applications (BCA)</b><p>Mahatma Gandhi University.</p></div></article>
     </div>
  </section>

  <section id="skills" className="skills section dark">
    <div className="skillIntro"><div className="label">● MY TOOLBOX</div><h2>Technologies<br/><em>I Work With.</em></h2><p>I use modern tools and technologies to build scalable and efficient solutions.</p></div>
    <div className="skillCategories" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
      {skillCategories.map(cat => (
        <div key={cat.title} className="skillCategory" style={{background: 'linear-gradient(145deg, #121518, #0c0e10)', border: '1px solid #1f2328', padding: '25px', borderRadius: '16px'}}>
          <h4 style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#ff6b24', margin: '0 0 15px'}}>{cat.title}</h4>
          <div className="skillChips" style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
            {cat.skills.map(s => <span key={s} style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '8px', fontSize: '11px', color: '#ccc', transition: '0.2s'}}>{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  </section>

  <section id="contact" className="contact section"><div><div className="label">● GET IN TOUCH</div><h2>Let's Build<br/>Something <em>Great.</em></h2><p>Tell me about your business and what you want to build. I can help define the scope and prepare a custom quotation.</p><div className="socials darkSocial"><a href="https://github.com/saviyo9037" target="_blank" rel="noreferrer"><Github/></a><a href="https://linkedin.com/in/saviyo-george" target="_blank" rel="noreferrer"><Linkedin size={24}/></a><a href="mailto:saviyogeorge903734@gmail.com"><Mail/></a></div><div style={{marginTop: '30px', fontSize: '14px', lineHeight: '1.8', color: '#555'}}><b>Phone:</b> +91 9037348073<br/><b>Email:</b> saviyogeorge903734@gmail.com<br/><b>Location:</b> Idukki, Kerala - 686514</div></div><div className="contactCard"><div className="label">● SEND A MESSAGE</div><h3>Have a project in mind?</h3><p>Let's work together and create something amazing.</p><a className="primary" href="https://wa.me/919037348073">Chat on WhatsApp <ArrowUpRight size={16}/></a><a className="secondary" href="mailto:saviyogeorge903734@gmail.com" style={{marginTop: '12px', border: '1px solid rgba(255,255,255,0.2)'}}>Send email <ArrowUpRight size={15}/></a></div></section>
  <a className="floatingContact" href="https://wa.me/919037348073">WhatsApp ↗</a><footer>© 2026 Saviyo George. Designed & built with intention.</footer>
 </main>
}