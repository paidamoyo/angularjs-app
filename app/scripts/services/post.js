'use strict';

app.factory('Post', function($resource){
  return $resource('https://vivid-fire-3195.firebaseio.com/posts/:id.json');
});
