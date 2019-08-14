import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  peliculas:any
  constructor(private peliculasService:PeliculasService,
              private activatedRoute:ActivatedRoute ) {

      this.activatedRoute.params.subscribe((parametros:any)=>{
        // este es un servicio para poder enviar los datos 
          this.peliculasService.getOneMovie(parametros['id']).subscribe((data:any)=>{
            this.peliculas = data;
            console.log(this.peliculas);
          })
      })
  }

  ngOnInit() {
  }

}
