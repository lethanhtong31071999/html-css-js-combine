const app = {
  timeEl: document.querySelector(".time"),
  dateEl: document.querySelector(".date"),
  toggleBtnEl: document.querySelector(".toggle"),
  run() {
    this.setTime();
    this.addEvent();
  },
  addEvent() {
    setInterval(app.setTime, 1000);

    this.toggleBtnEl.addEventListener("click", (e) => {
      const html = document.querySelector("html");
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        this.toggleBtnEl.innerHTML = "Dark mode";
        b;
      } else {
        html.classList.add("dark");
        this.toggleBtnEl.innerHTML = "Light mode";
      }
    });
  },
  setTime() {
    const hourEl = document.querySelector(".clock .hour");
    const minuteEl = document.querySelector(".clock .minute");
    const secondEl = document.querySelector(".clock .second");
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = `0${hours % 12}`.slice(-2);
    const minutes = `0${time.getMinutes()}`.slice(-2);
    const seconds = time.getSeconds();
    const ampm = hours > 12 ? "PM" : "AM";
    console.log(app.circleEl);
    app.timeEl.innerHTML = `${hoursForClock}:${minutes}${ampm.toUpperCase()}`;
    app.dateEl.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${date}</span>`;

    hourEl.style.transform = `translate(-50%, -100%) rotate(${app.scale(
      hoursForClock,
      0,
      12,
      0,
      360
    )}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${app.scale(
      minutes,
      0,
      60,
      0,
      360
    )}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${app.scale(
      seconds,
      0,
      60,
      0,
      360
    )}deg)`;
  },
  scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  },
};

app.run();
