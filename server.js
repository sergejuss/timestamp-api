var express = require("express");
var app = express();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.use('/', express.static(__dirname + '/public'));

app.get('/:str', function(req, res){
    var time = {};
   if (Number.isInteger(+req.params.str)) {
        time.unix = +req.params.str;
        var ndate = new Date(time.unix);
        time.natural = months[ndate.getMonth()] + ' ' + ndate.getDate() + ', ' + ndate.getFullYear();
    } else if (Number.isInteger(Date.parse(req.params.str))) {
        time.unix = Date.parse(req.params.str);
        var ndate = new Date(time.unix);
        time.natural = months[ndate.getMonth()] + ' ' + ndate.getDate() + ', ' + ndate.getFullYear();
    } else {
        time.unix = null;
        time.natural = null;
    }
    res.send(time);
});

app.listen(8080, function(){
    console.log("Example app listening on port 8080.");
});