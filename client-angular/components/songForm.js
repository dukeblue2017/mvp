angular.module('bonfire')
  .controller('songFormCtrl', function($http) {
    console.log('hi from song form: ', this)
    this.makeAPost = function() {
      $http({
        method: 'POST',
        url: '/users'
      }).then(function successCallback(response) {
          console.log(
            'success posted to users', response
          )
        }, function errorCallback(response) {
          console.log('error posting to users: ', response)
        });
    }
  })
  .component('songForm', {
    bindings: {},
    controller: 'songFormCtrl',
    template: `
      <div>
        <label>Username:</label>
        <input type="text" ng-model="yourName" placeholder="Enter name here">
        <h1>Username: {{yourName}}</h1>
        <button ng-click="$ctrl.makeAPost()">
          im a button
        </button>
      </div>
    `
  })
