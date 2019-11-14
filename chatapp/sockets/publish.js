'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvents', function (data) {
      var regExp = /[^ \n]/;
      var s = String(data['message']);
      if(s.match(regExp) == null) return;
      data['message'] = replace_br(s);
      io.sockets.emit('receiveMessageEvents', data);
    });
};

function replace_br(s){
  var rel = s.replace(/\\r\\n|\\r|\\n/g, '<br>');
  return rel;
}

// ServerSide
