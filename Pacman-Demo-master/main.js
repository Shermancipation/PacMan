// define pacman object
var pacman = {
    x: 6,
    y: 7
}

//  define map as array
// map_01[0][0] ==

// 2 = brick
// 1 = coin
// 3 = empty
// 0 = pacman
// 4 = cherry

var map_01 = [
//     [2,2,2,2,2,2,2,2,2,2],
//     [2,1,1,1,1,1,1,1,1,2],
//     [2,1,1,1,1,1,1,1,1,2],
//     [2,1,1,1,1,1,1,1,1,2],
//     [2,1,1,1,1,1,1,1,1,2],
//     [2,1,1,1,1,1,1,1,1,2],
//     [2,1,1,1,1,1,1,1,1,2],
//     [2,1,1,1,1,1,1,1,1,2],
//     [2,1,1,1,1,1,1,1,1,2],
//     [2,2,2,2,2,2,2,2,2,2]
// ]

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
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

]
// iterate array and create elements and append
function RenderMap(map){
    map[pacman.y][pacman.x] = 0;
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
    return $("<div class='pacman sprite'></div>");
}

// build a cherry and return it
function Cherry() {
    return $("<div class='cherry sprite'></div>")
}

var score = 0;
// listen for keydown event
$(document).keydown(function(e){

    switch (e.keyCode) {

        case 39:
            if(map_01[pacman.y][pacman.x + 1] === 1){
              score = score + 1;
              $("#score").html('<h1>Score: ' + score + '</h1>');
              pacman.x = pacman.x + 1;
              pacman.y = pacman.y;
              map_01[pacman.y][pacman.x] = 0;
              map_01[pacman.y][pacman.x - 1] = 3;
              $('#board').children().remove();
              RenderMap(map_01);
              break;
            }
            if(map_01[pacman.y][pacman.x + 1] === 3){
              pacman.x = pacman.x + 1;
              pacman.y = pacman.y;
              map_01[pacman.y][pacman.x] = 0;
              map_01[pacman.y][pacman.x - 1] = 3;
              $('#board').children().remove();
              RenderMap(map_01);
              break;
            }
            else if(map_01[pacman.y][pacman.x + 1] === 2){
              break;
            }
            // move pacman right
        case 40:
            if(map_01[pacman.y + 1][pacman.x] === 1){
              score = score + 1;
              $("#score").html('<h1>Score: ' + score + '</h1>');
              pacman.x = pacman.x;
              pacman.y = pacman.y + 1;
              map_01[pacman.y][pacman.x] = 0;
              map_01[pacman.y - 1][pacman.x] = 3;
              $('#board').children().remove();
              RenderMap(map_01);
              break;
            }
            if(map_01[pacman.y + 1][pacman.x] === 3){
              pacman.x = pacman.x;
              pacman.y = pacman.y + 1;
              map_01[pacman.y][pacman.x] = 0;
              map_01[pacman.y - 1][pacman.x] = 3;
              $('#board').children().remove();
              RenderMap(map_01);
              break;
            }
            else if(map_01[pacman.y + 1][pacman.x] === 2){
              break;
            }
            // move pacman down
        case 38:
          if(map_01[pacman.y - 1][pacman.x] === 1){
            score = score + 1;
            $("#score").html('<h1>Score: ' + score + '</h1>');
            pacman.x = pacman.x;
            pacman.y = pacman.y - 1;
            map_01[pacman.y][pacman.x] = 0;
            map_01[pacman.y + 1][pacman.x] = 3;
            $('#board').children().remove();
            RenderMap(map_01);
            break;
          }
          if(map_01[pacman.y - 1][pacman.x] === 3){
            pacman.x = pacman.x;
            pacman.y = pacman.y - 1;
            map_01[pacman.y][pacman.x] = 0;
            map_01[pacman.y + 1][pacman.x] = 3;
            $('#board').children().remove();
            RenderMap(map_01);
            break;
          }
          else if(map_01[pacman.y - 1][pacman.x] === 2){
            break;
          }
          // move pacman up
        case 37:
          if(map_01[pacman.y][pacman.x - 1] === 1){
            score = score + 1;
            $("#score").html('<h1>Score: ' + score + '</h1>');
            pacman.x = pacman.x - 1;
            pacman.y = pacman.y;
            map_01[pacman.y][pacman.x] = 0;
            map_01[pacman.y][pacman.x + 1] = 3;
            $('#board').children().remove();
            RenderMap(map_01);
            break;
          }
          if(map_01[pacman.y][pacman.x - 1] === 3){
            pacman.x = pacman.x - 1;
            pacman.y = pacman.y;
            map_01[pacman.y][pacman.x] = 0;
            map_01[pacman.y][pacman.x + 1] = 3;
            $('#board').children().remove();
            RenderMap(map_01);
            break;
          }
          else if(map_01[pacman.y][pacman.x - 1] === 2){
            break;
          }
          // move pacman left
        default:

    }
})
