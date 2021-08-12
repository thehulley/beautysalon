/*    =====    Menu Toogle    =====    */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/*    =====    Header Shadow    =====    */

function headerScroll(){
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if (window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else{
        header.classList.remove('scroll')
    }
}

/*    =====    Swiper    =====    */

const swiper = new Swiper('.swiper-container', {
    slidesPreview: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});

/*    =====    ScrollReview    =====    */

const scrollReview = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReview.reveal(`
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
`, { interval: 100 })

/*    =====    Back to top    =====    */

function backToTop(){
    const backToTop = document.querySelector('.back-to-top')

    if (window.scrollY >= 560){
        backToTop.classList.add('show')
    } else{
        backToTop.classList.remove('show')
    }
}

/*    =====    Scroll Event    =====    */

window.addEventListener('scroll', function(){
    headerScroll()
    backToTop()
})