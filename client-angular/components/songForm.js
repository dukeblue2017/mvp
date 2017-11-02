angular.module('bonfire')
  .controller('songFormCtrl', function($http) {
    this.makeAPost = function() {
      $http({
        method: 'POST',
        url: '/users',
        data: { name: 'fakeName' }
      }).then(function successCallback(response) {
          console.log('success posted to users', response)
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
        <input type="text" ng-model="yourName" placeholder="Enter name here">
        <h1>{{yourName}}</h1>
        <button ng-click="$ctrl.makeAPost()">Submit New User</button>
      </div>
    `
  })
