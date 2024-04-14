import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { RadioComponent } from './radio/radio.component';
import { RadioService } from './radio/radio.service';
import { RadioGroupComponent } from './radio-group.component';

@NgModule({
  declarations: [RadioGroupComponent, RadioComponent],
  imports: [CommonModule, BadgeComponent],
  providers: [RadioService],
  exports: [RadioGroupComponent, RadioComponent],
})
export class RadioGroupModule {}
