const introvid = document.querySelector(".introvid");
const introcontent = document.querySelector(".introcontent");
const intro = document.querySelector(".intro");
const stories= document.querySelectorAll(".story");
const end= document.querySelector(".ending");

// reveal gretting after vid ends
introvid.addEventListener("ended",() => {
    introvid.classList.add("hidden");
    introcontent.classList.remove("hidden");

    //open story after 3 sec
    setTimeout(() => {
        intro.classList.add("hidden");
        stories[0].classList.remove("hidden");

        window.scrollTo(0,0);
    },3000);

});

//continue to next chapter
stories.forEach((story,index) => {

    const button=story.querySelector(".nextbtn");

    button.addEventListener("click",() => {
        story.classList.add("hidden");

        if(index+1 < stories.length) {
            stories[index+1].classList.remove("hidden");
        }
        else {
            end.classList.remove("hidden");
        }
    });
});