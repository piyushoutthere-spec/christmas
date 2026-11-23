const introvid = document.querySelector(".introvid");
const introcontent = document.querySelector(".introcontent");

// reveal gretting after vid ends
introvid.addEventListener("ended",() => {
    introvid.classList.add("hidden");
    introcontent.classList.remove("hidden");

});