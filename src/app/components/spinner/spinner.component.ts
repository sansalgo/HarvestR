import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
})
export class SpinnerComponent implements OnInit {
  @Input() size: 'lg' | 'md' | 'sm' = 'md';

  classNames: { [key: string]: boolean } = {};

  ngOnInit(): void {
    this.setClassNames();
  }

  public setClassNames(): void {
    this.classNames['w-5 h-5'] = this.size == 'sm';
    this.classNames['w-8 h-8'] = this.size == 'md';
    this.classNames['w-10 h-10'] = this.size == 'lg';
  }
}
