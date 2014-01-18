describe('testThis', function () {
  
  var el = angular.element('<div test-this></div>');
  var $timeout;

  beforeEach(module('jo', 'tmpl/test-this.html'));
  beforeEach(inject(function($rootScope, $compile, _$timeout_){
    $compile(el)($rootScope);
    $rootScope.$digest();
    $timeout = _$timeout_;
  }));


  describe('simple tests', function () {
    it('has bob in it', function () {
      expect(el.text()).toBe('Bob');
    });
  });

  describe('ui interaction', function () {
    
    it('should change to John when it is clicked', function () {
      el.click();
      expect(el.text()).toBe('John');
    });

    it('should change back to Bob after 1 sec', function () {
      el.click();
      $timeout.flush(1000);
      expect(el.text()).toBe('Bob');
    });
  });
});