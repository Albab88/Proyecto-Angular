import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Musica } from './music-list/Musica';

// This service will manage the music cart functionality
@Injectable({
  providedIn: 'root'
})

export class MusicCartService {
  
  private _cartList: Musica[] = [];
  cartList: BehaviorSubject<Musica[]> = new BehaviorSubject(this._cartList);
  
  constructor() { }
  
  addToCart(music: Musica) {
    let item = this._cartList.find((m) => m.disco == music.disco);
    if (!item) {
      this._cartList.push({...music}); //clona el objeto
    } else {
      item.cantidad += music.cantidad;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList); //equivale al EmmitEvent
  }
  
  removeFromCart(music: Musica) {
  let item = this._cartList.findIndex((m) => m.disco === music.disco);
  if (item >= 0) {
    this._cartList[item].cantidad -= music.cantidad;
    if (this._cartList[item].cantidad <= 0) {
      this._cartList.splice(item, 1); // Elimina el ítem del carrito
    }
  }
  console.log(this._cartList);
  this.cartList.next(this._cartList);
}
}

/*removeFromCart(music: Musica) {
  //ver como eliminar un item del carrito
  let item = this._cartList.findIndex((m) => m.disco === music.disco);
  if (item >= 1 ) {
    this._cartList[item].cantidad -= music.cantidad;
    if (this._cartList[item].cantidad === 0) {
      this._cartList.splice(item);
      //eliminar el carrito si la cantidad es 0
      
  }
}
  console.log(this._cartList);
  this.cartList.next(this._cartList); //equivale al EmmitEvent
}
```
*/