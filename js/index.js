document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".hero", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function () {
                let activeSlide = document.querySelector(".swiper-slide-active");
                if (activeSlide) {
                    let animatedElements = activeSlide.querySelectorAll("[data-aos]");
                    animatedElements.forEach(el => {
                        el.classList.remove("aos-animate");
                        setTimeout(() => el.classList.add("aos-animate"), 100);
                    });
                }
            }
        }
    });
});
