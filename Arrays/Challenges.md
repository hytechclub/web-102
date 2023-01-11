# Challenges
Try to complete these challenges that deal with a [playlist website](https://the-best-songs.hylandoutreach.repl.co/).

Start by forking [this Repl project](https://replit.com/@HylandOutreach/the-best-songs#style.css). Then, try to update the site in a variety of ways! Feel free to hop around whichever challenges interest you the most.

## Challenge 1 - Updating the Picture
The jumbotron header has a background image, but it might not be something you like. Find another picture online, add it to your Repl project, and update the `background-image` property in the **style.css** file!

## Challenge 2 - Updating the Colors
The colors are designed to match the background image of the jumbotron. Update any of the colors in the **style.css** file to match your own personal taste!

## Challenge 3 - Updating the Songs
There are currently six songs in the playlist. Update some of these songs so that they reflect _your_ favorite songs! This should take place in the **script.js** file.

Note that the string values in the `songs` array are formatted in a specific way: `"Song Title|Artist"`. Make sure your new songs fit that format, with the song title first, then a pipe character (`|`), then the song artist.

Try to modify the `songs` array without changing the first line of the **script.js** file! Use `.push`, or `songs[1] = "Soemthing|Else"`, to change the values in the array.

## Challenge 4 - No More "Fill Playlist" Button
Currently, it is necessary to click the "Fill Playlist" button in order to add songs to the playlist. Fix this so that the songs are added automatically when the page loads! This is possible by using the `<script>` [`defer`](https://www.w3schools.com/tags/att_script_defer.asp) attribute to make sure the JavaScript code runs _after_ the HTML has been parsed. 

1. Open the **index.html** file for editing
1. Add a `defer` attribute to the `<script>` element
1. Open the **script.js** file for editing
1. Make a new line at the very bottom, _under_ the `fillPlaylist` function
1. Call the `fillPlaylist` function directly

Reload the page, and the songs should appear automatically without having to click a button!

## Challenge 5 - Album Column
Currently, the `songs` array stores two pieces of information for each song - the song title, and the song artist. Update the `songs` array so that each string contains an album as well, and then modify the code so that it displays an album column!

Review some of these resources to learn more:

- [The `split` function](https://www.w3schools.com/jsref/jsref_split.asp)
    - [Example](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split)
- [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Then, try to apply those concepts:

1. Open the **script.js** file for editing
1. In the `songs` array, modify each string by adding a `|` to the end
1. After each new `|`, add an album title (feel free to make stuff up)
1. Within the `fillPlaylist` function, in the `for` loop body, find where the `currentSong.split` happens
1. To the left of that, add `album` to the `title` and `artist` variables being set
1. Update the column sizes for title and artist
    - Change `"col-sm-5"` to `"col-sm-4"` for both
1. Create another HTML `<div>` element for the album title
1. Add `"col-sm-2"` to its `classList`
1. Set its `textContent` to the `album` variable set above
1. Append the created album `<div>` to the `songRow` element

Run the project, and see the albums show up in the list!

## Challenge 6 - Playing Actual Songs
The most hardest part of this challenge may be finding audio files, so do not worry too much about that. The more technical challenges may also be difficult!

### Function for the Play Buttons
It will be beneficial to learn more about [anonymous functions](https://www.javatpoint.com/javascript-anonymous-functions) to accomplish this. Basically, it is possible to pass around JavaScript functions as objects, and they do not need names. This allows custom, dynamic functionality to be applied at different points in the code. Here's a brief example:

```js
let myNamelessFunction = function () {
  alert("This is a function");
}

myNamelessFunction();
```

1. Open the **script.js** file for editing
1. In the body of the `fillPlaylist` function, within the `for` loop, find where the `playBtn` variable is set
1. Set the `onclick` of the `playBtn` to be a new anonymous function
1. In the body of the anonymous function, use an `alert` to display a pop-up with the title of the current song `title`

Run the code at this point to make sure each play button is hooked up!

### Playing Audio
The next step will be to actually [play some audio](https://stackoverflow.com/a/18628124). You will want to find some audio files and pull them into your Repl project first. Once you have done that, you can play them! It looks something like this:

```js
let audio = new Audio("audio_file.mp3");
audio.play();
```

You can adjust the files so that each file matches the song title... for example, if the song title is `"Baba O'Riley"`, the file should be called **Baba O'Riley.mp3**. That way, you can get the filename from the title like so:

```js
let filename = `${title}.mp3`;
```

It should then be possible to play it! Try it out and see if you can get it working.

## Challenge 7 - Adding and Deleting Songs
Update this website so that it has more of the functionality from the [Movie Watchlist](WatchlistCodeAlong.md)!

1. Create a button that allows a user to add a song to the end of the list
1. Next to each item in the list, create a button that allows the user to remove that item from the list

This may be quite challenging, but it is definitely possible 😁

## Challenge 8 - Saving the List with `localStorage`
Similar to the challenge from the [Self-Paced Work](SelfPacedWork.md), try to use `localStorage` to store the `songs` array so it persists! This challenge only makes sense if the challenge above has been completed.
