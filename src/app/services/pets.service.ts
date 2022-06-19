import { Constants } from './../../main';
import { Pet } from './../model/IPets.model';
import { Injectable } from '@angular/core';
import { map, EMPTY, Observable, catchError } from 'rxjs';
import { HttpClient, HttpClientModule, HttpEventType, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  // uncomment or comment the following parameters to
  // choose between local or remote environment.
  private URL: string = Constants.baseURL + "Pet"

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  addPetPhoto(file: File, onUpdate: (progress: number) => void, onSaved: (path: string) => void): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    console.log("formData" + formData)
    return this.http.post(this.URL + "/PhotoUpload" , formData, { reportProgress: true, observe: 'events' }).pipe(
      map(event => {
        if (event.type === HttpEventType.UploadProgress)
          onUpdate(Math.round(100 * event.loaded / event.total!));
        else if (event.type === HttpEventType.Response && event.body != null) {
          let petPhoto = (event.body as any)["petPhoto"] as string
          console.log("Photo uploaded at: " + petPhoto)
          onSaved(petPhoto);
        } else {
          console.log(event)
        }
      }),
      catchError(error => this.showError(PetServiceError.other, error))
    );
  }

  addPet(pet: Pet): Observable<any> {
    var body = {
      "Nome": pet.nome,
      "Raca": pet.raca,
      "Porte": pet.porte,
      "Sexo": pet.sexo,
      "Descricao": pet.descricao,
      "UsuarioId": pet.usuarioId,
      "UltimoLocalVisto": pet.ultimoLocalVisto,
      "FotoPet": pet.fotoPet
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
      catchError(error => this.showError(PetServiceError.other, error))
    );
  }

  showError(e: PetServiceError, error?: any): Observable<any> {
    console.log(error)
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
