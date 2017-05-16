import { SpotifyArtistsPage } from './app.po';

describe('spotify-artists App', () => {
  let page: SpotifyArtistsPage;

  beforeEach(() => {
    page = new SpotifyArtistsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
