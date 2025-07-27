const videoEl = document.querySelector('#my-video');

let stream = null; //Init Sream var so we can use anywhere
const constraints = {
    audio: true,
    video: true,
}
const getMicAndCamera = async () => {

    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (error) {
        console.log("user denied acces to constrains i.e. Audio & Vide");
    }
    
}

const showMyFeed = (e) => {
    console.log("showing my feed"); 
    videoEl.srcObject = stream; // this will set mediaStream to video Tag means Video tag gets the video from or camera 
    const tracks = stream.getTracks();
    console.log(tracks);
    // console.log(tracks.mediaStreamTrack.lable)

}

const stopMyFeed = (e) => {
    const tracks = stream.getTracks();
    tracks.forEach(track => {
        // console.log(track)

        track.stop()

    })
    // console.log(tracks[0].label); // ✅✅✅ working


}




document.querySelector('#share').addEventListener('click', e => getMicAndCamera(e))

document.querySelector('#show-video').addEventListener('click', e => showMyFeed(e))

document.querySelector('#stop-video').addEventListener('click', e => stopMyFeed(e))