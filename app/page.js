'use client';

import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Subtitles } from 'lucide-react';
import Image from 'next/image';


export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState(0);  // <-- Add this line


useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const codeSnippets = [
    'I <- analyse() + predict(using = "Sports Data")',
    'var api = new WebAPI("Scalable & Secure");',
    'model.optimize(ml_workflow=True)',
    "SELECT * FROM data_models WHERE impact = 'high';",
    'const ui = createUX({ interactive: true });'
  ];

  const projects = [
    {
      
      title: 'Multi-modal AI Assistant using LangChain',
      tech: ['Python', 'LangChain', 'GPT-4 API', 'FastAPI', 'Docker', 'AWS'],
      desc: 'Currently I am working on developing an intelligent personal assistant integrating GPT-4 and LangChain for context-aware interactions and capable of retrieving information',
      link: 'https://github.com/DivijShah',
      image: '/images/AI.jpeg'
    },
    {
      title: 'Realty- Enterprise Resource Planner App',
      tech: ['ASP.NET', 'C#', 'SQLite'],
      desc: 'Developed a modular API for property scheduling and assignment. Integrated validation, authentication, and data storage; tested with Postman for load handling and endpoint stability.',
      link: 'https://github.com/DivijShah',
      image: '/images/realestate.png'
    },
    {
      title: 'Interactive Study Course Book',
      tech: ['Python', 'MySQL', 'PostgreSQL'],
      desc: 'Built a backend system with MySQL for managing courses, users, and assessments in a digital textbook platform. Designed normalized schema and implemented dynamic role logic for teachers, students, and admins.',
      link: 'https://github.com/DivijShah/interactive-study-book',
      image: '/images/study.jpg'
    },
    {
      title: 'Story of the Game (Analysis and Prediction)',
      tech: ['R', 'Hadoop', 'Spark'],
      desc: 'Live game stats analyzer for soccer. Used R and Spark to compute advanced stats with 94% accuracy. Added some stats for score prediction, scorer prediction and projected substitutions.',
      link: 'https://github.com/DivijShah/story-of-the-game-using-R',
      image: '/images/game.jpeg'
    },
    {
      title: 'Drowsi-Sense using Computer Vision',
      tech: ['Python', 'TensorFlow', 'OpenCV'],
      desc: 'Developed a real-time drowsiness detection system using CNNs with 4 convolutional layers, batch normalization, dropout regularization, and softmax output, achieving 97% accuracy. Evaluated using precision, recall, and F1-score on 50K+ labeled image dataset.',
      link: 'https://github.com/DivijShah/drowsi-sence',
      image: '/images/drowsi.jpeg'
    },
     {
      title: 'CarbonPredict using ML',
      tech: ['Python', 'PySpark', 'Hadoop'],
      desc: 'Built a big data model to predict 2022 CO2 emissions in countries like the USA, India, and China. Achieved 85% accuracy with Linear Regression and Random Forest algorithms.',
      link: 'https://github.com/DivijShah/Predicting-CO2-emissions-using-ML-techniques',
      image: '/images/co2.png'
    }
  ];

