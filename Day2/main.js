const app = {
  run() {
    this.addEvent();
  },

  progress: document.getElementById("progress"),
  prev: document.getElementById("prev"),
  next: document.getElementById("next"),
  circles: document.querySelectorAll(".circle"),
  currentStep: 1,
  actives: document.querySelectorAll(".circle.active"),

  addEvent() {
    this.next.addEventListener("click", () => {
      if (this.currentStep < 4) this.currentStep++;
      this.update();
    });

    this.prev.addEventListener("click", () => {
      if (this.currentStep > 1) this.currentStep--;
      this.update();
    });
  },

  removeClasses(nodes) {
    nodes.forEach((node) => node.classList.remove("active"));
  },

  update() {
    // Update circle
    this.circles.forEach((x, i) => {
      if (i + 1 <= this.currentStep) x.classList.add("active");
      else x.classList.remove("active");
    });

    // Update button
    if (this.currentStep === 4) {
      this.next.setAttribute("disabled", true);
    } else this.next.removeAttribute("disabled");
    if (this.currentStep === 1) this.prev.setAttribute("disabled", true);
    else this.prev.removeAttribute("disabled");

    // Update actives Nodes
    this.actives = document.querySelectorAll(".circle.active");

    // Update progress
    const newWidth = (this.actives.length - 1) / (this.circles.length - 1);
    //this.progress.style.width = newWidth * 100 + "%";
    this.progress.style.width = (this.actives.length - 1) * 33.333 + "%";
    console.log(newWidth);
    console.log(this.actives.length, this.circles.length);
  },
};

app.run();
