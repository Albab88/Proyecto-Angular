import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Musica } from './music-list/Musica';

const URL = 'https://687422f6dd06792b9c933989.mockapi.io/api/vi/music/musica';

@Injectable({
  providedIn: 'root'
})

export class MusicDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Musica[]> {

    return this.http.get<Musica[]>(URL)
    .pipe(tap((music : Musica[]) => music.forEach(music => music.cantidad = 0))); // Inicializa la cantidad a 0 para cada música
    //consumir la apirest
  }
}
