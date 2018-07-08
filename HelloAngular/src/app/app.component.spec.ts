import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormatCurrencyPipe } from './pipes/format-currency.pipe';
import {AutreComposantComponent} from './autre-composant/autre-composant.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FormatCurrencyPipe,
        AutreComposantComponent   ],
      providers: [ FormatCurrencyPipe,
                   AutreComposantComponent],
      imports: [
        AlertModule.forRoot(),
        ModalModule.forRoot(),
      ]

    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('Click ajoute un element dans le tableau', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    let beforeVal: number = app.leTableau.length;
    app.onClickBt();
    let afterVal: number = app.leTableau.length;
    expect(afterVal).toEqual(beforeVal + 1);
  }));
});
