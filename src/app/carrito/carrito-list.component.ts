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
  totalDiscos: number = 0;
  totalPrecio: number = 0;

  constructor(private cart: MusicCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
  ngOnInit(): void {
    this.cartList$.subscribe((musica: Musica[]) => {
      this.totalDiscos = musica.reduce((total, item) => total + item.cantidad, 0);
      this.totalPrecio = musica.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    });
  }

QuitarDisco(music : Musica) : void {
  this.cart.removeFromCart(music,1);
}

  Comprar() {
    if(this.cart.cartList.value.length > 0)  {
      alert("Compra realizada exitosamente. Muchas gracias");
    }
    this.cart.cartList.next([]);
  }
}
