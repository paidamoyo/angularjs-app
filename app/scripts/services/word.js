'use strict';

app.factory('Word', function () {

  var words;

  return {
    all: words,

    create: function (word) {

    },

    find: function (wordId) {
      return posts.$child(wordId);
    }
  };
});
