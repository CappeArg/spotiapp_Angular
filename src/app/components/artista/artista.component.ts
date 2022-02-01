import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent    {

  artista:any={};
  loading:boolean;
  topTracks: any[]=[]

  constructor(private route:ActivatedRoute, private spotify:SpotifyService) {

    this.loading=true;
    this.route.params.subscribe(params=>{
      console.log(params['id']);

      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
   }
getArtista(id:string){

  this.spotify.getArtista(id)
  .subscribe(artista=>{
    this.artista=artista;
    this.loading=false;
  });
  
}

getTopTracks( id:string ){

  this.spotify.geTopTracks( id )
        .subscribe( toptracks=>{
          console.log(this.topTracks=toptracks);
        })
}

}
