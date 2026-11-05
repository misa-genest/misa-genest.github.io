// Mobile nav toggle only — the site has no other behaviour.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var list = document.querySelector(".nav-list");
  if (!toggle || !list) return;

  toggle.addEventListener("click", function () {
    var open = list.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close the menu after picking a link, and on Escape.
  list.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      list.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && list.classList.contains("is-open")) {
      list.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
})();
