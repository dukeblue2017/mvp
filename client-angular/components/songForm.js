angular.module('bonfire')
  .controller('songFormCtrl', function($http) {
    console.log('hi from song form: ', this)
    this.makeAPost = function() {
      $http({
        method: 'POST',
        url: '/users'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          console.log(
            'success posted to users', response
          )

          // when the response is available
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
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
