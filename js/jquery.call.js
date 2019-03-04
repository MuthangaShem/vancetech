$("#trigger").on("click", function() {
  $(this).toggleClass("clicked");
});
$("#trigger").blur("click", function() {
  $(this).removeClass("clicked");
});


// $(document).on('click', function(event) {
//   if (event.target.id !== 'trigger' ) {
//     $(this).removeClass("clicked");
//   }
//   $("#trigger").on("click", function() {
//   	$(this).toggleClass("clicked");
//   });
// }
