var roomName = randomRoomNameGenerator();
var g_el;

/* Function declarations */

function randomRoomNameGenerator() {
	// predefine the alphabet used.
	var alphabet = 'qwertyuiopasdfghjklzxcvbnm1234567890';

	// set the length of the room name
	var roomNameLength = 30;

	// initialize the room name as an empty string
	var roomName = '';

	// repeat this 30 times
	for (var i=0; i < roomNameLength; i++) {
		// get a random character from the alphabet
		var character = alphabet[Math.round(Math.random()*(alphabet.length-1))];

		// add the character to the roomName
		roomName = roomName + character;
	}

	// pre- and append appear.in URL elements
	roomName = 'https://appear.in/' + roomName + '';

	// return the result
	return roomName;
}

var MESSAGE = 'Let’s talk on video!\n$1';


function putLinkInChat() {
	var theRoomName = randomRoomNameGenerator();
	var textBox = document.querySelector("#tweet-box-dm-conversation");
	appearin.getRandomRoom().then(function(roomName) {
		var message = MESSAGE.replace('$1', appearin.linkToRoom(roomName));
		textBox.textContent = message;
		textBox.focus();
	});
}


function addThing() {
	var conversation = document.querySelector("#dm_dialog_conversation");
	var bigBox = document.querySelector(".js-toolbar");
	var tweetBoxForm = document.querySelector(".dm-tweetbox");
	console.log(tweetBoxForm.length);
	var count = document.querySelectorAll(".appearintwitterbutton");
	console.log(count.length);
	if (count.length < 1) {
		var theButton = document.createElement("button");
		theButton.textContent = "Talk on appear.in";
		theButton.className = "appearintwitterbutton tweet-btn";
		theButton.onclick = function(e){
			e.stopPropagation(); e.preventDefault();	putLinkInChat();
		}
		var theThing = document.createElement("div");
		theThing.className = "tweet-box-extras";
		theThing.appendChild(theButton);
		tweetBoxForm.appendChild(theThing);
	}
}

addThing();
