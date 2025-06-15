// Video preview for the projects //   
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const video4 = document.getElementById('projectVideo4');
const video5 = document.getElementById('projectVideo5');
const video6 = document.getElementById('projectVideo6');
const video7 = document.getElementById('projectVideo7');
const video8 = document.getElementById('projectVideo8');
const video9 = document.getElementById('projectVideo9');
const video10 = document.getElementById('projectVideo10');



const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3, video4, video5, video6, video7, video8, video9, video10];
// Video elements //                                                                                                                                                                                

// Video Hover effect // 
videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})
