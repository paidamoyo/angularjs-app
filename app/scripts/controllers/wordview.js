'use strict';

app.controller('WordViewController', function($scope, $routeParams, Word){
  $scope.word = Word.find($routeParams.wordId);

});
