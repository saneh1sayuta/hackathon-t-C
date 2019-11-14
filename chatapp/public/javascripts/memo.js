'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('.room-message_textarea').val();
    // メモの内容を表示
    $('.room-message_textarea').val("");
    $('#thread').prepend('<p>' + "あなただけに表示されています：　" + message + '</p>');

    return false;
}

//ClientSide
