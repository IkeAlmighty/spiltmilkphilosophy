if (screen.width <= 800){
    var splitPath = location.href.split("/");
    var mobile = "mobile/m_" +  splitPath[splitPath.length - 1];
    document.location = mobile;
}

function buyMeSomeMilk(){
    document.getElementById("donate-button").innerHTML = "Buy Me Some Milk";
    document.getElementById("donate-button").style.color = "#333333";
}

function buyMeADrink(){
    document.getElementById("donate-button").innerHTML = "Buy Me a Drink";
    document.getElementById("donate-button").style.color = "#fffffe";
}

function setBannerSize(){
    var banner = document.getElementById("sticky-banner");
    
    if(document.getElementsByClassName("main-content")[0].getBoundingClientRect().top < 0){
        banner.getElementsByTagName("h1")[0].style.fontSize = "14px";
    }
    else {
        banner.getElementsByTagName("h1")[0].style.fontSize = "50px";
    }
    
}