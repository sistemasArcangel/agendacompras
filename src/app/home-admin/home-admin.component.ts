import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  
  usuario:any = {};
  
  constructor() { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    if(!this.usuario){
      location.href = "/";
    }else {
      if(this.usuario.rolIdrol != 1){
        location.href = "/";
      }
    }
  }

  logout(){
    localStorage.removeItem("usuario");
    location.href = "/";
  }

}
