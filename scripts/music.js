var RECENT_TRACKS = [];
var UNIQUE_TRACKS = [];
var FINAL_TRACKS = [];
var lastFmKey = "6027141d1c72a7b3b857d7d39e8a1a37";
var lastFmUrl = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=agolin95&api_key=" + lastFmKey + "&format=json";

httpGetAsync(lastFmUrl, getMusic);
setupMusicControls();

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}


function getMusic(response) {
	var parsed = JSON.parse(response);

	for (var i = 0; i < 50; i++){
		var track = {artist: parsed.recenttracks.track[i].artist["#text"], 
					 album: parsed.recenttracks.track[i].album["#text"],
					 image: parsed.recenttracks.track[i].image[3]["#text"],
					 preview: ""
					};

		RECENT_TRACKS[i] = track;

		var unique = true;
		for (var j = 0; j < i; j++) {
			if (RECENT_TRACKS[i].album == RECENT_TRACKS[j].album && RECENT_TRACKS[i].artist == RECENT_TRACKS[j].artist) {
				unique = false;
			}
		}

		if (unique) {
			UNIQUE_TRACKS.push(RECENT_TRACKS[i]);
		}
	}
	
	for (i = 0; i < UNIQUE_TRACKS.length; i++) {
		var spotifyQuery = UNIQUE_TRACKS[i].artist + " " + UNIQUE_TRACKS[i].album + " " + UNIQUE_TRACKS[i].artist + "&type=track";
		var spotifyURL = "https://api.spotify.com/v1/search?q=" + spotifyQuery;
		httpGetAsync(spotifyURL, populatePreviews);

	}
}

function populatePreviews(response) {
	var parsed = JSON.parse(response);
	if (parsed.tracks.items[0]) {
		for (var i = 0; i < UNIQUE_TRACKS.length; i++) {
			var track = UNIQUE_TRACKS[i]
			var previewArtist = parsed.tracks.items[0].artists[0].name;
			var previewAlbum = parsed.tracks.items[0].album.name;

			if (previewArtist == track.artist && previewAlbum == track.album && UNIQUE_TRACKS[i].image != "") {
				UNIQUE_TRACKS[i].preview = parsed.tracks.items[0].preview_url;
				FINAL_TRACKS.push(UNIQUE_TRACKS[i]);
				$("#spotifyTrack").attr("src", FINAL_TRACKS[0].preview);
				$("#recentTracks").append("<div onclick='albumClick(this)' id=" + UNIQUE_TRACKS[i].preview + " class='singleTrack' style='background:url(" + UNIQUE_TRACKS[i].image + "); background-size: 200px 200px;'><div class='albumPlay'></div></div>");
			}
		}
	}
}

function albumClick(clickedTrack) {
	updatePlays(clickedTrack);
}

function setupMusicControls() {
	$("#playButton").click(function() {
		var source = $("#spotifyTrack").attr("src");
		var trackToPlay = document.getElementById(source);
		updatePlays(trackToPlay);
	});


	$("#nextButton").click(function() {
		var activePreview = $("#spotifyTrack").attr("src");

		for (i = 0; i < FINAL_TRACKS.length-1; i++) {
			var preview = FINAL_TRACKS[i].preview;
			if (activePreview == preview && !document.getElementById("spotifyTrack").paused) {
				var nextTrackId = FINAL_TRACKS[i+1].preview;
				var nextTrack = document.getElementById(nextTrackId);
				updatePlays(nextTrack);
			}
		}
	});

	$("#previousButton").click(function() {
		var activePreview = $("#spotifyTrack").attr("src");

		for (i = FINAL_TRACKS.length-1; i > 0; i--) {
			var preview = FINAL_TRACKS[i].preview;
			if (activePreview == preview && !document.getElementById("spotifyTrack").paused) {
				var nextTrackId = FINAL_TRACKS[i-1].preview;
				var nextTrack = document.getElementById(nextTrackId);
				updatePlays(nextTrack);
			}
		}
	});

}

function updatePlays(clickedTrack) {
	var playerSrc = $("#spotifyTrack").attr("src");
	var playerTrack = document.getElementById(playerSrc);

	if (playerTrack.id != clickedTrack.id) {
		$("#spotifyTrack").attr("src", clickedTrack.id);
		playerTrack.firstChild.className = "albumPlay";
		clickedTrack.firstChild.className = "albumPause";
	}
	else if (clickedTrack.id == UNIQUE_TRACKS[0].preview && document.getElementById("spotifyTrack").paused){
		clickedTrack.firstChild.className = "albumPause"
	}
	else if (document.getElementById("spotifyTrack").paused){
		clickedTrack.firstChild.className = "albumPause"
	}
	else {
		playerTrack.firstChild.className = "albumPause";
		clickedTrack.firstChild.className = "albumPlay";
	}

	if (document.getElementById("spotifyTrack").paused) {
		document.getElementById("spotifyTrack").play();
		$('#playButton').attr("id", "pauseButton");
	}
	else {
		document.getElementById("spotifyTrack").pause();
		$('#pauseButton').attr("id", "playButton")
	}
}
