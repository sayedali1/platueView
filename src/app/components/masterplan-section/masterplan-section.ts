import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-masterplan-section',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './masterplan-section.html',

  styleUrl: './masterplan-section.css',
})

export class MasterplanSection {

  // ACTIVE TAB
  activeTab = 'residential';

  // ACTIVE HOTSPOT
  activeHotspot: number | null = null;

  // TOGGLE HOTSPOT ON CLICK/TAP
  toggleHotspot(index: number) {
    this.activeHotspot = this.activeHotspot === index ? null : index;
  }

  // TABS
  tabs = [

    {
      id: 'residential',
      label: 'السكن'
    },

    {
      id: 'services',
      label: 'الخدمات'
    },

    {
      id: 'roads',
      label: 'الطرق'
    },

    {
      id: 'entertainment',
      label: 'الترفيه'
    }

  ];

  // ALL HOTSPOTS
  hotspots = {

    // RESIDENTIAL
    residential: [

      {
        id: '01',

        title: 'الفيلات المستقلة',

        description:
          'وحدات سكنية بتصميم عصري ومساحات متنوعة',

        top: '20%',
        left: '50%',

        mobileTop: '25%',
        mobileLeft: '50%'
      },

      {
        id: '02',

        title: 'الشقق السكنية',

        description:
          'مبانٍ سكنية بإطلالات مفتوحة ومساحات خضراء',

        top: '62%',
        left: '58%',

        mobileTop: '68%',
        mobileLeft: '55%'
      }

    ],

    // SERVICES
    services: [

      {
        id: '01',

        title: 'النادي الاجتماعي',

        description:
          'مساحات ترفيهية وخدمات متكاملة',

        top: '38%',
        left: '72%',

        mobileTop: '42%',
        mobileLeft: '65%'
      },

      {
        id: '02',

        title: 'المركز التجاري',

        description:
          'منطقة تجارية تخدم سكان المشروع',

        top: '70%',
        left: '38%',

        mobileTop: '75%',
        mobileLeft: '45%'
      }

    ],

    // ROADS
    roads: [

      {
        id: '01',

        title: 'المدخل الرئيسي',

        description:
          'بوابة دخول رئيسية بتصميم فاخر',

        top: '56%',
        left: '62%',

        mobileTop: '60%',
        mobileLeft: '60%'
      },

      {
        id: '02',

        title: 'المحور المركزي',

        description:
          'شارع رئيسي بعرض 16 متر',

        top: '61%',
        left: '52%',

        mobileTop: '65%',
        mobileLeft: '50%'
      }

    ],

    // ENTERTAINMENT
    entertainment: [

      {
        id: '01',

        title: 'منطقة الجلوس',

        description:
          'مساحات استرخاء وسط الطبيعة',

        top: '30%',
        left: '56%',

        mobileTop: '35%',
        mobileLeft: '52%'
      },

      {
        id: '02',

        title: 'المسطحات الخضراء',

        description:
          'توزيع طبيعي للمساحات المفتوحة',

        top: '45%',
        left: '44%',

        mobileTop: '50%',
        mobileLeft: '48%'
      }

    ]

  };

  // GET ACTIVE HOTSPOTS
  get currentHotspots() {

    return this.hotspots[
      this.activeTab as keyof typeof this.hotspots
    ];

  }

  // RESET HOTSPOT WHEN TAB CHANGES
  changeTab(tabId: string) {
    this.activeTab = tabId;
    this.activeHotspot = null;
  }

}