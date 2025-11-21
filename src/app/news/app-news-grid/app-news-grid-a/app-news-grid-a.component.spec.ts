import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNewsGridAComponent } from './app-news-grid-a.component';

describe('AppNewsGridAComponent', () => {
  let component: AppNewsGridAComponent;
  let fixture: ComponentFixture<AppNewsGridAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppNewsGridAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNewsGridAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
