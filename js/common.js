var btn = document.getElementById("video_btn");
var video = document.querySelector("video");
var is_playing = false;

btn.addEventListener('click', function() {
  if (is_playing) {
    $(this).toggleClass('pause');
    video.pause();
    is_playing = false;
    // console.log('停止');
    // console.log(is_playing);  
    $(this).text('停止');   
  } else {
    $(this).removeClass('pause');
    video.play();
    is_playing = true;
    // console.log('再生');
    // console.log(is_playing);
    $(this).text('再生');
    }
  }
);

$(function(){
  if ($("#input").val().length == 0) {
    $("#submit").prop("disabled", true);
  }
  $("#input").on("keydown keyup keypress change", function() {
    if ($(this).val().length < 2) {
      $("#submit").prop("disabled", true);
    } else {
      $("#submit").prop("disabled", false);
    }
  });
});