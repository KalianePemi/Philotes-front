import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { HomeComponent } from './components/home/home.component';
import { AcheiPetComponent } from './achei-pet/achei-pet.component';
import {HttpClientModule} from '@angular/common/http';
import { PerdiPetComponent } from './perdi-pet/perdi-pet.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PetCardComponent } from './components/home/pet-card/pet-card/pet-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    HomeComponent,
    AcheiPetComponent,
    PerdiPetComponent,
    HeaderComponent,
    FooterComponent,
    PetCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 3500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
