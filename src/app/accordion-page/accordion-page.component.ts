import { Component } from '@angular/core';
import { AccordionModule } from '../components/accordion/accordion.module';

@Component({
  selector: 'app-accordion-page',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './accordion-page.component.html',
  styleUrl: './accordion-page.component.css',
})
export class AccordionPageComponent {}
