$(document).ready(function() {
  $("#again").hide();
  $("form#match").submit(function(event){
    var passport = $("select#passport").val();
    var urban = $("select#urban").val();
    var activity = $("select#activity").val();
    var adventure = $("select#adventure").val();
    var plans = $("select#plans").val();

    $(".result").hide();

    if (passport === 'yespassport') {
      if (activity === 'art') {
        if (urban === 'city') {
          $('#hongkong').show();
        } else {
            $('#india').show();
        }
      } else if (activity === 'nature') {
          if (urban === 'city') {
            $('#belize').show();
          } else {
            $('#newzealand').show();
          }
      }

    }

    //
    //
    //
    // $("#again").click(function(event) {
    //   $(".result").hide();
    //     $("form#match").show();
    //       $("#again").hide();
    //
    // });
    event.preventDefault();
  });
});
