'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = '';
    // 入力されたメッセージを取得
    const message = '';
    // 投稿内容を送信
    sendMessage(userName, message);
    return false;
}

function sendMessage(userName, message){
  data = {'userName': userName, 'message' : message};
  socket.emit('sendMessageEvent', data);
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});

// ClientSide
