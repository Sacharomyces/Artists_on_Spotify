import { RouterModule,} from '@angular/router';
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './notfound.component';
import {SpotifyComponent} from './spotify.component';
import {UserFormComponent} from './user-form.component';
import {ArtistComponent} from './artist.component';




export const Routes = [
  {path: '', component: HomeComponent },
  {path: 'spotify', component: SpotifyComponent},
  {path: 'spotify/artist/:id/:name', component: ArtistComponent},
  {path: 'signup', component: UserFormComponent},
  {path: '**', component: NotFoundComponent}

];

export const routing = RouterModule.forRoot(Routes);
