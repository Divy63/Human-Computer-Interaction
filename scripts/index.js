$(document).ready(function(){
    // Filter code
    $(document).click(function(event) {
        if(
          $('.toggle > input').is(':checked') &&
          !$(event.target).parents('.toggle').is('.toggle')
        ) {
          $('.toggle > input').prop('checked', false);
        }
      });
      $("#t4").attr("disabled","disabled");
      $("label.t4").css("color", "grey");

      //$("#t4").prop('disabled', true);
      //$("#subcategory-list").hide();
  });

window.onload=function(){
  onLoadCreateDatabase();
    onLoadDisplayToys();
}

let homeButton = document.getElementById("homeButton").addEventListener("click",function(){
  $("#t4").attr("disabled","disabled");
  $("label.t4").css("color", "grey");
  onLoadDisplayToys();
});

let toyLogohomeButton = document.getElementById("toyLogoHomeButton").addEventListener("click",function(){
  $("#t4").attr("disabled","disabled");
  $("label.t4").css("color", "grey");
  onLoadDisplayToys();
});


//Display Toy Cards for Categories Added listeners for categories
let booksAndComicsButton=document.getElementById("BooksAndComicsButton").addEventListener("click",function(){
  showBooksAndComics();
  $("#t4").removeAttr('disabled');
  $("label.t4").css("color", "black");
  $("#electronics-cat1").hide();
  $("#electronics-cat2").hide();
  $("#electronics-cat3").hide();
  $("#action-cat1").hide();
  $("#action-cat2").hide();
  $("#action-cat3").hide();
  $("#game-cat1").hide();
  $("#game-cat2").hide();
  $("#game-cat3").hide();
  $("#outdoor-cat1").hide();
  $("#outdoor-cat2").hide();
  $("#outdoor-cat3").hide();
  $("#book-cat1").show();
  $("#book-cat2").show();
  $("#book-cat3").show();
});
let outdoorButton=document.getElementById("outdoorButton").addEventListener("click",function(){
  showOutdoor();
  $("#t4").removeAttr('disabled');
  $("label.t4").css("color", "black");
  $("#electronics-cat1").hide();
  $("#electronics-cat2").hide();
  $("#electronics-cat3").hide();
  $("#action-cat1").hide();
  $("#action-cat2").hide();
  $("#action-cat3").hide();
  $("#game-cat1").hide();
  $("#game-cat2").hide();
  $("#game-cat3").hide();
  $("#book-cat1").hide();
  $("#book-cat2").hide();
  $("#book-cat3").hide();
  $("#outdoor-cat1").show();
  $("#outdoor-cat2").show();
  $("#outdoor-cat3").show();
});
let electronicsButton=document.getElementById("electronicsButton").addEventListener("click",function(){
  showElectronics();
  $("#t4").removeAttr('disabled');
  $("label.t4").css("color", "black");
  $("#book-cat1").hide();
  $("#book-cat2").hide();
  $("#book-cat3").hide();
  $("#action-cat1").hide();
  $("#action-cat2").hide();
  $("#action-cat3").hide();
  $("#game-cat1").hide();
  $("#game-cat2").hide();
  $("#game-cat3").hide();
  $("#outdoor-cat1").hide();
  $("#outdoor-cat2").hide();
  $("#outdoor-cat3").hide();
  $("#electronics-cat1").show();
  $("#electronics-cat2").show();
  $("#electronics-cat3").show();
});
let GamesAndPuzzlesButton=document.getElementById("GamesAndPuzzlesButton").addEventListener("click",function(){
  showGamesAndPuzzles();
  $("#t4").removeAttr('disabled');
  $("label.t4").css("color", "black");
  $("#electronics-cat1").hide();
  $("#electronics-cat2").hide();
  $("#electronics-cat3").hide();
  $("#action-cat1").hide();
  $("#action-cat2").hide();
  $("#action-cat3").hide();
  $("#book-cat1").hide();
  $("#book-cat2").hide();
  $("#book-cat3").hide();
  $("#outdoor-cat1").hide();
  $("#outdoor-cat2").hide();
  $("#outdoor-cat3").hide();
  $("#game-cat1").show();
  $("#game-cat2").show();
  $("#game-cat3").show();
});
let ActionFigures=document.getElementById("ActionFiguresButton").addEventListener("click",function(){
  showActionFigures();
  $("#t4").removeAttr('disabled');
  $("label.t4").css("color", "black");
  $("#electronics-cat1").hide();
  $("#electronics-cat2").hide();
  $("#electronics-cat3").hide();
  $("#book-cat1").hide();
  $("#book-cat2").hide();
  $("#book-cat3").hide();
  $("#game-cat1").hide();
  $("#game-cat2").hide();
  $("#game-cat3").hide();
  $("#outdoor-cat1").hide();
  $("#outdoor-cat2").hide();
  $("#outdoor-cat3").hide();
  $("#action-cat1").show();
  $("#action-cat2").show();
  $("#action-cat3").show();
});

