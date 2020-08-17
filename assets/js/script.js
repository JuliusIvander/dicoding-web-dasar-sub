const smooth = () => {
  const link = document.querySelectorAll(".link");

  for (let n in link) {
    if (link.hasOwnProperty(n)) {
      link[n].addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link[n].hash).scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }
};

const navSlide = () => {
  const burger = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("change");
  });
};

const app = () => {
  navSlide();
  smooth();
};

app();
