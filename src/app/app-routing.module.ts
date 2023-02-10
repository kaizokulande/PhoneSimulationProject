import { HistoriqueComponent } from './UTILISATEUR/historique/historique.component';
import { ClientComponent } from './UTILISATEUR/client/client.component';
import { RegisterComponent } from './UTILISATEUR/register/register.component';
import { LoginComponent } from './UTILISATEUR/login/login.component';
import { ValidationDepotComponent } from './TELMA ADMIN/validation-depot/validation-depot.component';
import { CheckingComponent } from './TELMA ADMIN/checking/checking.component';
import { OffreAdminComponent } from './TELMA ADMIN/offre-admin/offre-admin.component';
import { AdminComponent } from './TELMA ADMIN/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  {
    path:'', component:AcceuilComponent
  },
  {
    path:'client/register',component:RegisterComponent
  },
  {
    path:'client',component:ClientComponent
  },
  {
    path:'adminlogin', component: CheckingComponent
  },
  {
    path:'index', component:CheckingComponent
  },
  {
    path:'admin', component:AdminComponent
  },
  {
    path:'offreAdmin', component:OffreAdminComponent
  },
  {
    path:'validationDepot', component:ValidationDepotComponent
  },
  
  {
    path:'Historiques',component:HistoriqueComponent
  },
  {
    path:'loginUser', component:LoginComponent
  },
  {
    path:'client/loginUser', component:LoginComponent
  },
  {
    path:'client/loginUser/register', component:RegisterComponent
  },
  {
    path:'loginUser/register', component:RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
