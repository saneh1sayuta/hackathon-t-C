'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data) {
      var regExp = /[^ \n]/;
      var s = data['message'];
      console.log(s);
      //if(s.match(regExp) == null) return;
      io.sockets.emit('receiveMessageEvent', data);
    });
};

// ServerSide
