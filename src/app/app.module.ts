import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoListComponent } from './carrito/carrito-list.component';
import { DisqueriaAboutComponent } from './disqueria-about/disqueria-about.component';
import { DisqueriaMusicComponent } from './disqueria-music/disqueria-music.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { MusicListComponent } from './music-list/music-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    CarritoListComponent,
    DisqueriaAboutComponent,
    DisqueriaMusicComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
