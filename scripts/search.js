const myClientID = '9984639e';
const fetchURL = `https://api.jamendo.com/v3.0/tracks/?client_id=YOUR_CLIENT_ID&format=json&limit=10&search=QUERY`;

const searchBox = document.querySelector('.search-box')

searchBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        let searchQuery = searchBox.value;
        let insertedHTML = '';
        
        fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${myClientID}&format=json&limit=10&search=${searchQuery}`)
            .then(result => result.json())
            .then(jsonResult => {
                const searchResults = jsonResult.results;
                searchResults.forEach(track => {
                    let trackHTML = `<div class="song-box">
                        <img src="${track.album_image}" height=40px width=40px>
                        <div class="song-metadata">
                            <span class="track-name">${track.name}</span>
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
            .catch(error => console.error(error));
    }
});

