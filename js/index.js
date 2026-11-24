
document.getElementById('loginBtn').addEventListener('click', () => {
  window.location.href = 'login.html';
});

document.getElementById('year').textContent = new Date().getFullYear();

// Jika gambar ada, sembunyikan label placeholder.
// Jika gambar tiada/gagal dimuat, kekalkan kotak placeholder.
document.querySelectorAll('.media img').forEach((img) => {
  const box = img.parentElement;
  const showImage = () => box.classList.add('has-image');
  const showPlaceholder = () => {
    img.style.display = 'none';
    box.classList.remove('has-image');
  };

  if (img.complete) {
    img.naturalWidth > 0 ? showImage() : showPlaceholder();
  } else {
    img.addEventListener('load', showImage);
    img.addEventListener('error', showPlaceholder);
  }
});
