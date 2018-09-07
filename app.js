$(document).foundation()

$('[data-toggle-dia]').click(function (ev) {
    // alert("hola");
    console.log("panel");

    const panel = $(this).data('toggleDia')
    // console.log("panel");
    $('#lineup-tabs').foundation('selectTab', panel)
    
})

// alert("holoo");

