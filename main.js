var portfolioItem1Color = 'red';
var portfolioItem2Color = 'blue';
var portfolioItem3Color = 'green';
var portfolioItem4Color = 'orange';
var portfolioItem5Color = 'purple';

document.getElementById('portfolioItem1').style.backgroundColor = portfolioItem1Color;
document.getElementById('portfolioItem2').style.backgroundColor = portfolioItem2Color;
document.getElementById('portfolioItem3').style.backgroundColor = portfolioItem3Color;
document.getElementById('portfolioItem4').style.backgroundColor = portfolioItem4Color;
document.getElementById('portfolioItem5').style.backgroundColor = portfolioItem5Color;

for(var i = 0; i < 5; i++) {
  var pI = 'portfolioItem'+(i+1);
  console.log(pI);
  window.setTimeout(function() {
    document.getElementById(pI).style.visibility = 'visible';
  }, 1000);
}
