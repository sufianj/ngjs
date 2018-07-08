import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulationButtonComponent } from './emulation-button.component';

describe('EmulationButtonComponent', () => {
  let component: EmulationButtonComponent;
  let fixture: ComponentFixture<EmulationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmulationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
