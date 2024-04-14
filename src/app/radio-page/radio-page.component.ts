import { Component } from '@angular/core';
import { RadioGroupModule } from '../components/radio-group/radio-group.module';

@Component({
  selector: 'app-radio-page',
  standalone: true,
  imports: [RadioGroupModule],
  templateUrl: './radio-page.component.html',
  styleUrl: './radio-page.component.css',
})
export class RadioPageComponent {}
