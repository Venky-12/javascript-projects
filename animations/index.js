const myButton = document.querySelector("#myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click",begin);

function begin(){
    let timer_id = null;
    let degrees = 0;
    let x = 0;
    let y = 0;

    timer_id = setInterval(frame,5);
    function frame(){
        if(x>=200){
            clearInterval(timer_id);
        }
        else{
            x+=1;
            y+=1;
            degrees+=5;
            myAnimation.style.left = x+"px";
            myAnimation.style.top = y+"px";
            myAnimation.style.transform = "rotatez("+degrees+"deg)";
        }
    }


}