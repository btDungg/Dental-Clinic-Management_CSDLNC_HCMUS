
var arrows = document.querySelectorAll(".arrow");

arrows.forEach(arrow => {
    arrow.addEventListener("click", showContent);
})

function showContent(e) {
    if (!e.target.parentNode.classList.contains("active")) {
        e.target.parentNode.classList.add("active");
        var content = e.target.parentNode.parentNode.getElementsByClassName("news-content");
        content[0].classList.add("show");
        e.target.innerHTML = "↓";

    }
    else {
        e.target.parentNode.classList.remove("active");
        var content = e.target.parentNode.parentNode.getElementsByClassName("news-content");
        content[0].classList.remove("show");
        e.target.innerHTML = "▶";
    }
}
