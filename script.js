const footerYear = document.querySelector("#footer-year");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

for (const link of document.querySelectorAll("[data-language]")) {
  link.addEventListener("click", () => {
    try {
      localStorage.setItem("site-language", link.dataset.language);
    } catch {
      // The normal link works even without browser storage.
    }
    link.hash = location.hash;
  });
}
