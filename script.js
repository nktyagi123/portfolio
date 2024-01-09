var typed = new Typed('.typing', {
    strings: ['Web Developer', 'Power BI Developer', 'Data Analyst'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});
var typed = new Typed('.typing1', {
    strings: ['Web Developer', 'Power BI Developer', 'Data Analyst'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

// tap to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

// nav bar active 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        console.log(top)
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};