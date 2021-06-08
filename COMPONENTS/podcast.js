const player = document.querySelector('#player')

const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const stop = document.querySelector('#stop')

const playMusic = () => {
    player.play()
}

const pauseMusic = () => {
    player.pause()
}

const stopMusic = () => {

    player.pause()
    player.currentTime = 0
}


play.addEventListener('click', playMusic)
pause.addEventListener('click', pauseMusic)
stop.addEventListener('click', stopMusic)
