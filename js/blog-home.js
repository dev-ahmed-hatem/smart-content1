const searchBtn = document.getElementById("search-btn"),
    searchText = document.getElementById("search-text"),
    mainUl = document.getElementById("main-ul"),
    moreLi = document.getElementById("more-li"),
    moreSpan = document.getElementById("more-span"),
    branchUl = document.getElementById("branch-ul");

searchBtn.addEventListener("click", function () {
    searchBtn.classList.add("active");
    searchText.focus();
});

searchText.addEventListener("focusout", function () {
    searchBtn.classList.remove("active");
});

(function categoriesSubList() {
    if (document.documentElement.clientWidth > 1100) {
        if (mainUl.children.length > 10) {
            for (let li = mainUl.children.length - 2; li > 7; li--) {
                branchUl.appendChild(mainUl.children[li]);
            }
            moreLi.classList.add("active");
        }
    } else if (document.documentElement.clientWidth > 751) {
        if (mainUl.children.length > 8) {
            for (let li = mainUl.children.length - 2; li > 5; li--) {
                branchUl.appendChild(mainUl.children[li]);
            }
            moreLi.classList.add("active");
        }
    }
})();

moreSpan.addEventListener("click", function () {
    if (document.documentElement.clientWidth < 1100) {
        moreLi.classList.toggle("toggle");
    }
});

moreLi.addEventListener("mouseover", function () {
    if (document.documentElement.clientWidth > 1100) {
        this.classList.add("toggle");
    }
});

moreLi.addEventListener("mouseout", function () {
    if (document.documentElement.clientWidth > 1100) {
        this.classList.remove("toggle");
    }
});
