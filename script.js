// Example: Adding a bounce-in effect to the duas
const duas = document.querySelectorAll('.dua');

duas.forEach((dua, index) => {
  dua.style.animationDelay = `${index * 0.1}s`;
  dua.style.opacity = 0;
  dua.style.transform = 'scale(0.5)';

  setTimeout(() => {
    dua.style.opacity = 1;
    dua.style.transform = 'scale(1)';
  }, 100 + index * 100);
});

// Example: Adding a random rotation animation to the duas on click