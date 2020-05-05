$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="Main__Chats__Message" data-message-id=${message.id}>
          <div class="Main__Chats__Message__Contents">
            <div class="Main__Chats__Message__Contents--Talker">
              ${message.user_name}
            </div>
            <div class="Main__Chats__Message__Contents--Data">
              ${message.created_at}
            </div>
          </div>
          <div class="Main__Chats__Message__Contents__Comment">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
       `<div class="Main__Chats__Message" data-message-id=${message.id}>
          <div class="Main__Chats__Message__Contents">
            <div class="Main__Chats__Message__Contents--Talker">
              ${message.user_name}
            </div>
            <div class="Main__Chats__Message__Contents--Data">
              ${message.created_at}
            </div>
          </div>
          <div class="Main__Chats__Message__Contents__Comment">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.Main__Chats').append(html);
      $('.Main__Chats').animate({ scrollTop: $('.Main__Chats')[0].scrollHeight});
      $('.Btn').prop('disabled', false);
      $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })

  var reloadMessages = function() {
    var last_message_id = $('.Main__Chats__Message:last').data("message-id");
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        if (messages.length !== 0) {
          var insertHTML = '';
          $.each(messages, function(i, message) {
            insertHTML += buildHTML(message)
          });
          $('.Main__Chats').append(insertHTML);
          $('.Main__Chats').animate({ scrollTop: $('.Main__Chats')[0].scrollHeight});
        }
      })
      .fail(function() {
      alert('error');
      });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
  setInterval(reloadMessages, 7000);
  }
});




