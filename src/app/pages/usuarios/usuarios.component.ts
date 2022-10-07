import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios : any[] = []
  tempUserName : string = ''
  tempUserId : number = 0

  constructor(
    private _userService : UserService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }

    this.buscarUsers()
  }

  buscarUsers(){
    this._userService.getAllUsers().subscribe(data =>{
      this.usuarios = data
    })
  }

  goDetail(id : number){
    this._router.navigate(['usuarios', id])
  }

  goBuscar(id : number){
    this._userService.getUser(id).subscribe(data =>{
      this.tempUserName = data.nome
      this.tempUserId = data.id
    })
  }

  goDelete(){
    this._userService.deleteUser(this.tempUserId).subscribe()
    window.location.reload()
  }
}
