const introvid = document.querySelector(".introvid");
const introcontent = document.querySelector(".introcontent");
const intro = document.querySelector(".intro");
const story= document.querySelector(".story");

// reveal gretting after vid ends
introvid.addEventListener("ended",() => {
    introvid.classList.add("hidden");
    introcontent.classList.remove("hidden");

    //open story after 3 sec
    setTimeout(() => {
        intro.classList.add("hidden");
        story.classList.remove("hidden");

        window.scrollTo(0,0);
    },3000);

});