import { baseUrl } from '../../../environments/environment';
import { ToolsService } from './tools.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient, private toolsServ : ToolsService) { }
  checkAdmin(password){
    return this.http.get(baseUrl+'checkAdmin?password='+password);
  }

  addOffre(nameOffre, priceOffre){
    const options = this.toolsServ.formOption(); 
    return this.http.post(baseUrl+'creationOffre?nameTelmaOffre='+nameOffre+'&prixtelmaOffre='+priceOffre, options);
  }
  deleteOffre(nameOffre){
    return this.http.delete(baseUrl+'deleteOffre/'+nameOffre);
  }
}
