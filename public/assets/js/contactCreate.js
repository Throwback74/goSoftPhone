$(document).ready(function(){

  // $(".add-btn").click(function() {
  //   if(!err) {
  //     location.reload();
  //   }
  // });

  $.get("/api/user_data", function(data) {
    $(".userEmail").html(data.email + "'s SoftPhone # is: (714) 695-5738");
    // $("#userTwilioNum").html("Your SoftPhone # is:" + "<br>" + "(714) 695-5738");
  });

});