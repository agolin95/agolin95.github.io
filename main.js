$(document).ready(function() {
/////// IMPORT WORK ///////
    $.getJSON("content.json", function(data) {
        $.each(data, function(i, item) {
            //CREATE WORK ITEMS
            $(item.target).append(`
                <div class="workItem" id=`+item.id+`>
                    <img class="workItemImg" id=`+item.id+`Img src=img/`+item.id+`.png>
                    <h5 class="workItemTitle">`+item.tagline+`</h5>
                </div>
            `);
            //WORK ITEM INTERACTIONS
            $('#'+item.id).hover(function() {
                    $(this).children(1).attr("src", "img/"+item.id+"inv.png")
                    $("#hoverOverTitle").html(item.title);
                    $("#hoverOverContent").html(item.description);
                    $("#hoverOver").css({'top':$(this).get(0).getBoundingClientRect().top - 250,
                                         'left':$(this).get(0).getBoundingClientRect().left-$(this).get(0).getBoundingClientRect().width/2,
                                         'display':'block'});
                }, function() {
                    $("#hoverOver").css({'display':'none'});
                    $(this).children(1).attr("src", "img/"+item.id+".png")
                }
            );
            $('#'+item.id).click(function() {
                if (this.target != "#musicList"){
                    $("#myModal").modal();
                    $("#modalContent").html("");
                    $("#modalTitle").html(item.title);
                    if (item.image) $("#modalContent").append('<img src=work' + item.image + '>');
                    if (item.marvel) $("#modalContent").append('<iframe height="600" src=' + item.marvel + ' frameborder="0" allowfullscreen></iframe>');
                    if (item.youtube) $("#modalContent").append('<iframe width="560" height="315" src=' + item.youtube + ' frameborder="0" allowfullscreen></iframe>');
                    if (item.pdf1)  $("#modalContent").append('<embed id="pdf" src="work' + item.pdf1 + '"/>');
                    if (item.pdf2)  $("#modalContent").append('<embed id="pdf" src="work' + item.pdf2 + '"/>');
                }
            });
        });
    });

/////// MENU ///////
    $('.menuItem').click(function(){
        $('.contentSection').not($('#'+$(this).data("section"))).slideUp();
        $('#'+$(this).data("section")).slideDown();
    });

/////// PORTFOLIO FILTERING ///////
    $('.portfolioSelector').hover(function() {
            $('.portfolioSelector').not($(this)).fadeTo(100, .2);
            $('.portfolioItem').not($("."+$(this).data("selector"))).fadeTo(100, .2);
        }, function() {
            $('.portfolioSelector').not($(this)).fadeTo(100, 1);
            $('.portfolioItem').not($("."+$(this).data("selector"))).fadeTo(100, 1);
        }
    );

/////// MUSIC FUNCTIONALITY ///////
        $('.musicItemImg').hover(
            function() {if (!$(this).hasClass("clicked")) $(this).attr("src","img/"+$(this).attr("id")+"inv.png");},
            function () {if (!$(this).hasClass("clicked")) $(this).attr("src","img/"+$(this).attr("id")+".png");}
        );
        $('.musicItemImg').click(function() {
            var songId = "music/"+$(this).attr("id")+".mp3";
            if ($('#myMusicPlayer').attr("src") == songId && !$('#myMusicPlayer').get(0).paused) {
                $('#myMusicPlayer').get(0).pause();
                $('#playButton').css("background-image","url(img/play.png)");
            }
            else if ($('#myMusicPlayer').attr("src") == songId) {
                $('#myMusicPlayer').get(0).play();
                $('#playButton').css("background-image","url(img/pause.png)");
            }
            else {
                $('#myMusicPlayer').attr("src", songId);
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
