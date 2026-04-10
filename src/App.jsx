import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const projects = [
  {
    id: "search-rescue-robot",
    name: "Autonomous Search & Rescue Robot",
    image: "/project1.jpg",
    extraImages: ["/project1-detail1.jpg", "/project1-detail2.jpg"],
    description:
      "Designed and built an autonomous rescue robot capable of following a marked path, locating a LEGO figure, retrieving it with a vacuum-based pickup system, delivering it to a safe zone, and returning to its start position. The system combined Raspberry Pi vision processing, Arduino motor control, and integrated mechanical, electrical, and software design."
  },
  {
    id: "robotic-hand",
    name: "Gesture-Tracking Robotic Hand",
    image: "/project2.jpg",
    extraImages: ["/project2-detail1.jpg", "/project2-detail2.jpg"],
    description:
      "Developed a robotic hand that mimics human hand motion using computer vision, Arduino control, and custom 3D-printed mechanical components. The project combined SolidWorks design, prototyping, and Python-based gesture recognition into a functional robotics system."
  },
  {
    id: "wasteman-810",
    name: "Wasteman 810 Sorting Robot",
    image: "/project3.jpg",
    extraImages: ["/project3-detail1.jpg", "/project3-detail2.jpg"],
    description:
      "Built a LEGO EV3-based waste collection and sorting robot that swept up objects, transported them by conveyor, detected color, and sorted them into bins while navigating a controlled environment. This project emphasized mechanical design, system integration, and iterative testing to improve reliability."
  }
];

function HomePage() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
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
              I enjoy designing thoughtful, user-focused projects that combine
              engineering, creativity, and clean problem solving. This portfolio
              highlights my work, interests, and technical experience.
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
              <p className="card-label">Student of University of Waterloo</p>
              <h3>Professional Portfolio</h3>
              <p>
                Hello, and welcome to my personal portfolio!
              </p>
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
                    src={project.image}
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
                href="/resume.pdf"
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

        <div className="project-detail-image-wrapper">
          <img
            src={project.image}
            alt={project.name}
            className="project-detail-image"
          />
        </div>

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

        <p className="section-label">Project</p>
        <h1 className="project-detail-title">{project.name}</h1>
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