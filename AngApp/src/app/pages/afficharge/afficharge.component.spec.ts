import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichargeComponent } from './afficharge.component';

describe('AffichargeComponent', () => {
  let component: AffichargeComponent;
  let fixture: ComponentFixture<AffichargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
