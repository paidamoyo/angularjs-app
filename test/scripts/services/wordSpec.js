describe('Word Service', function () {
  'use strict';
  beforeEach(module('greWordsApp'));

  var word;
  beforeEach(inject(function (Word) {
    word = Word;
  }));

  describe('CRUD operations', function () {
    it('should return all words', function () {
      expect(word.all()).toEqual(['good', 'bad'])

    });
  });
});
