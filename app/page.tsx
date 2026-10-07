"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Download, Mail, MapPin, Code2, Layers3, Lightbulb, ChevronDown, Monitor, Briefcase, Database, Layout, Wrench } from "lucide-react";
import { FiGithub as Github, FiInstagram as Instagram, FiLinkedin as Linkedin } from "react-icons/fi";

const projects=[
 {name:"Netrifix ERP & POS",desc:"Complete business management solution with modules, reports and analytics.",tags:["Next.js","Node.js","MySQL"], image:"/erp.png", label:"Business Solution"},
 {name:"OverPrint",desc:"Custom t-shirt printing platform with product designer, orders and payments.",tags:["Next.js","Tailwind","MongoDB"], image:"/apzxrtra.png", label:"Web Application"},
 {name:"Betterinu LMS",desc:"Learning management system with courses, live classes and student management.",tags:["React","Node.js","MongoDB"], image:"/lms.jpeg", label:"Management System"},
 {name:"Irohub CRM",desc:"Customer relationship management system for businesses.",tags:["React","Express","MongoDB"], image:"/hospital.png", label:"Management System"},
 {name:"MoneyTrack",desc:"Personal finance management application with expense tracking and analytics.",tags:["React","Node.js","MongoDB"], image:"/moneytrac.jpeg", label:"Business Solution"},
 {name:"NOVA Voice OS",desc:"AI-powered voice assistant with STT, TTS and LLM integration.",tags:["Python","FastAPI","WebSocket"], image:"/rabbit.png", label:"AI / ML"},
 {name:"Garbage Classification System",desc:"Machine-learning based waste classification system designed to classify waste into different categories to support efficient recycling and waste management.",tags:["Python","Machine Learning","OpenCV"], image:"", label:"AI / ML"}
];

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
    <h2>Full Stack Developer & Software Solution Builder</h2>
    <h3 style={{fontSize: '14px', color: '#ff6b24', marginTop: '-12px', marginBottom: '18px', fontWeight: 'normal', letterSpacing: '1px', textTransform: 'uppercase'}}>MERN & PHP · Web Applications · Business Solutions</h3>
    <p>I build web applications and business solutions that turn real-world workflows into practical digital products.</p>
    <div className="actions"><a className="primary" href="#contact">Let's Work Together <ArrowUpRight size={16}/></a><a className="secondary" href="/resume.pdf" target="_blank">Download CV <Download size={15}/></a></div>
    <div className="socials"><a href="https://github.com/saviyo9037" target="_blank" rel="noreferrer"><Github size={17}/></a><a href="https://linkedin.com/in/saviyo-george" target="_blank" rel="noreferrer"><Linkedin size={17}/></a><a href="mailto:saviyogeorge903734@gmail.com"><Mail size={17}/></a></div>
    <div className="availabilityBadge" style={{marginTop: '25px', display: 'inline-block', fontSize: '11px', color: '#aaa', border: '1px solid rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '30px', background: 'rgba(255,255,255,0.03)'}}>
      <span style={{color: '#00e676', marginRight: '8px'}}>●</span>Available for freelance projects and full-time opportunities
    </div>
    <br/><a className="scrollHint" href="#about"><ChevronDown size={16}/> Scroll down</a>
   </div>
   <div className="portraitWrap"><div className="portraitHalo"></div><img src="/saviyo-coat-cutout.png" alt="Saviyo"/></div>
   <div className="heroNote">BUILD<br/>DEVELOP<br/>SOLVE<br/>REPEAT</div>
   <div className="experienceBadge"><strong>1+</strong><span>Years<br/>Professional<br/>Experience</span></div>
  </section>

  <section id="about" className="about section">
   <div className="aboutImage"><img src="/saviyo-cutout.png" alt="Saviyo portrait"/></div>
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
    <p className="sectionIntro">End-to-end solutions for startups, businesses and individuals.</p>
    <div className="serviceGrid">
      <article className="serviceCard"><i><Monitor size={22}/></i><h3>Web Application Development</h3><p>Custom web applications using MERN, PHP and modern frontend technologies.</p><div style={{fontSize: '11px', color: '#ff6b24', marginTop: '10px', fontWeight: 'bold'}}>React · Next.js · Node.js · PHP</div><ArrowUpRight className="sIcon" size={16}/></article>
      <article className="serviceCard"><i><Briefcase size={22}/></i><h3>Business Management Solutions</h3><p>Practical software solutions for business workflows, management and operations.</p><div style={{fontSize: '11px', color: '#ff6b24', marginTop: '10px', fontWeight: 'bold'}}>ERP · POS · CRM · LMS</div><ArrowUpRight className="sIcon" size={16}/></article>
      <article className="serviceCard"><i><Database size={22}/></i><h3>API Development & Integration</h3><p>REST APIs, authentication, third-party integrations and backend services.</p><div style={{fontSize: '11px', color: '#ff6b24', marginTop: '10px', fontWeight: 'bold'}}>Node.js · Express · REST API</div><ArrowUpRight className="sIcon" size={16}/></article>
      <article className="serviceCard"><i><Layout size={22}/></i><h3>Frontend Development</h3><p>Responsive, modern and user-focused interfaces.</p><div style={{fontSize: '11px', color: '#ff6b24', marginTop: '10px', fontWeight: 'bold'}}>React · Next.js · Tailwind CSS</div><ArrowUpRight className="sIcon" size={16}/></article>
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
   <div className="sectionHead"><div><div className="label">● FEATURED WORK</div><h2>Selected <em>Projects.</em></h2></div><a className="outline" href="#contact">View All Projects <ArrowUpRight size={15}/></a></div>
   <p className="sectionIntro">A selection of products and systems I've worked on across business, education, finance and AI.</p>
   <div className="projectGrid">{projects.map((p,i)=><article className="projectCard" key={p.name}><div className="projectVisual">{p.image && <img src={p.image} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0}}/>}<span style={{position:"relative",zIndex:1,background:p.image?"rgba(0,0,0,0.5)":"",padding:p.image?"2px 5px":"",borderRadius:"4px",color:p.image?"#fff":"#ff7840"}}>0{i+1}</span>{p.label && <span style={{position:"absolute", top: "15px", right: "15px", zIndex:1, background:"var(--orange)", color: "#fff", padding:"4px 10px", borderRadius:"20px", fontSize:"9px", fontWeight: "bold"}}>{p.label}</span>}<div className="visualLines" style={{position:"relative",zIndex:1}}></div></div><div className="projectBody"><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}<ArrowUpRight className="projectArrow" size={17}/></div></div></article>)}</div>
  </section>

  <section id="experience" className="experience section dark">
   <div className="expIntro"><div className="label">● MY JOURNEY</div><h2>Experience<br/><em>& Background.</em></h2><p>A timeline of my professional journey.</p><span className="scribble">Growth<br/>Never<br/>Stops!</span></div>
   <div className="timeline">
    <article><time>NOW</time><div className="dot active"></div><div><h3>D3innovatives <span>7 Months · Present</span></h3><b>MERN Stack Developer</b><p>Working on ERP, POS and other web solutions using React, Node.js and modern technologies.</p></div></article>
    <article><time>6 MONTHS</time><div className="dot"></div><div><h3>Irohub Infotech <span>6 Months</span></h3><b>MERN Stack Developer Intern</b><ul style={{marginTop: '10px', marginLeft: '15px', color: '#ccc', fontSize: '14px', lineHeight: '1.6'}}><li>Worked on real-time projects using MongoDB, Express.js, React and Node.js</li><li>Developed responsive web applications</li><li>Worked with REST APIs, routing and frontend integration</li></ul></div></article>
    <article><time>TRAINING</time><div className="dot"></div><div><h3>Avodha <span>Training / Internship</span></h3><b>PHP Full Stack Training / Internship</b><p>Hands-on training and project-based experience with PHP, MySQL and web development.</p></div></article>
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
            {cat.skills.map(s => <span key={s} style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '8px', fontSize: '11px', color: '#ccc', transition: '0.2s cursor-pointer'}}>{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  </section>

  <section id="contact" className="contact section"><div><div className="label">● GET IN TOUCH</div><h2>Let's Build<br/>Something <em>Great.</em></h2><p>I'm open to discussing new opportunities, interesting projects, freelance work, or collaborations.</p><div className="socials darkSocial"><a href="https://github.com/saviyo9037" target="_blank" rel="noreferrer"><Github/></a><a href="https://linkedin.com/in/saviyo-george" target="_blank" rel="noreferrer"><Linkedin size={24}/></a><a href="mailto:saviyogeorge903734@gmail.com"><Mail/></a></div><div style={{marginTop: '30px', fontSize: '14px', lineHeight: '1.8', color: '#555'}}><b>Phone:</b> +91 9037348073<br/><b>Email:</b> saviyogeorge903734@gmail.com<br/><b>Location:</b> Idukki, Kerala - 686514</div></div><div className="contactCard"><div className="label">● SEND A MESSAGE</div><h3>Have a project in mind?</h3><p>Let's work together and create something amazing.</p><a className="primary" href="mailto:saviyogeorge903734@gmail.com">Let's Talk <ArrowUpRight size={16}/></a><a className="secondary" href="https://github.com/saviyo9037" style={{marginTop: '12px', border: '1px solid rgba(255,255,255,0.2)'}}>View GitHub <ArrowUpRight size={15}/></a></div></section>
  <footer>© 2026 Saviyo George. Designed & built with intention.</footer>
 </main>
}