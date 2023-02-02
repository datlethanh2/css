var menuButton=document.getElementById("menuButton");
var menuHead=document.getElementById("menuHead");
var menuHead1=document.getElementById("menuHead1");
var count=0;
menuButton.onclick = function(){
    count++;
    if(count%2===0){
        menuHead.style.display="none";
        menuHead1.style.display="none";
    }
    if(count%2===1){
        menuHead.style.display="flex";
        menuHead1.style.display="flex";
    }
}



