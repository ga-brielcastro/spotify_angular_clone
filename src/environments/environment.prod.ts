export const environment = {
  production: true
};

export const SpotifyConfiguration = {
  clientId: '255c0a98f08549e5a37fed7d0d108658',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [ // o que o usuario aceita quando recebeu o token de autenticacao, quando logou
    "user-read-currently-playing", // ler musica tocando agora
    "user-read-recently-played",   // ler musicas tocadas recentemente
    "user-read-playback-state",    // ler estado do player do usuario
    "user-top-read",               // top artistas e musicas do usuario
    "user-modify-playback-state",  // alterar do player do usuario
    "user-library-read",           // ler biblioteca do usuario
    "playlist-read-private",       // ler playlists privadas
    "playlist-read-collaborative"  // ler playlists colaborativas
  ]
}
