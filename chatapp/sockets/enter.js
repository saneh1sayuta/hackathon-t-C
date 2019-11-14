'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendMessageEvent', function (data) {
      socket.broadcast.emit("receiveMessageEvent",data);
  });
};
