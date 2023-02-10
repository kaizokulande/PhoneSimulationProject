import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/CLASS/client';
import { AuthentifService } from 'src/app/shared/services/authentif.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  message = '';
  client = new Client();
  constructor(private authentification:AuthentifService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const registerObserver = {
      next: x => {
        this.message = 'register successful';
      },
      error: err => {
        this.message = 'register failed';
        console.log(err.error);
      }
    }
    this.authentification.register(this.client).subscribe(registerObserver);
  }
}
