const app = {
  run() {
    this.checkBoxes();
    this.addEvent();
  },
  addEvent() {
    window.addEventListener("scroll", this.checkBoxes);
  },
  checkBoxes() {
    const boxesEl = document.querySelectorAll(".box");
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxesEl.forEach((x) => {
      const boxTop = x.getBoundingClientRect().top;
      if (boxTop < triggerBottom) x.classList.add("show");
      else x.classList.remove("show");
    });
  },
};

app.run();
