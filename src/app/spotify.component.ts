
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { SpotifyService } from 'app/spotify.service';

@Component({

  templateUrl: 'spotify.component.html',
  styleUrls: ['spotify.component.css']


})

export class SpotifyComponent implements OnInit {
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

