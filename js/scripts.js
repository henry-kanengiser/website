// Hide sub-content div's until selected by a menu button
$('.sub-content').hide();
$('#home').show();



// Toggle active state for each menu button
$('.menu-button').on('click', function () {

    $('.menu-button').removeClass("menu-button-active");
    $(this).addClass("menu-button-active");

    // $(this).toggleClass("menu-button-active");

})

// Show the appropriate sub-content class
$('#home-button').on('click', function () {

    // Hide all content
    $('.sub-content').hide();
    // Show only the related div
    $('#home').show();

})

$('#projects-button').on('click', function () {

    // Hide all content
    $('.sub-content').hide();
    // Show only the related div
    $('#projects').show();

})

$('#links-button').on('click', function () {

    // Hide all content
    $('.sub-content').hide();
    // Show only the related div
    $('#links').show();

})