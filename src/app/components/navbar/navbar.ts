import {
  Component,
  HostListener,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './navbar.html',

  styleUrl: './navbar.css',
})

export class Navbar implements OnInit {

  isMenuOpen = false;

  isScrolled = false;

  showNavbar = true;

  activeSection = 'hero';

  private lastMouseY = 0;

  private observer: IntersectionObserver | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {

    // Setup Intersection Observer after component initializes
    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 500);

  }

  private setupIntersectionObserver() {

    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          console.log(`Section in view: ${entry.target.id}`);
          this.activeSection = entry.target.id;
          this.updateNavbarVisibility();
          this.cdr.markForCheck();

        }

      });

    }, options);

    // Observe all sections
    this.navItems.forEach((item) => {

      const section = document.getElementById(item.target);

      if (section) {

        this.observer!.observe(section);
        console.log(`Observing section: ${item.target}`);

      } else {

        console.warn(`Could not find section to observe: ${item.target}`);

      }

    });

  }

  navItems = [

    {
      label: 'الرئيسية',
      target: 'hero'
    },
    {
      label: 'االمخطط العام',
      target: 'masterplan'
    },
    {
      label: 'تقدم الأعمال',
      target: 'progress'
    },

    {
      label: 'الخدمات',
      target: 'amenities'
    },

    {
      label: 'المعرض',
      target: 'gallery'
    },

    {
      label: 'الموقع',
      target: 'location'
    },

    {
      label: 'الأسعار',
      target: 'pricing'
    }

  ];

  toggleMenu() {

    this.isMenuOpen =
      !this.isMenuOpen;

  }

  scrollToSection(id: string) {

    const section =
      document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: 'smooth'
      });

    }

  }

  private updateNavbarVisibility() {

    const inHero = 
      this.activeSection === 'hero';

    const mouseAtTop = 
      this.lastMouseY < 120;

    this.showNavbar = inHero || mouseAtTop;

  }

  @HostListener('window:scroll')
  onScroll() {

    this.isScrolled =
      window.scrollY > 100;

  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    this.lastMouseY = event.clientY;

    this.updateNavbarVisibility();

  }

}