var STAGE;
var HOVER_COVER;
var COLOR = "black";

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

    //HF-Music
    makeItem("This Song Takes Me Back - 2014", 345, 370, 25, COLOR, "", "/hf-music/thissongtakesmeback.pdf", "", "", "Research paper discussing the therapeutic effects of music on patients afflicted with Alzheimer's Disease. This was the final paper for the Tufts class Psychology of Music.");
    makeItem("The Vinyl Revival - 2015", 367, 420, 25, COLOR, "", "/hf-music/vinylpaper.pdf", "/hf-music/vinylppt.pdf", "https://www.youtube.com/embed/Cb_uoEHR0Fs", "Report and presentation on vinyl records' recent surge in popularity. This was the final paper and project for the Tufts class Technical and Managerial Communication.");
    makeItem("Strum Buddy - 2015", 295, 500, 25, COLOR, "", "/hf-music/strumbuddy.pdf", "", "", "Assistive tecnology design of a guitar playing device for disabled individuals. This was the final project for the Tufts class Intro to Human Factors and Ergonomics.");
    makeItem("MilkCrate Music Library Application - 2015", 420, 505, 25, COLOR, "", "/hf-music/milkcrate.pdf", "", "", "Interface critique, reactive product design, and product pitch of music library platforms. This was the final project for the Tufts class Engineering Psychology.");
    makeItem("Orbit Turntable CAD - 2015", 310, 415, 25, COLOR, "/hf-music/turntable.jpg", "", "", "", "CAD model of the Orbit Turntable created in Google SketchUp. Intermediate project for the Tufts class Intro to Human Factors and Ergonomics.");
    makeItem("BandMate Musician Matching Application - 2016", 340, 470, 25, COLOR, "", "/hf-music/bandmate.pdf", '<iframe src="https://marvelapp.com/527acjg?emb=1" width="452" height="901" allowTransparency="true" frameborder="0"></iframe>', "https://www.youtube.com/embed/-a32XofGc8k", "UX research process and design of mobile application for band socialization. This was the final project for the Tufts class Human Computer Interaction.");
    makeItem("Bandcamp Product Assessment - 2016", 360, 520, 25, COLOR, "", "/hf-music/bandcamp.pdf", "", "", "UX product assessment of the Bandcamp desktop website. This was an intermediate project for the Tufts class Human Computer Interaction.");

    //HF
    makeItem("Apportech Universal Gardening Tool - 2016", 315, 250, 25, COLOR, "", "/hf/vftreport.pdf", "/hf/vftppt.pdf", "", "Complete UX research study and subsequent product design of a universal gardening device. Final semester-long project for the Tufts class Human Factors in Product Design.");
    makeItem("Neuromarketing Presentation - 2016", 200, 380, 25, COLOR, "", "/hf/neuromarket.pdf", "", "", "Group presentation on neuromarketing in the modern world, used for leading a two and a half hour seminar class. Final seminar presentation for the Tufts class Advanced Engineering Psychology.");

    //CS-Music
    makeItem("Music Theory Trainer - 2014", 600, 500, 25, COLOR, "/cs-music/trainer.png", "/cs-music/lettertransmission.pdf", "", "", "VBA project which implements the UI and functionality of a music theory training program. This was the final project for the Tufts class Intro to Computing in Engineering.");
    makeItem("Breadboard Synthesizer- 2013", 650, 440, 25, COLOR, "/cs-music/synthesizer.png", "", "", "", "Introductory music engineering project. Breadboard synthesizer representing a single octave keyboard. Run on MATLAB and an internal battery. This was the final project for the Tufts class Music and the Art of Engineering.");

    //Creative Writing
    makeItem("Amazaballs! - 2014", 800, 700, 15, COLOR,"", "/writing/amazaballs.pdf", "", "", "Realistic fiction longform creative writing piece. This was the semester-long project for the Tufts class Intermediate Creative Writing.");
    makeItem("Bartholomew J. Franklin III - 2013", 870, 720, 15, COLOR, "", "/writing/bartholomew.pdf", "", "", "Surrealist short creative writing piece. This was part of the final portfolio for the Tufts class Intro to Creative Writing.");
    makeItem("Snowfall - 2013", 800, 620, 15, COLOR, "", "/writing/snowfall.pdf", "", "", "Realistic fiction short creative writing piece. This was part of the final portfolio for the Tufts class Intro to Creative Writing.");
    makeItem("Matt & Matild - 2013", 890, 630, 15, COLOR, "", "/writing/mattandmatild.pdf", "", "", "Realistic fiction midlength creative writing piece. This was  part of the final portfolio for the Tufts class Intro to Creative Writing.");

    //Film Critiques
    makeItem("The Godfather II Scene Analysis - 2014", 850, 670, 15, COLOR,"", "/writing/godfather.pdf", "", "", "Scene analysis of The Godfather II. This was the final writing piece for the Tufts Class How Films Think.");
    makeItem("Citizen Kane Scene Analysis - 2014", 850, 600, 15, COLOR,"", "/writing/kane.pdf", "", "", "Scene analysis of Citizen Kane. This was one of two intermiate writing pieces for the Tufts Class How Films Think.");
    makeItem("Kill Bill Vol. 2 Scene Analysis - 2014", 910, 680, 15, COLOR,"", "/writing/killbill.pdf", "", "", "Scene analysis of The Godfather II. This was one of two intermiate writing pieces for the Tufts Class How Films Think.");


    STAGE.update();
}



