//<<<<<<< filters
$(document).ready(function(){
    $(document).click(function(event) {
        if(
          $('.toggle > input').is(':checked') &&
          !$(event.target).parents('.toggle').is('.toggle')
        ) {
          $('.toggle > input').prop('checked', false);
        }
      });
   
  });
=======
window.onload=function(){
    onLoadDisplayToys();
}
//>>>>>>> main
