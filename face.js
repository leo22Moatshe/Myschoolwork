import React from 'react'

function face() {
    const videoElement = document.getElementById('video'); // your video element
    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models')
    ]).then(startVideo);
    
    async function startVideo() {
        const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        videoElement.srcObject = stream;
    }
    
    videoElement.addEventListener('play', async () => {
        const canvas = faceapi.createCanvasFromMedia(videoElement);
        document.body.append(canvas);
        const displaySize = { width: videoElement.width, height: videoElement.height };
        faceapi.matchDimensions(canvas, displaySize);
    
        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(videoElement, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            canvas
                .getContext('2d')
                .clearRect(0, 0, canvas.width, canvas.height);
            faceapi.draw.drawDetections(canvas, resizedDetections);
        }, 100);
    });
  return (
   <div>
    
   </div>
  )
}

export default face;
