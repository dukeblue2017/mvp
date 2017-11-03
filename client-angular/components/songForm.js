angular.module('bonfire')
  .controller('songFormCtrl', function($http) {
    console.log('{{yourName}}')
    this.makeAPost = function(name, title, artist, album) {
      $http({
        method: 'POST',
        url: '/users',
        data: {
          username: name,
          songTitle: title,
          songArtist: artist,
          songAlbum: album
        }
      }).then(function successCallback(response) {
          console.log('success posting to users', response)
        }, function errorCallback(response) {
          console.log('error posting to users: ', response)
        });
    }
  })
  .component('songForm', {
    bindings: {},
    controller: 'songFormCtrl',
    template: `
      <div class="songform">
        <label>Username:</label>
        <input type="text" ng-model="yourName" placeholder="Enter username here">
        <input type="text" ng-model="songTitle" placeholder="Enter song title here">
        <input type="text" ng-model="songArtist" placeholder="Enter artist name here">
        <input type="text" ng-model="songAlbum" placeholder="Enter album title here">

        <h1>{{yourName}}</h1>
        <button ng-click="$ctrl.makeAPost(yourName, songTitle, songArtist, songAlbum)">Submit New User</button>
      </div>
    `
  })
