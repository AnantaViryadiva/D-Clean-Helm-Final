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
    const faqFrames = document.querySelectorAll(".tanya-jawab-frame");
    const faqContainer = document.querySelector(".tanya-jawab"); // Container utama
    const footer = document.querySelector(".footer"); // Footer
    const defaultFooterMarginTop = 30; // Jarak default footer dari tanya-jawab dalam px

    faqFrames.forEach(frame => {
        frame.addEventListener("click", function () {
            const icon = this.querySelector(".toggle-icon");

            if (this.classList.contains("active")) {
                this.classList.remove("active");
                icon.textContent = "+";
            } else {
                // Tutup semua frame lain sebelum membuka yang baru
                faqFrames.forEach(item => {
                    item.classList.remove("active");
                    item.querySelector(".toggle-icon").textContent = "+";
                });

                // Buka frame yang diklik
                this.classList.add("active");
                icon.textContent = "-";
            }

            // Update posisi footer dengan animasi
            setTimeout(() => {
                smoothAdjustFooterPosition();
            }, 300); // Tunggu animasi transisi FAQ selesai
        });
    });

    function smoothAdjustFooterPosition() {
        let totalFaqHeight = 0;
        let isAnyActive = false;

        faqFrames.forEach(frame => {
            totalFaqHeight += frame.offsetHeight + 10; // Hitung tinggi setiap frame dengan margin
            if (frame.classList.contains("active")) {
                isAnyActive = true;
            }
        });

        let extraHeight = isAnyActive ? totalFaqHeight - (faqFrames.length * 48) : 0;
        let newMarginTop = extraHeight > 0 ? extraHeight + defaultFooterMarginTop : defaultFooterMarginTop;

        // Animasi perubahan margin-top menggunakan transisi CSS
        requestAnimationFrame(() => {
            footer.style.marginTop = `${newMarginTop}px`;
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1, // Pastikan hanya satu slide yang muncul dalam satu waktu
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: "slide",
        lazy: true,
    });
});





