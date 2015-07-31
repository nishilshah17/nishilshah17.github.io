var portfolioItem1Color = 'gray';
var portfolioItem2Color = '#72bcd4';
var portfolioItem3Color = '#2481d6';
var portfolioItem4Color = '#8fe265';
var portfolioItem5Color = 'orange';
var portfolioItem6Color = '#da3939';

$('.logo').height($('.portfolioItem').height()/2);

document.getElementById('portfolioItem1').style.backgroundColor = portfolioItem1Color;
document.getElementById('portfolioItem2').style.backgroundColor = portfolioItem2Color;
document.getElementById('portfolioItem3').style.backgroundColor = portfolioItem3Color;
document.getElementById('portfolioItem4').style.backgroundColor = portfolioItem4Color;
document.getElementById('portfolioItem5').style.backgroundColor = portfolioItem5Color;
document.getElementById('portfolioItem6').style.backgroundColor = portfolioItem6Color;

$(document).ready(function(){
  for(var i = 0; i < 6; i++) {
    var pI = 'portfolioItem'+(i+1);
    window.setTimeout(function(portfolioItem) {
      $('#'+portfolioItem).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);
    }, (i+1)*300, pI);
  }

  $('.portfolioItem').click(function() {
    window.open($(this).data('link'),'_blank');
  });
});
