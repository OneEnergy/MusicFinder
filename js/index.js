function pesquisarMusica() {
    const artista = document.getElementById('artista').value
    const musica = document.getElementById('musica').value
    const lyrics = document.getElementById("lyrics")
    lyrics.innerHTML = '<div class="spinner-border m-5" role="status"><span class="visually-hidden">Loading...</span></div>'
    if (artista == '' || musica == '') {
        lyrics.innerHTML = 'Letras não encontradas'

    } else {
        response(artista, musica)
    }
}
function resetMusica() {
    const lyrics = document.getElementById("lyrics")
    const artista = document.getElementById('artista').value = ""
    const musica = document.getElementById('musica').value = ""
    lyrics.innerHTML = ''
}

function musica(artista, musica) {

    return fetch(`https://api.lyrics.ovh/v1/${artista}/${musica}`)

}

async function response(rtnArtista, rtnMusica) {

    const musicaLetra = await musica(rtnArtista, rtnMusica)
    const musicaJson = await musicaLetra.json()
    if (musicaJson.error) {
        lyrics.innerHTML = musicaJson.error
    } else {
        lyrics.innerHTML = musicaJson.lyrics
    }

    console.log(musicaJson)
}