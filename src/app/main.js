import Lenis from "@studio-freight/lenis";

// components
import "./animations/card";
import "./components/nav";
// utils
import { resetViewportWidth } from "./utils";
import "/src/styles/style.scss";

resetViewportWidth();

const App = (function () {
  function initLenis() {
    const lenis = new Lenis({
      lerp: 0.1,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  const init = () => {
    initLenis();
    addEvents();
  };

  function addEvents() {
    const anchor = document.querySelector("a[href='#next']");
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  return {
    init,
  };
})();

App.init();
