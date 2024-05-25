window.onButtonMenuClick = onButtonMenuClick;
window.onSideNavbarCloseClick = onSideNavbarCloseClick;

function onButtonMenuClick() {
  const sideNavbarEl = document.getElementById("side-navbar");
  const bodyEl = document.querySelector("body");
  if (sideNavbarEl && bodyEl) {
    sideNavbarEl.classList.add("side-navbar-show");
    bodyEl.style.overflow = "hidden";
  }
}

function onSideNavbarCloseClick() {
  const sideNavbarEl = document.getElementById("side-navbar");
  const bodyEl = document.querySelector("body");
  if (sideNavbarEl && bodyEl) {
    sideNavbarEl.classList.remove("side-navbar-show");
    bodyEl.style.overflow = "auto";
  }
}
