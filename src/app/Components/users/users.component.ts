import { Component, OnInit } from '@angular/core';
import { UsersphService } from 'src/app/services/usersph.service';
import { UsersInterface } from './users-interface';

@Component({
  selector: 'LCZG-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  users:UsersInterface[];
  show:boolean=true;
  imgLogo:string='assets/img/Angular.jpg';

  constructor(private userServices:UsersphService) { }
  
  ngOnInit(): void {
    this.userServices.getUsers().subscribe(data => {
      this.users=data;
       console.log(this.users)});
  
  }

  mostrarLista(){
   this.show=!this.show
  }

}
