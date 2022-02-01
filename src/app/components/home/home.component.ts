import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevascanciones:any[]=[];
  loading:boolean;
  error:boolean;
  mensajeerror:string;

  constructor( private spotify:SpotifyService) {

    this.loading=true;
    this.error=false;
    this.mensajeerror="";

    
      this.spotify.getNewReleases()
    .subscribe((data:any)=>{
      this.nuevascanciones=data;
      this.loading=false;
    }, ( errorServicio )=>{
      this.error=true;
      this.loading=false;
      this.mensajeerror= errorServicio.error.error.message
    })
    

   }

  

}
