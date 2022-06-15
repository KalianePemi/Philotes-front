import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AcheiPetComponent } from './achei-pet/achei-pet.component';
import { PerdiPetComponent } from './perdi-pet/perdi-pet.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registrar', component:RegistrarComponent},
  {path:'acheipet', component:AcheiPetComponent},
  {path:'perdipet', component:PerdiPetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
