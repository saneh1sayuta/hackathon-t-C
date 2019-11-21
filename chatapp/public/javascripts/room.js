'use strict';

socket.on('logReturn', function(){
  OnRoomEnter();
})
function OnRoomEnter(){
  $.each(chatlog.posts, function(idx, val){
    var style = "";
    if(val['userName'] == $('#userName').val()) style = "style='background:orange;'";
    $('#thread').prepend('<div class="postNum_' + val['postNum'] + '"></div>');
    $('.postNum_'+val['postNum']).prepend('<pre ' + style + '>' + '<strong>' + val['userName'] + '</strong>' + " さん　" + val['date'] + "</br>" + val['message'] + '</pre>');
    $('.postNum_'+val['postNum']).prepend('<p class="delbutton" onclick=deletePost(' + val['postNum'] + ')>削除</p>');
    console.log(val['postNum']);
  })
}

//ClientSide
