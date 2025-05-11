//This is for making the API calls.
//Prototyping for now. Probably should implement in a module format along with media_playback.js

const myClientID = '9984639e';
const fetchURL = `https://api.jamendo.com/v3.0/tracks/?client_id=${myClientID}&format=json&limit=10`;

let songResult = 0;

// fetch(fetchURL)
//     .then(result => result.json())
//     .then(jsonResult => {
//         console.log(jsonResult);
        // const track = jsonResult.results[0];
        // document.querySelector('.thumbnail-img').src = track.album_image;
        // document.querySelector('.song').src = track.audio;
        // document.querySelector('.title').textContent = track.name;

//     })
//     .catch(error => console.error(error));

//lets try and manipulate the DOM now

// document.querySelector('.thumbnail-img').src = songResult.results[0].album_image;
// document.querySelector('.song').src = songResult.results[0].audio;

async function fetchTracks(){
    let results = await fetch(fetchURL);
    results = await results.json();
    console.log(results);
    songResult = results;
    songResult.results.sort(() => Math.random() - 0.5); //for shuffling the array
    let totalTime = 0;
    songResult.results.forEach(element => {
        totalTime += element.duration;
    });
        const track = songResult.results[0];
        document.querySelector('.thumbnail-img').src = track.album_image;
        document.querySelector('.song').src = track.audio;
        document.querySelector('.title').textContent = track.name;
        document.querySelector('.next-song').textContent = `${songResult.results[1].artist_name} - ${songResult.results[1].name}`;
        document.querySelector('.song-info').textContent = `${Math.round(totalTime/60)} minutes • 10 tracks`;
}

function backward(){
    if(i==0) return; //if on first track do nothing
    
    i -= 1;
    let track = songResult.results[i];
        document.querySelector('.thumbnail-img').src = track.album_image;
        document.querySelector('.song').src = track.audio;
        document.querySelector('.title').textContent = track.name;
        document.querySelector('.next-song').textContent = `${songResult.results[i+1].artist_name} - ${songResult.results[i+1].name}`;
    
    song.play();
    playPause.classList.remove('fa-play');
    playPause.classList.add('fa-pause');
};

function forward(){
    if(i==9) return; //if on last track do nothing

    i += 1;
    let track = songResult.results[i];
        document.querySelector('.thumbnail-img').src = track.album_image;
        document.querySelector('.song').src = track.audio;
        document.querySelector('.title').textContent = track.name;
        if(i!=9) document.querySelector('.next-song').textContent = `${songResult.results[i+1].artist_name} - ${songResult.results[i+1].name}`;
        else document.querySelector('.next-song').textContent = "None";

    song.play();
    playPause.classList.remove('fa-play');
    playPause.classList.add('fa-pause');
};

//CODE FLOW STARTS HERE
let i = 0;
console.log("fetching tracks");
fetchTracks();

document.querySelector('.backward').addEventListener('click', () => {
    backward();
});

document.querySelector('.forward').addEventListener('click', () => {
    forward();
});