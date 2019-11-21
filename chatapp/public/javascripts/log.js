'use strict';

class chatLog {
  constructor(data){
    var temp = data.split('\n');
    var json_data = '[\n';
    const month = {"Jan":1, "Feb":2, "Mar":3, "Apr":4, "May":5, "Jun":6,
      "Jul":7, "Aug":8, "Sep":9, "Oct":10, "Nov":11, "Dec":12};
    $.each(temp, function(idx, val){
      if(idx != temp.length-1){
        var elem = val.split('/');
        $.each(elem, function(i, v){
          elem[i] = '"' + elem[i] + '"';
        })
        var comma = ',\n';
        if(idx == temp.length-2) comma = '';
        json_data += '{ "postNum":' + elem[0] + ',"userName": ' + elem[1] + ' ,"date": ' + elem[2] +
          ' ,"message": ' + elem[3] + ' }' + comma;
      }
    });
    json_data += '\n]';
    console.log(json_data);
    this.posts = JSON.parse(json_data);
  }
  OnLogUpdate(data){
    var add = { postNum: data['postNum'], userName: data['userName'], date: data['date'], message: data['message']};
    this.posts.push(add);
  }
  OnlogDeleted(postNum){

  }
}
socket.emit('logRequest');
var chatlog;
socket.on('logReturn', function(data){
  chatlog = new chatLog(data);
});

socket.on('receiveMessage', function(data){
  chatlog.OnLogUpdate(data);
});

// ClientSide
