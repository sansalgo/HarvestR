import { Component } from '@angular/core';
import { CheckboxGroupComponent } from '../components/checkbox-group/checkbox-group.component';
import { CheckboxComponent } from '../components/checkbox-group/checkbox/checkbox.component';

@Component({
  selector: 'app-checkbox-page',
  standalone: true,
  imports: [CheckboxGroupComponent, CheckboxComponent],
  templateUrl: './checkbox-page.component.html',
  styleUrl: './checkbox-page.component.css',
})
export class CheckboxPageComponent {}
