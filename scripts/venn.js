var STAGE;
var HOVER_COVER;

var mouseX;
var mouseY;
$(document).mousemove( function(e) {
   mouseX = e.pageX; 
   mouseY = e.pageY;
}); 



function init() {
    setupSTAGE();
}

function setupSTAGE() {
    STAGE = new createjs.Stage("workCanvas");
    STAGE.enableMouseOver(20);

    drawVenn();
    writeText();
    
    makeItem("NYC", 200, 200, 25, "black", "../agolin95.github.io/pics/nyc.jpg", "New York Is My Home and I wish I could live there again, because it is hands down the greatest city on the face of the planet.");
    //makeItem("Item2", 300, 220, 25, "black", "../agolin95.github.io/pics/nyc.jpg", "New York Is My Home");
    //makeItem("Item3", 230, 400, 25, "black","../agolin95.github.io/pics/nyc.jpg", "New York Is My Home");

    STAGE.update();
}


function makeItem(name, x, y, size, color, image, description) {
    var circle = new createjs.Shape();
    circle.graphics.beginFill(color).drawCircle(x, y, size);
    STAGE.addChild(circle);
    
    // ON CLICK
    circle.addEventListener("click", function(){

        $("#myModal").modal();
        $("#modalTitle").html(name);
        $("#modalContent").html(description);
        $("#modalPic").attr("src", image);
    }, false);
   
    // HOVER BEGIN
    circle.addEventListener("mouseover", function(){
        HOVER_COVER = new createjs.Shape();
        HOVER_COVER.graphics.beginFill("gray").drawCircle(x, y, size+3).endFill();
        STAGE.addChild(HOVER_COVER);
        STAGE.update();

        $("#hoverOverPic").attr('src', image);
        $("#hoverOverTitle").html(name);
        $("#hoverOverContent").html(description);

        var boxHeight = $("#hoverOver").height()+10;

        $("#hoverOver").css({'top':mouseY-boxHeight,'left':mouseX+5, 'display':'block'});
    }, false);

    // HOVER END
    circle.addEventListener("mouseout", function(){
            STAGE.removeChild(HOVER_COVER);
            STAGE.update();
            $("#hoverOver").css({'display':'none'});
    }, false);


    STAGE.update();
}

function drawVenn() {

    var leftVenn = new createjs.Shape();
    var rightVenn = new createjs.Shape();
    var bottomVenn = new createjs.Shape();

    var leftFill = new createjs.Shape();
    var rightFill = new createjs.Shape();
    var bottomFill = new createjs.Shape();

    var leftBacking = new createjs.Shape();
    var rightBacking  = new createjs.Shape();
    var bottomBacking  = new createjs.Shape();

    leftBacking.graphics.beginFill("white").drawCircle(350, 300, 250);
    rightBacking.graphics.beginFill("white").drawCircle(650, 300, 250);
    bottomBacking.graphics.beginFill("white").drawCircle(500, 550, 250);

    leftFill.alpha = 0.4;
    rightFill.alpha = 0.4;
    bottomFill.alpha = 0.4;

    leftFill.graphics.beginFill("#333333").drawCircle(350, 300, 250);
    rightFill.graphics.beginFill("#333333").drawCircle(650, 300, 250);
    bottomFill.graphics.beginFill("#333333").drawCircle(500, 550, 250);

    leftVenn.graphics.setStrokeStyle(8,"round").beginStroke("Black").drawCircle(350, 300, 250);
    rightVenn.graphics.setStrokeStyle(8,"round").beginStroke("Black").drawCircle(650, 300, 250);
    bottomVenn.graphics.setStrokeStyle(8,"round").beginStroke("Black").drawCircle(500, 550, 250);

    STAGE.addChild(leftBacking);
    STAGE.addChild(rightBacking);
    STAGE.addChild(bottomBacking);

    STAGE.addChild(leftFill);
    STAGE.addChild(rightFill);
    STAGE.addChild(bottomFill);

    STAGE.addChild(leftVenn);
    STAGE.addChild(rightVenn);
    STAGE.addChild(bottomVenn);

    STAGE.update();
}

function writeText() {
    var humanfactors = new createjs.Text("Human Factors", "40px Arial", "black");
    humanfactors.x = 180; 
    humanfactors.y = 35;
    humanfactors.textBaseline = "alphabetic";

    var compsci = new createjs.Text("Computer Science", "40px Arial", "black");
    compsci.x = 530; 
    compsci.y = 35;
    compsci.textBaseline = "alphabetic";

    var music = new createjs.Text("Music", "40px Arial", "black");
    music.x = 450; 
    music.y = 845;
    music.textBaseline = "alphabetic";

    STAGE.addChild(humanfactors);
    STAGE.addChild(compsci);
    STAGE.addChild(music);

    STAGE.update();
}