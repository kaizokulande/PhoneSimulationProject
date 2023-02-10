
import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/CLASS/client';
import { AuthentifService } from 'src/app/shared/services/authentif.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  client = new Client();
  constructor(private authentification:AuthentifService, private route : Router) { }
  message = '';
  ngOnInit() {
    const token = localStorage.getItem("Token");
    if(token){
      this.route.navigate(['Historiques']);
    }
  }

  onSubmit(){
    const loginObserver = {
      next: x => {
        let token = this.authentification.encrypter(x);
        this.message = 'login success';
        this.route.navigate(['Historiques']);
      },
      error: err => {
        this.message = 'login failed';
      }
    }
    let response = this.authentification.login(this.client).subscribe(loginObserver);
  }
  
}
