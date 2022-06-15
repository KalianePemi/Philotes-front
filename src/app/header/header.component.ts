import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: UsuarioService,  private router: Router) {}

  ngOnInit(): void {}

  isLoggedIn(): Boolean {
    return this.service.isLoggedIn()
  }

  logout() {
    this.service.logout()
    this.router.navigate(["./"])
  }

  userName(): String | null {
    var userName = this.service.loggedUser()?.nome
    if (userName) {
      return "Olá, " + userName
    }
    return null
  }
}
