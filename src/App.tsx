import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Production Planner with 3+ years of experience driving MRP-based production scheduling, capacity planning, and shop-floor execution in manufacturing and pharma, using SAP PP/MM to stabilize production for 150+ SKUs. Delivered 15% higher planning accuracy and 23% faster scheduling by standardizing cycle times (8+ time studies across 7 product families) and improving line balancing and throughput visibility. Improved schedule adherence by 8%, increased line utilization by 10%, and reduced average cycle time by 12% through Lean standard work, WIP/bottleneck analytics, and Power BI dashboards.";

  const experience = [
    {
      company: "Hubbell Inc",
      role: "Operations Engineer Intern",
      location: "Corona, CA",
      dates: "May 2025 – Aug 2025",
      highlights: [
        "Streamlined capacity planning across 3 riser assembly lines by completing 8+ time studies and locking standardized cycle times, cutting planning variability by 15% and improving workload forecasting accuracy.",
        "Standardized routing, setup times, and labor requirements using Group Technology principles, enabling finite scheduling, improving throughput visibility, and reducing scheduling effort by 23%.",
        "Drove weekly production schedule sequencing with planners and supervisors by validating planned vs. actual output and surfacing capacity gaps, improving schedule adherence / on-time completion by 8% across targeted lines.",
        "Engineered Standard Work Combination Sheets (SWCS) and operator playbooks using time-and-motion analysis to tighten work content and line pacing, delivering a 12% reduction in average cycle time on key SKUs.",
        "Increased line utilization by 10% by analyzing WIP, material flow, and downtime drivers and deploying Power BI dashboards for utilization and bottlenecks, enabling faster escalation and supporting S&OP and weekly execution reviews."
      ]
    },
    {
      company: "Gatisiddhi Parivahan LLP",
      role: "Logistics & Scheduling Analyst",
      location: "Ahmedabad, India",
      dates: "Mar 2023 – Jul 2024",
      highlights: [
        "Orchestrated end-to-end shipment scheduling across FTL/LTL, air, and ocean lanes to raise OTD from 63% to 91%, prioritizing loads by customer SLAs and delivery-criticality.",
        "Pioneered transit-variance and delay root-cause analysis across routes and carriers to cut logistics lead time by 17% and reduce recurring delay patterns impacting service performance.",
        "Led RFQ/RFI cycles, evaluated carrier bids, and optimized lane-to-carrier allocation to reduce logistics costs by 14% while improving vendor responsiveness and service consistency.",
        "Developed automated Power BI dashboards for load performance, route efficiency, and transit variance trends, reducing issue-escalation time by 26% and strengthening weekly operations reviews."
      ]
    },
    {
      company: "Apotex Inc",
      role: "Planner",
      location: "Toronto, Canada",
      dates: "Jun 2021 – Feb 2023",
      highlights: [
        "Executed daily, weekly, and monthly MRP/MPS-driven production schedules for 150+ SKUs in SAP PP/MM, aligning demand forecasts, material availability, and lead times to stabilize production plans and improve schedule adherence by 15%.",
        "Performed capacity planning and finite scheduling by validating routing structures, cycle times, and work-center constraints, reducing manual replanning by 39% and increasing production plan reliability across short-term and mid-term horizons.",
        "Drove daily SAP PP/MM execution by resolving MRP exception messages, monitoring production order progress, and coordinating with procurement and suppliers to mitigate shortages and lead-time risks, improving material-flow accuracy by 18%.",
        "Optimized routing parameters, cycle times, EOQ, safety stock, and reorder points to strengthen production flow, increasing part availability by 45%, improving inventory turns by 6%, and reducing production-impacting stockouts by 9%.",
        "Enabled S&OP and production planning reviews by developing SAP-based dashboards for capacity utilization and schedule adherence risk, reducing planner review effort by 20% and lowering unplanned downtime by 17%."
      ]
    }
  ];

  const projects = [
    {
      title: "Manufacturing Revenue Optimization & Pricing Strategy Simulation",
      subtitle: "Cereal Production Manufacturing Simulation",
      category: "Supply Chain Strategy",
      introduction: "Led a comprehensive manufacturing simulation focusing on revenue optimization and pricing strategy for cereal production, balancing demand shifts, competitive pricing, and capacity constraints.",
      problem: "Need to optimize pricing and production decisions in a competitive manufacturing environment while maintaining high service levels and managing inventory risk.",
      objective: "Model demand shifts and competitive pricing scenarios to sustain 98% service level while improving revenue performance through capacity-constrained planning.",
      methodology: [
        "Modeled demand shifts and competitive pricing scenarios across a 12-round manufacturing simulation using Excel and Tableau.",
        "Executed capacity-constrained planning by balancing production volumes, inventory turns, and service targets.",
        "Built KPI dashboards and scenario trackers in SAP/Excel to quantify impacts.",
        "Analyzed competitive dynamics and market responses to pricing changes."
      ],
      results: [
        "Sustained 98% service level throughout the 12-round simulation.",
        "Improved revenue performance through optimized pricing decisions.",
        "Reduced inventory risk via data-driven scenario planning.",
        "Successfully balanced production volumes with market demand."
      ],
      conclusion: "Demonstrated expertise in manufacturing strategy, pricing optimization, and capacity planning through competitive simulation environment."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Core Competencies',
      skills: ['Production Planning', 'Production Scheduling', 'MRP', 'MPS', 'Capacity Planning', 'Finite Scheduling', 'Routing', 'Cycle Time Analysis', 'Time Studies', 'Standard Work', 'Line Balancing', 'Lean Manufacturing (5S, Kaizen, DMAIC)', 'Kanban', 'Schedule Adherence', 'S&OP', 'Inventory Management', 'Procurement', 'Supplier Evaluation', 'RFQ', 'RFI']
    },
    {
      icon: TrendingUp,
      title: 'ERP & Data Systems',
      skills: ['SAP S/4HANA (PP/MM)', 'SAP APO', 'SAP SD', 'QAD', 'Oracle NetSuite', 'WMS', 'WCS']
    },
    {
      icon: Users,
      title: 'Analytics & Tools',
      skills: ['Excel (Pivot Tables, VLOOKUP, VBA)', 'Power BI', 'Tableau', 'SQL', 'SharePoint', 'PowerPoint']
    },
    {
      icon: Lightbulb,
      title: 'Certifications',
      skills: ['Optimization & Supply Chain Management (USC Marshall School)', 'APICS CPIM (In Progress)']
    }
  ];

  const certifications = [
    'Optimization & Supply Chain Management — USC Marshall School',
    'APICS CPIM — In Progress'
  ];

  const education = [
    {
      school: "University of Southern California (USC), Viterbi School of Engineering",
      degree: "M.S., Industrial & Systems Engineering",
      location: "Los Angeles, CA",
      dates: "May 2026",
      details: "Teaching Assistant, ISE 583: Enterprise-Wide Information Systems | Volunteer, USC Global Supply Chain Club"
    },
    {
      school: "Centennial College",
      degree: "Post-Graduate Diploma, Robotics & Automation",
      location: "Toronto, ON, Canada",
      dates: "Apr 2020",
      details: "Operations Head, Mississauga Chapter (Ontario Region EV Association)"
    },
    {
      school: "Gujarat Technological University",
      degree: "B.E., Mechanical Engineering",
      location: "Gujarat, India",
      dates: "Jun 2018",
      details: "Foundation in mechanical engineering with focus on manufacturing systems and industrial processes."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">HURSH JARIWALA</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'certifications', label: 'Certs' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Hursh Jariwala"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              HURSH JARIWALA
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Production Planner | Manufacturing Operations & Capacity Planning | SAP PP/MM | Lean & IE
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              LOS ANGELES, CA, USA · HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🏭 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'PLANNING ACCURACY', value: '15%', detail: 'Higher Accuracy Delivered' },
              { label: 'SCHEDULING SPEED', value: '23%', detail: 'Faster Scheduling' },
              { label: 'SKUs MANAGED', value: '150+', detail: 'Production SKUs' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Production Planner specializing in MRP-based scheduling, capacity planning, and Lean manufacturing. Expert in SAP PP/MM, time studies, and shop-floor execution with proven results in planning accuracy, schedule adherence, and operational efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Production Planning',
                detail: 'Drive MRP/MPS-based production scheduling for 150+ SKUs using SAP PP/MM, delivering 15% higher planning accuracy and 23% faster scheduling through standardized cycle times and improved line balancing.'
              },
              {
                icon: Rocket,
                title: 'Lean & IE',
                detail: 'Apply Lean manufacturing principles (5S, Kaizen, DMAIC) and industrial engineering methods including time studies, Standard Work Combination Sheets, and line balancing to reduce cycle time by 12% and increase utilization by 10%.'
              },
              {
                icon: Lightbulb,
                title: 'Analytics & Visualization',
                detail: 'Develop Power BI dashboards for WIP analysis, bottleneck identification, and utilization tracking. Enable data-driven S&OP decisions and faster escalation through automated reporting and KPI monitoring.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              3+ years of production planning, logistics scheduling, and manufacturing operations experience across electrical components, pharmaceuticals, and transportation industries.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Manufacturing simulation and supply chain strategy projects demonstrating analytical and strategic planning capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or simulation results?
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project documentation.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Production planning, SAP systems, Lean manufacturing, and supply chain analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">CERTIFICATIONS</h2>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Professional credentials in supply chain optimization and production planning.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-cream p-6 rounded-sm border border-brown/10 shadow-sm">
                <Award className="w-6 h-6 text-brown mr-4" />
                <span className="text-brown font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss production planning, manufacturing operations, or supply chain optimization opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+17147262379"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (714) 726-2379
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/hursh-jariwala-499025185/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:hjariwal@usc.edu"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                hjariwal@usc.edu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Hursh Jariwala · Production Planning & Manufacturing Operations.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;