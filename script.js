const hedgehog = document.getElementById('hedgehog');
hedgehog.addEventListener('click', () => {
  hedgehog.classList.add('rolling');
  setTimeout(() => {
    hedgehog.classList.remove('rolling');
  }, 500);
});
