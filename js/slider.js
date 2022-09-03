const trails = $(".trails .trail");
let currentSlider = 0,
    sliderLength = $(".testimonial-container .content").length,
    next = $(".next"),
    prev = $(".prev");

/* slider part start */

function sliderLoop() {
    currentSlider = parseInt(currentSlider);
    currentSlider < $(".slider .box").length - 1
        ? (currentSlider += 1)
        : (currentSlider = 0);
    slideTo(currentSlider);
}

trails.each(function (n, e) {
    $(e).click(() => {
        $(".trails .trail.active").removeClass("active");
        $(e).addClass("active");
        slideTo($(e).attr("data-order"));
    });
});

function slideTo(order) {
    $("#testimonial-container").css({
        transform: `translateX(-${(100 / sliderLength) * order}%)`,
    });
    $(".trails .trail.active").removeClass("active");
    $(`.trails .trail[data-order=${order}]`).addClass("active");
    currentSlider = order;
}

function slideStep(condition) {
    if (condition === "increase") {
        currentSlider == sliderLength - 1
            ? (currentSlider = 0)
            : (currentSlider += 1);
        slideTo(currentSlider);
    } else {
        currentSlider == 0
            ? (currentSlider = sliderLength - 1)
            : (currentSlider -= 1);
        slideTo(currentSlider);
    }
}

/* slider part end */
