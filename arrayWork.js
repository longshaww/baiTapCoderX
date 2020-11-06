var items = ['Toms', 'Bill', 'Kim'];
var result = items.reduce(function(results, item) { return results + '<' + item + '>' }, '');
console.log(result);

var map = items.map(function(x) { return '<' + x + '>' });
console.log(map);

function sTH() {
    for (var i = 0; i < items.length; i++) {
        var join = items.join('<' + '>');
    }
    return join;
}

sTH();

//use reduce to make this result
//<tom><bill><kim>
// use map and join