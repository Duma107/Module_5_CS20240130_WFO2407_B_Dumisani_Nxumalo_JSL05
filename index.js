// Array of song objects with title, artist, and genre properties
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" },
];

// Object containing each Guardian's preferred genre and specific songs
const guardianPreferences = {
  "Star-Lord": ["Moonage Daydream", "Come and Get Your Love", "The Chain"],
  "Gamora": ["Hooked on a Feeling", "I Want You Back"],
  "Drax": ["Ain't No Mountain High Enough"],
  "Rocket": ["Moonage Daydream", "Come and Get Your Love", "The Chain"],
  "Groot": ["Hooked on a Feeling", "I Want You Back"]
};

// Function to generate playlist using filter based on specific songs
function generatePlaylist(preferences, songs) {
  const playlists = new Map();

  Object.keys(preferences).forEach(guardian => {
      // Filter songs that are specifically preferred by each Guardian
      const playlist = songs.filter(song => preferences[guardian].includes(song.title));
      playlists.set(guardian, playlist);
  });

  return playlists;
}

// Function to display playlists in the HTML and log them to the console
function displayPlaylists() {
  const playlistsDiv = document.getElementById('playlists');
  playlistsDiv.innerHTML = ''; // Clear existing playlists
  const guardianPlaylists = generatePlaylist(guardianPreferences, songs);

  // Log the playlists to the console
  console.log('Generated Playlist:', Object.fromEntries(guardianPlaylists));

  // Iterate through each Guardian's playlist and append it to the DOM
  guardianPlaylists.forEach((playlist, guardian) => {
      const playlistDiv = document.createElement('div');
      playlistDiv.className = 'playlist';

      const h2 = document.createElement('h2');
      h2.textContent = `${guardian}'s Playlist`;
      playlistDiv.appendChild(h2);

      const ul = document.createElement('ul');
      ul.style.listStyleType = 'none';

      playlist.forEach(song => {
          const li = document.createElement('li');
          li.className = 'song';
          li.innerHTML = `<span class="song-title">${song.title}</span> by <span class="song-artist"> ${song.artist} </span>`;
          ul.appendChild(li);
      });

      playlistDiv.appendChild(ul);
      playlistsDiv.appendChild(playlistDiv);
  });
}

// Call the function to display playlists when the page loads
document.addEventListener('DOMContentLoaded', displayPlaylists);
