import { CommonModule, NgClass } from '@angular/common';

import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-gallery-section',

  standalone: true,

  imports: [
    CommonModule,
    NgClass
  ],

  templateUrl: './gallery-section.html',

  styleUrl: './gallery-section.css',
})

export class GallerySection {

  selectedGallery: any = null;

  isModalOpen = false;

  currentImageIndex = 0;

  galleries = [

    {
      title: 'الواجهات المعمارية',

      cover: 'images/gallery1.jpeg',

      images: [
        'images/gallery1.jpeg',
        'images/gallery2.jpeg',
        'images/gallery3.jpeg'
      ]
    },

    {
      title: 'المساحات الخضراء',

      cover: 'images/gallery4.jpeg',

      images: [
        'images/gallery4.jpeg',
        'images/gallery5.jpeg',
        'images/gallery6.jpeg'
      ]
    },

    {
      title: 'المداخل الرئيسية',

      cover: 'images/gallery7.jpeg',

      images: [
        'images/gallery7.jpeg',
        'images/gallery8.jpeg',
        'images/gallery9.jpeg'
      ]
    },

    {
      title: 'المرافق والخدمات',

      cover: 'images/gallery10.jpeg',

      images: [
        'images/gallery10.jpeg',
        'images/gallery11.jpeg',
        'images/gallery12.jpeg'
      ]
    }

  ];

  openGallery(gallery: any) {

    this.selectedGallery = gallery;

    this.currentImageIndex = 0;

    this.isModalOpen = true;

    document.body.style.overflow = 'hidden';

  }

  closeGallery() {

    this.isModalOpen = false;

    document.body.style.overflow = 'auto';

  }

  nextImage() {

    if (!this.selectedGallery) return;

    this.currentImageIndex =
      (this.currentImageIndex + 1) %
      this.selectedGallery.images.length;

  }

  prevImage() {

    if (!this.selectedGallery) return;

    this.currentImageIndex =
      (
        this.currentImageIndex - 1 +
        this.selectedGallery.images.length
      ) %
      this.selectedGallery.images.length;

  }

}