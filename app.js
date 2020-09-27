const background = document.getElementById('background')
const thumbnail = document.getElementById('thumbnail')

const song = document.getElementById('song')

const songArtist = document.getElementsByClassName('song-artist')[0]
const songtitle = document.getElementsByClassName('song-title')[0]
const progress = document. getElementById('progress-bar')
const pPause = document.getElementById('play-pause')
const nextBtn = document.getElementById('next-song')
const prevBtn = document.getElementById('previous-song')


let artist = [
    'Bts',
    'Earth, wind and fire',
    'Bill Withers'
]

let title = [
    'Dynamite',
    'September',
    'Just the two of us'
]

let songs = [
    './music/Dynamite - BTS.mp3',
    './music/September - Earth_ Winds Fire.mp3',
    './music/Just The Two Of Us - Bill Withers_ Grove.mp3'
]

let covers = [
    './cover/126165.jpg',
    './cover/64868.jpg',
    './cover/1234.jpg'
]

let playing = true

function playPause() {
    if(playing) {
        pPause.src= "./icons/icons8-pause-26.png"

        song.play()
    } else {
        pPause.src = "./icons/icons8-next-24.png"

        song.pause()
    }
    playing = !playing
}

nextBtn.onclick = nextSong
prevBtn.onclick = previousSong

let songIndex = 0

function nextSong() {
    songIndex ++;
    if (songIndex >= songs.length) {
        songIndex= 0;
    }
    song.src = songs[songIndex]
    thumbnail.src = covers[songIndex]
    background.src = covers[songIndex]

    songArtist.innerText = artist[songIndex]
    songtitle.innerText = title[songIndex]

    playing = true
    playPause()
}

function previousSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    song.src = songs[songIndex]
    thumbnail.src = covers[songIndex]
    background.src = covers[songIndex]

    songArtist.innerText = artist[songIndex]
    songtitle.innerText = title[songIndex]

    playing = true
    playPause()

}

function formatTime (seconds) {
    let minutes = Math.floor(seconds/60);
    seconds = seconds % 60;
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    return `${minutes}:${seconds}`
    
}

function updateProgressValue () {
    progress.max = song.duration
    progress.value = song.currentTime
    
    document.querySelector('.currentTime').innerHTML = formatTime(Math.floor(song.currentTime))

    if(document.querySelector('.durationTime').innerHTML === 'Nan:Nan') {
        document.querySelector('.durationTime').innerHTML = '0:00'

    }
    else {
        document.querySelector('.durationTime').innerHTML = formatTime(Math.floor(song.duration))
    }
}

setInterval(updateProgressValue, 500); 
function changeProgressBar() {
    song.currentTime = progress.value
}
progress.onchange = changeProgressBar

