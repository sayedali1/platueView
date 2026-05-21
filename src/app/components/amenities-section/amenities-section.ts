import { CommonModule, NgClass } from '@angular/common';

import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';

import { LucideAngularModule } from 'lucide-angular';

import {
  ShieldCheck,
  CarFront,
  Building2,
  Trees
} from 'lucide-angular';

@Component({
  selector: 'app-amenities-section',

  standalone: true,

  imports: [
    CommonModule,
    NgClass,
    LucideAngularModule
  ],

  templateUrl: './amenities-section.html',

  styleUrl: './amenities-section.css',
})

export class AmenitiesSection
implements OnInit, OnDestroy {

  activeAmenity = 0;

  interval: any;

  imageUpdateCounter = 0;

  isTransitioning = false;

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  currentImageIndexes: number[] = [
    0,
    0,
    0,
    0
  ];

  amenities = [

    {
      title: 'الخصوصية',

      subtitle: 'مساحات مصممة للراحة والهدوء',

      description:
        'تم تصميم المشروع لتوفير أعلى مستويات الخصوصية والاستقلالية من خلال توزيع المباني والمساحات الخضراء بعناية.',

      icon: Trees,

      images: [
        'images/privcy1.jpeg',
        'images/privacy2.jpg',
        'images/privcy3.jpeg'
      ]
    },

    {
      title: 'الأمن الذكي',

      subtitle: 'أمان متكامل على مدار الساعة',

      description:
        'كاميرات مراقبة، بوابات إلكترونية، حراسة دائمة، وكروت ذكية للسكان والسيارات.',

      icon: ShieldCheck,

      images: [
        'images/scure1.jpeg',
        'images/scure2.jpeg',
        'images/scure3.jpeg'
      ]
    },

    {
      title: 'الجراجات',

      subtitle: 'مصاعد سيارات وجراجات خاصة',

      description:
        'كل برج يحتوي على بدرومين جراج بالإضافة إلى مصاعد هيدروليكية للسيارات.',

      icon: CarFront,

      images: [
        'images/grage1.jpeg',
        'images/grage2.jpeg',
        'images/grage3.jpeg'
      ]
    },

    {
      title: 'الواجهات',

      subtitle: 'تشطيبات بمعايير عالمية',

      description:
        'واجهات حديثة باستخدام زجاج سكريت وألوميتال جامبو عاكس.',

      icon: Building2,

      images: [
        'images/facade1.jpeg',
        'images/facade2.jpeg',
        'images/facade3.jpeg'
      ]
    }

  ];

  ngOnInit() {

    this.startImageRotation();

  }

  startImageRotation() {
    // Clear any existing interval first
    if (this.interval) {
      clearInterval(this.interval);
    }
    
    this.ngZone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        this.ngZone.run(() => {
          const currentAmenity = this.amenities[this.activeAmenity];
          const currentIndex = this.currentImageIndexes[this.activeAmenity];
          const nextIndex = (currentIndex + 1) % currentAmenity.images.length;

          // Start transition animation
          this.isTransitioning = true;
          this.cdr.markForCheck();

          // Change image after fade out
          setTimeout(() => {
            const updatedIndexes = [...this.currentImageIndexes];
            updatedIndexes[this.activeAmenity] = nextIndex;
            this.currentImageIndexes = updatedIndexes;

            this.imageUpdateCounter++;

            // Check if we've finished all images for this amenity
            if (nextIndex === 0) {
              // All images shown, move to next amenity
              setTimeout(() => {
                const nextAmenityIndex = (this.activeAmenity + 1) % this.amenities.length;
                this.changeAmenity(nextAmenityIndex);
              }, 1000); // Wait 1 second before moving to next amenity
            }

            // End transition (fade in)
            this.isTransitioning = false;
            this.cdr.markForCheck();
          }, 250);
        });
      }, 3500);
    });
  }

  changeAmenity(index: number) {
    // Only proceed if switching to a different amenity
    if (this.activeAmenity === index) {
      return;
    }

    // Start transition animation
    this.isTransitioning = true;
    
    this.activeAmenity = index;

    const updatedIndexes = [...this.currentImageIndexes];
    updatedIndexes[index] = 0;
    this.currentImageIndexes = updatedIndexes;

    // Trigger change detection immediately
    this.cdr.markForCheck();

    // End transition after animation completes
    setTimeout(() => {
      this.isTransitioning = false;
      this.cdr.markForCheck();
    }, 500);

    // Reset the interval to restart rotation from the new amenity
    this.startImageRotation();
  }

  getCurrentImage() {
    const imagePath = this.amenities[this.activeAmenity].images[this.currentImageIndexes[this.activeAmenity]];
    return `${imagePath}?v=${this.imageUpdateCounter}`;
  }

  getImageKey() {
    return `${this.activeAmenity}-${this.currentImageIndexes[this.activeAmenity]}-${this.imageUpdateCounter}`;
  }

  ngOnDestroy() {

    clearInterval(this.interval);

  }

}