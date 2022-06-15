import { Router } from '@angular/router';
import { PetService } from './../../services/pets.service';
import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/model/IPets.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pets: Pet[] = []

  constructor(private service: PetService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPets().subscribe(pets => {
      this.pets = pets
    })
  }
}
