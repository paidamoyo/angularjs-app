'use strict';

app.controller('NavigationController', function ($scope, $location, Word) {
  $scope.word = {title: '', definition: '', synonyms: '', antonyms: ''};

  $scope.submitWord = function () {
    Word.create($scope.word).then(function (wordId) {
      $scope.word = {title: '', definition: '', synonyms: [], antonyms: []};
      $location.path('/words/' + wordId);
    });
  };

});
