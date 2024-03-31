import { Routes } from '@angular/router';
import { ButtonPageComponent } from './button-page/button-page.component';
import { InputPageComponent } from './input-page/input-page.component';
import { RadioPageComponent } from './radio-page/radio-page.component';
import { BadgePageComponent } from './badge-page/badge-page.component';
import { CheckboxPageComponent } from './checkbox-page/checkbox-page.component';
import { CodePageComponent } from './code-page/code-page.component';
import { AccordionPageComponent } from './accordion-page/accordion-page.component';

export const routes: Routes = [
  {
    path: 'button-page',
    component: ButtonPageComponent,
  },
  {
    path: 'input-page',
    component: InputPageComponent,
  },
  {
    path: 'badge-page',
    component: BadgePageComponent,
  },
  {
    path: 'radio-page',
    component: RadioPageComponent,
  },
  {
    path: 'checkbox-page',
    component: CheckboxPageComponent,
  },
  {
    path: 'code-page',
    component: CodePageComponent,
  },
  {
    path: 'accordion-page',
    component: AccordionPageComponent,
  },
];
