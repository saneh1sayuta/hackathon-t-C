'use strict';

var fs = require('fs');

module.exports = function (socket, io) {
    socket.on('loggingMessage', function(data){
    console.log(data);
    var regExp = /[^ \n]/; // スペースと改行以外を見つけるregExp
    var s = String(data['message']);
    if(s.match(regExp) == null) return;
    data['message'] = replace_br(s);
    logging(data);
  });
};

function logging(data){
  var post = '<pre>' + '<span class="log_userName">' + data['userName'] + '</span><span class="log_date">' + data['date'] + ''</span><span class="log_body"' + data['message'] + '</pre>\n';
  var path = '/home/dev11/hackathon/chatapp/chatlog/log.txt';
  fs.appendFile(path, post, function(err){
    if(err) throw err;
  });
  return false;
}

function replace_br(s){
  var rel = s.replace(/\\r\\n|\\r|\\n/g, '<br>');
  return rel;
}
