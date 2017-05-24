import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SpotifyComponent} from './spotify.component';
import { SpotifyService } from 'app/spotify.service';
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './notfound.component';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {UserFormComponent} from './user-form.component';
import {ArtistComponent} from './artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SpotifyComponent,
    UserFormComponent,
    ArtistComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})

export class AppModule { }
