//This is for making the API calls.
//Prototyping for now. Probably should implement in a module format along with media_playback.js

const myClientID = '9984639e';
const fetchURL = `https://api.jamendo.com/v3.0/tracks/?client_id=${myClientID}&format=json&limit=1`;

const songResult = 0;

fetch(fetchURL)
    .then(result => result.json())
    .then(jsonResult => {
        console.log(jsonResult);
        const track = jsonResult.results[0];
        document.querySelector('.thumbnail-img').src = track.album_image;
        document.querySelector('.song').src = track.audio;
    })
    .catch(error => console.error(error));

//lets try and manipulate the DOM now

// document.querySelector('.thumbnail-img').src = songResult.results[0].album_image;
// document.querySelector('.song').src = songResult.results[0].audio;
