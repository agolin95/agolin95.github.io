JSON_FILEPATH = "/work/!work.json";
// MUSIC_FOLDERPATH = "/swimmingfailure/media/music/mp3/";
// ART_FOLDERPATH = "/swimmingfailure/media/music/art/";
// ORIGINALS_DIV = "#originals";
// COVERS_DIV = "#covers";
// AUDIO_ELEM = document.getElementById("audio");

$(function() {
    console.log("WORK");

    $.getJSON(JSON_FILEPATH, function(json) {
        makeTrackElems(json);
        $(".workItem").click(function() {
            let file = $(this).data("file");
            let fullpath = "https://alexandergolin.com/work/" + file;
            let type = file.split(".")[1];
            let html = "";
            if (type == "pdf") {
                html = `<iframe src="http://docs.google.com/gview?url=${fullpath}&embedded=true" frameborder="0"></iframe>`
                // html = `<embed src="${fullpath}"/>`;
            } else if (type == "png" || type == "jpg") {
                html = `<img src="${fullpath}"/>`
            }
            $(".overlay").empty();
            $(".overlay").append(html);
            $(".overlay").removeClass("hidden");
        });

        $(".overlay").click(function() {
            $(".overlay").addClass("hidden");
        });
    });

});


function makeTrackElems(json) {
    for (let i in json) {
        let html = 
            `<div class="workItem" data-file="${json[i].file}" style="background-image: url(/work/${json[i].file.split('.')[0]}.png)">
                <h3 class="workTitle">${json[i].title}</h3>
                <h4 class="workDate">${json[i].date}</h4>
                <p class="workSummary">${json[i].summary}</p>
            </div>`
        $('#workItems').append(html);
    }
}