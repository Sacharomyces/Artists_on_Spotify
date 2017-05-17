import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';


@Injectable()

export class SpotifyService {

    constructor(private _http: Http){

    }

    getSpotifyArtists(){
        
        this._http.get("https://api.spotify.com/v1/search?q=jason&type=artist")
            .map(result => result.json());
    }
} 