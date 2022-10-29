export const environment = {
  production: false
};

export const SpotifyConfiguration = {
  clientId: 'f025a29d662b471c8f910d8fb77c358a',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scope: [
    "user-read-currently-playing", // musica tocando agora
    "user-read-recently-played", // ler musicas tocadas recentes
    "user-read-playback-state", // ler estado do player
    "user-top-read", // top artista do usuario
    "user-modify-playback-state", //alterar o player
    "user-library-read", // ler biblioteca do usuario
    "playlist-read-private", // ler playlist privadas
    "playlist-read-collaborative"  // ler playlist colaborativas
  ]
};
