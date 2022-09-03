const targets = document.querySelectorAll(".animated"),
    header = document.getElementById("header");

function checkTargets() {
    targets.forEach((el, key) => {
        if (
            document.documentElement.clientHeight -
                el.getBoundingClientRect().y >=
                100 &&
            el.getBoundingClientRect().height + el.getBoundingClientRect().y >=
                130
        ) {
            el.classList.add("visible");
        } else {
            el.classList.remove("visible");
        }
    });
}

function headerStick() {
    if (document.documentElement.scrollTop > header.clientHeight) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

document.querySelector(".toggle").addEventListener("click", function () {
    this.classList.toggle("active");
    header.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    checkTargets();
    headerStick();
});
