import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFeitoComponent } from './modal-feito.component';

describe('ModalFeitoComponent', () => {
  let component: ModalFeitoComponent;
  let fixture: ComponentFixture<ModalFeitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFeitoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
