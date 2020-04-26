
$("#aboutDiv").hide()
$("#portfolioDiv").hide()
$("#contactDiv").hide()

$("#homeLink").on("click", function () {home()});
$("#aboutLink").on("click", function () {about()});
$("#portfolioLink").on("click", function () {portfolio()});
$("#contactLink").on("click", function () {contact()});


function home(){
    $("#portfolioDiv").hide()
    $("#contactDiv").hide()
    $("#aboutDiv").hide()
    $("#homeDiv").show()
}   
function about(){
    $("#homeDiv").hide()
    $("#portfolioDiv").hide()
    $("#contactDiv").hide()
    $("#aboutDiv").show()
}
function portfolio(){
    $("#homeDiv").hide()
    $("#aboutDiv").hide()
    $("#contactDiv").hide()
    $("#portfolioDiv").show()
}
function contact(){
    $("#homeDiv").hide()
    $("#aboutDiv").hide()
    $("#portfolioDiv").hide()
    $("#contactDiv").show()
}


// var x = window.matchMedia("(max-width: 1200px)")
// fixPorfolio1200(x) // Call listener function at run time
// x.addListener(fixPorfolio1200) // Attach listener function on state changes

// var x = window.matchMedia("(max-width: 1201px)")
// fixPorfolio1201(x) // Call listener function at run time
// x.addListener(fixPorfolio1201) // Attach listener function on state changes


// function fixPorfolio1200(x) {
//     if (x.matches) { // If media query matches
//      $(".col-md-4").toggleClass ("col-md-6 text-center")
//     }};

// function fixPorfolio1201(x) {
//         if (x.matches) { // If media query matches
//          $(".col-md-4").toggleClass ("col-md-4")
//         }};