angular.module('bonfire')
  .controller('postController', function() {
    console.log('hi')
    this.makeAPost = function() {
      console.log('making a post')
    }
  })
  .component('songForm', {
    bindings: {},
    controller: 'postController',
    template: `<div>Hello</div>`
  })
