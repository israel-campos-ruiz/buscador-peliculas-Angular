import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';

import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  peliculasBuscadas:any

  buscar:string

  constructor( private peliculasService:PeliculasService,
               private router:ActivatedRoute) {
                }

  ngOnInit() {
    this.router.params.subscribe((parametros:any) =>{
      if(parametros['texto']){
       this.buscar = parametros['texto'];
       this.buscarPelicula();
      }
    })
    
  }


  buscarPelicula(){
    
    if(this.buscar.length <= 0){return}

    Swal.fire({
      allowOutsideClick: false,
      type: "info",
      text: "Espera un momento"
    });

    Swal.showLoading()

    this.peliculasService.searchMovies(this.buscar).subscribe((res:any)=>{
      this.peliculasBuscadas = res.results;
      Swal.close();
      console.log("esta es la data filtrada", this.peliculasBuscadas);

    }, (err) =>{
      Swal.fire({
        title: 'Error al ingresar',
        allowOutsideClick: true,
        type: "error",
        text: err.error.err.message
      });

    })
  }

}
