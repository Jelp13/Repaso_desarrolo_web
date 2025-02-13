var swiper = new Swiper(".mySwiper-1",{
    slidesPerview:1,
    spaceBetween:30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevtEl:".swiper-button-prev",
    }
})

var swiper = new Swiper(".mySwiper-2",{
    slidesPerview:3,
    spaceBetween:20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevtEl:".swiper-button-prev",
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