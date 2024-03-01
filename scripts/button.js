const buttons = document.querySelectorAll(".btn--ripple");

function animate(e) {
   this.classList.remove("animate");
   const that = this;

   setTimeout(function () {
      that.classList.add("animate");
   }, 20);
}

buttons.forEach(button => button.addEventListener("click", animate));