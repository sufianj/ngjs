import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreComposantComponent } from './autre-composant.component';

describe('AutreComposantComponent', () => {
  let component: AutreComposantComponent;
  let fixture: ComponentFixture<AutreComposantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutreComposantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutreComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
