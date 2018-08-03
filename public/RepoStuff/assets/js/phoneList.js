$(document).ready(function(){

  // var table = $("#table tbody");

  $.post("/api/contacts", function(data){
    console.log(data);
    $(".tableAppend").append(data.data);
  });


  $.get("/api/user_data", function(data) {
    $(".userEmail").html(data.email + "'s Twilio # is: (714) 695-5738");
    // $("#userTwilioNum").html("Your SoftPhone # is:" + "<br>" + "(714) 695-5738");
  });


});