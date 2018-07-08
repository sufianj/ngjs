import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageUnComponent, PageUnComponentDeact } from './pages/page-un/page-un.component';
import { PageTroisComponent } from './pages/page-trois/page-trois.component';
import { PageDeuxComponent } from './pages/page-deux/page-deux.component';

const routes: Routes = [
  {path: '', component: PageUnComponent, canDeactivate: [PageUnComponentDeact]},
  {path: 'un', component: PageUnComponent},
  {path: 'deux', component: PageDeuxComponent},
  {path: 'trois', component: PageTroisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
