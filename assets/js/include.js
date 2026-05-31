const PP_VERSION = "3.0.0";
const PP_BASE_PATH = window.PP_BASE_PATH || "";

function withBase(path) {
  if (!path || /^(https?:)?\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("tel:") || path.startsWith("#")) return path;
  return `${PP_BASE_PATH}${path}`.replace(/\/\.\//g, "/");
}

async function includeHTML(targetId, filePath) {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    const response = await fetch(`${withBase(filePath)}?v=${PP_VERSION}`);
    if (!response.ok) throw new Error(`Could not load ${filePath}`);
    target.innerHTML = await response.text();
    fixRootLinks(target);
    fixRootActions(target);
  } catch (error) {
    target.innerHTML = `<div class="include-error">Failed to load ${filePath}</div>`;
    console.error(error);
  }
}

function fixRootLinks(scope = document) {
  scope.querySelectorAll("[data-root-link]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("#")) return;
    link.setAttribute("href", withBase(href));
  });
}

function fixRootActions(scope = document) {
  scope.querySelectorAll("[data-root-action]").forEach((form) => {
    const action = form.getAttribute("action");
    if (action) form.setAttribute("action", withBase(action));
  });
}

function setActiveNav() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const clean = (link.getAttribute("href") || "").split("#")[0].split("?")[0].split("/").pop();
    if (clean === current) link.classList.add("active");
  });
}

function setupNavToggle() {
  const button = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
}

function setupFooterYear() {
  const year = document.getElementById("footer-year");
  if (year) year.textContent = new Date().getFullYear();
}

async function loadLayout() {
  await includeHTML("site-header", "partials/header.html");
  await includeHTML("site-footer", "partials/footer.html");
  setupFooterYear();
  setupNavToggle();
  setActiveNav();
  document.dispatchEvent(new CustomEvent("pp:includes-ready"));
}

document.addEventListener("DOMContentLoaded", loadLayout);