const images = document.querySelectorAll('.image-container img');
let currentImage = 0;

images[currentImage].classList.add('active');

document.getElementById('prev').addEventListener('click', () => {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage - 1 + images.length) % images.length;
  images[currentImage].classList.add('active');
});

document.getElementById('next').addEventListener('click', () => {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
});

