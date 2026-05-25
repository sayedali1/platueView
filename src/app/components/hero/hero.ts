import {
  Component,
  OnInit,
  OnDestroy
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
implements OnInit, OnDestroy {

  readonly MessageCircle =
    MessageCircle;

  // ALL MESSAGES
  messages = [

    'الوحدة بسعر التكلفة',

    'نسبه فى الارض',

    'أنظمة سداد مرنة',

    'مجتمع سكني متكامل'

  ];

  // VISIBLE MESSAGES
  visibleMessages: string[] = [];

  // INTERVAL
  intervalId: any;

  ngOnInit() {

    let current = 0;

    // FIRST MESSAGE
    this.visibleMessages.push(
      this.messages[current]
    );

    // START STAGGER
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

      }, 1900);

  }

  ngOnDestroy() {

    if (this.intervalId) {

      clearInterval(
        this.intervalId
      );

    }

  }

}