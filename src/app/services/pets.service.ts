import { Pet } from './../model/IPets.model';
import { Injectable } from '@angular/core';
import { map, EMPTY, Observable, catchError } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  // uncomment or comment the following parameters to
  // choose between local or remote environment.
  private URL: string = 'https://bsite.net/philotes/Pet'
  //private URL: string = 'http://localhost:5000/Pet'

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  addPet(pet: Pet): Observable<any> {
    var body = {
      "Nome": pet.nome,
      "Raca": pet.raca,
      "Porte": pet.porte,
      "Sexo": pet.sexo,
      "Descricao": pet.descricao,
      "UsuarioId": pet.usuarioId,
      "UltimoLocalVisto": pet.ultimoLocalVisto
    }
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.URL , body, options).pipe(
      map(pet => pet),
      catchError(error => this.showError(PetServiceError.other))
    );
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.URL + "/GetAll").pipe(
      map(pets => pets),
      catchError(error => this.showError(PetServiceError.other))
    );
  }

  showError(e: PetServiceError): Observable<any> {
    switch (e) {
      case PetServiceError.invalidUser:
        this.showMessage('Erro!!!', 'Seu login expirou, por favor tente novamente.', "toast-error")
        break
      case PetServiceError.other:
        this.showMessage('Erro!!!', 'Houve um erro ao adicionar o pet, por favor tente novamente.', "toast-error")
        break
    }
    return EMPTY;
  }

  showMessage(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo)
  }
}

export enum PetServiceError {
  invalidUser,
  other
}
