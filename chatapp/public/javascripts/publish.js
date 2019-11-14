'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    //ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('.room-message_textarea').val();
    // 投稿内容を送信
    sendMessage(userName, message);
    return false;
}

function sendMessage(userName, message){
  const data = {'userName': userName, 'message' : message};
  socket.emit('sendMessageEvent', data);
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data['userName'] + "さん　" + data['message'] + '</p>');
});

// ClientSide
