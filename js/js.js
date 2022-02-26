const header = document.querySelector(".header");
const text = document.querySelector('#text');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const text3 = document.querySelector('#text3');
const text4 = document.querySelector('#text4');
const active = document.querySelector(".li");
const active1 = document.querySelector(".li1");
const active2 = document.querySelector(".li2");
const active3 = document.querySelector(".li3");
const active4 = document.querySelector(".li4");


console.log(active, active1, active2, active3, active4);

document.querySelector(".li").onclick = function() {
    active.classList.add('active');
    active1.classList.remove('active');
    active2.classList.remove('active');
    active3.classList.remove('active');
    active4.classList.remove('active');
};
document.querySelector(".li1").onclick = function() {
    active1.classList.add('active');
    active.classList.remove('active');
    active2.classList.remove('active');
    active3.classList.remove('active');
    active4.classList.remove('active');
};
document.querySelector(".li2").onclick = function() {
    active2.classList.add('active');
    active1.classList.remove('active');
    active.classList.remove('active');
    active3.classList.remove('active');
    active4.classList.remove('active');
};
document.querySelector(".li3").onclick = function() {
    active3.classList.add('active');
    active1.classList.remove('active');
    active2.classList.remove('active');
    active.classList.remove('active');
    active4.classList.remove('active');
};
document.querySelector(".li4").onclick = function() {
    active4.classList.add('active');
    active1.classList.remove('active');
    active2.classList.remove('active');
    active3.classList.remove('active');
    active.classList.remove('active');
};


window.addEventListener("scroll", function() {
    checkScroll();

});

function checkScroll() {
    let scrollPos = window.scrollY


    if (scrollPos > 0) {
        header.classList.add('white');
        text.classList.add('gray');
        text1.classList.add('gray');
        text2.classList.add('gray');
        text3.classList.add('gray');
        text4.classList.add('gray');
    } else {
        header.classList.remove('white');
        text.classList.remove('gray');
        text1.classList.remove('gray');
        text2.classList.remove('gray');
        text3.classList.remove('gray');
        text4.classList.remove('gray');
    }

};

window.addEventListener('scroll', function() {
    var scroll = document.querySelector('.top');
    scroll.classList.toggle("look", window.scrollY > 440)
})

function scrollTopTop() {
    window.screenTop({
        top: 0,
        behavior: 'smooth'
    })
}