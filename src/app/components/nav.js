const navbar = document.querySelector("nav.nav");

navbar.addEventListener("click", (e) => {
  const { target } = e;
  if (target.closest(".dropdown-toggle")) {
    e.preventDefault();

    const dropdown = target.closest(".dropdown-toggle").nextElementSibling;
    const { state } = dropdown.dataset;

    dropdown.setAttribute(
      "data-state",
      `${state === "open" ? "closed" : "open"}`
    );
  }
});
