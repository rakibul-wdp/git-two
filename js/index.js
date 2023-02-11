const screen = document.querySelector("#screen");
const btn = document.querySelectorAll(".btn");

for (item of btn) {
  item.addEventListener("click", (e) => {
    btnText = e.target.innerText;
    screen.value += btnText;
  });
}
