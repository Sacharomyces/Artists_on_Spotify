
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SpotifyService } from 'app/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']


})

export class AppComponent {
  artists = [];
  isLoading = false;

  searchControl = new FormControl();


  constructor(private _spotifyService: SpotifyService) {

  }

  ngOnInit() {
    this.searchControl.valueChanges
      .filter(text => text.length >= 2)
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(value => {
        this.isLoading = true;
        this._spotifyService.getSpotifyArtists(value)
          .subscribe(data => {
            this.isLoading = false;
            this.artists = data.artists.items;
            console.log(data.artists.items);
          });

      });

  }
}

