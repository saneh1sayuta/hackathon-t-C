'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendMessageEvent', function (data) {
      socket.broadcast.emit("receiveMessageEvent",data);
    });
      socket.on('send_exist_MessageEvent', function (data) {
        socket.broadcast.emit("receive_exist_MessageEvent",data);
    });
};
