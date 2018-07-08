import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { PageLogComponent } from './pages/page-log/page-log.component';

const routes: Routes = [{path: '', component: PageMainComponent},
{path: 'main', component: PageMainComponent},
{path: 'history', component: PageLogComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
