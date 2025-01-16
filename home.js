document.querySelectorAll('.section').forEach(section => {
    const video = section.querySelector('video');

    section.addEventListener('mouseover', () => {
        video.play(loop = true);
    });

    section.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0;
    });
});