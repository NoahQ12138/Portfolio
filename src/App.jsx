import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const projects = [
  {
    id: "search-rescue-robot",
    name: "Autonomous Search & Rescue Robot",
    coverImage: "S&R Robot pic1.png",
    extraImages: ["/S&R Robot.jpg", "/S&R Robot pic 2.png"],
    description:
    <>
    This project involved the design and implementation of a fully autonomous search-and-rescue robot capable of navigating a predefined course, locating a target object, retrieving it, and returning to a designated drop-off zone without human intervention. The system was developed as an integrated mechatronic platform combining mechanical design, embedded systems, and computer vision.
    <br /><br />The robot utilized a dual-controller architecture, where a Raspberry Pi handled high-level tasks such as vision-based line following and decision-making, while an Arduino Mega managed low-level motor control, sensor interfacing, and actuation. A color-based image processing pipeline was implemented to enable real-time path detection, allowing the robot to maintain stable navigation under varying conditions. Communication between controllers was achieved through a serial interface, ensuring synchronized system behavior.
    <br /><br />Mechanically, the robot featured a compact, modular chassis designed to meet strict dimensional and weight constraints. A vacuum-based end-effector was developed for object manipulation, allowing reliable pickup even with positional misalignment. The electrical system was powered by a 3S LiPo battery with regulated voltage distribution to support both high-power and sensitive components.
    <br /><br />System performance was validated through extensive testing, achieving an 80% full-task completion rate and a 90% success rate in object pickup and transport, exceeding project requirements. This project demonstrated strong system-level integration and highlighted the importance of design trade-offs, particularly in simplifying the vision system and improving overall robustness.
  </>
  },
  {
    id: "robotic-hand",
    name: "Gesture-Tracking Robotic Hand",
    coverImage: "Robotic Hand Cover Pic.jpg",
    extraImages: ["/Robotic Hand pic 1.png", "/Robotic Hand pic 2.png"],
    description:
    <>
    This project focused on developing a robotic hand capable of replicating human hand gestures in real time using computer vision and embedded control systems. The goal was to explore the integration of mechanical design, sensing, and actuation to mimic human motion as closely as possible.
    <br /><br />The hand was designed in SolidWorks with articulated finger segments representing the distal, middle, and proximal phalanges. Each finger employed a tendon-driven mechanism using wires to simulate muscle actuation, enabling both flexion and extension. Special attention was given to joint design to constrain motion within a realistic range, preventing hyperextension while maintaining smooth articulation. All components were fabricated using 3D printing, with iterative refinements made to improve durability, compactness, and wire routing.
    <br /><br />On the software side, a Python-based computer vision system using the CVZone library was implemented to track hand landmarks and detect gestures in real time. These inputs were mapped to motor commands executed by an Arduino, which controlled the movement of the fingers. One of the key challenges in this project was synchronizing the vision system with motor response while maintaining smooth and responsive motion. Additional challenges included selecting appropriate materials for the actuation wires and ensuring consistent finger movement across repeated cycles.
    <br /><br />Overall, this project provided hands-on experience in combining computer vision with embedded control and mechanical design, as well as insights into the complexities of replicating human biomechanics in robotic systems.
    </>
  },
  {
    id: "wasteman-810",
    name: "Wasteman 810 Sorting Robot",
    coverImage: "Wasteman cover pic.jpg",
    extraImages: ["/Wasteman pic1.jpg", "/Wasteman pic2.jpg"],
    description:
    <>
    The Wasteman 810 project involved the development of an autonomous robot designed to navigate a controlled environment, collect objects, and sort them based on color, simulating a simplified waste management system. The project required the integration of multiple mechanical subsystems with sensor-driven control logic to achieve reliable operation.
    <br /><br />The robot navigated the environment using an overlapping zigzag path strategy, ensuring full area coverage while maintaining efficiency. Ultrasonic sensors were used for obstacle detection and wall tracking, allowing the robot to adapt its motion based on environmental feedback. The collection system consisted of a motor-driven sweeper that guided objects onto a conveyor belt, which then transported them to a sorting mechanism.
    <br /><br />Object classification was performed using a color sensor that identified different types of items based on predefined color mappings. A rack-and-gear-driven bin system, controlled by motor encoders, was used to align the appropriate bin with the conveyor output for accurate sorting. The system was powered by five motors, each dedicated to specific subsystems including drivetrain, sweeping, conveying, and bin actuation.
    <br /><br />Control logic was implemented through modular software functions that managed navigation, object detection, sorting, and return-to-start behavior. During development, design decisions were made to balance system complexity and reliability, including simplifying the overall mechanism by removing unnecessary components such as an additional robotic arm.
    <br /><br />This project strengthened understanding of multi-subsystem robotic design, sensor integration, and feedback control, while emphasizing the importance of iterative design and system reliability in constrained environments.
    </>
 }
];

