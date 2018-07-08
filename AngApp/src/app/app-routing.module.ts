import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationComponent } from './pages/creation/creation.component';
import { ListeComponent } from './pages/liste/liste.component';
import { ModificationComponent } from './pages/modification/modification.component';
import { AffichargeComponent } from './pages/afficharge/afficharge.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';

const routes: Routes = [
  {path: '', component: MainMenuComponent},
  {path: 'creation', component: CreationComponent},
  {path: 'liste', component: ListeComponent},
  {path: 'modification', component: ModificationComponent},
  {path: 'afficharge', component: AffichargeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
