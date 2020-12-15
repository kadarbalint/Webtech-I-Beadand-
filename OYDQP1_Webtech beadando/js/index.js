$(document).ready(() => {
    $("#content").load("home.html");

    $.each($(".menuLink"), (index, value) => {
        $(value).click((e) => {
            e.preventDefault();
            $('#content').load(value.href);
        })
    })
})
