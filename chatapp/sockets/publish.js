'use strict';

var fs = require('fs');

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessage', function (data) {
      var regExp = /[^ \n]/; // スペースと改行以外を見つけるregExp
      var s = String(data['message']);
      if(s.match(regExp) == null) return;
      data['message'] = replace_br(s);
      logging(data);
      io.sockets.emit('receiveMessage', data);
    });

    socket.on('logRequest', function(){
      var path = '/home/dev11/hackathon/chatapp/chatlog/log.txt';
      var logData;
      fs.readFile(path, 'utf8', function(err, data){
        if(err) throw err;
        io.sockets.emit('logReturn', data);
      });
    })
};

function logging(data){
  var post = data['userName'] + '/' + data['date'] + '/' + data['message'] + '\n';
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
// ServerSide
