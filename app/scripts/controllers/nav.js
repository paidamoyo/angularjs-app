'use strict';

app.controller('NavCtrl', function($scope, $location, Word){
  $scope.word = {url: 'http://', title: ''};

  $scope.submitWord = function() {
    Word.create($scope.word).then(function(wordId){
      $scope.word = {url: 'http://', title: ''};
      $location.path('/words/'+ wordId);
    });
  };

});
