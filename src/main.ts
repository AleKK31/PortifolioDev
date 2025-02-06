import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

// Components
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" @fadeIn>
      <div class="container">
        <p class="hero-subtitle">hello world!</p>
        <h1 class="hero-title">Eu sou Alexandre Baccarini,<br>Desenvolvedor Full-Stack</h1>
        <p class="hero-subtitle">
          Minha trajetória começou em 2019, quando iniciei o Curso Técnico de Informática no IFRO, 
          logo em seguida entrei na faculdade UTFPR-CM cursando Bacharelado em Ciência da computação.<br> 
          Atualmente estou no mercado de trabalho, buscando evoluir e expandir meus conhecimentos e explorando novas tecnologias!
        </p>
        <br><br>
        <div class="social-buttons">
          <a href="mailto:AlexandreBaccaJr@gmail.com" class="social-btn email">
            <i class="fas fa-envelope"></i> E-mail
          </a><br>
          <a href="https://wa.me/+5569981621415?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!" target="_blank" class="social-btn whatsapp">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </a><br>
          <a href="https://github.com/AleKK31" target="_blank" class="social-btn github">
            <i class="fab fa-github"></i> GitHub
          </a><br>
          <a href="https://linkedin.com/in/alexandrebacca31" target="_blank" class="social-btn linkedin">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a><br>
          <a href="public/cv-alexandre.pdf" download class="social-btn cv">
            <i class="fas fa-download"></i> Download CV
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
    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
    .hero-subtitle {
      font-size: 1.5rem;
      color: var(--secondary-color);
    }

    .social-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      margin-top: 20px;
    }

    .social-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 18px;
      font-size: 1rem;
      font-weight: bold;
      text-decoration: none;
      border-radius: 8px;
      color: white;
      transition: 0.3s ease-in-out;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      min-width: 180px;
      justify-content: center;
    }

    .linkedin { background-color: #0077b5; }
    .github { background-color: #333; }
    .whatsapp { background-color: #25D366; }
    .email { background-color: rgb(233, 56, 56); }
    .cv { background-color: rgb(243, 144, 31); }

    .social-btn:hover {
      filter: brightness(1.2);
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2rem;
      }
      .hero-subtitle {
        font-size: 1.25rem;
      }
      .social-buttons {
        flex-direction: column;
        align-items: center;
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
  `]
})
export class SkillsComponent {
  skills = [
    // Linguagens de Programação
    { name: 'C#', icon: '<i class="fab fa-cuttlefish"></i>' },            //achar
    { name: 'C++', icon: '<i class="fab fa-cuttlefish"></i>' },           //achar
    { name: 'C', icon: '<i class="fab fa-cuttlefish"></i>' },             //achar
    { name: 'Java', icon: '<i class="fab fa-java"></i>' },
    { name: 'JavaScript', icon: '<i class="fab fa-js"></i>' },
    { name: 'TypeScript', icon: '<i class="fab fa-js"></i>' },            //achar

    // Frameworks e Bibliotecas
    { name: '.NET', icon: '<i class="fab fa-microsoft"></i>' },           //achar
    { name: 'SpringBoot', icon: '<i class="fas fa-cogs"></i>' },
    { name: 'Node.js', icon: '<i class="fab fa-node"></i>' },
    { name: 'React', icon: '<i class="fab fa-react"></i>' },
    { name: 'Angular', icon: '<i class="fab fa-angular"></i>' },
    { name: 'Ionic', icon: '<i class="fa-solid fa-circle-notch"></i>' },  //achar

    // Ferramentas e Estilos
    { name: 'Bootstrap', icon: '<i class="fab fa-bootstrap"></i>' },
    { name: 'Tailwind', icon: '<i class="fas fa-water"></i>' },
    { name: 'Figma', icon: '<i class="fab fa-figma"></i>' },

    // Banco de Dados
    { name: 'MySQL', icon: '<i class="fa-solid fa-database"></i>' },      //achar
    { name: 'SQL Server', icon: '<i class="fa-solid fa-dna"></i>' },      //achar
    { name: 'PostgreSQL', icon: '<i class="fa-solid fa-database"></i>' }, //achar

    // CMS
    { name: 'WordPress', icon: '<i class="fab fa-wordpress"></i>' },
    { name: 'Elementor', icon: '<i class="fab fa-elementor"></i>' },

    // Controle de Versão
    { name: 'Git', icon: '<i class="fab fa-git"></i>' },
    { name: 'GitHub', icon: '<i class="fab fa-github"></i>' },
    { name: 'GitLab', icon: '<i class="fab fa-gitlab"></i>' }
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
                <a [href]="project.demo" target="_blank" class="project-link">Deploy</a>
                <a [href]="project.github" target="_blank" class="project-link">GitHub</a>
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
    }
    .project-card {
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    .project-card:hover {
      transform: translateY(-5px);
    }
    .project-image {
      height: 200px;
      background-size: cover;
      background-position: center;
    }
    .project-content {
      padding: 1.5rem;
    }
    .project-content h3 {
      margin-bottom: 1rem;
      color: var(--primary-color);
    }
    .tech-stack {
      margin: 1rem 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .tech-stack span {
      padding: 0.25rem 0.75rem;
      background: var(--accent-color);
      color: white;
      border-radius: 999px;
      font-size: 0.875rem;
    }
    .project-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    .project-link {
      padding: 0.5rem 1rem;
      border: 2px solid var(--accent-color);
      border-radius: 4px;
      color: var(--accent-color);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    .project-link:hover {
      background: var(--accent-color);
      color: white;
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Short URL',
      description: 'Um encurtador de URL simples, prático e totalmente gratuito, para transformar links longos em URLs curtas e fáceis de compartilhar',
      technologies: ['JavaScript', 'CSS', 'HTML', 'Rebrandly API'],
      image: 'https://private-user-images.githubusercontent.com/113646121/364115655-4f194aa2-c1b9-47d4-8748-2bd67309d102.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg4MTIwMTksIm5iZiI6MTczODgxMTcxOSwicGF0aCI6Ii8xMTM2NDYxMjEvMzY0MTE1NjU1LTRmMTk0YWEyLWMxYjktNDdkNC04NzQ4LTJiZDY3MzA5ZDEwMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIwNlQwMzE1MTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mZjg4YzYzYzM0ZWY4ODQ4YmQ3ODY2ZjExMGE0MjM1MTA2NzlkZjZlZGQ2MTAxOGM3N2IzMzI2ZTQ3YWJlNWYzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.b44xI_xlQ9tLJwzCu_gwjl-F-SdTk7lHSigZpQO00ho',
      demo: 'https://alekk31.github.io/ShortURL/',
      github: 'https://github.com/AleKK31/ShortURL'
    },
    {
      title: 'Em Breve',
      description: ' ',
      technologies: [],
      image: 'https://via.placeholder.com/400x200',
      demo: 'https://example.com',
      github: 'https://github.com'
    },
    {
      title: 'Em Breve',
      description: ' ',
      technologies: [],
      image: 'https://via.placeholder.com/400x200',
      demo: 'https://example.com',
      github: 'https://github.com'
    }
  ];
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" @fadeIn>
      <div class="container">
        <h1 class="section-title">Entre em contato comigo!</h1>
        <p class="section-subtitle">
          Estou sempre disponível para conversar sobre novos projetos, oportunidades e ideias. Você pode entrar em contato por e-mail, WhatsApp ou outras redes sociais!
        </p>
        
        <div class="contact-methods">
          <div class="contact-method">
            <a href="mailto:AlexandreBaccaJr@gmail.com" class="contact-btn email">
              <i class="fas fa-envelope"></i> Enviar E-mail
            </a>
          </div>
          
          <div class="contact-method">
            <a href="https://wa.me/+5569981621415?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!" target="_blank" class="contact-btn whatsapp">
              <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
          
          <div class="contact-method">
            <a href="https://linkedin.com/in/alexandrebacca31" target="_blank" class="contact-btn linkedin">
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
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
    .section-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
    .section-subtitle {
      font-size: 1.3rem;
      color: var(--secondary-color);
      margin-bottom: 2rem;
    }
    .contact-methods {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      margin-top: 20px;
    }
    .contact-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 18px;
      font-size: 1rem;
      font-weight: bold;
      text-decoration: none;
      border-radius: 8px;
      color: white;
      transition: 0.3s ease-in-out;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      min-width: 180px;
      justify-content: center;
    }
    .linkedin { background-color: #0077b5; }
    .whatsapp { background-color: #25D366; }
    .email { background-color: rgb(233, 56, 56); }
    .contact-btn:hover {
      filter: brightness(1.2);
      transform: scale(1.05);
    }
    @media (max-width: 768px) {
      .section-title {
        font-size: 2rem;
      }
      .section-subtitle {
        font-size: 1.25rem;
      }
      .contact-methods {
        flex-direction: column;
        align-items: center;
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
        <a routerLink="/" class="nav-brand">Alexandre Baccarini</a>
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
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
      transition: background 0.3s ease;
    }
    .nav-scrolled {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
    }
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }
    .nav-brand {
      font-weight: 700;
      font-size: 1.5rem;
      color: var(--primary-color);
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
    }
    .nav-links a:hover, .nav-links a.active {
      color: var(--accent-color);
    }
    .menu-toggle {
      display: none;
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
    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
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
      .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(8px, 8px);
      }
      .menu-toggle.active span:nth-child(2) {
        opacity: 0;
      }
      .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
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
      ↑
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
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--accent-color);
      color: white;
      border: none;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .back-to-top.visible {
      opacity: 1;
      visibility: visible;
    }
    .back-to-top:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
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