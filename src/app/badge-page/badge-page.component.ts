import { Component } from '@angular/core';
import { BadgeComponent } from '../components/badge/badge.component';

@Component({
  selector: 'app-badge-page',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './badge-page.component.html',
  styleUrl: './badge-page.component.css',
})
export class BadgePageComponent {}
