import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCalComponent } from './modal-cal.component';

describe('ModalCalComponent', () => {
  let component: ModalCalComponent;
  let fixture: ComponentFixture<ModalCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
