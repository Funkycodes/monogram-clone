const cards = document.querySelectorAll(".card");

const cardObserverCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRect.top > 0)
      entry.target.classList.add("visible");
  });
};
const cardObserver = new IntersectionObserver(cardObserverCallback, {
  rootMargin: "0px 0px -10% 0px",
});
cards.forEach((card) => cardObserver.observe(card));

// Ensure a slide-in every time user scrolls down
const cardObserverCallbackAlt = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRect.top > 0)
      if (entry.target.classList.contains("visible"))
        entry.target.classList.remove("visible");
  });
};
const cardObserverAlt = new IntersectionObserver(cardObserverCallbackAlt, {
  rootMargin: "0px 0px 5% 0px",
});
cards.forEach((card) => cardObserverAlt.observe(card));
