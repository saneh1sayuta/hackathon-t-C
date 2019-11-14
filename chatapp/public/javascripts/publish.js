'use strict';

$(window).keyup(function(e){
  if(event.ctrlKey){
    if(e.keyCode === 13){
      publish();
      return false;
    }
  }
});

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

function nowDate(){ // 現在日時を(HH:MM:SS M,DD,YYYY)の文字列で返す
  const month = {0: "Jan", 1: "Feb", 2: "Mar", 3:"Apr", 4: "May", 5: "Jun",
    6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec"};
  var now = new Date();
  var date = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " "
      + month[now.getMonth()] + "," + now.getDate() + "," + now.getFullYear();
  return date;
}

function sendMessage(userName, message, date){
  const data = {'userName': userName, 'message' : message, 'date' : date};
  socket.emit('sendMessageEvents', data);
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvents', function (data) {
  var style = "";
  if(data['userName'] == $('#userName').val()) style = "style='background:orange;'";
  $('#thread').prepend('<pre ' + style + '>' + '<strong>' + data['userName'] + '</strong>' + " さん　" + data['date'] + "</br>" + data['message'] + '</pre>');
});

// ClientSide
