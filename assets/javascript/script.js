//Establish global variables
var hideSplash = function() {
   $("#splash").hide()
    console.log("Splash screen hidden...")
}

var removeAnimation = function() {
    $(".center-label").removeClass("scale-in")
}

var showMain = function() {
    $("#main").show()
    $(".center-label").addClass("scale-in")
    setTimeout(removeAnimation, 1000)
    console.log("Main screen visible...")
}

var showBlurb = function(divId) {
    $(divId).show()
}

//On document load...
$(document).ready(function(){
    console.log("Document loaded...")

    //3s timeout to hide splash screen; reveal main page
    setTimeout(hideSplash, 3000);
    setTimeout(showMain, 3000);

    $(document).on("click", ".center-label", function(event){
        var clickID = event.target.id

        if (clickID == "about-main") {
            $("#portfolio-main, #contact-main").addClass("scale-out");
            
            $("#about-blurb").show()
            $("#about-blurb").addClass("slide-in-right")


        } else if (clickID == "portfolio-main") {
            $("#about-main, #contact-main").addClass("scale-out")

        } else if (clickID == "contact-main") {
            $("#about-main, #portfolio-main").addClass("scale-out")

        }
    })

}); //END Document ready function