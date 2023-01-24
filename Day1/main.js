const app = {
  run() {
    this.addEvent();
  },

  addEvent() {
    const panels = document.querySelectorAll(".container .panel");
    panels.forEach((x) => {
      x.addEventListener("click", function (e) {
        app.removeClass(panels);
        x.classList.add("active");
      });
    });
  },

  removeClass(nodes) {
    nodes.forEach((node) => node.classList.remove("active"));
  },
};

app.run();
