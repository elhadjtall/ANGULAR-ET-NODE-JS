// import les routes de l'angular
import{ Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', 
    component:LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component:DashboardComponent
      }
    ]
   },
];
