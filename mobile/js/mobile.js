function updateMenuState(){
    if(document.getElementById("dropdown-content").style.display == "block"){
        collapseNavMenu();
    }
    else {
        expandNavMenu();
    }
}

function collapseNavMenu(){
    document.getElementById("dropdown-content").style.display = "none";
}

function expandNavMenu(){
    document.getElementById("dropdown-content").style.display = "block";
}

function getFeaturedURL(){
    return "m_whatisphilosophy.html";
}