import { Component } from '@angular/core';
import { InputComponent } from '../components/input/input.component';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './input-page.component.html',
  styleUrl: './input-page.component.css',
})
export class InputPageComponent {}
