// define pacman object
var pacman = {
    x: 6,
    y: 7
}

// define ghost object
var ghost = {
  x: 12,
  y: 2
}

//  define map as array
// map_01[0][0] ==

// 2 = brick
// 1 = coin
// 3 = empty
// 0 = pacman
// 4 = cherry
// 5 = ghost

var map_01 = [

[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2],
[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
[2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2],
[2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2],
[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
[2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2],
[2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2],
[2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2],
[2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2],
[2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
[2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
[2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

]
// iterate array and create elements and append
function RenderMap(map){
    map[pacman.y][pacman.x] = 0;
    map[ghost.y][ghost.x] = 5;
    for (var i = 0; i < map.length; i++) {
        var newRow = Row();
        for (var j = 0; j < map[i].length; j++) {
            // set tile based on array value
            if(map[i][j] == 2){
                $(newRow).append(Brick());
            }
            else if (map[i][j] == 1){
                $(newRow).append(Coin());
            }
            else if (map[i][j] == 3){
                $(newRow).append(Empty());
            }
            else if (map[i][j] == 4){
                $(newRow).append(Cherry());
            }

            else if (map[i][j] == 5){
                $(newRow).append(Ghost());
            }
            else{
                $(newRow).append(Pacman());
            }
        }
        $("#board").append(newRow);
    }
}

RenderMap(map_01);
// build a row, and return it
function Row(){
    var row = $("<div class='row'></div>");
    return row;
}
// build a brick and return it
function Brick() {
    var brick = $("<div class='brick'></div>");
    return brick;
}

// build a coin and return it
function Coin() {
    return $("<div class='coin sprite'></div>");
}

// build an empty space
function Empty() {
    return $("<div class='sprite'></div>");
}

// build a pacman and return it
function Pacman() {
  if(keyCode === 39){
    return $("<div class='pacmanright sprite'></div>")
  }
  else if(keyCode === 40){
    return $("<div class='pacmandown sprite'></div>")
  }
  else if(keyCode === 38){
    return $("<div class='pacmanup sprite'></div>")
  }
  else if(keyCode === 37){
    return $("<div class='pacmanleft sprite'></div>")
  }
  else{
    return $("<div class='pacmanleft sprite'></div>")
  }
}

// build a cherry and return it
function Cherry() {
    return $("<div class='cherry sprite'></div>")
}

function Ghost() {
    return $("<div class='ghost sprite'></div>")
}

// Move pacman right
function moveRight() {
  pacman.x = pacman.x + 1;
  pacman.y = pacman.y;
  map_01[pacman.y][pacman.x] = 0;
  map_01[pacman.y][pacman.x - 1] = 3;
  $('#board').children().remove();
  RenderMap(map_01);
}

// Move pacman down
function moveDown() {
  pacman.x = pacman.x;
  pacman.y = pacman.y + 1;
  map_01[pacman.y][pacman.x] = 0;
  map_01[pacman.y - 1][pacman.x] = 3;
  $('#board').children().remove();
  RenderMap(map_01);
}

// Move pacman up
function moveUp() {
  pacman.x = pacman.x;
  pacman.y = pacman.y - 1;
  map_01[pacman.y][pacman.x] = 0;
  map_01[pacman.y + 1][pacman.x] = 3;
  $('#board').children().remove();
  RenderMap(map_01);
}

// Move pacman left
function moveLeft(){
  pacman.x = pacman.x - 1;
  pacman.y = pacman.y;
  map_01[pacman.y][pacman.x] = 0;
  map_01[pacman.y][pacman.x + 1] = 3;
  $('#board').children().remove();
  RenderMap(map_01);
}

var keyCode = 39;
var score = 0;
// listen for keydown event
$(document).keydown(function(e){

    switch (e.keyCode) {

        case 39:
        keyCode = 39;
            if(map_01[pacman.y][pacman.x + 1] === 1){
              score = score + 1;
              $("#score").html('<h1>Score: ' + score + '</h1>');
              moveRight();
              break;
            }
            if(map_01[pacman.y][pacman.x + 1] === 4){
              score = score + 10;
              $("#score").html('<h1>Score: ' + score + '</h1>');
              moveRight();
              break;
            }
            if(map_01[pacman.y][pacman.x + 1] === 5){
              moveRight();
              alert("Game Over!");
            }
            if(map_01[pacman.y][pacman.x + 1] === 3){
              moveRight();
              break;
            }
            else if(map_01[pacman.y][pacman.x + 1] === 2){
              break;
            }
            // move pacman right
        case 40:
        keyCode = 40;
            if(map_01[pacman.y + 1][pacman.x] === 1){
              score = score + 1;
              $("#score").html('<h1>Score: ' + score + '</h1>');
              moveDown();
              break;
            }
            if(map_01[pacman.y + 1][pacman.x] === 4){
              score = score + 10;
              $("#score").html('<h1>Score: ' + score + '</h1>');
              moveDown();
              break;
            }
            if(map_01[pacman.y + 1][pacman.x] === 5){
                moveDown();
                alert("Game Over!");
            }
            if(map_01[pacman.y + 1][pacman.x] === 3){
              moveDown();
              break;
            }
            else if(map_01[pacman.y + 1][pacman.x] === 2){
              break;
            }
            // move pacman down
        case 38:
        keyCode = 38;
          if(map_01[pacman.y - 1][pacman.x] === 1){
            score = score + 1;
            $("#score").html('<h1>Score: ' + score + '</h1>');
            moveUp();
            break;
          }
          if(map_01[pacman.y - 1][pacman.x] === 4){
            score = score + 10;
            $("#score").html('<h1>Score: ' + score + '</h1>');
            moveUp();
            break;
          }
          if(map_01[pacman.y - 1][pacman.x] === 5){
            moveUp();
            alert("Game Over!");
          }
          if(map_01[pacman.y - 1][pacman.x] === 3){
            moveUp();
            break;
          }
          else if(map_01[pacman.y - 1][pacman.x] === 2){
            break;
          }
          // move pacman up
        case 37:
        keyCode = 37;
          if(map_01[pacman.y][pacman.x - 1] === 1){
            score = score + 1;
            $("#score").html('<h1>Score: ' + score + '</h1>');
            moveLeft();
            break;
          }
          if(map_01[pacman.y][pacman.x - 1] === 4){
            score = score + 10;
            $("#score").html('<h1>Score: ' + score + '</h1>');
            moveLeft();
            break;
          }
          if(map_01[pacman.y][pacman.x - 1] === 5){
            moveLeft();
            alert("Game Over!");
          }
          if(map_01[pacman.y][pacman.x - 1] === 3){
            moveLeft();
            break;
          }
          else if(map_01[pacman.y][pacman.x - 1] === 2){
            break;
          }
          // move pacman left
        default:

    }
})
