import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsmiddleComponent } from './newsmiddle.component';

describe('NewsmiddleComponent', () => {
  let component: NewsmiddleComponent;
  let fixture: ComponentFixture<NewsmiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsmiddleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsmiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
