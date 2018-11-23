let infobg = document.getElementById("infobg"), 
    playbtn = document.getElementsByClassName("play"), 
    infobtn = document.getElementById("infobtn")
    optbtn = document.getElementById("optionsbtn"), 
    optionsbg = document.getElementById("optionsbg"), 
    options = document.getElementById("options");

let enlarge;

playbtn[0].onclick = function() {
    infobg.style.display = "none";
}

infobtn.onclick = function() {
    optionsbg.style.display = "none";
    infobg.style.display = "block";
}

optbtn.onclick = function() {
    infobg.style.display = "none";
    optionsbg.style.display = "block";
}

playbtn[1].onclick = function() {
    optionsbg.style.display = "none";
}