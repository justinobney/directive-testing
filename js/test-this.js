angular.module('jo', []).
  directive('testThis', ['$timeout', function ($timeout) {
    return {
      templateUrl: 'tmpl/test-this.html',
      restrict: 'A',
      scope: {},
      link: function postLink(scope, iElement, iAttrs) {
        iElement.on('click', function(){
          iElement.text('John');
          $timeout(function(){
            iElement.text('Bob');
          }, 1000)
        })
      }
    };
  }])