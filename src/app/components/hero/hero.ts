import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  LucideAngularModule,
  MessageCircle
} from 'lucide-angular';

@Component({
  selector: 'app-hero',

  standalone: true,

  imports: [
    CommonModule,
    LucideAngularModule
  ],

  templateUrl: './hero.html',

  styleUrl: './hero.css',
})

export class Hero
implements
  OnInit,
  OnDestroy,
  AfterViewInit {

  // VIDEO REF
  @ViewChild('heroVideo')
  heroVideo!: ElementRef<HTMLVideoElement>;

  // WHATSAPP ICON
  readonly MessageCircle =
    MessageCircle;

  // ALL MESSAGES
  messages = [

    'الوحدة بسعر التكلفة',

    'نسبة فى الارض',

    'تراخيص بناء',

    'جراج لكل وحده',

  ];

  // VISIBLE MESSAGES
  visibleMessages: string[] = [];

  // INTERVAL
  intervalId: any;

  // =================================
  // INIT
  // =================================

  ngOnInit() {

    let current = 0;

    // FIRST MESSAGE
    this.visibleMessages.push(
      this.messages[current]
    );

    // STAGGER REVEAL
    this.intervalId =
      setInterval(() => {

        current++;

        if (
          current <
          this.messages.length
        ) {

          this.visibleMessages.push(
            this.messages[current]
          );

        }

        else {

          clearInterval(
            this.intervalId
          );

        }

      }, 1800);

  }

  // =================================
  // FORCE VIDEO PLAY
  // =================================

  ngAfterViewInit() {

    const video =
      this.heroVideo.nativeElement;

    // IMPORTANT
    video.muted = true;

    video.autoplay = true;

    video.loop = true;

    video.playsInline = true;

    // FORCE PLAY
    const playPromise =
      video.play();

    // HANDLE AUTOPLAY BLOCK
    if (playPromise !== undefined) {

      playPromise
        .then(() => {

          console.log(
            'Hero video playing'
          );

        })

        .catch(() => {

          console.log(
            'Autoplay blocked'
          );

        });

    }

  }

  // =================================
  // DESTROY
  // =================================

  ngOnDestroy() {

    if (this.intervalId) {

      clearInterval(
        this.intervalId
      );

    }

  }

}