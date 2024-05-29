

// Toggle active state for each menu button
$('.menu-button').on('click', function () {

    $('.menu-button').removeClass("menu-button-active");
    $(this).addClass("menu-button-active");   

    // $(this).toggleClass("menu-button-active");

})

// Show the appropriate sub-content class
$('#home-button').on('click', function () {

})