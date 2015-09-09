(function () {
  'use strict';

  app.factory('Word', function () {
    var mongojs = require('mongojs');
    var grewords = 'grewords';
    var db = mongojs('grewordsdb', [greWords]);

    var words = db.grewords.find(function (err, docs) {
      return docs;
    });

    return {
      all: words,

      create: function (word) {
        db.grewords.save({created: word})
      },

      find: function (wordId) {
        db.grewords.findOne({
          _id: mongojs.ObjectId(wordId)
        }, function (err, doc) {
          return doc;
        })
      }
    };
  })
}());
