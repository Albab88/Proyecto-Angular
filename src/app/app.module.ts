import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoListComponent } from './carrito/carrito-list.component';
import { DisqueriaAboutComponent } from './disqueria-about/disqueria-about.component';
import { DisqueriaMusicComponent } from './disqueria-music/disqueria-music.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { MusicListComponent } from './music-list/music-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AgregarDiscoComponent } from './agregar-disco/agregar-disco.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    CarritoListComponent,
    DisqueriaAboutComponent,
    DisqueriaMusicComponent,
    InputIntegerComponent,
    SignUpComponent,
    AgregarDiscoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
