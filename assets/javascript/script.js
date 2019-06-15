//Establish global variables
var showAbout = false;
var showPortfolio = false;
var showContact = false;

var hideSplash = function() {
   $("#splash").hide()
    console.log("Splash screen hidden...")
}

var removeAnimation = function() {
    $("*").removeClass("scale-in scale-out slide-in-right slide-in-left slide-in-bottom")
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

        switch (clickID) {
            case "about-main":
                $("#portfolio-main, #contact-main").addClass("scale-out");
                $("#portfolio-main, #contact-main").hide();
                $("#about-blurb").show();
                $("#about-blurb").addClass("slide-in-right");
                setTimeout(removeAnimation, 1000);
                showAbout = true;
                break;

            case "portfolio-main" :
                $("#about-main, #contact-main").addClass("scale-out");
                setTimeout(removeAnimation, 1000);
                showPortfolio = true;
                break;

            case "contact-main" :
                $("#about-main, #portfolio-main").addClass("scale-out");
                setTimeout(removeAnimation, 1000);
                showContact = true;
                break;
        }

    })

    $(document).on("click", "#back-button", function(){
        switch (true) {
            case (showAbout): 
                $("#about-blurb").addClass("slide-out-right");
                $("#portfolio-main, #contact-main").show();
                $("#portfolio-main, #contact-main").addClass("scale-in");
                setTimeout(removeAnimation, 1000);

            
            case (showPortfolio):

            case (showContact):
        }
    })

}); //END Document ready function