import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicCartService } from '../music-cart.service';
import { Musica } from '../music-list/Musica';

@Component({
  selector: 'app-carrito-list',
  standalone: false,
  templateUrl: './carrito-list.component.html',
  styleUrl: './carrito-list.component.scss'
})
export class CarritoListComponent implements OnInit {

  cartList$: Observable<Musica[]>;

  constructor(private cart: MusicCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
  ngOnInit(): void {
  }

QuitarDisco(music : Musica) : void {
  this.cart.removeFromCart(music);
  music.cantidad -=1;
}
}
