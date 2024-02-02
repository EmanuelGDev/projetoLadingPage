document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.video-thumbnail');
    const mainVideo = document.querySelector('.main-video');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            
            const videoNumber = this.getAttribute('data-video');

            
            const videoPath = `videos/${videoNumber}.mp4`;

            
            const existingVideo = mainVideo.querySelector('video');
            if (existingVideo) {
                existingVideo.parentNode.removeChild(existingVideo);
            }

            
            const newVideo = document.createElement('video');
            newVideo.controls = true;
            newVideo.innerHTML = `<source src="${videoPath}" type="video/mp4">`;

            
            mainVideo.appendChild(newVideo);

            
            newVideo.play();
        });
    });
});