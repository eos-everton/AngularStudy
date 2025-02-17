import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEndComponent } from './news-end.component';

describe('NewsEndComponent', () => {
  let component: NewsEndComponent;
  let fixture: ComponentFixture<NewsEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsEndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
