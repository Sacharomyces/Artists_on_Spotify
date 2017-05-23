
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()

export class SpotifyService {

    constructor(private _http: Http) {

    }

    getSpotifyArtists(artist) {

       return this._http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist')
            .map(result => result.json());
    }
}
