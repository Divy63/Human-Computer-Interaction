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

window.onload=function(){
  onLoadCreateDatabase();
    onLoadDisplayToys();
}


//Display Toy Cards for Categories Added listeners for categories
let booksAndComicsButton=document.getElementById("BooksAndComicsButton").addEventListener("click",function(){
  showBooksAndComics();
});
let outdoorButton=document.getElementById("outdoorButton").addEventListener("click",function(){
  showOutdoor();
});
let electronicsButton=document.getElementById("electronicsButton").addEventListener("click",function(){
  showElectronics();
});
let GamesAndPuzzlesButton=document.getElementById("GamesAndPuzzlesButton").addEventListener("click",function(){
  showGamesAndPuzzles();
});
let ActionFigures=document.getElementById("ActionFiguresButton").addEventListener("click",function(){
  showActionFigures();
});

