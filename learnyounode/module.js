module.exports = function(dir, ext, callback) {
    var fs = require('fs');
    //var path = require('path');

    fs.readdir(dir, function(err, list) {
        if (err) callback(err);
        else {
            var files = [];
            for (var i = 0; i < list.length; i++) {
                if (list[i].match('.' + ext)) {
                    files.push(list[i]);
                };
            };
            callback(null,files);
        }
    })
}
