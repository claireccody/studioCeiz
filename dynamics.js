function modalToggle() {
  window.scrollTo(0, 0);
  console.log("toggle?");
  document.querySelectorAll(".sect").forEach((element) => {
    element.classList.toggle("hide");
  });
  document.getElementById("form").classList.toggle("hide");
//   document.getElementById("footer").style.display="low";
document.getElementById("footer").classList.toggle("low");
document.getElementById("top").classList.toggle("low");

    document.querySelectorAll(".sect").forEach((element) => {
    element.classList.toggle("seek");
  });
  document.getElementById("form").classList.toggle("seek");
//   document.getElementById("footer").classList.toggle("seek");

//   document.getElementById("top").classList.toggle("low");
  // document.getElementById("defaultCanvas0").classList.toggle("low");
}

document.getElementById("openFormB").addEventListener("click", () => {
  modalToggle();
});
document.getElementById("openFormA").addEventListener("click", () => {
  modalToggle();
});
document.getElementById("openFormC").addEventListener("click", () => {
  modalToggle();
});
