const form_btn = document.querySelector(".login");
const login_form = document.querySelector(".login-form");
form_btn.onclick = function() {
    login_form.classList.toggle('active');
}