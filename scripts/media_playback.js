
console.log("Script loaded!");
let progress = document.getElementById('progress-bar');
let song = document.querySelector(".song");
let playPause = document.querySelector('.ctrlIcon');

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function changeCtrlIcon(){
    if(playPause.classList.contains('fa-play')){
        song.play();
        playPause.classList.remove('fa-play');
        playPause.classList.add('fa-pause');
        return;
    }

    if(playPause.classList.contains('fa-pause')){
        song.pause();
        playPause.classList.remove('fa-pause');
        playPause.classList.add('fa-play');
        return;
    }
}











// CODE FLOW STARTS HERE
let progressInterval = setInterval(() => {
    progress.value = song.currentTime;
}, 750);

let endCheckerInterval = setInterval(() => {
    if (song.currentTime == song.duration && playPause.classList.contains('fa-pause')){
        playPause.classList.remove('fa-pause');
        playPause.classList.add('fa-play');
    }
},500);

document.querySelector('.play').addEventListener('click', () => {
    changeCtrlIcon();
});

progress.onchange = () => {     // same as progress.addEventListener('change',()=>{}); (kinda)
    clearInterval(progressInterval);
    song.currentTime = progress.value;
    song.play();
    playPause.classList.remove('fa-play');
    playPause.classList.add('fa-pause');
    progressInterval = setInterval(() => {
        progress.value = song.currentTime;
    }, 750);
};

// let songResults = fetchTracks();
// console.log(songResults);
// const track = songResults.results[0];
//         document.querySelector('.thumbnail-img').src = track.album_image;
//         document.querySelector('.song').src = track.audio;
//         document.querySelector('.title').textContent = track.name;
