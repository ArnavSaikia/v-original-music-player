const myClientID = '9984639e';
const fetchURL = `https://api.jamendo.com/v3.0/tracks/?client_id=YOUR_CLIENT_ID&format=json&limit=10&search=QUERY`;

const searchBox = document.querySelector('.search-box')

searchBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        let searchQuery = searchBox.value;
        let insertedHTML = '';
        let selectedTrack = 0;
        let outesrcope_searchResults = 0;
        
        fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${myClientID}&format=json&limit=8&search=${searchQuery}`)
            .then(result => result.json())
            .then(jsonResult => {
                const searchResults = jsonResult.results;
                outesrcope_searchResults = searchResults;
                searchResults.forEach((track,index) => {
                    let trackHTML = `<div class="song-box" id="search-res-${index}">
                        <img src="${track.album_image}" height=40px width=40px>
                        <div class="song-metadata">
                            <span class="track-name" style="display:block;">${track.name}</span>
                            <span class="artist-name">${track.artist_name}</span>
                        </div>
                    </div>
                    `;
                    insertedHTML += trackHTML;
                });
            })
            .then(() => {
                document.querySelector('.search-results').innerHTML = insertedHTML;
            })
            .then(() => {
                outesrcope_searchResults.forEach((track,index) => {
                    let button = document.getElementById(`search-res-${index}`);
                    button.addEventListener('click', () => {
                        selectedTrack = track;
                        localStorage.setItem('selectedTrack', JSON.stringify(selectedTrack));
                        window.location.href = 'index.html';
                    });
                });
            })
            .catch(error => console.error(error));
    }
});

