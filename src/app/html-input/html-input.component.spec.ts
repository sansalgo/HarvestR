import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlInputComponent } from './html-input.component';

describe('HtmlInputComponent', () => {
  let component: HtmlInputComponent;
  let fixture: ComponentFixture<HtmlInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
