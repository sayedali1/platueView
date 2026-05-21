import { CommonModule, NgClass } from '@angular/common';

import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-section',

  standalone: true,

  imports: [
    CommonModule,
    NgClass
  ],

  templateUrl: './pricing-section.html',

  styleUrl: './pricing-section.css',
})

export class PricingSection {

  pricingCards = [

    {
      title: 'الشقق السكنية',

      subtitle:
        'مساحات مصممة للحياة العصرية بأعلى مستويات الخصوصية والراحة.',

      price:
        'أسعار تبدأ من...',

      payment:
        'خطط سداد مرنة',

      image:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop'
    },

    {
      title: 'الوحدات الفاخرة',

      subtitle:
        'تجربة سكنية راقية تجمع بين الفخامة والتفاصيل المعمارية الحديثة.',

      price:
        'أنظمة حجز مميزة',

      payment:
        'تقسيط حتى عدة سنوات',

      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop'
    },

    {
      title: 'البنتهاوس',

      subtitle:
        'إطلالات بانورامية ومساحات استثنائية لعشاق الخصوصية والفخامة.',

      price:
        'وحدات محدودة',

      payment:
        'حلول استثمارية مرنة',

      image:
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2000&auto=format&fit=crop'
    }

  ];

  activePricing = 0;

  changePricing(index: number) {

    this.activePricing = index;

  }

}