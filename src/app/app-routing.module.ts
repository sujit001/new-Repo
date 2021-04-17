import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import {PageComponent} from './page/page.component';

const routes: Routes = [
  
     
      { path: 'login', component: LoginComponent }, { path: 'dash', component: DashComponent },
      { path: 'page', component: PageComponent },
      { path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
