const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector('.close');

openBtn.onclick = function() {
    modal.style.display = 'block'
}

closeBtn.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}