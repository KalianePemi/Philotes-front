import { Usuario } from './../model/IUsuario.model';
import { Pet } from './../model/IPets.model';
import { PetServiceError } from './../services/pets.service';
import { Router } from '@angular/router';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pets.service';

@Component({
  selector: 'app-perdi-pet',
  templateUrl: './perdi-pet.component.html',
  styleUrls: ['./perdi-pet.component.css']
})
export class PerdiPetComponent implements OnInit {
  constructor(private userService: UsuarioService, private petService: PetService, private router: Router) { }

  ngOnInit(): void {}

  addPet(
    name: string,
    breed: string,
    size: string,
    gender: string,
    description: string,
    lastSeenLocation: string,
    foto: FileList | null
  ) : void {
    var user = this.userService.loggedUser()
    if (user == null) {
      this.petService.showError(PetServiceError.invalidUser)
    } else {
      var pet: Pet = {
        "nome": name,
        "raca": breed,
        "porte": parseInt(size),
        "sexo": parseInt(gender),
        "descricao": description,
        "usuarioId": user.id,
        "ultimoLocalVisto": lastSeenLocation
      }
      var addPet = (petToAdd: Pet) => {
        console.log(petToAdd)
        this.petService.addPet(petToAdd).subscribe(result => {
          this.petService.showMessage("Pet adicionado com sucesso!", "Em breve você pode receber notificações no seu email, fique atento", "toast-success")
          this.refreshComponent()
        })
      }
      if (foto != null) {
        this.petService.addPetPhoto(foto[0], progress => {
          // Use this to show your upload progress
          console.log("Progress: " + progress)
        }, file => {
          pet.fotoPet = file
          addPet(pet)
        }).subscribe()
      } else {
        addPet(pet)
      }
    }
  }

  private refreshComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = "reload"
    this.router.navigate(['./perdipet'])
  }
}
