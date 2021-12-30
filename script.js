document.querySelector("#show_add_photo").addEventListener("click", function () {
    document.querySelector("#add_new_photo").classList.add("open");
});
document.querySelector("#cancel").addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector("#add_new_photo").classList.remove("open");
});
function open_photo() {
    let poput_photo = document.querySelector("#popup_photo");
    poput_photo.querySelector("img").src = this.querySelector("img").src;
    poput_photo.classList.add("open");
}
document.querySelectorAll(".photo").forEach(photo => {
    photo.addEventListener("click", open_photo);
});
document.querySelector("#popup_photo").addEventListener("click", function () {
    this.classList.remove("open");
});