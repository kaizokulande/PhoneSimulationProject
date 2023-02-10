import { AdminService } from './../telma_services/admin.service';
import { Router } from '@angular/router';
import { Offre } from './../telma_modeles/Offre';
import { Telma_Offre } from './../telma_modeles/Telma_Offre';
import { Transactionns } from './../telma_modeles/Transactionns';
import { BackOffice } from './../telma_modeles/BackOffice';
import { TelmaService } from './../telma_services/telma.service';
import { Argent } from './../telma_modeles/Argent';
import { Client } from './../telma_modeles/Client';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  /*DATA TABLE */
  listeOfClient : Client[];
  listOfArgent : Argent;
  listeOfOffre : Telma_Offre[];
  back : BackOffice[];
  transactionn : Transactionns;
  /*DATA STATISTIQUES*/
  nombreOffreVendu : any;
  nombreUtilisateurs : any;
  sommeArgentDeposer : any;
  sommeTempsAppel : any;
  argent1Client : any;
  numero : String = '';
  name_telma_offre : String = '';
  messageOnError : String = '';
 
 
  constructor(private http : HttpClient ,private route : Router, private telmaService : TelmaService, private adminServ : AdminService) { 
    this.getBackOfficeAffichage();
    this.getTransactionPenddingAffichage();
    this.getAllClientAffichage();
    this.getNombreOffreAffichage();
    this.getNombreUserAffichage();
    this.getSommeArgentDeposerAffichage();
    this.getSommeTempsAppelAffichage();
    this.getAllOffreAffichage();
   // this.getArgent1ClientAffichage();
   }
  ngOnInit(): void {  }



  /*------------------DATA TABLE--------------------------------*/
   getBackOffice(){
     return this.http.get<BackOffice[]>(baseUrl+'backOffice');
   }
   getTransactionPennding(){
     return this.http.get<Transactionns>(baseUrl+'transactionPendding?numero=');
   }
  getAllClient(){
    return this.http.get<Client[]>(baseUrl+'findAllClient');
  }
  getArgent(){
    return this.http.get<Argent>(baseUrl+'compte1Client?numero=0326018322');
  }
  getArgent1Client(numero){
    return this.http.get<Argent>(baseUrl+'compte1Client?numero='+numero);
  }
  getAllOffre(){
    return this.http.get<Telma_Offre[]>(baseUrl+'listesOffres');
  }

  /*------------------DATA STATISTIQUE----------------------------*/
  getNombreUsers(){
    return this.http.get(baseUrl+'nombreUtilisateur');
  }
  getSommeArgentDeposer(){
    return this.http.get(baseUrl+'sommeSolde');
  }
  getSommeTempsAppel(){
    return this.http.get(baseUrl+'dureeAppel');
  }
  getNombreOffreVendu(){
    return  this.http.get(baseUrl +'offreVendu');
  }


/*-------------------DATA TABLE -------------------------------*/

  getBackOfficeAffichage(){
    this.getBackOffice().subscribe((data)=>{
      this.back = data;
    })
  }
  getTransactionPenddingAffichage(){
    this.getTransactionPennding().subscribe((data)=>{
      this.transactionn = data;
    })
  }
  getAllClientAffichage(){
    this.getAllClient().subscribe((data)=>{
      this.listeOfClient = data;
    });
  }  
  getAllOffreAffichage(){
    this.getAllOffre().subscribe((data)=>{
      this.listeOfOffre = data;
    })
  }
 /* getArgent1ClientAffichage(){
      this.getArgent1Client(this.numero).suscribe((data)=>{
        this.argent1Client = data;
      });
  }*/
 
  /*------------------DATA STATISTIQUE--------------------------*/
  getNombreOffreAffichage(){
    this.getNombreOffreVendu().subscribe((data)=>{
    this.nombreOffreVendu= data;
      
    });
  }
  getSommeTempsAppelAffichage(){
    this.getSommeTempsAppel().subscribe((data)=>{
      this.sommeTempsAppel = data;
    });
  }
  getSommeArgentDeposerAffichage(){
    this.getSommeArgentDeposer().subscribe((data)=>{
    this.sommeArgentDeposer= data;
      
    });
  }
  getNombreUserAffichage(){
    this.getNombreUsers().subscribe((data)=>{
      this.nombreUtilisateurs = data;
    });
  } 

  /*DELETE OFFRE */
  deleteOffre(){
    const onSuccess = response => {
      if(response ['status'] == 200){
        this.name_telma_offre = this.name_telma_offre;
        this.route.navigate(['/admin']);
      }else{
      alert('TOUT LES CHAMPS DOIVENT ETRE REMPLIT');
      this.messageOnError ="UNE ERREUR DANS ... OffreAdminComponent"
    }
    }
    const onError = response => {
    }
    try{
      this.adminServ.deleteOffre(this.name_telma_offre).subscribe(onSuccess, onError);
      this.route.navigate(['/admin']);
    }catch(err){
      this.messageOnError = err;
    }
   
  }
}
