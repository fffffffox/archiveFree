$(document).ready(() => {
    $("#search-button").click(() => {
        let searchContect = $("#search-input").val();
        if (searchContect.length < 1) {
            window.location.href = `/ErrorPage/tooShort.htm`;
        }
    });
});