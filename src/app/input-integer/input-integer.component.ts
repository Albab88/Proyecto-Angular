import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})

export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad!: number;

  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<String> = new EventEmitter<String>();
  
  ngOnInit(): void {
  }

  upCantidad() : void {
    if(this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else {
      this.maxReached.emit("Alcanzaste el stock máximo disponible");
    }
  }

  downCantidad() : void {
  if(this.cantidad>0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  changeCantidad(event: any) : void {
    console.log(event);
    this.cantidadChange.emit(this.cantidad);
  }
}
