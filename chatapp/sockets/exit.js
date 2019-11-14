'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    // const socketIo = require('socket.io')(server, { wsEngine: 'ws' });
    // const io = socketIo.listen(server);

    socket.on('sendMessageEvent', function (data) {
      if (!data) {
          return;
      }
      console.log('クライアントの入力値：' + data);
      io.sockets.emit("receiveMessageEvent", data);   //自と他クライアントに送信
    });
};
