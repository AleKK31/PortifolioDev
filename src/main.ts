import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './components/background.component';
import { animate, style, transition, trigger } from '@angular/animations';

// Components
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BackgroundComponent],
  template: `
    <app-background></app-background>
    <section class="min-h-screen flex items-center justify-center relative">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Olá, eu sou Alexandre Baccarini
        </h1>
        <p class="text-xl md:text-2xl text-secondary mb-8">
          Desenvolvedor web e de software especializado em criar experiências digitais excepcionais.
        </p>
        <div class="flex justify-center gap-4">
          <a href="#projects" class="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
            Ver Projetos
          </a>
          <a href="#contact" class="px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors">
            Contato
          </a>
        </div>
      </div>
    </section>
  `
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
            <h3>{{skill.name}}</h3>
            <div class="skill-level">
              <div class="progress-bar" [style.width.%]="skill.level"></div>
            </div>
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
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    .skill-card {
      padding: 1.5rem;
      background: #f7fafc;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .skill-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: var(--accent-color);
    }
    .skill-level {
      height: 8px;
      background: #e2e8f0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: 0.5rem;
    }
    .progress-bar {
      height: 100%;
      background: var(--accent-color);
      border-radius: 4px;
      transition: width 0.3s ease;
    }
  `]
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 90, icon: '⚛️' },
    { name: 'TypeScript', level: 85, icon: '📝' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'React', level: 75, icon: '⚛️' },
    { name: 'CSS/SASS', level: 85, icon: '🎨' },
    { name: 'Git', level: 80, icon: '📦' }
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
                <a [href]="project.demo" target="_blank" class="project-link">Demo</a>
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
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution built with Angular and Node.js',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/400x200',
      demo: 'https://example.com',
      github: 'https://github.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: 'https://via.placeholder.com/400x200',
      demo: 'https://example.com',
      github: 'https://github.com'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern technologies',
      technologies: ['Angular', 'TypeScript', 'CSS3'],
      image: 'https://via.placeholder.com/400x200',
      demo: 'https://example.com',
      github: 'https://github.com'
    }
  ];
}

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
  { path: 'contact', component: NavComponent }
];

// Bootstrap application with routing and animations
bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch(err => console.error(err));