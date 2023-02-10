import { Router } from '@angular/router';
import { AdminService } from './../telma_services/admin.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-offre-admin',
  templateUrl: './offre-admin.component.html',
  styleUrls: ['./offre-admin.component.scss']
})
export class OffreAdminComponent implements OnInit {

  name_telma_offre : String = '';
  prix_telma_offre : number;
  messageOnError : String = '';
  messageSucces : String = '';
  constructor(private adminServ :  AdminService, private route : Router) { }

  ngOnInit(): void {
  }
  ajouterOffre(){
    const onSuccess = response => {
      if(response ['status'] == 200){
        this.name_telma_offre = this.name_telma_offre;
        this.prix_telma_offre = this.prix_telma_offre;
        this.messageSucces = "SUCCESS";
        this.route.navigate(['/admin']);
      }else{
        alert('TOUT LES CHAMPS DOIVENT ETRE REMPLIT');
        this.messageOnError ="UNE ERREUR DANS ... OffreAdminComponent"
      }
    }
    const onError = response => {

    }
    if(this.name_telma_offre==''){
      alert("VEUILLEZ  REMPLIR LE NOMS DE L'OFFRE");
    }
    if( this.prix_telma_offre<=100){
      alert("LE PRIX DE L'OFFRE NE PEUT PAS ETRE NEGATIFS OU INFERIEUR A 100 Ariary");
    }
    try{
      this.adminServ.addOffre(this.name_telma_offre, this.prix_telma_offre).subscribe(onSuccess, onError);
       this.route.navigate(['/admin']);
    }catch(err){
      this.messageOnError = err;
    }
    // if(this.adminServ.addOffre(this.name_telma_offre, this.prix_telma_offre).subscribe(onSuccess, onError)){
     
    // }
    
  }
}
