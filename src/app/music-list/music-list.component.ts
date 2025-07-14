import { Component, OnInit } from '@angular/core';
import { MusicCartService } from '../music-cart.service';
import { MusicDataService } from '../music-data.service';
import { Musica } from './Musica';

@Component({
  selector: 'app-music-list',
  standalone: false,
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss'
})
export class MusicListComponent implements OnInit {

  music: Musica [] = [];
  
constructor(
  private cart: MusicCartService,
  private musicDataService: MusicDataService) {
}

  ngOnInit(): void {
    this.musicDataService.getAll()
    .subscribe((music: Musica[]) => this.music = music);
  }

  addToCart(music : Musica) : void {
    this.cart.addToCart(music);
    music.stock -= music.cantidad;
    music.cantidad = 0; // Resetea la cantidad después de agregar al carrito
  }

  maxReached(m: String) {
    alert(m);
  }
  
}