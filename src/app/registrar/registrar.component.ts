import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
  }

  registroUsuario(userName : String, email:String, endereco : String, cidade: String, passWord: String): void {
    this.service.registroUsuario(userName, email,endereco,cidade,passWord).subscribe(result => {
      console.log(result)
    })
  }

}
