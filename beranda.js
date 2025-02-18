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
if (window.innerWidth <= 768) {
    document.addEventListener("DOMContentLoaded", function () {
        const faqFrames = document.querySelectorAll(".tanya-jawab-frame");
        const footer = document.querySelector(".footer"); // Footer
        const footerSpace = document.querySelector(".footer-space"); // Space di bawah footer
        const defaultFooterTop = 4250; // Posisi awal footer sesuai CSS Anda
        const footerSpaceHeight = 4280; // Pastikan footer-space tetap 4600px
        const maxDropHeight = 140; // ✅ Atur batas maksimum pergerakan footer

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
                    adjustFooterPosition();
                }, 300); // Tunggu animasi transisi FAQ selesai
            });
        });

        function adjustFooterPosition() {
            let totalFaqHeight = 0;
            let isAnyActive = false;

            faqFrames.forEach(frame => {
                totalFaqHeight += frame.offsetHeight + 10; // Hitung tinggi setiap frame dengan margin
                if (frame.classList.contains("active")) {
                    isAnyActive = true;
                }
            });

            let extraHeight = isAnyActive ? totalFaqHeight - (faqFrames.length * 48) : 0;
            extraHeight = Math.min(extraHeight, maxDropHeight); // Batasi maksimum pergerakan footer

            let newFooterTop = defaultFooterTop + extraHeight;

            let startPosition = parseInt(footer.style.top) || defaultFooterTop;
            let distance = newFooterTop - startPosition;
            let duration = 600; // ✅ Waktu animasi dalam milidetik (0.6 detik)
            let startTime = null;

            function animateFooter(timeStamp) {
                if (!startTime) startTime = timeStamp;
                let progress = (timeStamp - startTime) / duration;

                if (progress < 1) {
                    let currentPosition = startPosition + (distance * easeInOut(progress));
                    footer.style.top = `${currentPosition}px`;
                    requestAnimationFrame(animateFooter);
                } else {
                    footer.style.top = `${newFooterTop}px`; // Pastikan posisi akhir akurat
                }
            }

            requestAnimationFrame(animateFooter);
        }

        // Fungsi easing untuk animasi lebih smooth
        function easeInOut(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }
    });
}
if (window.innerWidth >= 768) {
    document.addEventListener("DOMContentLoaded", function () {
        const faqFrames = document.querySelectorAll(".tanya-jawab-frame");
        const footer = document.querySelector(".footer"); // Footer
        const footerSpace = document.querySelector(".footer-space"); // Space di bawah footer
        const defaultFooterTop = 4570; // Posisi awal footer sesuai CSS Anda
        const footerSpaceHeight = 4600; // Pastikan footer-space tetap 4600px
        const maxDropHeight = 70; // ✅ Atur batas maksimum pergerakan footer

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
                    adjustFooterPosition();
                }, 300); // Tunggu animasi transisi FAQ selesai
            });
        });

        function adjustFooterPosition() {
            let totalFaqHeight = 0;
            let isAnyActive = false;

            faqFrames.forEach(frame => {
                totalFaqHeight += frame.offsetHeight + 10; // Hitung tinggi setiap frame dengan margin
                if (frame.classList.contains("active")) {
                    isAnyActive = true;
                }
            });

            let extraHeight = isAnyActive ? totalFaqHeight - (faqFrames.length * 48) : 0;
            extraHeight = Math.min(extraHeight, maxDropHeight); // Batasi maksimum pergerakan footer

            let newFooterTop = defaultFooterTop + extraHeight;

            let startPosition = parseInt(footer.style.top) || defaultFooterTop;
            let distance = newFooterTop - startPosition;
            let duration = 600; // ✅ Waktu animasi dalam milidetik (0.6 detik)
            let startTime = null;

            function animateFooter(timeStamp) {
                if (!startTime) startTime = timeStamp;
                let progress = (timeStamp - startTime) / duration;

                if (progress < 1) {
                    let currentPosition = startPosition + (distance * easeInOut(progress));
                    footer.style.top = `${currentPosition}px`;
                    requestAnimationFrame(animateFooter);
                } else {
                    footer.style.top = `${newFooterTop}px`; // Pastikan posisi akhir akurat
                }
            }

            requestAnimationFrame(animateFooter);
        }

        // Fungsi easing untuk animasi lebih smooth
        function easeInOut(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        slidesPerView: 1, 
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
        grabCursor: true,
        allowTouchMove: true,
        touchEventsTarget: 'wrapper',
        centeredSlides: false, // Coba matikan centeredSlides
    });    
});






