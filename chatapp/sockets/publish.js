'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data) {
      var regExp = /[^ \n]/;
      if(!data['message'].match(regExp)) return;
      io.sockets.emit('receiveMessageEvent', data);
    });
};

// ServerSide
