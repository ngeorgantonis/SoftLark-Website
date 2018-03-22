/* The responsive navigation menu either unfolds or shortens.
Toggle between adding and removing the "responsive" class to topnav when the user clicks on the navicon.*/
function ToggleResponsiveNavMenu(){
    var x = document.getElementById("navigation");
    if (x.className === "responsiveNavBar") {
        x.className += " unfoldMenu";
    } else {
        x.className = "responsiveNavBar";
    }
}