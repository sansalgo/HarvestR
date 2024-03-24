import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { IconComponent } from '../components/icon/icon.component';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  templateUrl: './button-page.component.html',
  styleUrl: './button-page.component.css',
})
export class ButtonPageComponent {}
