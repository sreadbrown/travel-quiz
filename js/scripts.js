$(document).ready(function() {
  $("#again").hide();
  $("form#match").submit(function(event){
    var passport = $("select#passport").val();
    var urban = $("select#urban").val();
    var activity = $("select#activity").val();
    var adventure = $("select#adventure").val();
    var plans = $("select#plans").val();

    $(".result").hide();

    // if ((passport === "null") || (plans === "null") || (urban === "null") || (activity === "null") || (adventure === "null")) {
    //   alert("Please fill out all of the questions.");

    // }
    $('#match').hide();
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
      } else if (activity === 'food') {
          if (urban === 'city') {
            $('#hongkong').show();
          } else {
            $('#newzealand').show();
          }
      } else if (activity === 'relax') {
          if (urban === 'city') {
            $('#athens').show();
          } else {
            $('#belize').show();
          }
      } else if (activity === 'culture') {
          if (urban === 'city') {
            $('#athens').show();
          } else {
            $('#india').show();
          }
      }
    }
    else if (passport === 'nopassport') {
      if (activity === 'art') {
        if (urban === 'city') {
          $('#newyork').show();
        } else {
            $('#asheville').show();
        }
      } else if (activity === 'nature') {
          if (urban === 'city') {
            $('#portland').show();
          } else {
            $('#tahoe').show();
          }
      } else if (activity === 'food') {
          if (urban === 'city') {
            $('#neworleans').show();
          } else {
            $('#portland').show();
          }
      } else if (activity === 'relax') {
          if (urban === 'city') {
            $('#neworleans').show();
          } else {
            $('#tahoe').show();
          }
      } else if (activity === 'culture') {
          if (urban === 'city') {
            $('#neworleans').show();
          } else {
            $('#asheville').show();
          }
      }
      // $('#match').hide();
    }

    event.preventDefault();
  });
});
