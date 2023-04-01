console.log("Spotify") ;

let audioElement = new Audio("songs/1.mp3") 
let gif = document.getElementById("gif")
let masterPlayIcon = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let songItem = document.getElementsByClassName("songitems")
//let songItem = Array.from(document.getElementsByClassName("songitems"))  this is use for forEach loop iteration


let songs = [
    {songName:"let me love", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Love", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName:"Rabba", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName:"salame-ishq", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName:"let me love", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName:"Love", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName:"Rabba", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName:"salame-ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName:"let me love", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName:"Love", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},

]


let i
for(i=0 ; i<songItem.length ; i++){
    //console.log(songItem[i])
    //console.log(songItem[i].getElementsByTagName("img")[0].src)
   // console.log(songs[i].coverPath)
    songItem[i].getElementsByTagName("img")[0].src = songs[i].coverPath
    // songItem[i].getElementsByClassName("songName")[i].textContent = songs[i].songName
    songItem[i].getElementsByTagName("span")[0].textContent = songs[i].songName

}
// songItem.forEach((element,i) =>{
//     console.log(element,i)
// })


// Change master play icon acc to song play & pause
masterPlayIcon.addEventListener("click", function(){
    if(audioElement.paused || audioElement.currentTime <= 0){
        masterPlayIcon.classList.remove("fa-circle-play")
        masterPlayIcon.classList.add("fa-circle-pause")
        audioElement.play()
        gif.style.opacity = 1
    }

    else{
        masterPlayIcon.classList.remove("fa-circle-pause")
        masterPlayIcon.classList.add("fa-circle-play")
        audioElement.pause()
        gif.style.opacity = 0
    }
})


// Update progress bar 
audioElement.addEventListener("timeupdate", ()=>{
    
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress

})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100)
})



let songItemPlay = document.getElementsByClassName("songItemPlay")
const makeAllPlays = ()=>{
    for(i=0 ; i<songItemPlay.length ; i++){
        songItemPlay[i].classList.remove("fa-pause-circle")
        songItemPlay[i].classList.add("fa-play-circle")
    }
}
//console.log(songItemPlay)

for(i=0; i<songItemPlay.length ; i++){
    // let songItemPlayIcon = songItemPlay[i]
    songItemPlay[i].addEventListener("click", function(e){
        //console.log(e.target)
        makeAllPlays()
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")
        //e.target.classList.toggle("fa-pause-circle")
        console.log(audioElement.src)
    })
}