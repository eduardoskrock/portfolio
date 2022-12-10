
//constante com nome sections que vai selecionar o documento que estiver com .js-scroll
const sections = document.querySelectorAll('.js-scroll');

//funcao que vai animar o scroll

function animaScroll() {
    sections.forEach((section) => {
        const  sectionTop = section.getBoundingClientRect().top;
        console.log(sectionTop);
    })
}

window.addEventListener('scroll', animaScroll)
