import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { ListeComponent } from './pages/liste/liste.component';
import { CreationComponent } from './pages/creation/creation.component';
import { ModificationComponent } from './pages/modification/modification.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { AffichargeComponent } from './pages/afficharge/afficharge.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmulationButtonComponent } from './emulation-button/emulation-button.component';
import { InfoPourLeComponentHostDirective } from './info-pour-le-component-host.directive';
@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ListeComponent,
    CreationComponent,
    ModificationComponent,
    ErreurComponent,
    AffichargeComponent,
    EmulationButtonComponent,
    InfoPourLeComponentHostDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
