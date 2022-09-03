const header = document.getElementById("header"),
    scrollTop = document.getElementById("scroll"),
    toggler = document.getElementById("toggler"),
    links = document.getElementById("links"),
    categoriesToggler = document.getElementById("categories-toggler"),
    categories = document.getElementById("categories");

scrollTop.addEventListener("click", function () {
    header.scrollIntoView();
});

toggler.addEventListener("click", function () {
    this.classList.toggle("active");
    links.classList.toggle("active");
});

function checkScrollTop() {
    if (document.documentElement.scrollTop > 200) {
        scrollTop.classList.add("active");
    } else {
        scrollTop.classList.remove("active");
    }
}

categoriesToggler.addEventListener("click", function () {
    categories.classList.toggle("active");
});

window.addEventListener("scroll", checkScrollTop);
