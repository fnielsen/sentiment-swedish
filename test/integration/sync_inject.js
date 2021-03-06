var test = require('tap').test;
var sentiment = require('../../lib/index');

var dataset = 'Det här är så coolt';
var result = sentiment(dataset, {'coolt': 100});

test('synchronous inject', function (t) {
    t.type(result, 'object');
    t.equal(result.score, 101);
    t.equal(result.comparative, 20.2);
    t.equal(result.tokens.length, 5);
    t.equal(result.words.length, 2);
    t.end();
});
