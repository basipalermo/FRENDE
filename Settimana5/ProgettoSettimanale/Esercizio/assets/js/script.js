 /* SCROLL DELLA NAV */
 const myBottone = document.getElementById('bottone');
const myNav = document.getElementById('navBar');
const scrollHeightThreshold = 300;  // Imposta l'altezza desiderata per il cambio di colore

let lastScrollPosition = window.scrollY;

window.onscroll = function () {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // SCROLL GIU
    if (currentScrollPosition > scrollHeightThreshold) {
      myBottone.classList.add('scrolled-bottone');
      myNav.classList.add('scrolled-nav');
    } else {
      myBottone.classList.remove('scrolled-bottone');
      myNav.classList.remove('scrolled-nav');
    }
  } else {
    // SCROLL SU
    if (currentScrollPosition <= scrollHeightThreshold) {
      myBottone.classList.remove('scrolled-bottone');
      myNav.classList.remove('scrolled-nav');
    }
  }

  lastScrollPosition = currentScrollPosition;
}