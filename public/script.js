var i = 3
setInterval(function(){
    if(i === 7){
        i = 1;
    }
    document.getElementById("picture1").src = "images/background" + i + ".jpg";
    i++;
}, 2000);