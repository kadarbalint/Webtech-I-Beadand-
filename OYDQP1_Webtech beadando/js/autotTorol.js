$(document).ready(() => {
    getAutok();

    $("form").on('submit', (e) => {
        e.preventDefault();
        let id = $("form").find("select[name='name']").val();
        alert("Az autót sikeresen töröltem!");

        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/cars/'+id,
            type: "DELETE",
            success: () => {
                getAutok();
            }
        })

    })
})

function getAutok(){
    $("select").children().remove();
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", (data) => {
        $.each(data, (key, value) => {
            $("select").append("<option value="+value._id+">"+value.name+"</option>");
        })
    })
}