const app = {
  run() {
    this.addEvent();
  },
  addEvent() {
    const containerEl = document.querySelector(".container");
    const leftSplitEl = document.querySelector(".split.left");
    const rightSplitEl = document.querySelector(".split.right");

    leftSplitEl.addEventListener("mouseenter", () =>
      containerEl.classList.add("hover-left")
    );
    leftSplitEl.addEventListener("mouseleave", () =>
      containerEl.classList.remove("hover-left")
    );

    rightSplitEl.addEventListener("mouseenter", () =>
      containerEl.classList.add("hover-right")
    );
    rightSplitEl.addEventListener("mouseleave", () =>
      containerEl.classList.remove("hover-right")
    );
  },
};

app.run();