function makeItem(name, x, y, size, COLOR, image, file, altfile, vid, description) {
    var circle = new createjs.Shape();
    circle.graphics.beginFill(COLOR).drawCircle(x, y, size);
    STAGE.addChild(circle);
    
    // ON CLICK
    circle.addEventListener("click", function(){

        $("#myModal").modal();
        $("#modalContent").html("");
        $("#modalTitle").html(name);
        if (image != ""){
            $("#modalPic").css("display", "block");
            $("#modalPic").css("margin", "auto");
            $("#modalPic").attr("src", "work" + image);
        }
        else {
            $("#modalPic").css("display", "none");
        }        
        if (vid != ""){
            $("#modalContent").append('<iframe width="560" height="315" src=' + vid + ' frameborder="0" allowfullscreen></iframe>');

        }
        if (file != "") {
            $("#modalContent").append('<embed src="work' + file + '" width="90%" height="700px" />');
        }
        if (altfile.substring(1, 7) == "iframe") {
            $("#modalContent").prepend(altfile);
        } 
        else if (altfile !=  ""){
            $("#modalContent").append('<embed src="work' + altfile + '" width="90%" height="700px" />');
        }
    }, false);
   
    // HOVER BEGIN
    circle.addEventListener("mouseover", function(){
        HOVER_COVER = new createjs.Shape();
        HOVER_COVER.graphics.beginFill("#333333").drawCircle(x, y, size+2).endFill();
        STAGE.addChild(HOVER_COVER);
        STAGE.update();

        $("#hoverOverPic").attr('src', image);
        $("#hoverOverTitle").html(name);
        $("#hoverOverContent").html(description);

        var boxHeight = $("#hoverOver").height()+10;

        $("#hoverOver").css({'top':mouseY-boxHeight,'left':mouseX-255, 'display':'block'});
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
    var writingVenn = new createjs.Shape();

    var leftFill = new createjs.Shape();
    var rightFill = new createjs.Shape();
    var bottomFill = new createjs.Shape();
    var writingFill = new createjs.Shape();

    var leftBacking = new createjs.Shape();
    var rightBacking  = new createjs.Shape();
    var bottomBacking  = new createjs.Shape();
    var writingBacking = new createjs.Shape();

    leftBacking.graphics.beginFill("white").drawCircle(380, 300, 250);
    rightBacking.graphics.beginFill("white").drawCircle(620, 300, 250);
    bottomBacking.graphics.beginFill("white").drawCircle(500, 520, 250);
    writingBacking.graphics.beginFill("white").drawCircle(850, 650, 100);

    leftFill.alpha = 0.4;
    rightFill.alpha = 0.4;
    bottomFill.alpha = 0.4;
    writingFill.alpha = 0.4;

    leftFill.graphics.beginFill("#333333").drawCircle(380, 300, 250);
    rightFill.graphics.beginFill("#333333").drawCircle(620, 300, 250);
    bottomFill.graphics.beginFill("#333333").drawCircle(500, 520, 250);
    writingFill.graphics.beginFill("#333333").drawCircle(850, 650, 100);

    leftVenn.graphics.setStrokeStyle(8,"round").beginStroke(COLOR).drawCircle(380, 300, 250);
    rightVenn.graphics.setStrokeStyle(8,"round").beginStroke(COLOR).drawCircle(620, 300, 250);
    bottomVenn.graphics.setStrokeStyle(8,"round").beginStroke(COLOR).drawCircle(500, 520, 250);
    writingVenn.graphics.setStrokeStyle(8,"round").beginStroke(COLOR).drawCircle(850, 650, 100);

    STAGE.addChild(leftBacking);
    STAGE.addChild(rightBacking);
    STAGE.addChild(bottomBacking);
    STAGE.addChild(writingBacking);

    STAGE.addChild(leftFill);
    STAGE.addChild(rightFill);
    STAGE.addChild(bottomFill);
    STAGE.addChild(writingFill);

    STAGE.addChild(leftVenn);
    STAGE.addChild(rightVenn);
    STAGE.addChild(bottomVenn);
    STAGE.addChild(writingVenn);

    STAGE.update();
}

function writeText() {
    var humanfactors = new createjs.Text("Human Factors", "40px Arial", COLOR);
    humanfactors.x = 180; 
    humanfactors.y = 35;
    humanfactors.textBaseline = "alphabetic";

    var compsci = new createjs.Text("Computer Science", "40px Arial", COLOR);
    compsci.x = 530; 
    compsci.y = 35;
    compsci.textBaseline = "alphabetic";

    var music = new createjs.Text("Music", "40px Arial", COLOR);
    music.x = 450; 
    music.y = 845;
    music.textBaseline = "alphabetic";

    var writing = new createjs.Text("Writing", "30px Arial", COLOR);
    writing.x = 802; 
    writing.y = 790;
    writing.textBaseline = "alphabetic";

    STAGE.addChild(humanfactors);
    STAGE.addChild(compsci);
    STAGE.addChild(music);
    STAGE.addChild(writing);

    STAGE.update();
}