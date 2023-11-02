window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    var topnav=document.getElementById("TT");
    var dropdown=document.getElementById("POP");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 120) { // if scolling is detected then:
        topnav.style.transform= "scale(0)"; // scale top navigation bar to 0 and 
        topnav.style.opacity=0; // set opacity to 0

        dropdown.style.display="block"; // set display property of dropdown button to "block" (diplay it)
        dropdown.style.transform= "scale(1)"; //set scale to 1
        dropdown.style.opacity=1; //and opacity to 1 to give the illsuion of a very basic animation
    } else { //if scorlled to top then
        dropdown.style.transform= "scale(0.1)"; //scale dropdown button to 0 and 
        dropdown.style.opacity=0; //set opacity to 0

        topnav.style.transform= "scale(1)"; //set top nav bar scale to 1
        topnav.style.opacity=1; //and opacity to 1 to give the illsuion of a very basic animation
    }
}



// Wait for the page to load before starting the animation