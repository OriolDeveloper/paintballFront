import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNewsGridBComponent } from './app-news-grid-b.component';

describe('AppNewsGridBComponent', () => {
  let component: AppNewsGridBComponent;
  let fixture: ComponentFixture<AppNewsGridBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppNewsGridBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNewsGridBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
