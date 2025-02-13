var swiper = new Swiper(".mySwiper-1",{
    slidesPerview:1, /* Esto signifiaca que va a mostrar una diapositiva a la vez*/
    spaceBetween:30, /* Aca creamos un espacio de 30 px entre diapositivas*/
    loop:true,/*Este es para que sea un carrucel infinito*/
    pagination: { /*Esto crea en la parte de abajo puntos para que el usuario interactue*/
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: { /*Aca ponemos a funcionar el tema de los bontones que pusimos en el HTML */
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
})

var swiper = new Swiper(".mySwiper-2",{
    slidesPerview:3,
    spaceBetween:20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints : {
        0:{
            slidesPerview:1,
        },
        520: {
            slidesPerview:2,
        },
        950: {
            slidesPerview:3,
        }
        
    }
})

let tabInputs = document.querySelectorAll(".tabInput")
tabInputs.forEach(function(input) {

    input.addEventListener('change', function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});
