window.appearin = {
	'roomNameToUrl': function(name) {
		name = String(name);
		var path = name.indexOf('/') == 0 ? name : '/' + name;
		return 'https://appear.in' + path;
	},
	'getRandomUnusedRoomName': function(url) {
		return new Promise(function(resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('post', 'https://api.appear.in/random-room-name', true);
			xhr.responseType = 'json';
			xhr.onload = function() {
				var status = xhr.status;
				if (status == 200) {
					resolve(xhr.response.roomName.slice(1));
				} else {
					reject(status);
				}
			};
			xhr.onerror = function() {
				reject();
			};
			xhr.send();
		});
	}
};
