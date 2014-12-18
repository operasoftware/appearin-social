window.appearin.getRandomRoom();

document.addEventListener('mouseup', function() {
	setTimeout(hitchhikeOnVidechatButtons, 250);
});

var conversations_ = [];

var MESSAGE = 'Let’s talk on video!\n$1';
var LABEL = "Start a video call via appear.in";

var hitchhikeOnVidechatButtons = function() {
	var flyouts = document.querySelectorAll('.fbNubFlyout');
	conversations_ = [];
	for (var j = 0, flyout; flyout = flyouts[j]; j++) {
		conversations_.push(flyout);
		var buttonNotPresent = flyout.querySelectorAll('.appearin-icon').length === 0;
		var correctFlyout = flyout.querySelectorAll('.addToThread.button').length === 1;
		if (buttonNotPresent && correctFlyout) {
			var addToThreadButton = flyout.querySelector('.addToThread.button');
			var dup = addToThreadButton.cloneNode(true);
			dup.classList.add('appearin-icon');
			dup.classList.remove('videoicon');
			dup.setAttribute('aria-label', LABEL);
			dup.dataset.hitchhikedVideoChatButton = 'true';
			var parent = addToThreadButton.parentElement;
			parent.insertBefore(dup, addToThreadButton.nextSibling);
		}
	}
};

document.addEventListener('mouseup', function (event) {
	var hitchhiked = event.target.dataset.hitchhikedVideoChatButton;
	if (!hitchhiked) {
		return;
	}
	var flyout = event.target.getAncestor('.fbNubFlyout');
	var textarea = flyout.querySelector('textarea');
	appearin.getRandomRoom().then(function(roomName) {
		var message = MESSAGE.replace('$1', appearin.linkToRoom(roomName));
		textarea.value = message;
		textarea.focus();
	});
}, true);

setTimeout(hitchhikeOnVidechatButtons, 250);
