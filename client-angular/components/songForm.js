angular.module('bonfire')
  .controller('songFormCtrl', function($http) {
    console.log('{{yourName}}')
    this.makeAPost = function(who) {
      $http({
        method: 'POST',
        url: '/users',
        data: { username: who }
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
        <h1>{{yourName}}</h1>
        <button ng-click="$ctrl.makeAPost(yourName)">Submit New User</button>
      </div>
    `
  })
