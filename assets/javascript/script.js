//Establish global variables/functions
var showAbout = false;
var showPortfolio = false;
var showContact = false;

$('.carousel').carousel({
    indicators: true
});

var hideSplash = function() {
   $("#splash").hide()
}

var removeAnimation = function() {
    $("*").removeClass("scale-in scale-out slide-in-right slide-in-left slide-in-bottom slide-out-right slide-out-left slide-out-bottom")
}

var showMain = function() {
    $("#main").show()
    $("#main").addClass("scale-in")
    $(".center-label").addClass("scale-in")
    setTimeout(removeAnimation, 800)
}

var showBlurb = function(divId) {
    $(divId).show()
}


//On document load...
$(document).ready(function(){
    console.log('Website best viewed on standard desktop/laptop resolution')

    //3s timeout to hide splash screen; reveal main page
    setTimeout(hideSplash, 3000);
    setTimeout(showMain, 3000);

    $(document).on("click", ".center-label", function(event){
        var clickID = event.target.id

        switch (clickID) {
            case "about-main":
                $("#portfolio-main, #contact-main").addClass("scale-out");
                setTimeout(function(){
                    $("#portfolio-main, #contact-main").hide();
                }, 800)
                $("#about-blurb").show();
                $("#about-blurb").addClass("slide-in-right");
                setTimeout(removeAnimation, 800);
                showAbout = true;
                break;

            case "portfolio-main" :
                $("#about-main, #contact-main").addClass("scale-out");
                setTimeout(function(){
                    $("#about-main, #contact-main").hide();
                }, 800)
                $("#portfolio-blurb").show();
                $("#portfolio-blurb").addClass("slide-in-bottom");
                setTimeout(removeAnimation, 800);
                showPortfolio = true;
                break;

            case "contact-main" :
                $("#about-main, #portfolio-main").addClass("scale-out");
                setTimeout(function(){
                    $("#about-main, #portfolio-main").hide();
                }, 800)
                $("#contact-blurb").show();
                $("#contact-blurb").addClass("slide-in-left");
                setTimeout(removeAnimation, 800);
                showContact = true;
                break;
        }

    })

    $(document).on("click", "#back-button", function(){
        switch (true) {
            case (showAbout): 
                $("#about-blurb").addClass("slide-out-right");
                setTimeout(function(){
                    $("#about-blurb").hide();
                }, 800)
                $("#portfolio-main, #contact-main").show();
                $("#portfolio-main, #contact-main").addClass("scale-in");
                setTimeout(removeAnimation, 800);
                showAbout = false;
                break;

            
            case (showPortfolio):
                $("#portfolio-blurb").addClass("slide-out-bottom");
                setTimeout(function(){
                    $("#portfolio-blurb").hide();
                }, 800)
                $("#about-main, #contact-main").show();
                $("#about-main, #contact-main").addClass("scale-in");
                setTimeout(removeAnimation, 800);
                showPortfolio = false;
                break;

            case (showContact):
                $("#contact-blurb").addClass("slide-out-left");
                setTimeout(function(){
                    $("#contact-blurb").hide();
                }, 800)
                $("#portfolio-main, #about-main").show();
                $("#portfolio-main, #about-main").addClass("scale-in");
                setTimeout(removeAnimation, 800);
                showContact = false;
                break;
        }
    })

}); //END Document ready function