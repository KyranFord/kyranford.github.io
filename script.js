
function scrollFunction(target) {
    const element = document.getElementById(target);
    element.scrollIntoView(
        {block: "center", 
        inline: "nearest"
    }); 
}

function revealUp() {
    if(document.querySelector(".reveal-up"))
    var reveals = document.querySelectorAll(".reveal-up");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
function revealLeft() {
    if(document.querySelector(".reveal-left"))
    var reveals = document.querySelectorAll(".reveal-left");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    } 
}

window.addEventListener("load", typeHome(["Hi,", "I'm Kyran.", "A software engineer."], ["top-h1","middle-h1","bottom-h2"]))
window.addEventListener("scroll", revealUp);
window.addEventListener("scroll", revealLeft);

async function typeHome(textlist, idlist){
  await sleep(500)
  for(i=0; i < 3; i++){
    element = document.getElementById(idlist[i])
    for(j=0; j < textlist[i].length; j++){
      element.innerHTML += textlist[i][j]
      await sleep(Math.floor(Math.random()*50)+100)
    }
  }
  document.getElementById('scroll-button').classList.add("button-wiggle");

}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
