const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');

// Клік по картинках
document.querySelectorAll('main img:not(.socials-icons)').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.style.display = 'block';
        lightboxVideo.style.display = 'none';

        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});

// Клік по відео
document.querySelectorAll('main video').forEach(video => {
    video.addEventListener('click', () => {
        lightboxImg.style.display = 'none';
        lightboxVideo.style.display = 'block';

        lightboxVideo.src = video.querySelector('source').src;
        lightboxVideo.play();

        lightbox.style.display = 'flex';
    });
});

// Закриття
function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxVideo.pause();
    lightboxVideo.src = ""; // скидаємо відео
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});