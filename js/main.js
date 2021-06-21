$(function() {
    console.log("!!!!!!!!!!!!!!!!");
    console.log("ALEXANDER GOLIN");
    console.log("!!!!!!!!!!!!!!!!");
    loadBars();
});


function loadBars() {
    $("#nav").load("/template/nav.html");
    $("#footer").load("/template/footer.html");
}