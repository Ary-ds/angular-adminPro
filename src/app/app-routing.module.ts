import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { LoginComponent } from './auth/login/login.component';

import { NotPagefoundComponent } from './not-pagefound/not-pagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';



// router-1 crear  ->configuracion de routers personalizados
const routes: Routes=[
  // {
  //   path: '', 
  //   component: PagesComponent,
  //   // rutas hijas
  //   children:[
  //     {path: 'dashboard', component: DashboardComponent},
  //     {path: 'progress', component: ProgressComponent},
  //     {path: 'grafica1', component: Grafica1Component},
  //     // si es en una router con el path vacio se regresa a dashboard
  //     {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  //   ]
  // },

  // {path: 'register', component: RegisterComponent},
  // {path: 'login', component: LoginComponent},

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  //si no exite la path se va a no encontrados 
  {path: '**', component: NotPagefoundComponent},

// ============ direcciones de rutas hijas 
// path dashboard:
// -> dashboard
// -> progress 
// -> grafica1

// path auth:
// -> login
// -> register
// =========================== fin rutas hijas
]


@NgModule({
  declarations: [],
  imports: [
    // router-2   para routers principales
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[
    // router-3 exportar 
    RouterModule
  ]
})
export class AppRoutingModule { }
