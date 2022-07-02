//window.onscroll = function() {stickTopNav()};

var topnav = document.getElementById("topNav");

var offset = topnav.offsetTop;

function stickTopNav()
{
    if(window.pageYOffset >= offset){
        topnav.classList.add("stick");
    }else{
        topnav.classList.remove("stick");
    }
}