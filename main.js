let arroww = document.getElementById("arrow")
let landd = document.getElementById("land")
let y = landd.scrollHeight;
arroww.onclick = function(){
    window.scroll(0,y)
}

let clickedstyle = 
`background-color:white;
color:black;
font-family: 'Fraunces';
text-transform: uppercase;
font-size:0.8em;
font-weight:700`
let nav = document.getElementsByClassName("links")
function clicking_navs(){
    nav[3].style.cssText = clickedstyle
    nav[0].onclick = function(){
        nav[0].style.cssText = clickedstyle
        nav[1].style.cssText = ""
        nav[2].style.cssText = ""
        nav[3].style.cssText = ""
    }  
    nav[1].onclick = function(){
        nav[0].style.cssText = ""
        nav[1].style.cssText = clickedstyle
        nav[2].style.cssText = ""
        nav[3].style.cssText = ""
    }  
    nav[2].onclick = function(){
        nav[0].style.cssText = ""
        nav[1].style.cssText = ""
        nav[2].style.cssText = clickedstyle
        nav[3].style.cssText = ""
    }
    nav[3].onclick = function(){
        nav[0].style.cssText = ""
        nav[1].style.cssText = ""
        nav[2].style.cssText = ""
        nav[3].style.cssText = clickedstyle
    }
    
}

clicking_navs()

///////////////////////////////////////////////////////
let barbtn = document.getElementById("bar")
let mobbar = document.querySelector(".mobile-nav")
mobbar.style.display = "none"
barbtn.addEventListener("click",function(){
    
    if (mobbar.style.display === "none") {
        mobbar.style.display = "block";
      } else {
        mobbar.style.display = "none";
      }
    
})

window.onscroll = function(){
    mobbar.style.cssText = "display:none"
}
