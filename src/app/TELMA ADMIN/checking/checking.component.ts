import { Router } from '@angular/router';
import { AdminService } from './../telma_services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.scss']
})
export class CheckingComponent implements OnInit {

  message : String = '';
  password : any = '';
  constructor(private adminServ : AdminService, private route : Router) {
   
  }

  ngOnInit(): void {

  }
    checkAdmincomponent (){
    const onSuccess = {
      next: x => {
        this.password = this.password;
        this.route.navigate(['admin']);
      },
      error: err => {
        alert('MOT DE PASSE INCORRECT');
        this.message = "ERREUR DANS CHECK ADMIN ... CheckingComponent => password = "+this.password;
      }
    };
    try{
      this.adminServ.checkAdmin(this.password).subscribe(onSuccess);  
    }catch(err){
      this.message = err;
      alert(this.message);
    }
  }
  // checkAdmincomponent (){
  // const onSuccess = response => {
  //     if(response['status'] == 200){
  //       this.password = this.password;
  //       this.route.navigate(['admin']);
  //     }else{
  //       alert('MOT DE PASSE INCORRECT');
  //       this.message = "ERREUR DANS CHECK ADMIN ... CheckingComponent => password = "+this.password;
  //     }
  // }
  //   const onError = response => {
  //   }
  //   try{
  //     this.adminServ.checkAdmin(this.password).subscribe(onSuccess, onError);
  //   }catch(err){
      
  //     this.message = err;
  //     alert(this.message);
  //   }
  // }

}

