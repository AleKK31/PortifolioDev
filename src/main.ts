import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger, query, stagger } from '@angular/animations';

// Components
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section hero" @fadeIn>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="text-gradient">Alexandre Baccarini</span>
            Desenvolvedor <br> Full-Stack
          </h1>
          <p class="hero-description">
            Desenvolvedor fascinado por criar soluções inovadoras e criativas de alta qualidade. 
            Cursando Ciência da Computação pela UTFPR-CM e experiência técnica desde 2019, 
            estou sempre em busca de novos desafios e oportunidades para expandir meus conhecimentos e habilidades tecnológicos.
          </p>
          <div class="hero-cta">
            <a href="mailto:AlexandreBaccaJr@gmail.com" class="btn btn-primary">Entre em Contato</a>
            <a href="https://drive.google.com/file/d/1gdz3so2edlzCjzmO3fcAr6jOZnE24AT2/view?usp=download"  target="_blank" rel="noopener noreferrer"
            class="btn btn-secondary">
              <i class="fas fa-download"></i> Download CV
            </a>
          </div>
          <div class="social-links">
            <a href="https://linkedin.com/in/alexandrebacca31" target="_blank" class="social-link linkedin">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:AlexandreBaccaJr@gmail.com" class="social-link email">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="https://wa.me/+5569981621415" target="_blank" class="social-link whatsapp">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="https://github.com/AleKK31" target="_blank" class="social-link github">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        query('.hero-content > *', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ],
  styles: [`
    .hero {
      min-height: calc(100vh - 70px);
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #f6f7f9 0%, #ffffff 100%);
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .hero-title {
      font-size: 4rem;
      font-weight: 900;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }

    .hero-description {
      font-size: 1.25rem;
      color: var(--secondary-color);
      margin-bottom: 2rem;
      line-height: 1.8;
    }

    .hero-cta {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .btn {
      padding: 1rem 2rem;
      border-radius: 9999px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .btn-primary {
      background: var(--accent-color);
      color: white;
    }

    .btn-secondary {
      background: white;
      color: var(--accent-color);
      border: 2px solid var(--accent-color);
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .social-links {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
    }

    .social-link {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.25rem;
      transition: all 0.3s ease;
    }

    .github { background: #333; }
    .linkedin { background: #0077b5; }
    .email { background: #ea4335; }
    .whatsapp { background: #25D366; }

    .social-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-description {
        font-size: 1.1rem;
      }

      .hero-cta {
        flex-direction: column;
      }

      .btn {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class HomeComponent {}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" @fadeIn>
      <div class="container">
        <h2 class="section-title">Habilidades</h2>
        <div class="skills-grid">
          <div class="skill-card" *ngFor="let skill of skills">
            <div class="skill-icon" [innerHTML]="skill.icon"></div>
            <span class="tooltip">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  styles: [`
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      gap: 3rem;
      justify-content: center;
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem;
    }
    .skill-card {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      background: #1e293b;
      border-radius: 0.5rem;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      margin: 0 auto;
    }
    .skill-card:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
    .skill-icon {
      font-size: 2.5rem;
      color: #a3bffa;
    }
    .tooltip {
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      padding: 0.5rem 1rem;
      background: #334155;
      color: #a3bffa;
      font-size: 0.875rem;
      border-radius: 0.25rem;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease, bottom 0.2s ease;
    }
    .skill-card:hover .tooltip {
      opacity: 1;
      bottom: -35px;
    }
    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
        gap: 2rem;
        padding: 1rem;
      }
      .skill-card {
        width: 70px;
        height: 70px;
      }
      .skill-icon {
        font-size: 2rem;
      }
    }
  `]
})
export class SkillsComponent {
  skills = [
    // Linguagens de Programação
    { name: 'C', icon: '<i class="devicon-c-plain"></i>' },
    { name: 'C++', icon: '<i class="devicon-cplusplus-plain"></i>' },
    { name: 'C#', icon: '<i class="devicon-csharp-plain"></i>' },
    { name: 'Java', icon: '<i class="devicon-java-plain"></i>' },
    { name: 'JavaScript', icon: '<i class="devicon-javascript-plain"></i>' },
    { name: 'TypeScript', icon: '<i class="devicon-typescript-plain"></i>' },

    // Frameworks e Bibliotecas
    { name: '.NET', icon: '<i class="devicon-dotnetcore-plain"></i>' },
    { name: 'SpringBoot', icon: '<i class="devicon-spring-original"></i>' },
    { name: 'Node.js', icon: '<i class="devicon-nodejs-plain"></i>' },
    { name: 'React', icon: '<i class="devicon-react-original"></i>' }, 
    { name: 'Angular', icon: '<i class="devicon-angularjs-plain"></i>' },
    { name: 'Ionic', icon: '<i class="devicon-ionic-original"></i>' },

    // Ferramentas e Estilos
    { name: 'Bootstrap', icon: '<i class="devicon-bootstrap-plain"></i>' },
    { name: 'Tailwind', icon: '<i class="devicon-tailwindcss-plain"></i>' },
    { name: 'Figma', icon: '<i class="devicon-figma-plain"></i>' },

    // Banco de Dados
    { name: 'MySQL', icon: '<i class="devicon-mysql-plain"></i>' },
    { name: 'SQL Server', icon: '<i class="devicon-microsoftsqlserver-plain"></i>' },
    { name: 'PostgreSQL', icon: '<i class="devicon-postgresql-plain"></i>' },
    { name: 'MongoDB', icon: '<i class="devicon-mongodb-plain"></i>' },

    // CMS
    { name: 'WordPress', icon: '<i class="devicon-wordpress-plain"></i>' }, 
    { name: 'Elementor', icon: '<i class="fab fa-elementor"></i>' },

    // Controle de Versão
    { name: 'Git', icon: '<i class="devicon-git-plain"></i>' }, 
    { name: 'GitHub', icon: '<i class="devicon-github-original"></i>' }, 
    { name: 'GitLab', icon: '<i class="devicon-gitlab-plain"></i>' } 
  ];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" @fadeIn>
      <div class="container">
        <h2 class="section-title">Projetos</h2>
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects" @cardAnimation>
            <div class="project-image" [style.backgroundImage]="'url(' + project.image + ')'"></div>
            <div class="project-content">
              <h3>{{project.title}}</h3>
              <p>{{project.description}}</p>
              <div class="tech-stack">
                <span *ngFor="let tech of project.technologies">{{tech}}</span>
              </div>
              <div class="project-links">
                <a [href]="project.demo" target="_blank" class="project-link">
                  <i class="fas fa-external-link-alt"></i> Deploy
                </a>
                <a [href]="project.github" target="_blank" class="project-link">
                  <i class="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  styles: [`
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 2rem 0;
    }
    .project-card {
      border-radius: 12px;
      background: white;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0,0,0,0.2);
    }
    .project-image {
      height: 200px;
      background-size: cover;
      background-position: center;
      border-bottom: 1px solid #edf2f7;
    }
    .project-content {
      padding: 1.5rem;
    }
    .project-content h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }
    .project-content p {
      color: var(--secondary-color);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    .tech-stack span {
      padding: 0.25rem 0.75rem;
      background: var(--accent-color);
      color: white;
      border-radius: 999px;
      font-size: 0.875rem;
      font-weight: 500;
    }
    .project-links {
      display: flex;
      gap: 1rem;
    }
    .project-link {
      padding: 0.5rem 1rem;
      border: 2px solid var(--accent-color);
      border-radius: 6px;
      color: var(--accent-color);
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    .project-link:hover {
      background: var(--accent-color);
      color: white;
    }
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
        padding: 1rem;
      }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Short URL',
      description: 'Um encurtador de URL simples, prático e totalmente gratuito, para transformar links longos em URLs curtas e fáceis de compartilhar',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Rebrandly API'],
      image: 'https://private-user-images.githubusercontent.com/113646121/364115655-4f194aa2-c1b9-47d4-8748-2bd67309d102.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkwNTIzNjMsIm5iZiI6MTczOTA1MjA2MywicGF0aCI6Ii8xMTM2NDYxMjEvMzY0MTE1NjU1LTRmMTk0YWEyLWMxYjktNDdkNC04NzQ4LTJiZDY3MzA5ZDEwMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIwOFQyMjAxMDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jOWYyNjI1OGZmNDRlNmZkNTllMDg2M2JmYmQ3MDJmODcyZWNmM2IzMjQ0MWNlN2M0NzA0MmI5MmFiZWNkNDFjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Yp_xSvSHb4-kY9X0M89Ruo6wnjR_BieUA8AqjAn7Rrw',
      demo: 'https://alekk31.github.io/ShortURL/',
      github: 'https://github.com/AleKK31/ShortURL'
    },
    {
      title: 'BoxTree',
      description: 'BoxTree é um novo formato de link trees, inspirada no conceito de bento box.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: './public/boxtree.png',
      demo: 'https://boxtree.vercel.app',
      github: 'https://github.com/AleKK31/BoxTree'
    }
  ];
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section contact" @fadeIn>
      <div class="container">
        <h2 class="section-title">Entre em Contato</h2>
        <p class="section-description">
          Estou sempre disponível para discutir novos projetos, oportunidades criativas ou como posso ajudar você com sua presença digital.
        </p>
        
        <div class="contact-grid">
          <a href="mailto:AlexandreBaccaJr@gmail.com" class="contact-card email">
            <i class="fas fa-envelope"></i>
            <h3>E-mail</h3>
            <p>AlexandreBaccaJr&#64;gmail.com</p>
          </a>
          
          <a href="https://wa.me/+5569981621415" target="_blank" class="contact-card whatsapp">
            <i class="fab fa-whatsapp"></i>
            <h3>WhatsApp</h3>
            <p>+55 (69) 98162-1415</p>
          </a>
          
          <a href="https://linkedin.com/in/alexandrebacca31" target="_blank" class="contact-card linkedin">
            <i class="fab fa-linkedin"></i>
            <h3>LinkedIn</h3>
            <p>alexandrebacca31</p>
          </a>
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  styles: [`
    .contact {
      background: linear-gradient(135deg, #f6f7f9 0%, #ffffff 100%);
    }
    .section-description {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 3rem;
      color: var(--secondary-color);
      font-size: 1.2rem;
      line-height: 1.6;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem 0;
    }
    .contact-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      text-decoration: none;
      color: var(--primary-color);
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .contact-card i {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .contact-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .contact-card p {
      color: var(--secondary-color);
    }
    .contact-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0,0,0,0.2);
    }
    .contact-card.email i { color: #ea4335; }
    .contact-card.whatsapp i { color: #25D366; }
    .contact-card.linkedin i { color: #0077b5; }
    @media (max-width: 768px) {
      .section-description {
        font-size: 1.1rem;
        padding: 0 1rem;
      }
      .contact-grid {
        grid-template-columns: 1fr;
        padding: 1rem;
      }
    }
  `]
})
export class ContactComponent {}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="nav" [class.nav-scrolled]="isScrolled">
      <div class="container nav-container">
        <a routerLink="/" class="nav-brand">
          <span class="text-gradient">AB</span>
        </a>
        <button class="menu-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-links" [class.active]="isMenuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/skills" routerLinkActive="active">Skills</a>
          <a routerLink="/projects" routerLinkActive="active">Projetos</a>
          <a routerLink="/contact" routerLinkActive="active">Contato</a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .nav-scrolled {
      background: rgba(255, 255, 255, 0.95);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }

    .nav-brand {
      font-weight: 900;
      font-size: 2rem;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      color: var(--secondary-color);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
      position: relative;
      padding: 0.5rem 0;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent-color);
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after,
    .nav-links a.active::after {
      width: 100%;
    }

    .menu-toggle {
      display: none;
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
        flex-direction: column;
        gap: 6px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
      }

      .menu-toggle span {
        display: block;
        width: 25px;
        height: 2px;
        background: var(--primary-color);
        transition: all 0.3s ease;
      }

      .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(8px, 8px);
      }

      .menu-toggle.active span:nth-child(2) {
        opacity: 0;
      }

      .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }

      .nav-links {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        transform: translateY(-100%);
        opacity: 0;
        transition: all 0.3s ease;
      }

      .nav-links.active {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `]
})
export class NavComponent {
  isScrolled = false;
  isMenuOpen = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavComponent],
  template: `
    <app-nav></app-nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <button 
      class="back-to-top" 
      [class.visible]="showBackToTop" 
      (click)="scrollToTop()"
      @fadeInOut>
      <i class="fas fa-arrow-up"></i>
    </button>
  `,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ opacity: 0 }))
      ])
    ])
  ],
  styles: [`
    main {
      margin-top: 70px;
      min-height: calc(100vh - 70px);
    }

    .back-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: var(--accent-color);
      color: white;
      border: none;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .back-to-top.visible {
      opacity: 1;
      visibility: visible;
    }

    .back-to-top:hover {
      transform: translateY(-3px);
      background: var(--accent-color);
      box-shadow: 0 6px 8px rgba(0,0,0,0.2);
    }
  `]
})
export class App {
  showBackToTop = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.showBackToTop = window.scrollY > 300;
      });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Routes configuration
const routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];

// Bootstrap application with routing and animations
bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch(err => console.error(err));