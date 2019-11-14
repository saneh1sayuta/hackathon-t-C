'use strict';

module.exports = function (server) {
    // 退室メッセージをクライアントに送信する
    //const socketIo = require('socket.io')(server, { wsEngine: 'ws' });
    //const io = socketIo.listen(server);

    //io.sockets.on('connection', function (socket) {
        // 自クライアントに接続イベント（enteringMyselfEvent）を送信する

        // 自クライアント以外に接続イベント（enterOtherEvent）を送信する
        //socket.broadcast.emit('enterOtherEvent', '他のクライアントが接続しました。');


    socket.on('sendMessageEvent', function (data) {
      if (!data) {
          return;
      }
      console.log('クライアントの入力値：' + data);
      //io.sockets.emit("receiveMessageEvent", data);   //自と他クライアントに送信
    });
  };
