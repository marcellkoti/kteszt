document.querySelectorAll('.image-slider').forEach(slider => {
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;

    const updateImages = () => {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
    };

    slider.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImages();
    });

    slider.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImages();
    });
});