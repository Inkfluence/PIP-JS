const videoElement =document.getElementById('video');
const button =document.getElementById('button');

// prompt the selection of media stream , passs to element then play  
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject =mediaStream;
       videoElement.onloadedmetadata =()=>{
        videoElement.play();
       }
    }catch(error)
{
   
}
}
button.addEventListener('click', async()=>{
// disable when clicked
button.disabled = true;

// PIP start
await videoElement.requestPictureInPicture();
 
// reset button 
button.disabled =false;

});

// on load
selectMediaStream();