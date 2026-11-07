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
  },
  {
    id: "valorant-ai-coach",
    name: "Valorant AI Coach",
    coverImage: "AI_Coach_Home.png",
    extraImages: ["/AI_Summary.png", "/AI_Drills.png"],
    description:
    <>
    AI Coach is a full-stack web application that automates Valorant gameplay review using multimodal AI analysis. Users can securely upload match recordings and receive structured coaching reports containing performance scores, timestamped feedback, strengths and weaknesses analysis, and personalized practice drill recommendations.
    <br /><br />The platform is built with a decoupled React/TypeScript frontend and Node.js/Express backend. The frontend handles authentication, uploads, processing status tracking, match history, and report visualization, while the backend manages API orchestration, database persistence, cloud storage workflows, asynchronous processing, and AI integration.
    <br /><br />Key features include JWT-based authentication with protected routes, direct video uploads through signed cloud storage URLs, asynchronous background processing using pg-boss workers, and a real-time style processing pipeline that tracks analysis progress without blocking the user experience. Uploaded gameplay footage is processed with FFmpeg to extract representative frames, which are then analyzed using multimodal AI models to generate structured JSON-based coaching reports.
    <br /><br />The application also includes timestamped coaching feedback linked to gameplay moments, category-based evaluations for areas such as aim, positioning, and decision-making, embedded video playback inside reports, and a match history dashboard where users can review previously analyzed games and track processing states.
    <br /><br />Built with React, TypeScript, Node.js, Express, PostgreSQL, Prisma, and Supabase Storage, the project demonstrates full-stack system design across authentication, cloud storage, background job queues, multimedia preprocessing, typed APIs, and AI-powered analysis workflows.
    </>
  },
  {
    id: "robotic-dog",
    name: "Robotic Dog",
    coverImage: "/Cover image dog.png",
    extraImages: ["/front dog.png", "/IMG_7086.png"],
    description: (
      <div className="robotic-dog-description">
        <h2>12-DOF Quadruped Robotic Dog</h2>
        <p>I designed and built a 12-DOF quadruped robotic dog as a multidisciplinary project combining mechanical design, embedded systems, motor control, sensing, power electronics, and computer vision. The goal was to create a platform capable of coordinated walking, environmental sensing, and eventually autonomous behaviors such as obstacle avoidance and target following.</p>

        <h2>Mechanical and Motor System</h2>
        <p>The robot uses 12 high-torque Miuzei 996 servos, with three independently controlled joints on each of the four legs:</p>
        <ul>
          <li><strong>Shoulder joint:</strong> controls lateral positioning of the leg</li>
          <li><strong>Main leg joint:</strong> controls the primary forward/backward leg motion</li>
          <li><strong>Lower/foot joint:</strong> controls extension, lifting, and placement of the foot</li>
        </ul>
        <p>The servos are controlled through PCA9685 PWM servo drivers, allowing the Arduino to generate synchronized commands for all 12 motors without relying on individual PWM-capable microcontroller pins.</p>
        <p>During the current forward gait, the shoulder joints are kept near fixed positions for stability while the main and lower joints perform most of the walking motion. This reduced the number of variables that needed to be tuned while developing the initial gait.</p>

        <h2>Power Distribution</h2>
        <p>Power delivery was an important part of the design because the servos require significantly more current than the microcontrollers can provide.</p>
        <p>The servos operate at approximately 6 V and can draw roughly 0.5 to 0.9 A during normal movement, with currents approaching 2.5 A per servo near stall. With 12 servos, the theoretical worst-case current can approach 30 A at 6 V.</p>
        <p>To handle these loads, I designed the robot around a 3S 11.1 V LiPo battery, or roughly a 12 V system, with separate high-current voltage regulators stepping the supply down to the servo voltage. The servo power was distributed across multiple regulators rather than powering all motors from a single converter. The control electronics and servo system share a common ground while keeping the high-current servo supply separate from the microcontroller power rail.</p>
        <p>This helped prevent voltage drops and microcontroller resets when several motors accelerated at the same time.</p>

        <h2>Embedded Control</h2>
        <p>An Arduino acts as the low-level motion controller. Embedded C++ firmware handles:</p>
        <ul>
          <li>Servo calibration</li>
          <li>Joint limits</li>
          <li>Leg positioning</li>
          <li>Gait timing</li>
          <li>Movement sequencing</li>
          <li>Communication with the higher-level vision system</li>
        </ul>
        <p>Rather than commanding individual servo positions manually, movement is organized into gait phases such as lifting, swinging, placing, and pushing the leg.</p>
        <p>This separation allowed the Arduino to focus on predictable real-time motor control while higher-level systems could decide what the robot should do.</p>

        <h2>Sensor Integration</h2>
        <p>The robot includes several sensors that provide information about its surroundings and physical state.</p>
        <h3>IMU</h3>
        <p>The IMU measures orientation and motion of the robot. It can be used to detect body tilt and eventually provide feedback for balancing and terrain compensation.</p>
        <h3>Ultrasonic Sensor</h3>
        <p>The ultrasonic sensor provides short-range distance measurements for basic obstacle detection. This gives the robot a simple method of detecting objects directly in front of it without relying entirely on vision.</p>
        <h3>ESP32-S3 Camera</h3>
        <p>A Freenove ESP32-S3 CAM is used as the robot's vision interface. The ESP32-S3 provides Wi-Fi connectivity and streams camera data wirelessly for computer vision processing.</p>

        <h2>Computer Vision</h2>
        <p>The vision architecture separates image processing from real-time motor control.</p>
        <p>The ESP32-S3 camera streams images over Wi-Fi to Python running on a computer, where tools such as OpenCV and object-detection models can process the video feed. Instead of sending raw vision information directly to the motors, the vision system converts detections into simple high-level commands such as:</p>
        <p><code>FORWARD | LEFT | RIGHT | STOP</code></p>
        <p>These commands are then passed back to the embedded control system, which executes the appropriate gait.</p>
        <p>This architecture allows computationally heavier vision algorithms to run externally while the Arduino remains responsible for reliable and time-sensitive servo control.</p>

        <h2>Main Challenge: Developing a Stable Forward Gait</h2>
        <p>One of the hardest parts of the project was getting all four legs to move in the correct sequence.</p>
        <p>Moving a single leg was relatively straightforward, but walking requires multiple joints to remain synchronized while the robot maintains enough contact with the ground to support its weight. Early tests resulted in legs moving against each other, incorrect servo directions, unstable body movement, and the robot dragging its feet instead of moving forward.</p>
        <p>The mechanical symmetry of the robot also created a software challenge. A command that extended a left-side joint could require the opposite servo direction on the right side because the mechanisms were mirrored.</p>
        <p>I addressed this by first calibrating every servo individually and defining a common logical coordinate system rather than controlling each motor directly. Left and right legs could then use the same gait logic while the software handled their mirrored servo directions.</p>
        <p>Instead of attempting a complete walking cycle immediately, I divided each step into smaller phases:</p>
        <p><strong>Lift → Swing Forward → Place → Push Back</strong></p>
        <p>Each leg was tested independently before combining the movements into a coordinated crawl gait. Servo angles, timing, extension offsets, and leg order were then adjusted through repeated physical testing.</p>
        <p>A major improvement came from keeping the shoulder joints mostly fixed during early gait development. This reduced the initial walking problem from coordinating 12 changing joints simultaneously to primarily coordinating the eight main and lower-leg joints.</p>
        <p>Through repeated testing and tuning, the robot progressed from individual leg movements to a coordinated forward gait.</p>

        <h2>Synchronizing Vision and Physical Movement</h2>
        <p>Another challenge was connecting computer vision to a robot that moves much slower than the camera updates.</p>
        <p>The vision system can generate new detections many times while the robot is still completing a single physical step. Reacting to every camera frame would cause the robot to constantly interrupt its gait and change direction.</p>
        <p>To solve this, I separated decision-making from motion execution. Computer vision determines the desired direction, while the embedded controller completes coordinated gait phases before responding to new movement commands.</p>
        <p>This prevents noisy or rapidly changing detections from directly controlling individual motors and creates smoother, more predictable motion.</p>

        <h2>What I Learned</h2>
        <p>This project gave me experience integrating an entire robotic system rather than developing each subsystem independently. I worked across mechanical design, high-current power distribution, embedded C++, motor control, sensor integration, wireless communication, and computer vision.</p>
        <p>The biggest lesson was that getting individual components working is only the first step. The difficult part of robotics is making the mechanical, electrical, sensing, and software systems operate together reliably in the real world.</p>
      </div>
    )
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

        <div className="project-detail-description">{project.description}</div>
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
