'use client';

import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';


export default function Home() {
  const [scrolled, setScrolled] = useState(false);

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
      title: 'Realty- Enterprise Resource Planner App',
      tech: ['ASP.NET', 'C#', 'SQLite'],
      desc: 'MVC-based API for property and client scheduling. Integrated real-time validation to improve operations.',
      link: 'https://github.com/DivijShah'
    },
    {
      title: 'Interactive Study Course Book',
      tech: ['Python', 'MySQL', 'PostgreSQL'],
      desc: 'Built an E-textbook platform with relational schema and integrated user roles and assessments.',
      link: 'https://github.com/DivijShah/interactive-study-book'
    },
    {
      title: 'Story of the Game (Analysis and Prediction)',
      tech: ['R', 'Hadoop', 'Spark'],
      desc: 'Live game stats analyzer for soccer. Used R and Spark to compute advanced stats with 94% accuracy.',
      link: 'https://github.com/DivijShah/story-of-the-game-using-R'
    },
    {
      title: 'Drowsi-Sense using Computer Vision',
      tech: ['Python', 'TensorFlow', 'OpenCV'],
      desc: 'CNN-based computer vision system for drowsiness detection. Trained on 50k+ images with 97% accuracy.',
      link: 'https://github.com/DivijShah/drowsi-sence'
    }
  ];

