import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { IconComponent } from '../components/icon/icon.component';
import { ButtonGroupComponent } from '../components/button-group/button-group.component';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [ButtonComponent, IconComponent, ButtonGroupComponent],
  templateUrl: './button-page.component.html',
  styleUrl: './button-page.component.css',
})
export class ButtonPageComponent {}
