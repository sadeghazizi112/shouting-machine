var words

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    words = $("#words").val();
    words = words.toUpperCase();
    console.log(words);
  $("#theword").show();
  event.preventDefault();
$("#theword").append(words);

});
});
