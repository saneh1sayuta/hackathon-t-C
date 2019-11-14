'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    //ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('.room-message_textarea').val();
    $('.room-message_textarea').val("");
    const date = nowDate();
    // 投稿内容を送信
    sendMessage(userName, message, date);
    return false;
}

function nowDate(){
  const month = {0: "Jan", 1: "Feb", 2: "Mar", 3:"Apr", 4: "May", 5: "Jun"
    6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec"};
  var now new Date();
  var date = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " "
      + month[now.getMonth()] + ", " + now.getDate() + ", " + now.getFullYear();
}
function sendMessage(userName, message, date){
  const data = {'userName': userName, 'message' : message, 'date' : date};
  socket.emit('sendMessageEvent', data);
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data['userName'] + "さん：　" + data['message'] + "DATE: " + data['date'] + '</p>');
});

// ClientSide
