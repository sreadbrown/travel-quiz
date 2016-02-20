$(document).ready(function() {
  $("#again").hide();
  $("form#match").submit(function(event){
    var passport = $("select#passport").val();
    var urban = $("select#urban").val();
    var activity = $("select#activity").val();
    var adventure = $("select#adventure").val();
    var plans = $("select#plans").val();



    // $("#again").click(function(event) {
    //   $(".result").hide();
    //     $("form#match").show();
    //       $("#again").hide();
    //
    // });
    // event.preventDefault();
  });
});
