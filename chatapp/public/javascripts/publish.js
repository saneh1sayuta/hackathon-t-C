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
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var now = new Date();
  var date = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " "
      + month[now.getMonth()] + "," + now.getDate() + "," + now.getFullYear();
  return date;
}

function sendMessage(userName, message, date){
  if(chatlog.posts.length == 0) var postNum = 0;
  else var postNum = Number(chatlog.posts[chatlog.posts.length-1].postNum)+1;
  const data = {'postNum': postNum, 'userName': userName, 'message' : message, 'date' : date};
  socket.emit('sendMessage', data);
  socket.emit('loggingMessage', data);
}

function deletePost(postNum){
  $('div .postNum_' + postNum).remove();
  chatlog.OnlogDeleted(postNum);
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessage', function (data) {
  var style = "";
  if(data['userName'] == $('#userName').val()) style = "style='background:orange;'";
  $('#thread').prepend('<div class="postNum_' + data['postNum'] + '"></div>');
  $('.postNum_'+data['postNum']).prepend('<pre ' + style + '>' + '<strong>' + data['userName'] + '</strong>' + " さん　" + data['date'] + "</br>" + data['message'] + '</pre>');
  $('.postNum_'+data['postNum']).prepend('<p class="delbutton" onclick=deletePost(' + data['postNum'] + ')>削除</p>');
});

// ClientSide
