const PP_VERSION = "1.0.0";
const PP_BASE_PATH = window.PP_BASE_PATH || "";

async function includeHTML(targetId, filePath) {
  const target = document.getElementById(targetId);

  if (!target) {
    console.warn(`Target element not found: #${targetId}`);
    return;
  }

  try {
    const response = await fetch(`${PP_BASE_PATH}${filePath}?v=${PP_VERSION}`);

    if (!response.ok) {
      throw new Error(`Could not load ${filePath}. HTTP status: ${response.status}`);
    }

    target.innerHTML = await response.text();
  } catch (error) {
    target.innerHTML = `
      <div class="include-error">
        Failed to load ${filePath}. Please check the file path.
      </div>
    `;
    console.error(error);
  }
}

function fixBaseLinks() {
  const links = document.querySelectorAll("[data-base-href]");

  links.forEach((link) => {
    const href = link.getAttribute("data-base-href");
    if (!href) return;
    link.setAttribute("href", `${PP_BASE_PATH}${href}`);
  });
}

function setupMobileMenu() {
  const button = document.querySelector(".pp-menu-btn");
  const nav = document.querySelector(".pp-nav");

  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupFooterYear() {
  const year = document.getElementById("footer-year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

async function loadLayout() {
  await includeHTML("site-header", "header.html");
  await includeHTML("site-footer", "footer.html");

  fixBaseLinks();
  setupMobileMenu();
  setupFooterYear();
}

document.addEventListener("DOMContentLoaded", loadLayout);
