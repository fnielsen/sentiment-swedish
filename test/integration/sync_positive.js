var test = require('tap').test;
var sentiment = require('../../lib/index');

var dataset = 'Det här är så coolt';
var result = sentiment(dataset);

test('synchronous positive', function (t) {
    t.type(result, 'object');
    t.equal(result.score, 2);
    t.equal(result.comparative, 0.4);
    t.equal(result.tokens.length, 5);
    t.equal(result.words.length, 2);
    t.end();
});
