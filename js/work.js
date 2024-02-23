$(function () {
    $.getJSON("/work/!work.json", function (json) {
        makeWorkItems(json);
        $(".workItem").click(function () {
            window.location.hash = $(this).data("file");
            scrollToTop();
            $("#docContent").empty();
        });
        checkHash(window.location.hash);
    });
});

function makeWorkItems(json) {
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