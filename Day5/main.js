const app = {
  load: 0,
  blurInterval: undefined,
  run() {
    blurInterval = setInterval(this.blurring, 30);
  },

  blurring() {
    app.load++;
    if (app.load === 100) clearInterval(this.blurInterval);
    const bgEl = document.querySelector("section.bg");
    const loadingText = document.querySelector(".loading-text");
    loadingText.innerText = `${app.load}%`;
    loadingText.style.opacity = getPercentageOfLoad(app.load, 0, 100, 1, 0);
    bgEl.style.filter = `blur(${getPercentageOfLoad(
      app.load,
      0,
      100,
      80,
      0
    )}px)`;

    function getPercentageOfLoad(num, x1, y1, x2, y2) {
      return ((num - x1) / (y1 - x1)) * (y2 - x2) + x2;
    }
  },
};

app.run();

/**
 * %num1 = (num1 - x1) / (y1-x1)
 * %num1 = %num2
 * %num2 = (num2 - x2) / (y2 - x2)
 * %num1 = (num2 - x2) / (y2 - x2)
 * num2 - x2 = %num1 * (y2 - x2)
 * num2 = %num1 * (y2 - x2) + x2
 * num2 = (num1 - x1) / (y1-x1) * (y2 - x2) + x2
 */
