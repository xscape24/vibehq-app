function startTimer(){
    const timer= document.querySelector('.timer');
    
}


//Form Infromaiton

const urlParams=new URLSearchParams(window.location.search);

const value1=urlParams.get('theme');
if(value1){
    document.getElementById('display1').textContent=value1;
}



const value2=urlParams.get('sound');
if(value2){
    document.getElementById('display2').textContent=value2;
    
}

if(value2=='ambience'){
document.getElementById('audio').src="audio/zephiramusic-lofi-soul-588903.mp3";
}
if(value2=='cloudy'){
    document.getElementById('audio').src="https://ia800902.us.archive.org/15/items/RelaxingRainAndLoudThunderFreeFieldRecordingOfNatureSoundsForSleepOrMeditationMp3/RelaxingRainAndLoudThunder(FreeFieldRecordingOfNatureSoundsForSleepOrMeditationMp3).mp3";
}
if(value2=='fireplace'){
    document.getElementById('audio').src="https://ia600405.us.archive.org/28/items/CracklingFireSoundEffect/Crackling%20Fire%20Sound%20Effect.mp3https://ia801409.us.archive.org/11/items/ForestBirdsNatureSoundEffect/Forest%20Birds%20Nature%20Sound%20Effect.mp3";
}
if(value2=='forest'){
   document.getElementById('audio').src="";
}
const a=urlParams.get('audio');




  
        const value3=urlParams.get('imageSource');
       const v= document.getElementById('main-content');
        v.style.backgroundImage='url("assets/ambience1.jpg")';
        if(value3){
            v.style.backgroundImage='url("assets/ambience1.jpg")';
           if(v){
        v.style.backgroundImage=`url("${value3}")`;
        document.getElementById('display3').textContent=value3;
           }
        }

