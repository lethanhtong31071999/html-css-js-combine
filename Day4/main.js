const app = {
  run() {
    this.setEvent();
    console.log(this.searchEl);
  },
  inputEl: document.querySelector(".search .input"),
  searchBtnEl: document.querySelector(".search .btn"),
  searchEl: document.querySelector(".search"),
  setEvent() {
    this.searchBtnEl.addEventListener("click", () => {
      this.searchEl.classList.toggle("active");
      this.inputEl.focus();
      console.log("tes");
    });
  },
};

app.run();
