import { CommonModule, NgClass } from '@angular/common';

import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-progress-section',

  standalone: true,

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    CommonModule,
    NgClass
  ],

  templateUrl: './progress-section.html',

  styleUrl: './progress-section.css',
})

export class ProgressSection
implements AfterViewInit {

  @ViewChild('swiperRef')
  swiperRef!: ElementRef;

  activeStage = 0;

  stages = [
    {
      title: 'أعمال الحفر',

      description:
        'بدأت أعمال تجهيز الموقع والحفر وفق أعلى المعايير الهندسية لضمان تأسيس قوي ومستدام للمشروع.',

      progress: '25%',

      image: 'images/progress.jpeg',

      year: '2024'
    },

    {
      title: 'الهيكل الإنشائي',

      description:
        'تنفيذ أعمال الهيكل الخرساني والبنية التحتية مع تقدم ملحوظ في تطوير شبكات الطرق والخدمات.',

      progress: '60%',

      image: 'images/progress2.jpeg',

      year: '2025'
    },

    {
      title: 'التشطيبات النهائية',

      description:
        'العمل على الواجهات والتشطيبات الداخلية والمساحات الخضراء استعداداً للتسليم النهائي.',

      progress: '85%',

      image: 'images/progress3.jpeg',

      year: '2026'
    }
  ];

  ngAfterViewInit() {

    const swiperEl = this.swiperRef.nativeElement;

    Object.assign(swiperEl, {

      effect: 'fade',

      fadeEffect: {
        crossFade: true
      },

      speed: 900,

      allowTouchMove: false,

    });

    swiperEl.initialize();

  }

  changeStage(index: number) {

    this.activeStage = index;

    this.swiperRef
      .nativeElement
      .swiper
      .slideTo(index);

  }

}