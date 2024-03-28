import { Component } from '@angular/core';
import { CheckboxGroupComponent } from '../components/checkbox-group/checkbox-group.component';

@Component({
  selector: 'app-checkbox-page',
  standalone: true,
  imports: [CheckboxGroupComponent],
  templateUrl: './checkbox-page.component.html',
  styleUrl: './checkbox-page.component.css',
})
export class CheckboxPageComponent {}
