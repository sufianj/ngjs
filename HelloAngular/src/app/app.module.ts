import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { LeLoggerService } from './services/le-logger.service';
import { FormatCurrencyPipe } from './pipes/format-currency.pipe';
import { AutreComposantComponent } from './autre-composant/autre-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatCurrencyPipe,
    AutreComposantComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [LeLoggerService, FormatCurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }/*un peu memoire partagé, un singleton */
