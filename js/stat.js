'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var playersData = 240;
var DIAGRAM_X = 150;
var DIAGRAM_Y = 240;
var DIAGRAM_GAP = 90;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 40;
var barHeight = -150;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
    return maxElement;
};



window.renderStatistics = function(ctx, players, times) {


  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 40);
  ctx.fillText('Список результатов:', 110, 60);





  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++){

    ctx.fillStyle = '#000';
    ctx.fillText( players[i],DIAGRAM_X + (DIAGRAM_GAP * i), playersData + GAP + FONT_GAP);
    ctx.fillText( Math.floor(times[i]), DIAGRAM_X + (DIAGRAM_GAP * i), DIAGRAM_Y - GAP + (barHeight * times[i]) / maxTime );


   players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(' + (220 + 20 * Math.random()) + ',' + (30 + 70 * Math.random()) + '%,' + (30 + 45 * Math.random()) + '%)';

   ctx.fillRect( DIAGRAM_X + (DIAGRAM_GAP * i),DIAGRAM_Y,BAR_WIDTH,(barHeight * times[i]) / maxTime );




  }




};

