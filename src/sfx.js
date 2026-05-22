
var sfx1 = {
  click: new Howl({
    src: ['sfx/mouse-click.mp3']
  })
};


(function() {
  const buttons1 = document.querySelectorAll(".click");

  buttons1.forEach(button => {
    button.addEventListener("click", () => {
      sfx1.click.play();
    })
  })

})();