import { Component } from '@angular/core';
import { HeroStats } from "../hero-stats/hero-stats";
import { HeroButtons } from "../hero-buttons/hero-buttons";

@Component({
  selector: 'app-hero',
  imports: [HeroStats, HeroButtons],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
