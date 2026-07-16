window.onload = function () {
    const openBtn = document.getElementById("openBtn");
    const letter = document.getElementById("letter");

    openBtn.onclick = function () {
        alert("KEPENCET!");

        letter.style.display = "block";
        openBtn.style.display = "none";
    };
};
