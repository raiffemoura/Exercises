

let video = document.getElementById("video1")

function retroceder() {
    video.currentTime -= 15;
}

function avancar() {
    video.currentTime += 15;
}

function diminuir_vel() {
    video.playbackRate -= 0.2
}

function aumentar_vel() {
    video.playbackRate += 0.2
}

function pause() {
    video.pause()
}

function play() {
    video.play()
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

