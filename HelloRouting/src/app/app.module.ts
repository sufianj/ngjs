import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageUnComponent, PageUnComponentDeact } from './pages/page-un/page-un.component';
import { PageDeuxComponent } from './pages/page-deux/page-deux.component';
import { PageTroisComponent } from './pages/page-trois/page-trois.component';

@NgModule({
  declarations: [
    AppComponent,
    PageUnComponent,
    PageDeuxComponent,
    PageTroisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PageUnComponentDeact],
  bootstrap: [AppComponent]
})
export class AppModule { }
