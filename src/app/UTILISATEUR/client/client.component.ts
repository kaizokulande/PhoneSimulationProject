import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem("Token");
    if(token){
      this.route.navigate(['Historiques']);
    }
  }

}