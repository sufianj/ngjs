import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUnComponent } from './page-un.component';

describe('PageUnComponent', () => {
  let component: PageUnComponent;
  let fixture: ComponentFixture<PageUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
