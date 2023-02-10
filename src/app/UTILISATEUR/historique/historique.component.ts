import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentifService } from 'src/app/shared/services/authentif.service';
import { baseUrl } from 'src/environments/environment';
import { Hitsorique } from '../modeles/hitsorique';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  hist : Hitsorique[];
  constructor(private authentification:AuthentifService,private route:Router,private http: HttpClient) { }
  

  ngOnInit(): void {
    const token = localStorage.getItem("Token");
    if(token){
      this.route.navigate(['Historiques']);
      const client = this.authentification.desencrypter();
      this.gethistoriquenumero(client.numero);
    }else{
      this.route.navigate(['loginUser']);
    }
  }

  getHistoriques(numero){
    return this.http.get<Hitsorique[]>(baseUrl+'historiqueByNum?numero='+numero);
  }

  gethistoriquenumero(numero){
    this.getHistoriques(numero).subscribe((data)=>{
      this.hist = data;
    })
  }
  
  logout(){
    this.authentification.desencrypter();
    localStorage.clear();
    this.route.navigate(['loginUser']);
  }
}
