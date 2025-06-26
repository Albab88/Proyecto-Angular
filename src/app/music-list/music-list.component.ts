import { Component, OnInit } from '@angular/core';
import { Musica } from './Musica';

@Component({
  selector: 'app-music-list',
  standalone: false,
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss'
})
export class MusicListComponent implements OnInit {

  music: Musica [] = [
    {
      artista: "Alfredo Zitarrosa",
      disco: "Esenciales",
      anio: 2020,
      precio: 23000,
      stock: 8,
      portada: "assets/img/Alfredo Zitarrosa - Esenciales.jpg",
      novedad: false,
      cantidad: 0
    },
  {
    artista: "Alfredo Zitarrosa",
    disco: "Si Te Vas",
    anio: 2021,
    precio: 38000,
    stock: 10,
    portada: "assets/img/Alfredo Zitarrosa - Si te vas.jpg",
    novedad: true,
    cantidad: 0
  },
  {
    artista: "Atahualpa Yupanqui",
    disco: "La Humilde",
    anio: 2007,
    precio: 22500,
    stock: 26,
    portada: "assets/img/Atahualpa Yupanqui - La Humilde.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Atahualpa Yupanqui",
    disco: "Los ejes de mi Carreta",
    anio: 2024,
    precio: 45000,
    stock: 60,
    portada: "assets/img/Atahualpa Yupanqui - Los ejes de mi Carreta.jpg",
    novedad: true,
    cantidad: 0
  },
  {
    artista: "Atahualpa Yupanqui",
    disco: "Luna Tucumana",
    anio: 2014,
    precio: 37400,
    stock: 0,
    portada: "assets/img/Atahualpa Yupanqui - Luna Tucumana.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Duo Coplanacu",
    disco: "La Juntada",
    anio: 2004,
    precio: 45000,
    stock: 40,
    portada: "assets/img/Duo Coplanacu - La Juntada.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Duo Coplanacu",
    disco: "Los Copla",
    anio: 2019,
    precio: 38000,
    stock: 91,
    portada: "assets/img/Duo Coplanacu - Los Copla.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Duo Coplanacu",
    disco: "Mayu Maman",
    anio: 2015,
    precio: 15000,
    stock: 47,
    portada: "assets/img/Duo Coplanacu - Mayu Maman.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Horacio Banegas",
    disco: "La Ciudad Desierta",
    anio: 2018,
    precio: 36500,
    stock: 42,
    portada: "assets/img/Horacio Banegas - La ciudad Desierta.jpg",
    novedad: true,
    cantidad: 0
  },
  {
    artista: "Horacio Banegas",
    disco: "Mi Origen y mi Lugar",
    anio: 1991,
    precio: 63000,
    stock: 8,
    portada: "assets/img/Horacio Banegas - Mi Origen y mi Lugar.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Horacio Guarany",
    disco: "Discografía Completa Vol. 1",
    anio: 2024,
    precio: 50000,
    stock: 100,
    portada: "assets/img/Horacio Guarany - Discografía Completa Vol. 1.jpg",
    novedad: true,
    cantidad: 0
  },
  {
    artista: "Horacio Guarany",
    disco: "Discografía Completa Vol. 2",
    anio: 2024,
    precio: 50000,
    stock: 0,
    portada: "assets/img/Horacio Guarany - Discografía Completa Vol. 2.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Horacio Guarany",
    disco: "Discografía Completa Vol. 3",
    anio: 2024,
    precio: 50000,
    stock: 136,
    portada: "assets/img/Horacio Guarany - Discografía Completa Vol. 3.jpg",
    novedad: true,
    cantidad: 0
  },
  {
    artista: "Jorge Cafrune",
    disco: "Esenciales",
    anio: 2020,
    precio: 28900,
    stock: 70,
    portada: "assets/img/Jorge Cafrune - Esenciales.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Jorge Cafrune",
    disco: "Siempre Vigente (Remastered)",
    anio: 2010,
    precio: 38000,
    stock: 0,
    portada: "assets/img/Jorge Cafrune - Siempre Vigente (Remastered).jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
  {
    artista: "Mercedes Sosa",
    disco: "Cantora 1",
    anio: 2009,
    precio: 15000,
    stock: 20,
    portada: "assets/img/Mercedes Sosa - Cantora 1.jpg",
    novedad: false,
    cantidad: 0
  },
];
  
constructor() { 

}

  ngOnInit(): void {
  }


upCantidad(music : Musica) : void {
  if(music.cantidad < music.stock)
      music.cantidad++;
}

downCantidad(music : Musica) : void {
  if(music.cantidad>0)
      music.cantidad--;
}
}