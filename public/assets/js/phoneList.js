$(document).ready(function(){

  // var table = $("#table tbody");

  $.post("/api/contacts", function(data){
    console.log(data);
    $(".tableAppend").append(data.data);
  });

  $(".add-btn").click(function() {
    // event.preventDefault();
    // $.get("/api/contact/create",
    //   function (data) {
    //     if (data) {
    //         alert(data.message);
    //     }
    //   });
    
  });

  $.get("/api/user_data", function(data) {
    $(".userEmail").html(data.email + "'s SoftPhone # is: (714) 695-5738");
    // $("#userTwilioNum").html("Your SoftPhone # is:" + "<br>" + "(714) 695-5738");
  });


});