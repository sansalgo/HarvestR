import { Component } from '@angular/core';
import { CodeComponent } from '../components/code/code.component';

@Component({
  selector: 'app-code-page',
  standalone: true,
  imports: [CodeComponent],
  templateUrl: './code-page.component.html',
  styleUrl: './code-page.component.css',
})
export class CodePageComponent {}
