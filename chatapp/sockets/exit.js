'use strict';

module.exports = function (socket, io) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendMessageEvent', function (data) {
      if (!data) {
          return;
      }
      console.log('クライアントの入力値：' + data);
      io.sockets.emit("receiveMessageEvent", data);   //自と他クライアントに送信
    });
};
