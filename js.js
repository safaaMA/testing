var slid =document.getElementById('sliding');

var MainTitle=document.getElementById('main-title')
function OneActiv(){
    slid.style.backgroundImage="url('n3.png')";
    MainTitle.style.display="none";
}
function TowActiv(){
    slid.style.backgroundImage="url('n9.jpg')";
    MainTitle.style.display="none";
}
function ThreeActiv(){
    slid.style.backgroundImage="url('n12.jpg')";
    MainTitle.style.display="block";
}

setInterval(OneActiv, 5000); 
setInterval(TowActiv, 10000); 
setInterval(ThreeActiv, 15000);
setInterval(OneActiv, 20000); 
