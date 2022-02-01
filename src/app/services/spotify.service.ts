import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    
   }

   getQuery( query:string ){

    const URL=`https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQB40ltUBFsw4zlLs9R3LFsvrjenC5HOeeTT-1qUQJ1WqOP44B_u2ObpX-G6S6L2jcR6J_W-pHOx0yXoyX4'
    });  
    return this.http.get(URL,{ headers });

   }

   getNewReleases(){

     return this.getQuery('browse/new-releases')
                 .pipe(map( (data:any) => data.albums.items));
   }

   getArtistas( termino:string ){

     return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                 .pipe(map((data:any)=> data.artists.items));
   }

   getArtista( id:string ){

    return this.getQuery(`artists/${id}`);
                // .pipe(map((data:any)=> data.artists.items));
  }

   geTopTracks( id:string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe(map((data:any)=> data.tracks));
  }
}