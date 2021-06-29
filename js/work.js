$(function() {
    $.getJSON("/work/!work.json", function(json) {
        makeTrackElems(json);
        $(".workItem").click(function() {
            window.location.hash = $(this).data("file");
        });
        checkHash(window.location.hash.slice(1));
    });

    $(window).on('hashchange', function(e) {
        checkHash(window.location.hash.slice(1));
    });

    $(window).keydown(function(e) {
        if (e.key == "Escape") {
            hideDoc();
            window.location.hash = "";
        }
    });

});

function checkHash(hash) {
    if (hash == "") {
        hideDoc();
    } else {
        showDoc(hash);
    }
}

function showDoc(hash) {
    let item = $(`[data-file='${hash}']`);
    // clear doc contents
    $("#docContent").empty();

    // load doc with contents of clicked item
    $("#docContent").load("/work/" + item.data("file"));
    $("#title").text(item.data("title"));
    $("#date").text(item.data("date"));
    $("#summary").text(item.data("summary"));

    // hide worklist and display doc
    $("#workItems").addClass("hidden");
    $("#doc").removeClass("hidden");
    scrollToTop();
}

function hideDoc() {
    $("#doc").addClass("hidden");
    $("#workItems").removeClass("hidden");
    scrollToTop();
}


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