const colorMap = {
  // 🟦 Coding Languages (Blue)
  'Python': 'bg-blue-100 text-blue-900',
  'C#': 'bg-blue-100 text-blue-900',
  'SQL': 'bg-blue-100 text-blue-900',
  'R': 'bg-blue-100 text-blue-900',
  'JavaScript': 'bg-blue-100 text-blue-900',
  'Java': 'bg-blue-100 text-blue-900',
  'Swift': 'bg-blue-100 text-blue-900',

  // 💛 Libraries (Yellow)
  'TensorFlow': 'bg-yellow-100 text-yellow-900',
  'OpenCV': 'bg-yellow-100 text-yellow-900',
  'Airflow': 'bg-yellow-100 text-yellow-900',
  'Spark': 'bg-yellow-100 text-yellow-900',
  'Hadoop': 'bg-yellow-100 text-yellow-900',
  'Context API': 'bg-yellow-100 text-yellow-900',
  'Redux': 'bg-yellow-100 text-yellow-900',
  'NumPy': 'bg-yellow-100 text-yellow-900',
  'SciPy': 'bg-yellow-100 text-yellow-900',
  'Keras': 'bg-yellow-100 text-yellow-900',

  // 💚 Tools (Green)
  'Tableau': 'bg-green-100 text-green-900',
  'Power BI': 'bg-green-100 text-green-900',
  'RapidMiner': 'bg-green-100 text-green-900',
  'Excel': 'bg-green-100 text-green-900',
  'FusionGO': 'bg-green-100 text-green-900',
  'SSMS': 'bg-green-100 text-green-900',
  'LangChain': 'bg-green-100 text-green-900',
  'Supabase': 'bg-green-100 text-green-900',
  'Figma': 'bg-green-100 text-green-900',


  // 💖 Frameworks (Pink)
  '.NET': 'bg-pink-100 text-pink-800',
  'ASP.NET': 'bg-pink-100 text-pink-800',
  'Docker': 'bg-pink-100 text-pink-800',
  'FastAPI': 'bg-pink-100 text-pink-800',
  'GPT-4 API': 'bg-pink-100 text-pink-800',
  'React Native': 'bg-pink-100 text-pink-800',
  'Expo Go': 'bg-pink-100 text-pink-800',
  'PySpark': 'bg-pink-100 text-pink-800',

  // ⚪️ Databases (neutral gray as optional category)
  'SQLite': 'bg-gray-200 text-gray-800',
  'MySQL': 'bg-gray-200 text-gray-800',
  'PostgreSQL': 'bg-gray-200 text-gray-800',
  'AWS': 'bg-gray-200 text-gray-800',
  'GCP': 'bg-gray-200 text-gray-800'
};




  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  scrolled ? 'bg-black/25 backdrop-blur-md shadow-md' : 'bg-transparent'
}`}>

 <div className="max-w-7xl mx-auto px-4 py-4 md:py-3 flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0">
   <div className="overflow-x-auto max-w-full">
          <nav className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base lg:text-lg font-medium text-white">
       <a href="#home" className="hover:text-blue-400 px-2 py-1">Home</a>
       <a href="#experience" className="hover:text-blue-400 px-2 py-1">Experience</a>
       <a href="#projects" className="hover:text-blue-400 px-2 py-1">Projects</a>
       <a href="#education" className="hover:text-blue-400 px-2 py-1">Education</a>
       <a href="#education" className="hover:text-blue-400 px-2 py-1">Tech. stack</a>
       <a href="#more" className="hover:text-blue-400 px-2 py-1">More about me</a>
     </nav>
  </div>

           <div className="flex space-x-4 justify-center md:justify-start mt-2 md:mt-0">
    <a href="https://linkedin.com/in/divijvshah" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4v12h-4v-12zM8.5 8.5h3.5v1.71h.05c.49-.93 1.7-1.91 3.5-1.91 3.74 0 4.5 2.46 4.5 5.67v6.53h-4v-5.79c0-1.38-.02-3.15-1.92-3.15-1.92 0-2.22 1.5-2.22 3.05v5.89h-4v-12z" />
      </svg>
    </a>

    {/* Hover dropdown for Email */}
    <div className="relative group">
      <button className="text-white hover:text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>

      <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md px-3 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 flex items-center gap-2">
        <span>divij4901@gmail.com</span>
        <button
          onClick={() => navigator.clipboard.writeText("divij4901@gmail.com")}
          className="hover:text-blue-500 text-gray-600"
          title="Copy"
        >
          📋
        </button>
      </div>
    </div>

    <a href="/resume.pdf" className="text-white hover:text-blue-400">CV</a>
  </div>
</div>

      </header>
      <section id="home" className="relative w-full h-screen pt-20 md:pt-0">

     <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
    <h1 className="text-6xl font-bold mb-6">Hi, I’m Divij Shah</h1>

         <div className="bg-black bg-opacity-60 font-mono p-4 md:p-6 rounded-lg text-sm md:text-lg shadow-lg w-[90vw] md:w-[580px] h-20 md:h-28 flex items-center justify-start">
      <Typewriter
        words={codeSnippets}
        loop
        typeSpeed={50}
        deleteSpeed={25}
        delaySpeed={1500}
        cursor
        cursorStyle="|"
      />
    </div>

<div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white shadow-lg overflow-hidden mt-4 md:mt-6">
  <Image
    src="/images/profile.JPG"
    alt="Divij Shah"
    fill
    className="object-cover"
  />
</div>


    {/* Intro Line */}
    <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4 text-center z-10">
  <h6 className="text-sm md:text-lg lg:text-xl font-semibold text-white max-w-2xl mx-auto px-2">
    Data-focused software engineer passionate about building scalable, AI-driven systems and extracting insight from complex sports and ML data to deliver intelligent solutions.
  </h6>
</div>
  </div>
</section>
<section id="experience" className="w-full pt-8 md:pt-12 pb-32 text-white relative z-10">

  {/*style={{
    backgroundImage: "url('/images/bg-section1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}

  <div className="absolute inset-0 bg-black/75 backdrop-blur-sm z-0" />*/}

  <div className="relative max-w-[1400px] mx-auto px-4 md:px-6">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">Work Experience</h2>

         {/* Timeline with arrow - Desktop */}
     <div className="absolute top-1/2 left-0 w-full h-1 bg-white/30 z-0 hidden md:block">
       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-12 border-b-12 border-l-12 border-t-transparent border-b-transparent border-l-white"></div>
     </div>
     
           {/* Mobile vertical arrow */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-white/30 z-0 block md:hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
      </div>

       <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-3 relative z-10 pb-4 px-4 md:px-0">
      {[
        {
          role: "Data Science Intern",
          company: "Mement.io",
          duration: "Jan 2022 – May 2022",
          logo: "/images/mement.jpeg",
          side: "bottom",
          duties: [
            "Built ETL pipelines reducing training time by 25%",
            "Debugged AI/ML models, increasing accuracy to 82%",
            "Analyzed and resolved model inefficiencies"
          ],
          tech: "Python, Tableau, Airflow",
        },
        {
          role: "Business Analyst Intern",
          company: "TalentServe",
          duration: "May 2022 – Jul 2022",
          logo: "/images/talentserve.jpeg",
          side: "top",
          duties: [
            "Designed 20+ Power BI dashboards",
            "Created metadata taxonomies",
            "Automated reporting, reducing manual work by 30%"
          ],
          tech: "Python, Tableau, RapidMiner",
        },
        {
          role: "Software Engineering Intern",
          company: "Jinee Infotech",
          duration: "Jan 2023 – May 2023",
          logo: "/images/jinee.jpeg",
          side: "bottom",
          duties: [
            "Built backend APIs for scalability",
            "Optimized SQL queries for performance gains",
            "Secured endpoints with authentication"
          ],
          tech: "C#, SQL, ASP.NET, SSMS",
        },
        {
          role: "Program Analyst",
          company: "NC State University",
          duration: "Mar 2024 – May 2025",
          logo: "/images/wellrec.png",
          side: "top",
          duties: [
            "Automated ETL pipelines improving accuracy 30%",
            "Integrated systems across 5+ departments",
            "Implemented data governance to reduce inconsistencies"
          ],
          tech: "PostgreSQL, Power BI, Excel, JavaScript, FusionGO",
        },
        {
          role: "Fullstack Developer",
          company: "Aster Inc.",
          duration: "Jul 2025 – Present",
          logo: "/images/aster.png",
          side: "bottom",
          duties: [
            "Built iOS modules in React Native",
            "Integrated Supabase backend with mobile UI",
            "Optimized app performance, cutting load time by 40%"
          ],
          tech: "React Native, Supabase, Expo Go, Swift",
        },
      ].map((item, index) => (
                 <div key={index} className="relative flex-shrink-0 flex flex-col items-center w-[300px] md:w-[200px] snap-start">
           <div className={`${item.side === 'top' ? 'mb-6' : 'mt-6'} w-[300px] md:w-[200px]`}>
                                           <div
                 className="relative group bg-cover bg-center border border-white/10 rounded-xl shadow-md h-[300px] md:h-[200px] overflow-hidden transition-all duration-500 hover:scale-110 md:hover:scale-125 hover:shadow-2xl hover:z-20"
                 style={{ backgroundImage: `url(${item.logo})` }}
               >
                 {/* Overlay tint */}
                 <div className="absolute inset-0 bg-black/85 md:group-hover:bg-black/95 transition-all duration-300"></div>

                 {/* Mobile view - Always show all content */}
                 <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-2 md:hidden">
                   <h4 className="font-bold text-lg mb-1">{item.role}</h4>
                   <p className="text-xs opacity-70">{item.duration}</p>
                   <p className="mt-1 text-sm text-white/80 font-medium">{item.company}</p>
                   
                   {/* Mobile: Show duties and tech stack directly */}
                   <div className="mt-3 text-xs text-white text-left w-full">
                     <ul className="list-disc list-inside space-y-1 mb-3">
                       {item.duties.map((duty, i) => (
                         <li key={i}>{duty}</li>
                       ))}
                     </ul>
                     {/* Tech stack pills */}
                     <div className="flex flex-wrap justify-center gap-1">
                       {item.tech.split(',').map((tech, i) => {
                         const colorClasses = colorMap[tech.trim()] || 'bg-white/20 text-white';
                         return (
                           <span
                             key={i}
                             className={`text-xs px-2 py-1 rounded-full border border-white/20 ${colorClasses}`}
                           >
                             {tech.trim()}
                           </span>
                         );
                       })}
                     </div>
                   </div>
                 </div>

                 {/* Desktop view - Hover effects */}
                 <div className="relative z-10 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300 h-full px-2 hidden md:flex">
                   <h4 className="font-bold text-lg mb-1">{item.role}</h4>
                   <p className="text-xs opacity-70">{item.duration}</p>
                   <p className="mt-1 text-sm text-white/80 font-medium">{item.company}</p>
                 </div>

                 {/* Desktop hover details */}
                 <div className="absolute inset-0 z-20 flex flex-col justify-start items-center px-3 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-h-[200px] hidden md:flex">
                   <ul className="text-xs text-white list-disc list-inside space-y-1 text-left w-full">
                     {item.duties.map((duty, i) => (
                       <li key={i}>{duty}</li>
                     ))}
                   </ul>
                   {/* Tech stack pills */}
                   <div className="mt-3 flex flex-wrap justify-center gap-1">
                     {item.tech.split(',').map((tech, i) => {
                       const colorClasses = colorMap[tech.trim()] || 'bg-white/20 text-white';
                       return (
                         <span
                           key={i}
                           className={`text-xs px-2 py-1 rounded-full border border-white/20 ${colorClasses}`}
                         >
                           {tech.trim()}
                         </span>
                       );
                     })}
                   </div>
                 </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="projects" className="w-full pt-8 md:pt-12 pb-24 text-white relative z-10" >

  {/* Removed backgroundImage + blur completely */}

  {/* Content overlay */}
     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Projects</h2>

              {/* Project carousel */}
           <div className="group relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-video bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl min-h-[300px]">
        <div className="absolute inset-0">
     <Image
       src={projects[current].image}
       alt={projects[current].title}
       fill
       className="object-cover opacity-20"
       />
       </div>

                             {/* Mobile view - Always show all content */}
               <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-center transition-opacity duration-500 md:hidden">
         <h3 className="text-lg md:text-2xl font-bold mb-2 text-center">{projects[current].title}</h3>
         <div className="mt-2 flex flex-wrap justify-center gap-1 mb-2">
           {projects[current].tech.map((tech, i) => (
             <span
               key={i}
               className={`text-xs px-2 py-1 rounded-full ${colorMap[tech] || 'bg-gray-100 text-gray-700'}`}
             >
               {tech}
             </span>
           ))}
         </div>
         <p className="text-xs md:text-sm mb-3 text-center leading-tight">{projects[current].desc}</p>
         <a
           href={projects[current].link}
           target="_blank"
           rel="noopener noreferrer"
           className="text-cyan-300 underline text-center text-sm"
         >
           View on GitHub
         </a>
       </div>

                             {/* Desktop view - Hover effects */}
               <div className="absolute inset-0 p-6 flex flex-col justify-center transition-opacity duration-500 group-hover:opacity-0 hidden md:flex">
         <h3 className="text-2xl md:text-3xl font-bold mb-2">{projects[current].title}</h3>
         <div className="mt-2 flex flex-wrap justify-center gap-2">
           {projects[current].tech.map((tech, i) => (
             <span
               key={i}
               className={`text-xs px-2 py-1 rounded-full ${colorMap[tech] || 'bg-gray-100 text-gray-700'}`}
             >
               {tech}
             </span>
           ))}
         </div>
       </div>

                             {/* Desktop hover details */}
               <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex">
         <p className="text-base md:text-lg mb-4 leading-relaxed">{projects[current].desc}</p>
         <a
           href={projects[current].link}
           target="_blank"
           rel="noopener noreferrer"
           className="text-cyan-300 underline text-center"
         >
           View on GitHub
         </a>
       </div>
    </div>

    {/* Arrow buttons */}
    <div className="flex items-center gap-6 mt-6">
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
        }
        className="p-2 rounded-full bg-white/20 hover:bg-white/30"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() =>
          setCurrent((prev) => (prev + 1) % projects.length)
        }
        className="p-2 rounded-full bg-white/20 hover:bg-white/30"
      >
        <ChevronRight />
      </button>
    </div>
  </div>
</section>



      <main className=" text-white">
 <section id="education" className="w-full pt-8 md:pt-12 pb-24 text-white relative z-10" >
     <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

     {/* Title */}
     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">Education & Technical Proficiencies</h2>

    {/* Centered grid */}
         <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16">

       {/* Left: Logos side by side with equal spacing */}
 <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
     {/* NC State block */}
   <div className="flex flex-col items-center w-full md:w-[19rem]">
     <div className="relative w-40 h-40 md:w-56 md:h-56">
      <Image
        src="/images/ncsu.png"
        alt="North Carolina State University"
        fill
        className="object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>
    <p className="text-center text-lg text-white/100 mt-2 leading-snug">
      North Carolina State University <br />
      Master&apos;s in Computer Science; Concentration : Data Science <br />
      GPA: 3.4
    </p>
  </div>

     {/* PDEU block */}
   <div className="flex flex-col items-center w-full md:w-[19rem]">
     <div className="relative w-40 h-40 md:w-56 md:h-56">
      <Image
        src="/images/pdeu.png"
        alt="Pandit Deendayal Energy University"
        fill
        className="object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>
    <p className="text-center text-lg text-white/100 mt-2 leading-snug">
      Pandit Deendayal Energy University <br />
      Bachelor of Technology <br /> in Computer Engineering <br />
      GPA: 3.9
    </p>
  </div>
</div>


             {/* Right: Tech stack card with double spacing */}
              <div className="mt-8 md:mt-0 md:ml-20 relative group perspective w-full md:w-[320px] min-h-[12rem]">
         {/* Mobile view - Show both sides side by side */}
         <div className="flex flex-col md:hidden gap-4">
           {/* Front Side for Mobile */}
           <div className="w-full h-48 bg-black/60 rounded-xl shadow-lg p-4 flex justify-center border border-cyan-200 items-center relative overflow-visible">
             {['SQL', 'Keras', 'Tableau', 'SciPy', 'JavaScript'].map((tech, idx) => (
               <span
                 key={idx}
                 className="absolute text-xs px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-500 blur-[1.5px]"
                 style={{
                   top: `${20 + idx * 10}%`,
                   left: `${15 + idx * 12}%`,
                   zIndex: 0
                 }}
               >
                 {tech}
               </span>
             ))}
             <span className="text-lg font-bold text-gray-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
               My Growing Tech. Stack ⏳
             </span>
           </div>
           
           {/* Back Side for Mobile */}
           <div className="w-full h-48 bg-black/50 rounded-xl shadow-xl p-4 flex flex-col justify-center">
             <div className="grid grid-cols-3 gap-2">
               {[
                 'Python', 'R', 'SQL', 'JavaScript', 'C#', 'Java',
                 'TensorFlow', 'NumPy', 'SciPy', 'Keras', 'Tableau',
                 '.NET', 'Hadoop', 'AWS', 'GCP'
               ].map((tech, idx) => {
                 const colorClasses = colorMap[tech] || 'bg-white/20 text-white';
                 return (
                   <span
                     key={idx}
                     className={`text-xs px-2 py-1 rounded-full text-center transition ${colorClasses}`}
                   >
                     {tech}
                   </span>
                 );
               })}
             </div>
           </div>
         </div>
         
         {/* Desktop view - 3D flip effect */}
         <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180 hidden md:block">

                     {/* Front Side */}
           <div className="absolute w-full md:w-80 h-48 md:h-60 inset-0 bg-black/60 rounded-xl shadow-lg p-4 md:p-6 backface-hidden flex justify-center border border-cyan-200 items-center relative overflow-visible">
             {['SQL', 'Keras', 'Tableau', 'SciPy', 'JavaScript'].map((tech, idx) => (
               <span
                 key={idx}
                 className="absolute text-xs px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-500 blur-[1.5px]"
                 style={{
                   top: `${20 + idx * 10}%`,
                   left: `${15 + idx * 12}%`,
                   zIndex: 0
                 }}
               >
                 {tech}
               </span>
             ))}
             <span className="text-xl font-bold text-gray-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
               My Growing Tech. Stack ⏳
             </span>
           </div>
           
           {/* Back Side */}
           <div className="absolute inset-0 bg-black/50 rounded-xl shadow-xl p-4 md:p-6 rotate-y-180 backface-hidden flex flex-col justify-center">
             <div className="grid grid-cols-3 gap-2 md:gap-3">
               {[
                 'Python', 'R', 'SQL', 'JavaScript', 'C#', 'Java',
                 'TensorFlow', 'NumPy', 'SciPy', 'Keras', 'Tableau',
                 '.NET', 'Hadoop', 'AWS', 'GCP'
               ].map((tech, idx) => {
                 const colorClasses = colorMap[tech] || 'bg-white/20 text-white';
                 return (
                   <span
                     key={idx}
                     className={`text-xs px-2 py-1 rounded-full text-center transition ${colorClasses}`}
                   >
                     {tech}
                   </span>
                 );
               })}
             </div>
           </div>
                                            
          </div>
       </div>
     </div>
   </div>
 
   <style jsx>{`
     .perspective {
       perspective: 1000px;
     }
     .transform-style {
       transform-style: preserve-3d;
     }
     .backface-hidden {
       backface-visibility: hidden;
     }
     .rotate-y-180 {
       transform: rotateY(180deg);
     }
   `}</style>
 </section>

   <section id="more" className="w-full pt-8 md:pt-12 pb-24 text-white relative z-10" >
   {/*style={{
     backgroundImage: "url('/images/bg-section2.jpg')",
     backgroundSize: 'cover',
     backgroundPosition: 'center',
   }}
   <div className="" /> */}

       {/* Content container */}
    <div className="relative z-10 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">More About Me</h2>
        
        <div className="space-y-8">
          <div className="text-left">
            <p className="text-base md:text-lg leading-relaxed text-white/80 mb-4">
              I tackle challenges with energy, optimism, and a healthy dose of curiosity, always looking for creative ways around roadblocks and thriving when problems get tricky. Critical thinking and persistence are my go-to tools.
          
            
          
              When I'm not solving problems, you'll probably find me obsessing over Soccer, especially Manchester United!
          
              I also love to swim and once took that passion further by becoming a certified lifeguard, blending fun with responsibility.
          
              Whether on the field, in the pool, or writing code, I bring the same enthusiasm and drive to everything I do.
            </p>
          </div>

          {/* Contact Button below the paragraph */}
          <div className="flex justify-center pt-4">
            <div className="relative group">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition">
                📨 Let's Get in Touch
              </button>
              
              {/* Dropdown on hover */}
              <div className="absolute mt-2 w-48 bg-white text-black rounded-lg shadow-md p-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <a
                  href="https://www.linkedin.com/in/divijvshah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:divij4901@gmail.com"
                  className="block hover:underline"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </section>
      </main>
    </>
  );
}
