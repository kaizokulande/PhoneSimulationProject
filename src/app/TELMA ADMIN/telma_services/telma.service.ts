import { baseUrl } from '../../../environments/environment';
import { Client } from '../telma_modeles/Client';
import { Offre } from '../telma_modeles/Offre';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TelmaService {

    resultat:any;
    constructor(private http: HttpClient) {

    }
    getAllClient() : Observable<Client[]>{
      return this.http.get<Client[]>(baseUrl+'findAllClient');
    }

}
