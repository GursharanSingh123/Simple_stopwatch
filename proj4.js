const playPausebtn=document.querySelector('#startStopBtn');
const resetbtn=document.querySelector('#reset');

// variables
let minutes=0;
let hours=0;
let seconds=0;
let totalHours;
let totalMinutes;
let totalSeconds;

let triggerstatus='stopped';
let intervalcontroller=null;

function stopWatch(){

    seconds++;

    if(seconds/60===1){
        minutes++;
        seconds=0;
        if(minutes/60===1){
            hours++;
            minutes=0;
        }
    }
    if(seconds<10){
         totalSeconds='0'+seconds;
    }
    else{
        totalSeconds=seconds;
    }
    if(hours<10){
         totalHours='0'+hours;
    }
    else{
        totalHours=hours;
    }
    if(minutes<10){
         totalMinutes='0'+minutes;
    }
    else{
        totalMinutes=minutes;
    }
    document.getElementById("timer").innerText = totalHours + ':' + 
    totalMinutes + ':' + totalSeconds;
}
// window.setInterval(stopWatch,"1000")

playPausebtn.addEventListener('click',function(){
    if(triggerstatus==='stopped'){
        intervalcontroller=window.setInterval(stopWatch,"1000");
        playPausebtn.innerHTML='<i class="fa-solid fa-pause" id="pause"></i>';
        triggerstatus='started';
    }
    else{
        window.clearInterval(intervalcontroller);
        playPausebtn.innerHTML='<i class="fa-solid fa-play" id="play"></i>';
        triggerstatus='stopped';
    }
});
resetbtn.addEventListener('click',function(){
    window.clearInterval(intervalcontroller);
    triggerstatus='stopped';
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("timer").innerText = '00:00:00';
    playPausebtn.innerHTML='<i class="fa-solid fa-play" id="play"></i>';
})