const colorMap = {
  // 🟦 Coding Languages (Blue)
  'Python': 'bg-blue-100 text-blue-900',
  'C#': 'bg-blue-100 text-blue-900',
  'SQL': 'bg-blue-100 text-blue-900',
  'R': 'bg-blue-100 text-blue-900',
  'JavaScript': 'bg-blue-100 text-blue-900',

  // 💛 Libraries (Yellow)
  'TensorFlow': 'bg-yellow-100 text-yellow-900',
  'OpenCV': 'bg-yellow-100 text-yellow-900',
  'Airflow': 'bg-yellow-100 text-yellow-900',
  'Spark': 'bg-yellow-100 text-yellow-900',
  'Hadoop': 'bg-yellow-100 text-yellow-900',

  // 💚 Tools (Green)
  'Tableau': 'bg-green-100 text-green-900',
  'Power BI': 'bg-green-100 text-green-900',
  'RapidMiner': 'bg-green-100 text-green-900',
  'Excel': 'bg-green-100 text-green-900',
  'FusionGO': 'bg-green-100 text-green-900',
  'SSMS': 'bg-green-100 text-green-900',

  // 💖 Frameworks (Pink)
  '.NET': 'bg-pink-100 text-pink-800',
  'ASP.NET': 'bg-pink-100 text-pink-800',

  // ⚪️ Databases (neutral gray as optional category)
  'SQLite': 'bg-gray-200 text-gray-800',
  'MySQL': 'bg-gray-200 text-gray-800',
  'PostgreSQL': 'bg-gray-200 text-gray-800'
};


  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  scrolled ? 'bg-black/25 backdrop-blur-md shadow-md' : 'bg-transparent'
}`}>

        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
<div className="overflow-x-auto max-w-full">
  <nav className="flex space-x-6 text-base md:text-lg font-medium text-white">
    <a href="#home" className="hover:text-blue-400">Home</a>
    <a href="#experience" className="hover:text-blue-400">Experience</a>
    <a href="#projects" className="hover:text-blue-400">Projects</a>
    <a href="#education" className="hover:text-blue-400">Education</a>
    <a href="#education" className="hover:text-blue-400">Tech. stack</a>
    <a href="#more" className="hover:text-blue-400">More about me</a>
  </nav>
</div>

          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/divijvshah" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4v12h-4v-12zM8.5 8.5h3.5v1.71h.05c.49-.93 1.7-1.91 3.5-1.91 3.74 0 4.5 2.46 4.5 5.67v6.53h-4v-5.79c0-1.38-.02-3.15-1.92-3.15-1.92 0-2.22 1.5-2.22 3.05v5.89h-4v-12z" />
              </svg>
            </a>
            <a href="mailto:divij4901@gmail.com" className="text-white hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="/resume.pdf" className="text-white hover:text-blue-400">CV</a>
          </div>
        </div>
      </header>
      <section id="home" className="relative w-full h-screen">

  <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
    <h1 className="text-6xl font-bold mb-6">Hi, I’m Divij Shah</h1>

    <div className="bg-black bg-opacity-60 font-mono p-6 rounded-lg text-lg shadow-lg w-[580px] h-28 flex items-center justify-start">
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

    <div className="mt-6">
      <img
        src="/images/profile.JPG"
        alt="Divij Shah"
        className="w-40 h-40 rounded-full object-cover border-2 border-white shadow-lg"
      />
    </div>

    {/* Intro Line */}
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4 text-center z-10">
  <h6 className="text-lg md:text-xl font-semibold text-white max-w-2xl mx-auto">
    Data-focused software engineer passionate about building scalable systems and extracting insight from complex sports and ML data.
  </h6>
</div>
  </div>
</section>
<section id="experience" className="w-full pt-12 pb-24 text-white relative z-10">

  {/*style={{
    backgroundImage: "url('/images/bg-section1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}

  <div className="absolute inset-0 bg-black/75 backdrop-blur-sm z-0" />*/}

  <div className="relative max-w-7xl mx-auto px-6">
    <h2 className="text-5xl font-bold text-center mb-16">Work Experience</h2>

    {/* Timeline with arrow */}
    <div className="absolute top-1/2 left-0 w-full h-1 bg-white/30 z-0">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>
    </div>

   <div className="flex justify-start md:justify-between gap-6 md:gap-0 overflow-x-auto px-2 scroll-smooth snap-x relative z-10">
      {[
        {
          role: "Data Science Intern",
          company: "Mement.io",
          duration: "Jan 2022 – May 2022",
          logo: "/images/mement.jpeg",
          side: "top",
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
          side: "bottom",
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
          side: "top",
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
          side: "bottom",
          duties: [
            "Automated ETL pipelines improving accuracy 30%",
            "Integrated systems across 5+ departments",
            "Implemented data governance to reduce inconsistencies"
          ],
          tech: "PostgreSQL, Power BI, Excel, JavaScript, FusionGO",
        },
      ].map((item, index) => (
        <div key={index} className="relative flex-shrink-0 flex flex-col items-center w-[260px] snap-start">
          <div className={`${item.side === 'top' ? 'mb-6' : 'mt-6'} w-[260px]`}>
            <div
              className="relative group bg-cover bg-center border border-white/10 rounded-xl shadow-md h-[260px] overflow-hidden transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${item.logo})` }}
            >
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-black/85 group-hover:bg-black/95 transition-all duration-300"></div>

              {/* Default view (front side) */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-200 h-full px-4">
                <h4 className="font-bold text-xl mb-1">{item.role}</h4>
                <p className="text-sm opacity-70">{item.duration}</p>
                <p className="mt-1 text-base text-white/80 font-medium">{item.company}</p>
              </div>

              {/* Hover details */}
              <div className="absolute inset-0 z-20 flex flex-col justify-start items-center px-4 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-h-[300px]">
                <ul className="text-sm text-white list-disc list-inside space-y-1 text-left w-full">
                  {item.duties.map((duty, i) => (
                    <li key={i}>{duty}</li>
                  ))}
                </ul>
                {/* Tech stack pills */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {item.tech.split(',').map((tech, i) => {
                    const colorClasses = colorMap[tech.trim()] || 'bg-white/20 text-white';
                    return (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full border border-white/20 ${colorClasses}`}
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

<section id="projects" className="w-full pt-12 pb-24 text-white relative z-10">
  {/*style={{
    backgroundImage: "url('/images/bg-section2.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  <div className="absolute inset-0 bg-black/85 backdrop-blur-sm z-0" /> */}

  <div className="relative z-10 w-full px-6">
    <h2 className="text-5xl font-bold text-white mb-12 text-center">Projects</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {projects.map((project, idx) => (
        <div key={idx} className="relative group perspective w-full h-64">
          <div className="relative w-full h-full transition-transform duration-[600ms] ease-[cubic-bezier(0.55,0.055,0.675,0.19)] transform-style preserve-3d group-hover:rotate-x-180">

            {/* Front Side */}
            <div className="absolute w-65 h-45 inset-0 bg-black/75 rounded-xl shadow-lg p-4 backface-hidden text-white border border-cyan-200 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-center mb-3">{project.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2 py-1 rounded-full ${colorMap[tech] || 'bg-gray-100 text-gray-700'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Back Side */}
            <div className="absolute w-65 h-45 inset-0 bg-white/80 text-black rounded-xl shadow-2xl p-4 rotate-x-180 backface-hidden flex flex-col justify-between border border-cyan-400">
              <p className="text-sm leading-relaxed mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 text-sm underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <style jsx>{`
    .perspective {
      perspective: 1200px;
    }
    .transform-style {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .rotate-x-180 {
      transform: rotateX(180deg);
    }
  `}</style>
  </section>


      <main className=" text-white">
      <section id="education" className="w-full pt-12 pb-24 text-white relative z-10">
  {/*style={{
    backgroundImage: "url('/images/ncsu1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  <div className="absolute inset-0 bg-black/85 backdrop-blur-sm z-0" /> */}

  <div className="relative z-10 max-w-[90rem] mx-auto px-6 grid md:grid-cols-[1fr_320px] gap-15 items-start">
    
    {/* Left: Education */}
    <div className="text-left space-y-4 -mt-4">
      <h2 className="text-5xl font-bold text-white leading-snug"> Education </h2>
      <div className="flex flex-wrap justify-start items-start gap-10 mt-10">
      <p className="text-lg text-white-700 leading-relaxed"> I hold a <span className="font-bold">Master’s in Computer Science with a concentration in Data Science</span> from North Carolina State University, where I completed coursework in <span className="font-bold">Software Engineering, Neural Networks and Deep Learning, Cloud Computing, and Statistics</span> with a GPA of <span className="font-semibold">3.4/4.0</span>. Prior to that, I earned a <span className="font-bold">Bachelor of Technology in Computer Engineering</span> from Pandit Deendayal Energy University, India, graduating with a GPA of <span className="font-semibold">8.97/10</span>. My undergraduate studies emphasized <span className="font-bold">Data Structures, Database Management Systems, and Object-Oriented Programming</span>. </p>
 </div>
 </div>
    {/* Right: Flip Tech Stack Card */}
    
    <div className="relative group perspective w-[320px] min-h-[12rem] ml-auto">
      <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">

        {/* Front Side */}
        <div className="absolute w-80 h-60 inset-0 bg-black/60 rounded-xl shadow-lg p-6 backface-hidden flex justify-center border border-cyan-200 items-center relative overflow-visible">
          {/* Cyan background pills */}
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
        <div className="absolute inset-0 bg-black/50 rounded-xl shadow-xl p-6 rotate-y-180 backface-hidden flex flex-col justify-center">
          <div className="grid grid-cols-3 gap-3">
            {[
              'Python', 'R', 'SQL', 'JavaScript', 'C#',
              'TensorFlow', 'NumPy', 'SciPy', 'Keras', 'Tableau',
              '.NET', 'Hadoop', 'AWS', 'GCP'
            ].map((tech, idx) => {
              const colorMap = {
                'Python': 'bg-blue-200 text-blue-800',
                'R': 'bg-blue-200 text-blue-800',
                'SQL': 'bg-blue-200 text-blue-800',
                'JavaScript': 'bg-blue-200 text-blue-800',
                'C#': 'bg-blue-200 text-blue-800',
                'TensorFlow': 'bg-purple-200 text-purple-800',
                'NumPy': 'bg-purple-200 text-purple-800',
                'SciPy': 'bg-purple-200 text-purple-800',
                'Keras': 'bg-purple-200 text-purple-800',
                'Tableau': 'bg-yellow-100 text-yellow-700',
                '.NET': 'bg-yellow-100 text-yellow-700',
                'Hadoop': 'bg-yellow-100 text-yellow-700',
                'AWS': 'bg-green-200 text-green-800',
                'GCP': 'bg-green-200 text-green-800',
              };
              return (
                <span
                  key={idx}
                  className={`text-xs px-3 py-1 rounded-full text-center transition ${colorMap[tech]}`}
                >
                  {tech}
                </span>
              );
            })}
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
    </div>
  </div>
</section>

<section id="more" className="w-full pt-12 pb-24 text-white relative z-10" >
  {/*style={{
    backgroundImage: "url('/images/bg-section2.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  <div className="" /> */}

  {/* Content container (elevated above overlay) */}
  <div className="relative z-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
      
      {/* Column 1: More About Me */}
      <div className="space-y-4">
        <h2 className="text-5xl font-bold mb-2">More About Me</h2>
        <p className="text-base font-semibold leading-relaxed text-white/80">
          I’m passionate about football⚽—both on the field and as a dedicated fan. 
          I’ve always loved swimming—so much so that I became a certified lifeguard, combining passion with responsibility.
          <br /><br />
          I bring energy, optimism, and determination to everything I do. I thrive on challenges, always striving to improve and never backing down.
        </p>
      </div>

      {/* Column 2: Contact Button */}
      <div className="flex flex-col items-center justify-center">
        <div className="relative group">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition">
            📨 Let’s Get in Touch
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

{/* Column 3: Graduation Picture */}
<div className="flex justify-center md:justify-end">
  <div className="w-72 h-72 bg-white/10 rounded-2xl shadow-lg border border-white/10 flex items-center justify-center">
    <img
      src="/images/ed.JPG"
      alt="Graduation"
      className="w-full h-full object-contain"
    />
  </div>
</div>
</div>
  </div>
</section>
      </main>
    </>
  );
}
