import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { LeLoggerService } from './services/le-logger.service';
import { FormatCurrencyPipe } from './pipes/format-currency.pipe';
import { AutreComposantComponent } from './autre-composant/autre-composant.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'app';
  heure: string = new Date().toISOString();
  compteur: number = 100;
  leFlag: boolean = false;
  cestquoi: any = {'titi': 200};
  lavariable: boolean | number = 100;
  prix: number = 99.3;
  prix2: number = -99.3;
 @ViewChild('cmp1')
 public instanceCmp1: AutreComposantComponent;

  /*definition du tableau de chaine*/
  leTableau: Array<string> = [];

  onClickBt() {
    this.leFlag = !this.leFlag;
    /*ajout de la date et heure dans le tableau*/
    this.leTableau.push(new Date().toISOString());
    /*Increment*/
    this.instanceCmp1.increment();
    this.instanceCmp1.changeTypeAlert();
  }

  constructor(private logger: LeLoggerService, private formatCurrency: FormatCurrencyPipe) {
    console.log('ctr app.component');
  }

  ngOnInit(): void {
    /*console.log('oninit de AppComponent');*/
    this.logger.writeMessage('oninit de AppComponent');
  }


  ngOnDestroy(): void {
    console.log('ondestroy de AppComponent');
  }
  ngAfterViewInit(): void {
    /*console.log('After View Init de AppComponent');*/
    this.logger.writeMessage('After View Init de AppComponent');
  }
}
