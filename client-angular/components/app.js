angular.module('bonfire', [])
  .controller('appCtrl', function() {
    console.log('hi')
    this.todos = [1,2,3,4]
  })
  .component('app', {
    bindings: {},
    controller: 'appCtrl',
    template: `
      <div>
        <h3>this is the app</h3>
        <song-form></song-form>
      </div>
    `
  })
