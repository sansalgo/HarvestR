import { Component } from '@angular/core';
import { RadioGroupComponent } from '../components/radio-group/radio-group.component';

@Component({
  selector: 'app-radio-page',
  standalone: true,
  imports: [RadioGroupComponent],
  templateUrl: './radio-page.component.html',
  styleUrl: './radio-page.component.css',
})
export class RadioPageComponent {}
