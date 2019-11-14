'use strict';

// 入室メッセージをサーバに送信する
<<<<<<< Updated upstream
=======

// 入力されたユーザ名を取得する
const userName = '';
// 入室メッセージイベントを送信する
>>>>>>> Stashed changes

　// 入力されたユーザ名を取得する
　const userName = $("userName").val();
　// 入室メッセージイベントを送信する
　socket.emit("sendMessageEvent",userName+"さんが入室しました");

// サーバから受信した入室メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
