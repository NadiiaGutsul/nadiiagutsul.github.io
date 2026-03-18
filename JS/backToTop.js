document.querySelector('.no-js-top')?.remove();
// Referenz zur Schaltfläche
const btn = document.getElementById('backToTopBtn');

// Timer-Variable für Inaktivität
let hideTimer;

// Funktion zum Anzeigen der Schaltfläche
function showButton() {
  btn.classList.add('show');

  // Timer zurücksetzen, falls bereits gesetzt
  clearTimeout(hideTimer);

  // Nach 4 Sekunden Inaktivität wird die Schaltfläche versteckt
  hideTimer = setTimeout(() => {
    btn.classList.remove('show');
  }, 2500); // 1000 Millisekunden = 1 Sekunde
}

// Scroll-Event registrieren
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    showButton(); // Zeige Schaltfläche und starte Timer
  } else {
    btn.classList.remove('show'); // Sofort verstecken, wenn oben
    clearTimeout(hideTimer); // Timer stoppen
  }
});

// Beim Klick auf die Schaltfläche wird zum Seitenanfang gescrollt
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
