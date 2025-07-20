import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-agregar-disco',
  standalone: false,
  templateUrl: './agregar-disco.component.html',
  styleUrl: './agregar-disco.component.scss'
})

export class AgregarDiscoComponent {

  constructor(
    private musicService: MusicDataService) {

    }

  formularioAgregar = new FormGroup({
    artista: new FormControl('', [Validators.required]),
    disco: new FormControl('', [Validators.required]),
    anio: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    portada: new FormControl('', [Validators.required]),
    novedad: new FormControl(''),
  });


OnSubmit() {
    const { artista, disco, anio, precio, stock, portada, novedad } = this.formularioAgregar.value;

    this.musicService.addMusica(
        artista ?? '',
        disco ?? '',
        Number (anio) ?? 0,
        Number(precio) ?? 0,
        Number(stock) ?? 0,
        portada ?? '',
        Boolean(novedad),
    ).subscribe();
    this.formularioAgregar.reset();
    alert('Disco agregado correctamente');
    
  }

}
