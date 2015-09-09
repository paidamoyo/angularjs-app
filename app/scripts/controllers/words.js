'use strict';

app.controller('WordsController', function($scope, $location, Word){
  $scope.words = Word.all;
  $scope.word = {url: 'http://', title:''};

});
