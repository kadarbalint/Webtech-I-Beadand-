$(document).ready(() => {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", (data) => {
        $.each(data, (key, value) => {
            $(".grid-container").append(adatlapKeszito(value));
        })
    })
})

function adatlapKeszito(manufacturer){
    return `<div class='adatlap'>
                <h1>`+manufacturer.name+`</h1>
                <p>Ország: `+manufacturer.country+`</p>
                <p>Alapítva: `+manufacturer.founded+`</p>
            </div>`;
}
