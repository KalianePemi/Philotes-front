import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  login(userName: String, password: String): void {
    this.service.login(userName, password).subscribe(result => {
      this.router.navigate(["./"])
    })
  }

}
