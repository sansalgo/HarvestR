import { Component } from '@angular/core';
import { AccordionComponent } from '../components/accordion/accordion.component';

@Component({
  selector: 'app-accordion-page',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './accordion-page.component.html',
  styleUrl: './accordion-page.component.css',
})
export class AccordionPageComponent {}
