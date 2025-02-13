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
document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua frame pertanyaan
    const faqFrames = document.querySelectorAll(".tanya-jawab-frame");

    faqFrames.forEach(frame => {
        frame.addEventListener("click", function () {
            // Ambil ikon dalam frame ini
            const icon = this.querySelector(".toggle-icon");

            // Jika frame yang diklik sudah aktif, tutup dan ubah ikon menjadi +
            if (this.classList.contains("active")) {
                this.classList.remove("active");
                icon.textContent = "+";
            } else {
                // Tutup semua frame lain sebelum membuka yang baru
                faqFrames.forEach(item => {
                    item.classList.remove("active");
                    item.querySelector(".toggle-icon").textContent = "+";
                });

                // Buka frame yang diklik dan ubah ikon menjadi -
                this.classList.add("active");
                icon.textContent = "-";
            }
        });
    });
});

