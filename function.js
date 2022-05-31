function CheckWidth() {
    if( ( window.innerWidth <= 1200 ) || ( window.innerHeight <= 600 ) )
        document.getElementsByClassName("noSupport")[0].style.display = "block";
    else {
        document.querySelector("header").style.display = "block";
        document.querySelector("main").style.display = "block";
        document.querySelector("footer").style.display = "block";
    }
}