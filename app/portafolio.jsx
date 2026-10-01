import { useRef, useState } from 'react';
import './portafolio.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

import { inject } from '@vercel/analytics';

inject();

const Portfolio = () => {

  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault(); 
    setIsSending(true);
    setFormStatus('');

    emailjs.sendForm(
      'service_h46qzqp', 
      'template_25xpfb8', 
      form.current, 
      'q3CEIPKSZVeIzz056'
    )
    .then((result) => {
        setFormStatus('¡Mensaje enviado con éxito!');
        setIsSending(false);
        e.target.reset(); 
        setTimeout(() => setFormStatus(''), 5000);
    }, (error) => {
        console.log(error.text);
        setFormStatus('Ocurrió un error. Intenta nuevamente.');
        setIsSending(false);
    });
  };

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-jim">JIM</span>
          <span className="logo-cursor">_</span>
        </div>
        <div className="nav-links">
          <button onClick={()=> document.getElementById('sobre-mi').scrollIntoView({ behavior: 'smooth' })}>01 SOBRE MÍ</button>
          <button onClick={()=> document.getElementById('stack').scrollIntoView({ behavior: 'smooth' })}>02 STACK</button>
          <button onClick={()=> document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}>03 PROYECTOS</button>
          <button className="btn-outline" onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}>
            HABLEMOS ↗
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="availability">
            <span className="dot"></span> AVAILABLE FOR NEW PROJECTS <span className="year">2026</span>
          </div>
          <h1 className="hero-title">
            Juan Ignacio <br />
            <span className="hero-title-italic">Manetta<span className="cursor"></span> </span>
          </h1>
          <p className="hero-subtitle">
            <strong>Software Developer</strong> // <strong>Estudiante Ingenería en Sistemas</strong>
          </p>
          <p className="hero-location">
            <span className="icon-pin">📍</span> San Nicolás de los Arroyos, AR
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}>
              EXPLORAR PROYECTOS ↓
            </button>
            <a 
              href="https://drive.google.com/file/d/1vNRsBF3_a5Ce9iD3d9K_Of2oyUi3WQ15/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-secondary"
            >
              DESCARGAR CV ↓
            </a>
          </div>
          <div className="scroll-indicator">
            <span className="line"></span> SCROLL TO EXPLORE
          </div>
        </div>
        
        <div className="hero-visuals">
          <div className="orbit-circles">
            <div className="code-card">
              <span className="code-line number">01</span>
              <span className="code-line">const <span className="keyword">developer</span> = {'{'}</span>
              <span className="code-line indent">name: <span className="string">'Juan Manetta'</span>,</span>
              <span className="code-line indent">focus: <span className="string">'digital products'</span>,</span>
              <span className="code-line indent">status: <span className="string">'building'</span></span>
              <span className="code-line">{'}'}</span>
              <div className="status-online"><span className="dot"></span> ONLINE</div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="about-section">
        <div className="section-header">
          <span className="square"></span> 01 / SOBRE MÍ
        </div>
        <div className="about-grid">
          <div className="about-title">
            <span className="number-accent">01</span>
            <h2>Ideas claras.<br/><span className="text-italic accent-color">Sistemas sólidos.</span></h2>
          </div>
          <div className="about-text">
            <p>
              Mi formación como <span className="accent-color font-bold">Técnico Universitario en Programación</span> en la UTN me dio las bases para transformar ideas en productos digitales. Hoy continúo ese camino como estudiante de <span className="accent-color font-bold">Ingeniería en Sistemas</span>.
            </p>
            <p className="text-muted">
              Durante 2 años trabajé en soporte técnico de campo, resolviendo problemas críticos de hardware y software en terminales POS. Esa experiencia me enseñó a diagnosticar y resolver bajo presión.
            </p>
            <div className="experience-badge">
              <div className="badge-icon">💼</div>
              <div>
                <h4>EXPERIENCIA TRANSVERSAL</h4>
                <p>Soporte · Diagnóstico · Resolución</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="stack" className="stack-section">
        <div className="section-header">
          <span className="square"></span> 02 / STACK TECNOLÓGICO
        </div>
        <div className="stack-grid">
          <div className="stack-category">
            <div className="category-header">
              <h3><span>&lt;/&gt;</span> Web & Base de Datos</h3>
              <span className="category-count">09</span>
            </div>
            <div className="tags-container">
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag">CSS Nativo</span>
              <span className="tech-tag">Supabase</span>
              <span className="tech-tag">SQL</span>
              <span className="tech-tag">PostgreSQL</span>
            </div>
          </div>
          <div className="stack-category">
            <div className="category-header">
              <h3><span>🖥️</span> Software & Lógica</h3>
              <span className="category-count">03</span>
            </div>
            <div className="tags-container">
              <span className="tech-tag">C</span>
              <span className="tech-tag">C++</span>
              <span className="tech-tag">C#</span>
            </div>
          </div>
          <div className="stack-category">
            <div className="category-header">
              <h3><span>⚙️</span> Infraestructura & Herramientas</h3>
              <span className="category-count">05</span>
            </div>
            <div className="tags-container">
              <span className="tech-tag">Git & GitHub</span>
              <span className="tech-tag">Soporte Técnico de Campo</span>
              <span className="tech-tag">Diagnóstico de Hardware</span>
              <span className="tech-tag">Configuración BIOS/UEFI</span>
              <span className="tech-tag">Mantenimiento de PC</span>
            </div>
          </div>
          <div className="stack-category">
            <div className="category-header">
              <h3><span>🎨</span> Diseño & UI</h3>
              <span className="category-count">03</span>
            </div>
            <div className="tags-container">
              <span className="tech-tag">Generación con IA</span>
              <span className="tech-tag">Creación de Mockups</span>
              <span className="tech-tag">Edición Fotográfica</span>
            </div>
          </div>
        </div>
      </section>
      <section id="proyectos" className="projects-section">
        <div className="projects-header-container">
          <div className="section-header">
            <span className="square"></span> 03 / PROYECTOS DESTACADOS
          </div>
          <div className="projects-quote">
            Construido para resolver.<br/>
            <span className="text-italic accent-color">Diseñado para durar.</span>
          </div>
        </div>
        <div className="projects-grid">
          <a href="https://miemprendimiento-three.vercel.app/budino" target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-image-container">
              <img src="../public/CapturaEmprendimiento.png" alt="Captura de pantalla del proyecto"  className='project-img'/>
            </div>
            <div className="project-info">
              <span className="project-category">01 — SELECTED WORK</span>
              <h3>Suite de Inventario y Catálogos Online</h3>
              <p>Sistemas integrales de gestión de inventario, base de datos y catálogos online.</p>
              <div className="tech-tags-small">
                <span>React</span><span>Vite</span><span>Next.js</span><span>Supabase</span>
              </div>
            </div>
          </a>
        </div>
      </section>
      <section id="contacto" className="contact-section">
        <div className="section-header">
          <span className="square"></span> 04 / CONTACTO
        </div>
        <div className="contact-grid">
          <div className="contact-text">
            <h2>Hagamos algo<br/><span className="text-italic accent-color">que importe.</span></h2>
            <p>Estoy abierto a nuevas oportunidades, ideas y desafíos.</p>
            <div className="social-icons">
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="social-btn"><FaGithub /></a>
              <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="social-btn"><FaLinkedin /></a>
              <a href="mailto:tu-email@gmail.com" className="social-btn"><FaEnvelope /></a>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="input-group">
              <label>NOMBRE</label>
              <input type="text" name="name" placeholder="Tu nombre" required />
            </div>
            <div className="input-group">
              <label>EMAIL</label>
              <input type="email" name="email" placeholder="tu@email.com" required />
            </div>
            <div className="input-group">
              <label>MENSAJE</label>
              <textarea name="message" placeholder="Contame sobre tu proyecto..." required></textarea>
            </div>
            <button type="submit" className="btn-primary form-submit" disabled={isSending}>
              {isSending ? 'ENVIANDO...' : 'ENVIAR MENSAJE ↗'}
            </button>
            {formStatus && (
              <p style={{ marginTop: '15px', fontSize: '0.85rem', color: formStatus.includes('éxito') ? '#a3e635' : '#ef4444' }}>
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </section>
      <footer className="footer">
        <span>© 2026 JUAN IGNACIO MANETTA</span>
        <span>DESARROLLADO CON <span className="accent-color">REACT</span> Y <span className="accent-color">VITE</span></span>
      </footer>
    </div>
  );
};

export default Portfolio;