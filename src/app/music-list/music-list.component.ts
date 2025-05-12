import { Component } from '@angular/core';

@Component({
  selector: 'app-music-list',
  standalone: false,
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss'
})
export class MusicListComponent {

  music = {
    artista: "Mercedes Sosa",
    disco: "Cantora",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "../assets/img/cantora.jpg"
  };
}