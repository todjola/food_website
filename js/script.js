/////////////////////////////////////////////////
// Set current year

function customizeGoogleTranslate() {
  const iframe = document.querySelector('iframe.goog-te-banner-frame');
  if (iframe) {
      const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      const style = innerDoc.createElement('style');
      style.innerHTML = `
          body {
              background-color: #fdf2e9 !important;
              font-family: Arial, sans-serif !important;
          }
          .goog-te-banner-frame {
              display: none !important; /* Hide the top banner */
          }
      `;
      innerDoc.head.appendChild(style);
  }
}

// Delay customization to ensure iframe loads
setTimeout(customizeGoogleTranslate, 1000);

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

/////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close the mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

////////////////////////////////////////////////
// Sticky header

window.addEventListener("scroll", function () {
  if (window.scrollY >= 720) {
    this.document.body.classList.add("sticky");
  } else {
    this.document.body.classList.remove("sticky");
  }
});
