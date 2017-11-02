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
        <div class="heading">bonfire.fm</div>
        <hr>
        <song-form></song-form>
      </div>
    `
  })
