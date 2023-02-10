import { Transactionns } from './../telma_modeles/Transactionns';
import { Component, OnInit } from '@angular/core';
import { baseUrl } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation-depot',
  templateUrl: './validation-depot.component.html',
  styleUrls: ['./validation-depot.component.scss']
})
export class ValidationDepotComponent implements OnInit {

  listeOfTransactionns : Transactionns[] ;
  constructor(private http : HttpClient) {
    this.getTransactionPenddingAffichage();
  }

  ngOnInit(): void {
  }
  getTransactionPennding(){
    return this.http.get<Transactionns[]>(baseUrl+'transactionPendding');
  }
   

  getTransactionPenddingAffichage(){
    this.getTransactionPennding().subscribe((data)=>{
      this.listeOfTransactionns = data;
    })
  }

}
