'use strict';

describe('App configuration', function () {

  // load the controller's module
  beforeEach(module('greWordsApps'));

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
  });
});
