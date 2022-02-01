import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  busquedaArtista:any[];
  loading:boolean;
  error:Boolean;
  mensajeerror:string;

  constructor(private spotify:SpotifyService) {
    
    this.busquedaArtista=[];
    this.loading=false;
    this.error=false;
    this.mensajeerror="";
   }
  

  buscar(termino:string){
    
    if(termino.length>0){
      this.loading=true;
      this.spotify.getArtistas(termino)
      .subscribe((data:any)=>{
          this.busquedaArtista=data;
          this.loading=false;
          },    ( errorServicio )=>{
                this.error=true;
                this.loading=false;
                this.mensajeerror= errorServicio.error.error.message
        })
    }else{
      this.busquedaArtista=[];
    }
   

  };


}
