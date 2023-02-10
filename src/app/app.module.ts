import { HistoriqueComponent } from './UTILISATEUR/historique/historique.component';
import { RegisterComponent } from './UTILISATEUR/register/register.component';
import { ClientComponent } from './UTILISATEUR/client/client.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ToolsService } from './TELMA ADMIN/telma_services/tools.service';
import { AdminService } from './TELMA ADMIN/telma_services/admin.service';
import { TelmaService } from './TELMA ADMIN/telma_services/telma.service';
import {  HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './TELMA ADMIN/admin/admin.component';
import { OffreAdminComponent } from './TELMA ADMIN/offre-admin/offre-admin.component';
import { CheckingComponent } from './TELMA ADMIN/checking/checking.component';
import { FormsModule } from '@angular/forms';
import { ValidationDepotComponent } from './TELMA ADMIN/validation-depot/validation-depot.component';
import { LoginComponent } from './UTILISATEUR/login/login.component';
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    OffreAdminComponent,
    CheckingComponent,
    ValidationDepotComponent,
    CheckingComponent,
    AcceuilComponent,
    ClientComponent,
    LoginComponent,
    RegisterComponent,
    HistoriqueComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule,
    CommonModule,
    FormsModule
    
      
  ],
  providers: [TelmaService, AdminService,ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
