let infobg = document.getElementById("infobg"), 
    closebtn = document.getElementById("close");

closebtn.onclick = function() {
    document.body.removeChild(infobg);
}