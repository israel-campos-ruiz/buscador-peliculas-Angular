import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// para el esparcimiento de componentes
 peliculas:any;
 populares:any;
 rangoR:any;

  constructor(private peliculasService:PeliculasService) {
    this.peliculasService.getTodasLasPeliculas().subscribe((data:any)=>{
      this.peliculas = data.results;
      // console.log(this.peliculas);
    })

    this.peliculasService.getPopulares().subscribe((data:any)=>{
      this.populares = data.results;
      console.log(this.populares)
    })

    

  
   }

  ngOnInit() {
  }

}
