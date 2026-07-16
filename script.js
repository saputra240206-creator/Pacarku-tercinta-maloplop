const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {
    letter.classList.remove("hidden");
    openBtn.style.display = "none";

    if (music) {
        music.play().catch(() => {
            console.log("Browser memblokir autoplay.");
        });
    }

    letter.scrollIntoView({
        behavior: "smooth"
    });
});
