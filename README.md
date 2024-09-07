
# Galaxy Mix 🎶

**Galaxy Mix** is a dynamic playlist page that showcases themed playlists for each member of the Guardians of the Galaxy. The page is built using HTML, CSS, and JavaScript, with a focus on responsive design and interactive elements.

## Features

- **Dynamic Playlist Generation**: Playlists are generated dynamically based on each Guardian's song preferences using JavaScript.
- **Responsive Design**: The page is designed to be responsive, ensuring a great user experience across different devices and screen sizes.
- **Stylish Interface**: Custom CSS provides a sleek, modern look with hover effects and subtle animations.

## Technologies Used

- **HTML5**: Structure and content of the web page.
- **CSS3**: Styling, including media queries for responsiveness.
- **JavaScript (ES6)**: Logic for generating and displaying playlists based on predefined preferences.

## File Structure

- `index.html`: The main HTML file that includes the structure of the page.
- `index.css`: The CSS file responsible for styling the page.
- `index.js`: The JavaScript file that handles the dynamic generation of playlists.

## How It Works

1. **Data Setup**: The JavaScript file (`index.js`) contains an array of songs and an object that maps each Guardian to their preferred songs.
2. **Playlist Generation**: A function (`generatePlaylist`) filters the songs based on each Guardian's preferences and creates a playlist for each one.
3. **Display**: The `displayPlaylists` function dynamically generates HTML elements to display the playlists on the page. These elements are styled using the provided CSS (`index.css`).
4. **Responsive Design**: The CSS includes media queries that adjust the layout and styling of the page for screens with a width of 1440px or less, ensuring the content looks great on all devices.

## How to Use

1. Clone the repository or download the project files.
2. Open `index.html` in your web browser.
3. The page will automatically generate and display playlists for each Guardian of the Galaxy based on their song preferences.

## Customization

- **Adding Songs**: You can add more songs to the `songs` array in `index.js`.
- **Changing Preferences**: Modify the `guardianPreferences` object in `index.js` to update which songs each Guardian prefers.
- **Styling**: Customize the look and feel of the page by editing the `index.css` file.

## License

This project is open-source and available under the [MIT License](LICENSE).
