import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PageComponent } from './page/page.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

// import { FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    SidebarComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    AppRoutingModule,SimpleNotificationsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
