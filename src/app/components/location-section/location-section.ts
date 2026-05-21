import { CommonModule, NgClass } from '@angular/common';

import {
  AfterViewInit,
  Component
} from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-location-section',

  standalone: true,

  imports: [
    CommonModule,
    NgClass
  ],

  templateUrl: './location-section.html',

  styleUrl: './location-section.css',
})

export class LocationSection
implements AfterViewInit {

  map!: L.Map;

  marker!: L.Marker;

  /* MAIN ACTIVE POINT */
  activePoint = 0;

  /* GOOGLE STYLE RED PIN */
  customIcon = L.icon({

    iconUrl:
      'https://cdn-icons-png.flaticon.com/512/684/684908.png',

    iconSize: [42, 42],

    iconAnchor: [21, 42],

    popupAnchor: [0, -40]

  });

  points = [

    /* MAIN PROJECT */
    {
      title: 'platueView',

      subtitle:
        'وجهة سكنية فاخرة في قلب المنيا',

      description:
        'الموقع الرئيسي للمشروع بإطلالة مميزة وموقع استراتيجي.',

      lat: 28.095149433848587,
      lng: 30.778775844180352,

      zoom: 17
    },

    {
      title: 'المتحف الأتوني',

      subtitle:
        'وجهة ثقافية وسياحية مميزة',

      description:
        'يقع المشروع بالقرب من المتحف الأتوني أحد أهم المعالم السياحية.',

      lat: 28.09620506031486,
      lng: 30.77023238328859,

      zoom: 16
    },

    {
      title: 'المنيا الجديدة',

      subtitle:
        'حلقة وصل بين الحداثة والأصالة',

      description:
        'موقع يربط بين مدينة المنيا القديمة والمنيا الجديدة.',

      lat: 28.08012492936278,
      lng: 30.804760491444135,

      zoom: 14
    },

    {
      title: 'كوبري النيل',

      subtitle:
        'إطلالة مباشرة على المحور الرئيسي',

      description:
        'إطلالة مباشرة على الطريق الرئيسي وكوبري النيل.',

      lat: 28.092231192771457,
      lng: 30.767864024196307,

      zoom: 16
    }

  ];

  ngAfterViewInit() {

    this.initMap();

  }

  initMap() {

    /* CINEMATIC START POSITION */
    this.map = L.map(
      'luxuryMap',
      {

        zoomControl: false,

        attributionControl: false,

        scrollWheelZoom: false

      }

    ).setView(

      /* START FAR AWAY */
      [28.0400, 30.6800],

      11

    );

    /* SATELLITE MAP */
    L.tileLayer(

      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',

      {
        maxZoom: 20
      }

    ).addTo(this.map);

    /* INITIAL PROJECT POINT */
    const initialPoint = this.points[0];

    /* GOOGLE STYLE MARKER */
    this.marker = L.marker(

      [initialPoint.lat, initialPoint.lng],

      {
        icon: this.customIcon
      }

    );

    /* CINEMATIC INTRO */
    setTimeout(() => {

      this.map.flyTo(

        [initialPoint.lat, initialPoint.lng],

        initialPoint.zoom,

        {

          animate: true,

          duration: 4,

          easeLinearity: 0.15

        }

      );

    }, 1000);

    /* SHOW MARKER AFTER INTRO */
    setTimeout(() => {

      this.marker.addTo(this.map);

    }, 4500);

  }

  changePoint(index: number) {

    this.activePoint = index;

    const point = this.points[index];

    /* SMOOTH MAP MOVEMENT */
    this.map.flyTo(

      [point.lat, point.lng],

      point.zoom,

      {

        animate: true,

        duration: 1.8,

        easeLinearity: 0.25

      }

    );

    /* MOVE MARKER */
    this.marker.setLatLng([
      point.lat,
      point.lng
    ]);

  }

}