import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTopComponent } from './news-top.component';

describe('NewsTopComponent', () => {
  let component: NewsTopComponent;
  let fixture: ComponentFixture<NewsTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
