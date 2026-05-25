import { CommonModule, NgClass } from '@angular/common';

import {
  Component,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-progress-section',

  standalone: true,

  imports: [
    CommonModule,
    NgClass
  ],

  templateUrl: './progress-section.html',

  styleUrl: './progress-section.css',
})

export class ProgressSection
implements AfterViewInit {

  // ACTIVE STAGE
  activeStage = 0;

  // ACTIVE VIDEO INSIDE STAGE
  activeVideoIndex = 0;

  // CURRENT PLAYING VIDEO
  currentVideo = '';

  // STAGES
  stages = [

    // STAGE 01
    {
      title: 'أعمال الحفر',

      description:
        'بدأت أعمال تجهيز الموقع والحفر وفق أعلى المعايير الهندسية لضمان تأسيس قوي ومستدام للمشروع.',

      progress: '100%',

      videos: [

        'images/a3malEl7fr.mp4',
        

      ]
    },

    // STAGE 02
    {
      title: 'الهيكل الإنشائي',

      description:
        'تنفيذ أعمال الهيكل الخرساني والبنية التحتية مع تقدم ملحوظ في تطوير شبكات الطرق والخدمات.',

      progress: '60%',

      videos: [

        'images/5rsana.mp4'

      ]
    },

    // STAGE 03
    {
      title: 'التشطيبات النهائية',

      description:
        'العمل على الواجهات والتشطيبات الداخلية والمساحات الخضراء استعداداً للتسليم النهائي.',

      progress: '20%',

      videos: [

        'videos/finishing1.mp4',
        'videos/finishing2.mp4',

      ]
    }

  ];

  // AFTER VIEW INIT
  ngAfterViewInit() {

    this.setCurrentVideo();

  }

  // SET CURRENT VIDEO
  setCurrentVideo() {

    this.currentVideo =
      this.stages[this.activeStage]
      .videos[this.activeVideoIndex];

  }

  // VIDEO ENDED
  onVideoEnded() {

    const currentStage =
      this.stages[this.activeStage];

    // NEXT VIDEO INSIDE SAME STAGE
    if (
      this.activeVideoIndex <
      currentStage.videos.length - 1
    ) {

      this.activeVideoIndex++;

    }

    // NEXT STAGE
    else {

      this.activeStage =
        (this.activeStage + 1)
        % this.stages.length;

      this.activeVideoIndex = 0;

    }

    this.setCurrentVideo();

  }

  // MANUAL CHANGE STAGE
  changeStage(index: number) {

    this.activeStage = index;

    this.activeVideoIndex = 0;

    this.setCurrentVideo();

  }

}