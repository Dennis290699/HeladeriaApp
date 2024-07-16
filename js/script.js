// JS PARA EL HEADER
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('sticky', 'scroll-active');
    } else {
        header.classList.remove('sticky', 'scroll-active');
    }
});


// PARA EL ICONO DE HAMBURGUESA
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
});

//PARA EL ICONO HAMBURGUESA ANIMADO
function myFunction(x) {
    x.classList.toggle("change");
}

// PARA EL SCROLL SUAVE AL DAR CLIC EN LOS ENLACES DE NAVEGACIÓN
const smoothScrollTo = (target) => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const element = document.querySelector(target);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });

    // Cerrar el menú hamburguesa después de hacer clic en un enlace y restaurar el ícono
    navLinks.classList.remove('mobile-menu');
    const menuHamburgerIcon = document.querySelector(".menu-hamburger");
    myFunction(menuHamburgerIcon);
};

const navLinksList = document.querySelectorAll('.nav-links a');
navLinksList.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del clic en el enlace (salto brusco)
        const target = link.getAttribute('href');
        smoothScrollTo(target);
    });
});

// PARA EL EFECTO ACTIVE DEL HEADER
$(document).ready(function () {
    // Función para agregar/eliminar la clase "active" en la navegación
    function setActiveLink() {
        var scrollPosition = $(window).scrollTop();

        // Itera a través de cada sección y verifica si está visible en la ventana
        $('section').each(function () {
            var topOffset = $(this).offset().top - 100; // Considera un offset de 100px para ajuste
            var bottomOffset = topOffset + $(this).outerHeight();
            var sectionId = $(this).attr('id');

            if (scrollPosition >= topOffset && scrollPosition <= bottomOffset) {
                // Agrega la clase "active" al enlace correspondiente en la navegación
                $('nav ul li a').removeClass('active');
                $('nav ul li a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    }

    // Llama a la función cuando la página se carga y cuando se desplaza
    $(window).on('load scroll', setActiveLink);
});