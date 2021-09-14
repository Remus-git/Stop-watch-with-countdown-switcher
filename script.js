let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let start = document.querySelector("#startBtn")
let pause = document.querySelector("#pauseBtn")
let reset = document.querySelector("#resetBtn")

let secProp = 0;
let minProp = 0;
let hourProp = 0;
let dayProp = 0;
let a = () =>{
    secProp += 1;
    if(secProp== 1000){
        secProp = 0;
        minProp += 1;
    }
    if(minProp == 60){
        minProp = 0;
        hourProp += 1;
    }
    if(hourProp == 60){
        hourProp = 0;
        dayProp += 1;
    }
    if(secProp < 10){
        second.textContent ="0" + secProp;
    }
    else{
        second.textContent = secProp;
    }
    if(minProp < 10){
        minute.textContent ="0" + minProp;
    }
    else{
        minute.textContent = minProp;
    }
    if(hourProp < 10){
        hour.textContent ="0" + hourProp;
    }
    else{
        hour.textContent = hourProp;
    }
    if(dayProp < 10){
        day.textContent ="0" + dayProp;
    }
    else{
        day.textContent = dayProp;
    }
    console.log(dayProp,hourProp,minProp,secProp)
    
}
let interval;
start.addEventListener("click",function(){
    clearInterval(interval)
    interval = setInterval(a,0)}
) 
pause.addEventListener("click",function(){
    clearInterval(interval)
})
reset.addEventListener("click",function(){
    secProp = 0;
    minProp = 0;
    hourProp = 0;
    dayProp = 0;
    clearInterval(interval);
    second.textContent = "0" + secProp;
    minute.textContent = "0" + minProp;
    hour.textContent = "0" + hourProp;
    day.textContent = "0" + dayProp;
})