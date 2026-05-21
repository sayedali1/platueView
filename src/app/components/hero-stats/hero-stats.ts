import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-stats',
  imports: [CommonModule],
  templateUrl: './hero-stats.html',
  styleUrl: './hero-stats.css',
})
export class HeroStats {
   stats = [
    {
      value: '10%',
      title: 'مقدم يبدأ من'
    },
    {
      value: '7 سنوات',
      title: 'تقسيط حتى'
    },
    {
      value: 'بدون فوائد',
      title: 'لفترة محدودة'
    }
  ];
}
