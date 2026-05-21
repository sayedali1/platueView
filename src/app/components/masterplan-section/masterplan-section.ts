import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-masterplan-section',
  imports: [NgClass],
  templateUrl: './masterplan-section.html',
  styleUrl: './masterplan-section.css',
})
export class MasterplanSection {
    activeHotspot: number | null = null;
}

