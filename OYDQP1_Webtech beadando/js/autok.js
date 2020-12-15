$(document).ready(() => {
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", (data) => {
        $.each(data, (key, value) => {
            $(".grid-container").append(adatlapKeszito(value));
        })
    })
})

function adatlapKeszito(car){
   
        return `<div class='adatlap'>
                    <h1>`+car.manufacturer+`</h1>
                    <h2>`+car.name+`</h2>
                    <p>Szín: `+car.color+`</p>
                    <p>Évjárat: `+car.year+`</p>
                    <p>Fogyasztás:`+car.consumption+`</p>
                    <p>Lóerő: `+car.horsepower+`</p>
                    <p>Elérhető: `+car.avaiable+`</p>
                </div>`;
    }

