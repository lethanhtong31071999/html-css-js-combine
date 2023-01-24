const app = {
  labels: document.querySelectorAll(".form-control label"),
  run() {
    this.addEvent();
  },
  addEvent() {
    this.labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (x, i) => `<span style="transition-delay: ${i * 50}ms">${x}</span>`
        )
        .join("");
    });
  },
};

app.run();
