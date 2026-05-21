import { Component } from '@angular/core';
import { LucideAngularModule,MessageCircle  } from 'lucide-angular';

@Component({
  selector: 'app-hero-buttons',
  imports: [LucideAngularModule],
  templateUrl: './hero-buttons.html',
  styleUrl: './hero-buttons.css',
})
export class HeroButtons {

  readonly MessageCircle = MessageCircle;
}
