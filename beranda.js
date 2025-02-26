document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const mobileInfo = document.getElementById("mobile-info");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    mobileInfo.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      menuToggle.innerHTML = "✖";
      menuToggle.style.color = "#fff";
    } else {
      menuToggle.innerHTML = "☰";
      menuToggle.style.color = "#333";
    }
  });
});
if (window.innerWidth <= 768) {
  document.addEventListener("DOMContentLoaded", function () {
    const faqFrames = document.querySelectorAll(".tanya-jawab-frame");
    const footer = document.querySelector(".footer");
    const footerSpace = document.querySelector(".footer-space");
    const defaultFooterTop = 4250;
    const footerSpaceHeight = 4280;
    const maxDropHeight = 140;

    faqFrames.forEach((frame) => {
      frame.addEventListener("click", function () {
        const icon = this.querySelector(".toggle-icon");

        if (this.classList.contains("active")) {
          this.classList.remove("active");
          icon.textContent = "+";
        } else {
          faqFrames.forEach((item) => {
            item.classList.remove("active");
            item.querySelector(".toggle-icon").textContent = "+";
          });

          this.classList.add("active");
          icon.textContent = "-";
        }

        setTimeout(() => {
          adjustFooterPosition();
        }, 300);
      });
    });

    function adjustFooterPosition() {
      let totalFaqHeight = 0;
      let isAnyActive = false;

      faqFrames.forEach((frame) => {
        totalFaqHeight += frame.offsetHeight + 10;
        if (frame.classList.contains("active")) {
          isAnyActive = true;
        }
      });

      let extraHeight = isAnyActive
        ? totalFaqHeight - faqFrames.length * 48
        : 0;
      extraHeight = Math.min(extraHeight, maxDropHeight);

      let newFooterTop = defaultFooterTop + extraHeight;

      let startPosition = parseInt(footer.style.top) || defaultFooterTop;
      let distance = newFooterTop - startPosition;
      let duration = 600;
      let startTime = null;

      function animateFooter(timeStamp) {
        if (!startTime) startTime = timeStamp;
        let progress = (timeStamp - startTime) / duration;

        if (progress < 1) {
          let currentPosition = startPosition + distance * easeInOut(progress);
          footer.style.top = `${currentPosition}px`;
          requestAnimationFrame(animateFooter);
        } else {
          footer.style.top = `${newFooterTop}px`;
        }
      }

      requestAnimationFrame(animateFooter);
    }

    function easeInOut(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
  });
}
if (window.innerWidth >= 768) {
  document.addEventListener("DOMContentLoaded", function () {
    const faqFrames = document.querySelectorAll(".tanya-jawab-frame");
    const footer = document.querySelector(".footer");
    const footerSpace = document.querySelector(".footer-space");
    const defaultFooterTop = 4570;
    const footerSpaceHeight = 4600;
    const maxDropHeight = 70;

    faqFrames.forEach((frame) => {
      frame.addEventListener("click", function () {
        const icon = this.querySelector(".toggle-icon");

        if (this.classList.contains("active")) {
          this.classList.remove("active");
          icon.textContent = "+";
        } else {
          faqFrames.forEach((item) => {
            item.classList.remove("active");
            item.querySelector(".toggle-icon").textContent = "+";
          });

          this.classList.add("active");
          icon.textContent = "-";
        }

        setTimeout(() => {
          adjustFooterPosition();
        }, 300);
      });
    });

    function adjustFooterPosition() {
      let totalFaqHeight = 0;
      let isAnyActive = false;

      faqFrames.forEach((frame) => {
        totalFaqHeight += frame.offsetHeight + 10;
        if (frame.classList.contains("active")) {
          isAnyActive = true;
        }
      });

      let extraHeight = isAnyActive
        ? totalFaqHeight - faqFrames.length * 48
        : 0;
      extraHeight = Math.min(extraHeight, maxDropHeight);

      let newFooterTop = defaultFooterTop + extraHeight;

      let startPosition = parseInt(footer.style.top) || defaultFooterTop;
      let distance = newFooterTop - startPosition;
      let duration = 600;
      let startTime = null;

      function animateFooter(timeStamp) {
        if (!startTime) startTime = timeStamp;
        let progress = (timeStamp - startTime) / duration;

        if (progress < 1) {
          let currentPosition = startPosition + distance * easeInOut(progress);
          footer.style.top = `${currentPosition}px`;
          requestAnimationFrame(animateFooter);
        } else {
          footer.style.top = `${newFooterTop}px`;
        }
      }

      requestAnimationFrame(animateFooter);
    }

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
    touchEventsTarget: "wrapper",
    centeredSlides: false,
  });
});
