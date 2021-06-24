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
            let fullpath = "/work/" + file;
            let title = $(this).data("title");
            let date = $(this).data("date");
            let summary = $(this).data("summary");
            $("#docContent").load("/work/" + file);
            $("#title").text(title);
            $("#date").text(date);
            $("#summary").text(summary);

            $("#workItems").addClass("hidden");
            $("#doc").removeClass("hidden");
            $("#backButton").removeClass("hidden");
            scrollToTop();
            // let url = "https://alexandergolin.com/work/" + file;
            // let type = file.split(".")[1];
            // let html = "";
            // $(".overlay").empty();
            // if (type == "pdf") {
            //     html = `<object data="${fullpath}" type="application/pdf">
            //         <p>Your web browser doesn't have a PDF plugin.
            //         Instead you can <a href="${fullpath}">click here to
            //         download the PDF file.</a></p>
            //     </object>`
            //     // html = `<object data="http://docs.google.com/gview?url=${fullpath}&embedded=true"></object>`
            //     // html = `<iframe src="http://docs.google.com/gview?url=${fullpath}&embedded=true" frameborder="0"></iframe>`
            //     // html = `<embed src="${fullpath}"/>`;
            //     $(".overlay").append(html);
            // } else if (type == "png" || type == "jpg") {
            //     html = `<div class="img" style="background-image: url(${fullpath})"></div>`
            //     $(".overlay").append(html);
            // } else if (type == "html") {
            //     $(".overlay").load("/work/" + file);
            // }
            // $(".overlay").removeClass("hidden");
        });
    });
    $("#backButton").click(function() {
        $("#backButton").addClass("hidden");
        $("#doc").addClass("hidden");
        $("#workItems").removeClass("hidden");
        scrollToTop();
    });
});


function makeTrackElems(json) {
    for (let i in json) {
        let html = 
            `<div class="workItem" data-file="${json[i].file}" data-title="${json[i].title}" data-date="${json[i].date}" data-summary="${json[i].summary}">
                <div class="background" style="background-image: url(/img/backgrounds/${json[i].file.split('.')[0]}.jpg)"></div>
                <div class="textWrap">
                    <p class="workTitle">${json[i].title}</h3>
                    <p class="workDate">${json[i].date}</h4>
                </div>
            </div>`
        $('#workItems').append(html);
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 