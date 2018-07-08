import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { PageLogComponent } from './pages/page-log/page-log.component';

@NgModule({
  declarations: [
    AppComponent,
    PageMainComponent,
    PageLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
