$(function() {
    console.log("!!!!!!!!!!!!!!!!");
    console.log("ALEXANDER GOLIN");
    console.log("!!!!!!!!!!!!!!!!");
    loadBars();
    // Events
    $(window).on('hashchange', function(e) {
        checkHash(window.location.hash);
    });

    // escape key exit
    $(window).keydown(function(e) {
        if (e.key == "Escape" && window.location.hash != "") {
            window.history.go(-1)
        }
    });

    // make images clickable
    $(document).on("click", ".zoom", function() {
        let src = $(this).attr("src");
        showOverlay(src);
        window.location.hash = window.location.hash + "$" + src;
    });

    $("#overlay").click(function() {
        // window.history.go(-1)
        window.location.hash = window.location.hash.split("$")[0];
        hideOverlay();
    });
});


function loadBars() {
    $("#nav").load("/template/nav.html");
    $("#footer").load("/template/footer.html");
}

function checkHash(hash) {
    hash = hash.slice(1);
    if (hash == "") {
        hideDoc();
        hideOverlay();
    } else if (hash.includes("$")) {
        showOverlay(hash.split("$")[1])
    } else {
        showDoc(hash);
        hideOverlay();
    }
}

function showOverlay(src) {
    $("#overlayPic").css("background-image", `url(${src})`);
    $("#overlay").removeClass("hidden");
}

function hideOverlay() {
    $("#overlay").addClass("hidden");
}

function hideDoc() {
    $("#doc").addClass("hidden");
    $("#workItems").removeClass("hidden");
    scrollToTop();
}

function showDoc(hash) {
    let item = $(`[data-file='${hash}']`);

    // load doc with contents of clicked item
    $("#docContent").load("/work/" + item.data("file") + ".html");
    $("#title").text(item.data("title"));
    $("#date").text(item.data("date"));
    $("#summary").text(item.data("summary"));

    // hide worklist and display doc
    $("#workItems").addClass("hidden");
    $("#doc").removeClass("hidden");

    // reset scroll to top
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}