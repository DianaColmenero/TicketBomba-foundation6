$(document).foundation()


$('[data-toggle-dia]').click(function (ev) {
    alert("hola");
    console.log("panel");

    const panel = $(this).data('toggleDay')
    console.log("panel");
    $('[ineup-tabs]').foundation('selectTab', panel)
    
})
