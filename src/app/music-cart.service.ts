import { Injectable } from '@angular/core';
import { Musica } from './music-list/Musica';

// This service will manage the music cart functionality
@Injectable({
  providedIn: 'root'
})

export class MusicCartService {

  

  addToCart(music: Musica) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
