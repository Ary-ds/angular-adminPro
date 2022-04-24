import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotPagefoundComponent } from './not-pagefound/not-pagefound.component';

import { RouterModule } from '@angular/router';


// modulos
// import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { PagesRoutingModule } from './pages/pages.routing';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // RegisterComponent,
    NotPagefoundComponent,
    // BreadCrumbsComponent,
    // SidebarComponent,
    // HeaderComponent,
    // DashboardComponent,
    // ProgressComponent,
    // Grafica1Component,
    // PagesComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    PagesModule,
    RouterModule,
    AuthModule,
    PagesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
