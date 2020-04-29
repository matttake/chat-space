$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="Main__Chats__Message">
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
       `<div class="Main__Chats__Message">
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
});
