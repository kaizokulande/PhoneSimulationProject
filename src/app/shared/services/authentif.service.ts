import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Client } from 'src/app/CLASS/client';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthentifService {
  authentification = baseUrl+"conection";
  registerurl = baseUrl+"souscrire";
  confirmregister = "/";
  authentifadmin = baseUrl+"conectionadmin"
  dashboard = baseUrl+"dashboard";

  constructor(private http: HttpClient) { }
  login(client:Client){
    return this.http.post(this.authentification,client);
  }
  encrypter(data:string){
    const crypted = btoa(escape(JSON.stringify(data)));
    localStorage.setItem("Token",crypted);
  }
  desencrypter(){
    const token = localStorage.getItem("Token");
    if(token){
      return JSON.parse(unescape(atob(token)));
    }
  }

  register(client:Client):Observable<any>{
    return this.http.post<any>(this.registerurl,client);
  }
}
