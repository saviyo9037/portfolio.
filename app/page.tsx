"use client";
import {useState} from "react";
import {ArrowUpRight, ArrowRight, Menu, X, Globe, ShoppingBag, Layers3, Code2, Database, Wrench, Mail, MapPin, Check, Smartphone, Monitor, MessageCircle} from "lucide-react";
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
    liveUrl: null,
    githubUrl: null,
    cta: "Company Project · Private Access",
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
    liveUrl: null,
    githubUrl: null,
    cta: "Company Project · Private Access",
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
    liveUrl: null,
    githubUrl: null,
    cta: "Company Project · Private Access",
    image: "/apzxrtra.webp",
    gradient: "from-sky-400 to-violet-500",
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
  {"id":"vernon-men","title":"VÉRON MEN","category":"personal","categoryLabel":"Demo Project","type":"Storefront concept","description":"Storefront concept with fashion catalogue and demo cart. Frontend only; no live payments or backend.","tags":["Next.js","JavaScript","E-commerce"],"liveUrl":"https://vernon-men.vercel.app","githubUrl":"https://github.com/saviyo9037/Vernon-men","cta":"View preview","image":"","featured":false},
  {"id":"staykerala","title":"StayKerala","category":"personal","categoryLabel":"Demo Project","type":"Resort website concept","description":"Resort website concept with illustrative properties and demo booking and enquiry flows. No live reservation system.","tags":["Next.js","JavaScript","Tailwind CSS"],"liveUrl":"https://staykerala.vercel.app","githubUrl":"https://github.com/saviyo9037/stay_kerala","cta":"View preview","image":"","featured":false},
  {"id":"fern-flow","title":"Fern & Flow","category":"personal","categoryLabel":"Demo Project","type":"Homestay website concept","description":"Kerala homestay prototype with six sample rooms, gallery, booking enquiry validation and WhatsApp handoff. Demo admin uses browser-local storage.","tags":["Next.js","React","TypeScript"],"liveUrl":"https://rest-room.vercel.app","githubUrl":"https://github.com/saviyo9037/rest-room","cta":"View preview","image":"","featured":false},
  {"id":"malaram","title":"Malaram Homestay","category":"personal","categoryLabel":"Demo Project","type":"Hospitality website concept","description":"Responsive homestay showcase and WhatsApp booking enquiry prototype. Sample property information; no availability or payment system.","tags":["Next.js","TypeScript","CSS"],"liveUrl":"https://home-stay-eight.vercel.app","githubUrl":"https://github.com/saviyo9037/home_stay","cta":"View preview","image":"","featured":false},
  {"id":"spices-website","title":"Spices Website","category":"personal","categoryLabel":"Personal Project","type":"Business website project","description":"Next.js website project for a spices business concept.","tags":["Next.js","JavaScript"],"liveUrl":"https://spices-web-green.vercel.app","githubUrl":"https://github.com/saviyo9037/spices_web","cta":"View preview","image":"","featured":false},
  {"id":"reptrack","title":"RepTrack Gym Tracker","category":"personal","categoryLabel":"Personal Project","type":"Mobile application","description":"Android workout planner and daily routine tracking application built with Flutter and local SQLite storage.","tags":["Flutter","Dart","SQLite"],"liveUrl":null,"githubUrl":"https://github.com/saviyo9037/Gym-Routine","cta":"GitHub","image":"","featured":false},
  {"id":"garbage-classification","title":"Garbage Classification","category":"personal","categoryLabel":"Personal Project","type":"Machine learning project","description":"Django application for uploading and classifying waste images using a CNN model, with MySQL prediction history.","tags":["Python","Django","TensorFlow","MySQL"],"liveUrl":null,"githubUrl":"https://github.com/saviyo9037/Garbage-Classification","cta":"GitHub","image":"","featured":false},
];
const services=[
{n:"01",icon:Globe,title:"Business websites",desc:"A distinctive, fast website that makes your business easy to discover and contact.",items:"Company websites · Landing pages · Booking enquiries"},
{n:"02",icon:ShoppingBag,title:"E-commerce",desc:"Product discovery, shopping carts and checkout flows built around your customers.",items:"Online stores · Product catalogues · Payment integration"},
{n:"03",icon:Layers3,title:"Business software",desc:"Replace repetitive manual work with a system built around your everyday operations.",items:"ERP · POS · CRM · LMS · Dashboards"},
{n:"04",icon:Code2,title:"Custom applications",desc:"Responsive web apps and useful tools that solve specific business problems.",items:"React · Next.js · MERN · PHP"},
{n:"05",icon:Database,title:"API & integrations",desc:"Connect your applications, data and third-party services into a reliable workflow.",items:"REST APIs · Authentication · WebSockets"},
{n:"06",icon:Wrench,title:"Redesign & support",desc:"Improve an existing website, fix usability issues and add new functionality.",items:"UI refresh · Bug fixes · Maintenance"}];
const featured=["betterinu-website","erp-pos","vernon-men","staykerala","rabbit-ecommerce","labcare-clinical-os","betterinu-lms","fern-flow","spices-website","moneytrack"];
const imageFor=(p:typeof sourceProjects[number])=>p.id==="erp-pos"?"/erp.png":p.id==="betterinu-lms"?"/lms.jpeg":p.id==="moneytrack"?"/moneytrac.jpeg":p.image?"https://raw.githubusercontent.com/saviyo9037/portfolio/main/public"+p.image:"";
const wa="https://wa.me/919037348073";
const skills=["React","Next.js","TypeScript","JavaScript","Node.js","Express","MongoDB","PostgreSQL","MySQL","Tailwind CSS","Python","FastAPI","PHP","Flutter","Git","REST APIs"];
export default function Home(){
const [menu,setMenu]=useState(false);
const [filter,setFilter]=useState("Featured");
const [name,setName]=useState("");
const [service,setService]=useState("Business website");
const [budget,setBudget]=useState("Not decided");
const [brief,setBrief]=useState("");
const list=filter==="Featured"?featured.map(id=>sourceProjects.find(p=>p.id===id)!).filter(Boolean):sourceProjects.filter(p=>filter==="All"||p.categoryLabel===filter);
return <main>
<header className="header"><a className="logo" href="#home"><span>SG<span className="accent">.</span></span><small>SAVIYO GEORGE</small></a><nav className={menu?"nav open":"nav"} aria-label="Main navigation">{[["Work","projects"],["Services","services"],["About","about"],["Process","process"]].map(([title,id])=><a key={id} href={"#"+id} onClick={()=>setMenu(false)}>{title}</a>)}</nav><a className="headerCta" href="#contact">Start a project <ArrowUpRight size={15}/></a><button className="menuToggle" aria-label={menu?"Close menu":"Open menu"} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
<section className="hero wrap" id="home"><div className="heroText"><div className="eyebrow"><span className="statusDot"/> AVAILABLE FOR PROJECT ENQUIRIES</div><h1>Make your<br/>business<br/><em>stand out.</em></h1><p>I'm Saviyo, a full stack developer in Kerala. I build distinctive websites and practical software that help businesses move forward.</p><div className="actions"><a className="btn primary" href="#contact">Discuss your project <ArrowUpRight size={19}/></a><a className="btn ghost" href="#projects">Explore my work <ArrowRight size={17}/></a></div><div className="heroFoot"><MapPin size={16}/> Kerala, India <span/> Working with businesses & startups</div></div>
<div className="heroArt"><div className="artGrid"/><div className="artLabel">SELECTED WORK <span>01 — 03</span></div><div className="screen mainScreen"><div className="screenTop"><i/><i/><i/><small>ERP / POS MANAGEMENT</small></div><img src="/erp.png" alt="ERP and POS project screenshot"/><div className="screenCaption"><span>BUSINESS SYSTEMS</span><b>Make work flow.</b></div></div><div className="screen miniScreen"><div className="screenTop"><i/><i/><i/><small>LMS</small></div><img src="/lms.jpeg" alt="Learning management project screenshot"/></div><div className="phone"><div className="notch"/><img src="/moneytrac.jpeg" alt="MoneyTrack application screenshot"/></div><div className="artBadge"><span>↗</span><div><b>Design meets code.</b><small>Ideas into working products</small></div></div><div className="artBottom">BUILT FOR REAL WORKFLOWS <span>✳</span></div></div>
</section>
<div className="proof wrap"><div><span>01 / EXPERIENCE</span><strong>10+</strong><p>ERP modules</p></div><div><span>02 / ENGINEERING</span><strong>40+</strong><p>Reusable UI components</p></div><div><span>03 / INTEGRATIONS</span><strong>20+</strong><p>REST APIs</p></div><div className="proofNote"><span>LOCAL ROOTS. DIGITAL REACH.</span><p>Business-first thinking.<br/>Developer-led execution.</p></div></div>
<section id="projects" className="work light"><div className="wrap"><div className="sectionTop"><div><div className="kicker">01 — SELECTED WORK</div><h2>Proof in the<br/><em>projects.</em></h2></div><p>Professional contributions, independent applications and clearly labelled design prototypes. Explore the work behind the code.</p></div><div className="filters" aria-label="Project filters">{["Featured","All","Company Work","Freelance Project","Personal Project","Demo Project","Upcoming"].map(f=><button key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="workGrid">{list.map((p,i)=>{const url=p.hideLinks?null:p.category==="company"?(p.publicUrl&&!p.publicUrl.includes("github.com")?p.publicUrl:null):p.publicUrl||p.liveUrl||p.githubUrl;const img=imageFor(p);return <article className="workCard" key={p.id}><div className="workVisual"><div className="visualHeader"><span>{String(i+1).padStart(2,"0")} / {p.categoryLabel}</span><span>↗</span></div><div className="visualFallback"><Monitor size={32}/><b>{p.title}</b><small>{p.tags.slice(0,3).join(" · ")}</small></div>{img&&<img src={img} alt={p.title+" project preview"} loading="lazy" onError={e=>{e.currentTarget.style.display="none"}}/>}</div><div className="workBody"><div className="workType">{p.type}</div><h3>{p.title}</h3><p>{p.description.split("\n")[0]}</p><div className="chips">{p.tags.slice(0,4).map(t=><span key={t}>{t}</span>)}</div>{url?<a className="textLink" href={url} target="_blank" rel="noreferrer">{p.cta} <ArrowUpRight size={15}/></a>:<span className="privateLabel">{p.cta}</span>}</div></article>})}</div>{filter==="Featured"&&<button className="more" onClick={()=>setFilter("All")}>View all {sourceProjects.length} projects <ArrowRight size={18}/></button>}</div></section>
<section id="services" className="wrap services"><div className="sectionTop"><div><div className="kicker">02 — WHAT I CAN BUILD</div><h2>Good design.<br/><em>Useful software.</em></h2></div><p>Whether you're launching something new or upgrading an existing business, start with the right digital solution.</p></div><div className="servicesGrid">{services.map(s=><a key={s.n} className="service" href="#contact" onClick={()=>setService(s.title)}><div className="serviceTop"><s.icon size={27} strokeWidth={1.5}/><span>{s.n}</span></div><h3>{s.title}</h3><p>{s.desc}</p><div className="serviceBottom"><small>{s.items}</small><ArrowUpRight size={19}/></div></a>)}</div></section>
<section id="about" className="light about"><div className="wrap aboutGrid"><div className="profile"><div className="profileHead"><span>THE DEVELOPER</span><span>KERALA / IN</span></div><div className="portrait"><img src="/saviyo-cutout.png" alt="Saviyo George"/></div><div className="profileBottom"><b>Saviyo George</b><small>Full Stack Developer</small><a href="/Saviyo_George_Resume.pdf" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={14}/></a></div></div><div><div className="kicker">03 — THE PERSON BEHIND THE WORK</div><h2>Practical by nature.<br/><em>Creative by choice.</em></h2><p className="aboutLead">I bring together design, development and business understanding to create useful digital products. My professional work includes ERP, POS, CRM and educational platforms.</p><div className="experience"><article><span>APR 2026 — PRESENT</span><h3>D3innovatives</h3><p>MERN Stack Developer · ERP, POS, printing integrations and business applications.</p></article><article><span>JUN — DEC 2025</span><h3>Irohub Infotech</h3><p>MERN Stack Developer Intern · Live CRM, REST APIs and role-based access.</p></article><article><span>AUG 2024 — FEB 2025</span><h3>Avodha</h3><p>PHP Full Stack Development Internship.</p></article><article><span>2021 — 2024</span><h3>Bachelor of Computer Applications</h3><p>Sree Sabareesa College · Mahatma Gandhi University.</p></article></div><div className="chips skills">{skills.map(s=><span key={s}>{s}</span>)}</div></div></div></section>
<section id="process" className="wrap process"><div className="sectionTop"><div><div className="kicker">04 — HOW WE WORK</div><h2>From first hello<br/>to <em>launch.</em></h2></div><p>A straightforward process with clear scope, design feedback and practical delivery.</p></div><div className="steps">{[["01","Discover","Understand your business, goals and requirements."],["02","Design","Agree on the scope, visual direction and quotation."],["03","Develop","Build the product, share progress and refine details."],["04","Deliver","Review, test and launch; agree on ongoing support."]].map(([n,t,d])=><article key={n}><span>{n} /</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
<section id="contact" className="contact"><div className="wrap contactGrid"><div><div className="kicker">05 — LET'S TALK</div><h2>Have an idea?<br/><em>Let's build it.</em></h2><p>Tell me what your business needs. Let's discuss the best approach and a custom quote.</p><div className="contactLinks"><a href={wa}><MessageCircle size={20}/> WhatsApp <ArrowUpRight size={17}/></a><a href="mailto:saviyogeorge903734@gmail.com"><Mail size={20}/> Email me <ArrowUpRight size={17}/></a><a href="https://github.com/saviyo9037">GitHub <ArrowUpRight size={17}/></a><a href="https://linkedin.com/in/saviyo-george">LinkedIn <ArrowUpRight size={17}/></a></div></div><form onSubmit={e=>{e.preventDefault();window.location.href=wa+"?text="+encodeURIComponent("Hi Saviyo! I'd like to discuss a project.\nName: "+name+"\nService: "+service+"\nBudget: "+budget+"\nProject: "+brief)}}><h3>Tell me about your project</h3><label>Your name<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Name or business name"/></label><label>What do you need?<select value={service} onChange={e=>setService(e.target.value)}>{["Business website",...services.map(s=>s.title),"Other"].map(s=><option key={s}>{s}</option>)}</select></label><label>Estimated budget<select value={budget} onChange={e=>setBudget(e.target.value)}>{["Not decided","Under ₹10,000","₹10,000–25,000","₹25,000–50,000","₹50,000+"].map(s=><option key={s}>{s}</option>)}</select></label><label>Project details<textarea required rows={4} value={brief} onChange={e=>setBrief(e.target.value)} placeholder="What would you like to build?"/></label><button className="btn primary" type="submit">Continue on WhatsApp <ArrowUpRight size={18}/></button><small>Opens WhatsApp with your enquiry. No message is sent automatically.</small></form></div></section>
<footer className="wrap footer"><a className="logo" href="#home">SG<span className="accent">.</span></a><span>© 2026 Saviyo George · Designed & developed with care.</span><a href="#home">Back to top ↑</a></footer><a className="floating" href={wa} aria-label="Chat on WhatsApp"><MessageCircle size={23}/></a></main>}
