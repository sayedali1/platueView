import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Hero } from "../../components/hero/hero";
import { MasterplanSection } from "../../components/masterplan-section/masterplan-section";
import { ProgressSection } from "../../components/progress-section/progress-section";
import { AmenitiesSection } from "../../components/amenities-section/amenities-section";
import { GallerySection } from "../../components/gallery-section/gallery-section";
import { LocationSection } from "../../components/location-section/location-section";
import { PricingSection } from "../../components/pricing-section/pricing-section";

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, MasterplanSection, ProgressSection, AmenitiesSection, GallerySection, LocationSection, PricingSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
