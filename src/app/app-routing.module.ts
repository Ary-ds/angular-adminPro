import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NotPagefoundComponent } from './pages/not-pagefound/not-pagefound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';


// router-1 crear  ->configuracion de routers personalizados
const routes: Routes=[
  {
    path: '', 
    component: PagesComponent,
    // rutas hijas
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'grafica1', component: Grafica1Component},
      // si es en una router con el path vacio se regresa a dashboard
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

    ]
  },

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  //si no exite la path se va a no encontrados 
  {path: '**', component: NotPagefoundComponent},


]


@NgModule({
  declarations: [],
  imports: [
    // router-2   para routers principales
    RouterModule.forRoot(routes)
  ],
  exports:[
    // router-3 exportar 
    RouterModule
  ]
})
export class AppRoutingModule { }
