$(document).ready(function() {

/////// MENU ///////
    $('#about').click(function() {
        $('#aboutSection').slideDown();
        $('#portfolioSection').slideUp();
        $('#artSection').slideUp();

    });

    $('#projects').click(function() {
        $('#aboutSection').slideUp();
        $('#portfolioSection').slideDown();
        $('#artSection').slideUp();

    });

    $('#art').click(function() {
        $('#aboutSection').slideUp();
        $('#portfolioSection').slideUp();
        $('#artSection').slideDown();
    });


/////// PORTFOLIO ///////
    $('#musicSelector').hover(function() {
            $('#psychSelector').fadeTo(100, .2);
            $('#techSelector').fadeTo(100, .2);

            $('.portfolioItem').each(function (){
                if (!$(this).hasClass("music")) {
                    $(this).fadeTo(100, .2);
                }
            })

        }, function(){
            $('#psychSelector').fadeTo(100, 1);
            $('#techSelector').fadeTo(100, 1);

            $('.portfolioItem').each(function (){
                if (!$(this).hasClass("music")) {
                    $(this).fadeTo(100, 1);
                }
            })
        });

    $('.portfolioSelector').click(function() {
      $('.')
    });

    $('#psychSelector').hover(function() {
            $('#musicSelector').fadeTo(100, .2);
            $('#techSelector').fadeTo(100, .2);

            $('.portfolioItem').each(function (){
                if (!$(this).hasClass("psych")) {
                    $(this).fadeTo(100, .2);
                }
            })
        }, function(){
            $('#musicSelector').fadeTo(100, 1);
            $('#techSelector').fadeTo(100, 1);

            $('.portfolioItem').each(function (){
                if (!$(this).hasClass("psych")) {
                    $(this).fadeTo(100, 1);
                }
            })
        });

    $('#techSelector').hover(function() {
            $('#musicSelector').fadeTo(100, .2);
            $('#psychSelector').fadeTo(100, .2);

            $('.portfolioItem').each(function (){
                if (!$(this).hasClass("tech")) {
                    $(this).fadeTo(100, .2);
                }
            })
        }, function(){
            $('#musicSelector').fadeTo(100, 1);
            $('#psychSelector').fadeTo(100, 1);

            $('.portfolioItem').each(function (){
                if (!$(this).hasClass("tech")) {
                    $(this).fadeTo(100, 1);
                }
            })
        });

    function makeItem(id, name, x, y, size, image, file, altfile, vid, description) {

    // ON CLICK
    $(id).click(function(){

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
            $("#modalContent").append('<embed id="pdf" src="work' + file + '"/>');
        }
        if (altfile.substring(1, 7) == "iframe") {
            $("#modalContent").prepend(altfile);
        }
        else if (altfile !=  ""){
            $("#modalContent").append('<embed src="work' + altfile + '" width="90%" height="700px" />');
        }
    });

    // HOVER BEGIN
    $(id).hover(function(){
        $("#hoverOverPic").attr('src', image);
        $("#hoverOverTitle").html(name);
        $("#hoverOverContent").html(description);

        console.log($(this).get(0).getBoundingClientRect().top);

        $("#hoverOver").css({'top':$(this).get(0).getBoundingClientRect().top - 230,
                             'left':$(this).get(0).getBoundingClientRect().left-$(this).get(0).getBoundingClientRect().width/2,
                             'display':'block'});
        $(this).attr("src","img/"+$(this).attr("id")+"inv.png");

    }, function(){
            $("#hoverOver").css({'display':'none'});
            $(this).attr("src","img/"+$(this).attr("id")+".png");
    });
}

    makeItem("#alz","This Song Takes Me Back <br> 2014", 345, 370, 25, "", "/hf-music/thissongtakesmeback.pdf", "", "", "Research paper discussing the therapeutic effects of music on patients afflicted with Alzheimer's Disease. This was the final paper for the Tufts class Psychology of Music.");
    makeItem("#vinyl", "The Vinyl Revival <br> 2015", 367, 420, 25, "", "/hf-music/vinylpaper.pdf", "/hf-music/vinylppt.pdf", "https://www.youtube.com/embed/Cb_uoEHR0Fs", "Report and presentation on vinyl records' recent surge in popularity. This was the final paper and project for the Tufts class Technical and Managerial Communication.");
    makeItem("#strum", "Strum Buddy <br> 2015", 295, 500, 25, "", "/hf-music/strumbuddy.pdf", "", "", "Assistive tecnology design of a guitar playing device for disabled individuals. This was the final project for the Tufts class Intro to Human Factors and Ergonomics.");
    makeItem("#milkcrate", "MilkCrate Music Library Application <br> 2015", 420, 505, 25, "", "/hf-music/milkcrate.pdf", "", "", "Interface critique, reactive product design, and product pitch of music library platforms. This was the final project for the Tufts class Engineering Psychology.");
    makeItem("#bandmate", "BandMate Musician Matching Application <br> 2016", 340, 470, 25, "", "/hf-music/bandmate.pdf", '<iframe src="https://marvelapp.com/527acjg?emb=1" width="452" height="901" allowTransparency="true" frameborder="0"></iframe>', "https://www.youtube.com/embed/-a32XofGc8k", "UX research process and design of mobile application for band socialization. This was the final project for the Tufts class Human Computer Interaction.");
    makeItem("#bandcamp", "Bandcamp Product Assessment <br> 2016", 360, 520, 25, "", "/hf-music/bandcamp.pdf", "", "", "UX product assessment of the Bandcamp desktop website. This was an intermediate project for the Tufts class Human Computer Interaction.");
    makeItem("#apportech", "Apportech Universal Gardening Tool <br> 2016", 350, 200, 25, "", "/hf/vftreport.pdf", "/hf/vftppt.pdf", "", "Complete UX research study and subsequent product design of a universal gardening device. Final semester-long project for the Tufts class Human Factors in Product Design.");
    makeItem("#neuro", "Neuromarketing Presentation <br> 2016", 250, 360, 25, "", "/hf/neuromarket.pdf", "", "", "Group presentation on neuromarketing in the modern world, used for leading a two and a half hour seminar class. Final seminar presentation for the Tufts class Advanced Engineering Psychology.");
    makeItem("#theory", "Music Theory Trainer <br> 2014", 600, 500, 25, "/cs-music/trainer.png", "/cs-music/lettertransmission.pdf", "", "", "VBA project which implements the UI and functionality of a music theory training program. This was the final project for the Tufts class Intro to Computing in Engineering.");
    //makeItem("#synth", "Breadboard Synthesizer- 2013", 650, 440, 25, "/cs-music/synthesizer.png", "", "", "", "Introductory music engineering project. Breadboard synthesizer representing a single octave keyboard. Run on MATLAB and an internal battery. This was the final project for the Tufts class Music and the Art of Engineering.");
    //makeItem("#orbit", "Orbit Turntable CAD <br> 2015", 310, 415, 25, "/hf-music/turntable.jpg", "", "", "", "CAD model of the Orbit Turntable created in Google SketchUp. Intermediate project for the Tufts class Intro to Human Factors and Ergonomics.");

    //Creative Writing
    makeItem("#amazaballs", "Amazaballs! <br> 2014", 800, 700, 15,"", "/writing/amazaballs.pdf", "", "", "Realistic fiction longform creative writing piece. This was the semester-long project for the Tufts class Intermediate Creative Writing.");
    makeItem("#bartholomew", "Bartholomew J. Franklin III <br> 2013", 870, 720, 15, "", "/writing/bartholomew.pdf", "", "", "Surrealist short creative writing piece. This was part of the final portfolio for the Tufts class Intro to Creative Writing.");
    makeItem("#snowfall", "Snowfall <br> 2013", 800, 620, 15, "", "/writing/snowfall.pdf", "", "", "Realistic fiction short creative writing piece. This was part of the final portfolio for the Tufts class Intro to Creative Writing.");
    makeItem("#mattandmatild", "Matt & Matild <br> 2013", 890, 630, 15, "", "/writing/mattandmatild.pdf", "", "", "Realistic fiction midlength creative writing piece. This was  part of the final portfolio for the Tufts class Intro to Creative Writing.");

    //Film Critiques
    makeItem("#godfather", "The Godfather II Scene Analysis <br> 2014", 850, 670, 15,"", "/writing/godfather.pdf", "", "", "Scene analysis of The Godfather II. This was the final writing piece for the Tufts Class How Films Think.");
    makeItem("#kane", "Citizen Kane Scene Analysis <br> 2014", 850, 600, 15,"", "/writing/kane.pdf", "", "", "Scene analysis of Citizen Kane. This was one of two intermiate writing pieces for the Tufts Class How Films Think.");
    makeItem("#killbill", "Kill Bill Vol. 2 Scene Analysis <br> 2014", 910, 680, 15,"", "/writing/killbill.pdf", "", "", "Scene analysis of The Godfather II. This was one of two intermiate writing pieces for the Tufts Class How Films Think.");

/////// MUSIC PAGE ///////
        $('.musicItemImg').hover(function() {
            if (!$(this).hasClass("clicked")){
                $(this).attr("src","img/"+$(this).attr("id")+"inv.png");
            }
        }, function () {
            if (!$(this).hasClass("clicked")){
                $(this).attr("src","img/"+$(this).attr("id")+".png");
            }
        });

        $('.musicItemImg').click(function() {
            if ($('#myMusicPlayer').attr("src") == "music/"+$(this).attr("id")+".mp3" && !$('#myMusicPlayer').get(0).paused) {
                $('#myMusicPlayer').get(0).pause();
                $('#playButton').css("background-image","url(img/play.png)");
            }
            else if ($('#myMusicPlayer').attr("src") == "music/"+$(this).attr("id")+".mp3") {
                $('#myMusicPlayer').get(0).play();
                $('#playButton').css("background-image","url(img/pause.png)");
            }
            else {
                $('#myMusicPlayer').attr("src","music/"+$(this).attr("id")+".mp3");
                $('#myMusicPlayer').get(0).play();
                $('#playButton').css("background-image","url(img/pause.png)");
            }
            $('.musicItemImg').each(function () {
                $(this).attr("src","img/"+$(this).attr("id")+".png");
                $(this).removeClass("clicked");
            });

            $(this).attr("src","img/"+$(this).attr("id")+"inv.png");
            $(this).addClass("clicked");
            $('#playButton').css("display", "block");
        });

        $('#playButton').click(function () {
            if ($('#myMusicPlayer').get(0).paused) {
                $('#myMusicPlayer').get(0).play();
                $(this).css("background-image","url(img/pause.png)");
            }
            else {
                $('#myMusicPlayer').get(0).pause();
                $(this).css("background-image","url(img/play.png)");
            }

        });




});
