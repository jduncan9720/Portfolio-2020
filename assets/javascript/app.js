$("#aboutDiv").hide()
$("#portfolioDiv").hide()
$("#contactDiv").hide()


$("#aboutLink").on("click", function () {about()});
$("#portfolioLink").on("click", function () {portfolio()});
$("#contactLink").on("click", function () {contact()});

function about(){
    $("#portfolioDiv").hide()
    $("#contactDiv").hide()
    $("#aboutDiv").show()
}
function portfolio(){
    $("#aboutDiv").hide()
    $("#contactDiv").hide()
    $("#portfolioDiv").show()
}
function contact(){
    $("#aboutDiv").hide()
    $("#portfolioDiv").hide()
    $("#contactDiv").show()
}

