const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle('open');
    links.forEach((link) => {
        link.classList.toggle('fade');
    });

    //Hamburger Animation
    hamburger.classList.toggle('toggle');
});

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        hamburger.click();
    });
});

function controller() {
    const now = Date.now();
    const expDate = 1722585164000;

    console.log('now : ' + now);
    console.log('exp:  ' + expDate);
    // if (now > expDate) {
    //     document.querySelector("body").remove();
    // }
}
controller();
