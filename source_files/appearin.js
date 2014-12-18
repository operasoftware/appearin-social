window.appearin = new function() {

  var APPEAR_IN_URL = 'https://appear.in/';

  this.linkToRoom = function(room) {
    return APPEAR_IN_URL + room;
  };

  this.getRandomRoom = function() {
    var postPromise = http.post(
        'https://api.appear.in/random-room-name'
    ).then(function(xhr) {
      var roomName = JSON.parse(xhr.responseText).roomName;
      return roomName.substring(1, roomName.length);
    }).catch(function() {
      return "random" + (Math.random() * 1000000000 | 0);
    });
    return postPromise;
  };

};