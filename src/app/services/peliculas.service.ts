import { Injectable } from '@angular/core';
import { HttpClient,HttpClientJsonpModule } from '@angular/common/http'
import {map, tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey:string = 'f5db8a9255d67e2282b48f43ea95054a';
  private urlMovie : string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient, jsonp:HttpClientJsonpModule) {

   }

   getTodasLasPeliculas(){
     let url = `${this.urlMovie}/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;
    return this.http.get(url).pipe(
      tap((res:any) =>{
        
      })
    )
   }

   getPopulares(){
     let url = `${this.urlMovie}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
     return this.http.get(url).pipe(
       tap((res:any)=>{
         
       })
     )
   }

   searchMovies(parametro:string){
    let urlSearch =  `${this.urlMovie}/search/movie?api_key=${this.apiKey}&language=es-MX&query=${parametro}&page=1&include_adult=true`;
     return this.http.get(urlSearch).pipe(
       tap((res:any)=>{
        
       })
     )}

}
