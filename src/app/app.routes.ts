import { Routes } from '@angular/router';
import { ButtonPageComponent } from './button-page/button-page.component';
import { InputPageComponent } from './input-page/input-page.component';

export const routes: Routes = [
  {
    path: 'button-page',
    component: ButtonPageComponent,
  },
  {
    path: 'input-page',
    component: InputPageComponent,
  },
];