function HomePage() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experiences</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Portfolio</p>
            <h1>NOAH QIAO</h1>
            <h2>Mechatronics Engineering Student</h2>
            <p className="hero-description">
              Thanks for stopping by—feel free to explore my projects, experience, and work in mechatronics.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#about" className="btn btn-secondary">About Me</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="portrait-placeholder">
              <img
                src="/portfolio-photo.jpg"
                alt="Noah Qiao portrait"
                className="portfolio-image"
              />
            </div>

            <div className="hero-card-content">
              <p className="card-label">Student at the University of Waterloo</p>
              <h3>Professional Portfolio</h3>
              <p>Hello, and welcome to my personal portfolio!</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <div className="section-heading">
            <p className="section-label">About Me</p>
            <h2>A little bit about who I am</h2>
          </div>

          <div className="about-card">
            <p>
              I am a mechatronics student with a strong passion for robotics, with
              hands-on interests in mechanical design, embedded systems,
              prototyping, and solving real engineering problems through practical,
              detail-oriented work.
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="section-label">Experiences</p>
            <h2>Past Co-op Experiences</h2>
          </div>

          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Borrum Energy Solutions</h3>
                  <p className="experience-role">R&amp;D Electrical - Mechatronics Engineering</p>
                </div>
                <p className="experience-date">Sep 2025 - Dec 2025</p>
              </div>
              <ul className="experience-points">
                <li>
                  Designed a wind-turbine temperature and humidity monitoring unit with SD data logging
                  and RTOS-based task scheduling using Teensy 4.1.
                </li>
                <li>
                  Designed a KiCad PCB for the temperature and humidity monitoring unit, integrating surge
                  and ESD transient protection for harsh outdoor deployment.
                </li>
                <li>
                  Collaborated with UofT and UBC to test and implement a microwave-based ice detection
                  system for next-generation wind turbines.
                </li>
                <li>
                  Automated electronic component inventory using Python scripts with vendor APIs,
                  reducing manual entry by about 85% and improving traceability.
                </li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Excelitas</h3>
                  <p className="experience-role">Mechanical Engineering Co-op</p>
                </div>
                <p className="experience-date">Jan 2025 - Apr 2025</p>
              </div>
              <ul className="experience-points">
                <li>
                  Led a team in assembling and validating a new-generation power testing station,
                  securing design approval and ensuring functional performance.
                </li>
                <li>
                  Improved fixture design, resulting in a 300% increase in testing efficiency and reduced production time.
                </li>
                <li>
                  Created detailed sheet metal part models and manufacturing drawings for product lines using SolidWorks.
                </li>
                <li>
                  Revised PCB connector layouts and schematics using Altium to support updated product requirements.
                </li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Sheartak Tools Ltd</h3>
                  <p className="experience-role">Mechanical Engineering Associate</p>
                </div>
                <p className="experience-date">Sep 2023 - Dec 2023</p>
              </div>
              <ul className="experience-points">
                <li>
                  Designed and developed over 10 SolidWorks models for custom cutter-head profiles,
                  enabling customer machine upgrades.
                </li>
                <li>
                  Created detailed engineering drawings, expanding company inventory and streamlining manufacturing processes.
                </li>
                <li>
                  Assisted with customer machine upgrades that improved woodcutting quality
                  and overall user experience.
                </li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Magna International</h3>
                  <p className="experience-role">Test Technician</p>
                </div>
                <p className="experience-date">Jan 2023 - Apr 2023</p>
              </div>
              <ul className="experience-points">
                <li>Conducted tests on 10,000+ customer-supplied products per specified test methods.</li>
                <li>Organized and recorded test measurements in Excel TADs for future reference.</li>
                <li>Ensured testing measurements met ISO 17025 requirements and reported all outliers.</li>
                <li>Operated a range of hand tools, measurement instrumentation, and test equipment.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="section alt-section">
          <div className="section-heading">
            <p className="section-label">Projects</p>
            <h2>Selected Work</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
                className="project-card project-link-card"
              >
                <div className="project-image-placeholder">
                  <img
                    src={project.coverImage}
                    alt={project.name}
                    className="project-image"
                  />
                </div>
                <h3>{project.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-heading">
            <p className="section-label">Contact</p>
            <h2>Let’s connect</h2>
          </div>

          <div className="contact-card">
            <p className="contact-text">
              Feel free to connect with me or reach out directly.
            </p>

            <div className="contact-info">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:n3qiao@uwaterloo.ca" className="contact-link">
                  n3qiao@uwaterloo.ca
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:16476717908" className="contact-link">
                  (647) 671-7908
                </a>
              </p>
            </div>

            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/noahqiao"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                LinkedIn
              </a>

              <a
                href="/Noah_Qiao_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Resume
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="project-page">
        <div className="project-detail-container">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1>Project not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="project-page">
      <div className="project-detail-container">
        <Link to="/" className="back-link">← Back to Home</Link>

        <p className="section-label project-detail-label">Project</p>
        <h1 className="project-detail-title">{project.name}</h1>

        <div className="project-extra-images">
          {project.extraImages.map((img, index) => (
            <div className="project-extra-image-card" key={index}>
              <img
                src={img}
                alt={`${project.name} extra view ${index + 1}`}
                className="project-extra-image"
              />
            </div>
          ))}
        </div>

        <p className="project-detail-description">{project.description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;