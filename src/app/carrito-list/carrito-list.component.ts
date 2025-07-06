import { Component, OnInit } from '@angular/core';
import { MusicCartService } from '../music-cart.service';

@Component({
  selector: 'app-carrito-list',
  standalone: false,
  templateUrl: './carrito-list.component.html',
  styleUrl: './carrito-list.component.scss'
})
export class CarritoListComponent implements OnInit {

  constructor(private cart: MusicCartService) { }

  ngOnInit(): void {
  }


}
