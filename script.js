document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');
}

// modal

let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}




document.querySelector("#lava").addEventListener("click", function () {
  console.log("lava")
});


document.querySelector("#singapore").addEventListener("click", function () {
  console.log("singapore")
});

document.querySelector("#garuda-shield").addEventListener("click", function () {
  console.log("garuda-shield")
});

// document.querySelector("#kuwait").addEventListener("click", function () {
//   console.log("kuwait")
// });
document.querySelector("#afghanistan").addEventListener("click", function () {
  console.log("afghanistan")
});



document.querySelector("#video-games").addEventListener("click", function () {
  console.log("Top 5: Legend of Zelda: Ocarina of Time, Tales of Symphonia, Final Fantasy X, The Sims 2, Persona 4")
}); 

$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 60) {
          $("header").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $("header").removeClass("active");
      }
  });
});


