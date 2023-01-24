const app = {
  closeBtn: document.querySelector("#close"),
  openBtn: document.querySelector("#open"),
  containerEl: document.querySelector(".container"),
  containerCirlceEl: document.querySelector(".circle-container"),
  circleEl: document.querySelector(".circle"),
  run() {
    this.addEvent();
  },
  addEvent() {
    this.closeBtn.addEventListener("click", () => {
      this.removeClasses([
        this.containerEl,
        this.containerCirlceEl,
        this.circleEl,
      ]);
    });

    this.openBtn.addEventListener("click", () => {
      this.addClasess([
        this.containerEl,
        this.containerCirlceEl,
        this.circleEl,
      ]);
    });
  },

  removeClasses(nodes) {
    nodes.forEach((node) => node.classList.remove("show-nav"));
  },
  addClasess(nodes) {
    nodes.forEach((node) => node.classList.add("show-nav"));
  },
};

app.run();
