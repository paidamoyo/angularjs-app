describe('App configuration', function () {
  'use strict';
  beforeEach(module('greWordsApp'));

  describe('routes', function () {
    var route;
    beforeEach(inject(function ($route) {
      route = $route;
    }));

    describe('home page', function () {
      it('should use the correct template', function () {
        expect(route.routes['/'].templateUrl).toEqual('views/words.html');
      });

      it('should use the correct controller', function () {
        expect(route.routes['/'].controller).toEqual('WordsController');
      });
    });

    describe('word page', function () {
      it('should use the correct template', function () {
        expect(route.routes['/words/:wordId'].templateUrl).toEqual('views/showword.html');
      });

      it('should use the correct controller', function () {
        expect(route.routes['/words/:wordId'].controller).toEqual('WordViewController');
      });
    });
  });
});
