var STAGE;

function init() {
    $(document).ready(function() {
        $('.tooltipster').tooltipster();
    });
    setupSTAGE();
}

function setupSTAGE() {
    STAGE = new createjs.Stage("workCanvas");
    STAGE.enableMouseOver(20);

    drawVenn();
    writeText();
    
    //makeItem(200, 200, "black");
    //makeItem(300, 220, "black");
    //makeItem(230, 400, "black");

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

function makeItem(x, y, color) {
    var circle = new createjs.Shape();
    circle.graphics.beginFill(color).drawCircle(x, y, 25);
    STAGE.addChild(circle);
    circle.addEventListener("click", handleClick);
    circle.addEventListener("mouseover", handleHover);

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

function handleClick(event){
    $("#myModal").modal()
}

function handleHover(event){
    makeItem(200, 500, "blue");
}
