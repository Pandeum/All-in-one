document.getElementById('languageSwitcher').addEventListener('change', function () {
  const lang = this.value;
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
});
function bookNow() {
  alert("Booking system coming soon!");
}
