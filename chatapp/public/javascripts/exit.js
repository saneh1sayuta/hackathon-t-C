'use strict';
// socket.ioの処理開始
const socket = io.connect();

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = '＠＠＠＠';
    // 退室メッセージイベントを送信する

    function sendMessage() {
      const message = prompt('退出します。\n');

      socket.emit("sendMessageEvent", message);
    }

    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('', function (data) {
    // 画面上にデータを表示する。
    $('#thread').prepend('<p>' + data  + '</p>');
});
