var a = $("#down").offset();
var x = 1;
var titanic = new Titanic({
  hover: false
});

window.onload = function() {
  if (window.pageYOffset >= a.top-1) {
    $('body').removeClass('stop-scrolling');
  }
  if (window.pageYOffset < a.top-1) {
    setTimeout(function(){
    titanic.on("open-closed");
  }, 5);
  }
};

window.onscroll = function() {
  scroll();
};

function scroll() {       //script
  if (window.pageYOffset >= a.top-1 && x != 2) {      //(Re)initialisation en place animations si utilisateur sur première image
    x = 2;
  }
  if (window.pageYOffset < a.top-1 && x != 1) {       //animations si navigateur atteint premier cadre
    titanic.on("open-closed");
    x = 1;
    $('html, body').animate({                         //Scroll début page et bloquage scroll si utilisateur retourne sur première image
      scrollTop: $("#up").offset().top
    }, 1000);
      $('body').addClass('stop-scrolling');
    return false;
  }
  if (window.pageYOffset >= a.top-1) {
    $('body').removeClass('stop-scrolling');
  }
}

$(function() {      //script activation et desactivation scroll, et scroll grâce à la flèche
  $('a').click(function() {
    var href = $(this).attr("href");       //Animation vers le bas
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 1000);     //Temps de transition (ms)
    setTimeout(function(){
    titanic.off("open-closed");
  }, 1000);
    return false;
  });
});
