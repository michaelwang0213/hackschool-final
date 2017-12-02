var express = require("express");
var bodyParser = require('body-parser');

var app = express();
var songs = initialSongs();
/////

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'hbs');


app.listen(3000, (request, response) => {
	console.log("Server is listening on port 3000. Go to http://localhost:3000/");
});

app.get('/', (request, response) => {
	response.render("home", {
		title: "Insert Title Here",
		content: "Hello, World",
		/////////
		songs: songs
		/////////
	});
});

//////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////
app.get('/error', function (request, response) {
	response.send('The song is invalid.');
});

app.post('/songs/add', function(request, response) {
	let audioSrc = request.body.audioSrc;
	let audioImageSrc = request.body.audioImageSrc;
	let title = request.body.title;
	let artistName = request.body.artistName;
	let albumName = request.body.albumName;
	let albumCoverSrc = request.body.albumCoverSrc;

	if (title.length > 0 && audioSrc != null)
	{
		songs.push({audioSrc, audioImageSrc, title, artistName, albumName, albumCoverSrc});
		response.redirect('/');
	}
	else
	{
		console.log("Sorry, song is invalid");
		response.redirect('/error');
	}
});

app.get('/songs/delete/:title', function(request, response) {
	var title = request.params.title;
	for (var i = 0; i < songs.length; i++) {
		if (songs[i].title === title) {
			songs.splice(i, 1);
			break;
		}
	}

	response.redirect('/');
});

function initialSongs() {
	return [{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/alien.mp3",
	"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/alien.jpg",
	"title" : "Alien",
	"artistName" : "Nikhil Kansal",
	"albumName" : null,
	"albumCoverSrc" : null
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/heaven.mp3",
	"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/heaven.jpg",
	"title" : "Heaven",
	"artistName" : "Nikhil Kansal",
	"albumName" : null,
	"albumCoverSrc" : null
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/hell.mp3",
	"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/hell.jpg",
	"title" : "Hell",
	"artistName" : "Nikhil Kansal",
	"albumName" : null,
	"albumCoverSrc" : null
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/sky.mp3",
	"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/sky.jpg",
	"title" : "Sky",
	"artistName" : "Nikhil Kansal",
	"albumName" : null,
	"albumCoverSrc" : null
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/space.mp3",
	"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/space.jpg",
	"title" : "Space",
	"artistName" : "Nikhil Kansal",
	"albumName" : null,
	"albumCoverSrc" : null
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/total_nonsense.mp3",
	"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/total_nonsense.jpg",
	"title" : "Total Nonsense",
	"artistName" : "Nikhil Kansal",
	"albumName" : null,
	"albumCoverSrc" : null
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/transcend.mp3",
	"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/transcend.jpg",
	"title" : "Transcend",
	"artistName" : "Nikhil Kansal",
	"albumName" : null,
	"albumCoverSrc" : null
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/urbana.mp3",
	"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/urbana.jpg",
	"title" : "Urbana",
	"artistName" : "Nikhil Kansal",
	"albumName" : null,
	"albumCoverSrc" : null
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/24K%20Magic.mp3",
	"audioImageSrc" : null,
	"title" : "24K Magic",
	"artistName" : "Bruno Mars",
	"albumName" : "24K Magic",
	"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Bruno%20Mars%20-%20Chunky%20%5BOfficial%20Audio%5D.mp3",
	"audioImageSrc" : null,
	"title" : "Chunky",
	"artistName" : "Bruno Mars",
	"albumName" : "24K Magic",
	"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Bruno%20Mars%20-%20Finesse%20%5BOfficial%20Audio%5D.mp3",
	"audioImageSrc" : null,
	"title" : "Finesse",
	"artistName" : "Bruno Mars",
	"albumName" : "24K Magic",
	"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Bruno%20Mars%20-%20Perm%20%5BOfficial%20Audio%5D.mp3",
	"audioImageSrc" : null,
	"title" : "Perm",
	"artistName" : "Bruno Mars",
	"albumName" : "24K Magic",
	"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Calling%20All%20My%20Lovelies.mp3",
	"audioImageSrc" : null,
	"title" : "Calling All My Lovelies",
	"artistName" : "Bruno Mars",
	"albumName" : "24K Magic",
	"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Straight%20Up%20%20Down.mp3",
	"audioImageSrc" : null,
	"title" : "Straight Up & Down",
	"artistName" : "Bruno Mars",
	"albumName" : "24K Magic",
	"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Thats%20What%20I%20Like.mp3",
	"audioImageSrc" : null,
	"title" : "That's What I Like",
	"artistName" : "Bruno Mars",
	"albumName" : "24K Magic",
	"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Too%20Good%20To%20Say%20Goodbye.mp3",
	"audioImageSrc" : null,
	"title" : "Too Good to Say Goodbye",
	"artistName" : "Bruno Mars",
	"albumName" : "24K Magic",
	"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Uptown%20Funk.mp3",
	"audioImageSrc" : null,
	"title" : "Uptown Funk",
	"artistName" : "Bruno Mars",
	"albumName" : "24K Magic",
	"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
},
{
	"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Versace%20On%20The%20Floor.mp3",
	"audioImageSrc" : null,
	"title" : "Versace on the Floor",
	"artistName" : "Bruno Mars",
	"albumName" : "24K Magic",
	"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
}]
}


