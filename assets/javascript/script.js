//Establish global variables
var hideSplash = function() {
   $("#splash").hide()
    console.log("Splash screen hidden...")
}

var showMain = function() {
    $("#main").show()
    console.log("Main screen visible...")
}

//On document load...
$(document).ready(function(){
    console.log("Document loaded...")

    //3s timeout to hide splash screen; reveal main page
    setTimeout(hideSplash, 3000);
    setTimeout(showMain, 3000);

}); //END Document ready function