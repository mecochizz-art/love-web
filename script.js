const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const main = document.getElementById("main");
const success = document.getElementById("success");

let yesSize = 1;

yesBtn.addEventListener("click", function () {
    main.classList.add("grow");

    setTimeout(function () {
        main.style.display = "none";
        success.style.display = "block";
    }, 500);
});

noBtn.addEventListener("click", function () {
    yesSize += 0.3;
    yesBtn.style.transform = "scale(" + yesSize + ")";

    if (yesSize > 2.5) {
        noBtn.style.display = "none";
    }
});