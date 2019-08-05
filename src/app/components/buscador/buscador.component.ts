import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  peliculasBuscadas:any

  buscar:string

  constructor( private peliculasService:PeliculasService) { }

  ngOnInit() {
  }

  buscarPelicula(){
    
    if(this.buscar.length <= 0){return}

    this.peliculasService.searchMovies(this.buscar).subscribe((res:any)=>{
      this.peliculasBuscadas = res.results;
      console.log("esta es la data filtrada", this.peliculasBuscadas);

    })
  }

}
