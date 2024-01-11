
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


document.addEventListener('DOMContentLoaded', function() {
    var rows = document.querySelectorAll('.table tbody tr');

    rows.forEach(function(row) {
        var status = row.querySelector('.status').innerText.trim();
        var tds = row.querySelectorAll('td');

        tds.forEach(function(td) {
            if (status === 'kế hoạch') {
                td.style.backgroundColor = '#3498db'; // màu xanh dương cho kế hoạch
            } else if (status === 'đã huỷ') {
                td.style.backgroundColor = '#f8f8b2'; // màu vàng cho đã huỷ
            } else if (status === 'đã hoàn thành') {
                td.style.backgroundColor = '#2ecc71'; // màu xanh lá cho đã hoàn thành
            }
        });
    });
});
