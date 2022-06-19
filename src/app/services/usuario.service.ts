import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../model/IUsuario.model';
import { Constants } from 'src/main';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private userKey = "userKey"
  private URL: string = Constants.baseURL + "Usuario"

  constructor(private http: HttpClient, private toastr: ToastrService) { }


       /* LOGIN USUARIO */
  login(userName: String, passWord: String): Observable<any> {
    var body = { "Username": userName, "PasswordString": passWord }
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.URL + "/Autenticar", body, options).pipe(
      map(user => localStorage.setItem(this.userKey, JSON.stringify(user))),
      catchError(erro => this.showError(erro))
      );
    }


    /* REGISTRO   USUARIO */
    registroUsuario(userName: String, email: String, endereco: String, cidade: String, passWord: String): Observable<any> {
      var body = { "Username": userName, "Email": email, "Endereço": endereco, "Cidade": cidade, "PasswordString": passWord }
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }

      return this.http.post(this.URL + "/Registrar", body, options).pipe(
        map(retorno => retorno),
        catchError(erro => this.showError(erro)))
    }

  logout() {
    localStorage.removeItem(this.userKey)
  }

  isLoggedIn(): Boolean {
    return this.loggedUser() != null
  }

  loggedUser(): Usuario | null {
    var storedObject = localStorage.getItem(this.userKey)
    if (storedObject) {
      var storedUser: Usuario = JSON.parse(storedObject)
      return storedUser
    }
    return null
  }


  showError(e: any): Observable<any> {
    this.showMessage('Erro!!!', 'Usuário ou senha inválidos!', "toast-error")
    return EMPTY;
  }

  showMessage(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo)
  }
}


