
// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// Headliner
new Typewriter(document.getElementById('headLine'), {
    // Make strings shorter so site doesn't annoyingly shift for long strings
    strings: ['Software Engineer', 'Entrepreneur', 'Dancer', 'Artist', 'Equestrian'],
    autoStart: true,
    delay: 13,
    pauseFor: 100000,
    loop: true,
  });
