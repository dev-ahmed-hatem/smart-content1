const homeBtn = document.getElementById("home-btn"),
    aboutBtn = document.getElementById("about-btn"),
    servicesBtn = document.getElementById("services-btn"),
    projectsBtn = document.getElementById("projects-btn"),
    contactBtn = document.getElementById("contact-btn"),
    aboutDiv = document.getElementById("about-div"),
    servicesDiv = document.getElementById("services-div"),
    projectsDiv = document.getElementById("projects-div"),
    contactDiv = document.getElementById("contact-div");

homeBtn.addEventListener("click", function () {
    document.documentElement.scrollIntoView();
});
aboutBtn.addEventListener("click", function () {
    aboutDiv.scrollIntoView();
});
servicesBtn.addEventListener("click", function () {
    servicesDiv.scrollIntoView();
});
projectsBtn.addEventListener("click", function () {
    projectsDiv.scrollIntoView();
});
contactBtn.addEventListener("click", function () {
    contactDiv.scrollIntoView();
});
