document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const mobileInfo = document.getElementById("mobile-info");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        mobileInfo.classList.toggle("active");

        // Mengubah ikon dari ☰ menjadi ✖ saat menu aktif
        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = "✖"; // Ikon silang
            menuToggle.style.color = "#fff"; // Ubah warna ikon agar kontras dengan background
        } else {
            menuToggle.innerHTML = "☰"; // Ikon hamburger
            menuToggle.style.color = "#333"; // Kembalikan warna ikon
        }
    });
});
