// Menambahkan efek saat pengguna scroll ke bawah
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Menampilkan alert saat pengguna klik tombol di proyek
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", function (event) {
    alert("You are now viewing " + this.textContent);
  });
});
