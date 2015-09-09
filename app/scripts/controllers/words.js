'use strict';

app.controller('WordsCtrl', function($scope, $location, Word){
  $scope.words = Word.all;
  $scope.word = {url: 'http://', title:''};

});
