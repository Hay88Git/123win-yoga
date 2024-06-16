
var coll = document.getElementsByClassName("collap");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let Nav = document.getElementById("nav");
let OpenNav = function(){
  Nav.style.left = "0%";
}
let CloseNav = function(){
  Nav.style.left = "-100%";
}

function Url(){
  location.href = "https://www.hay88.one/?inviteCode=0963110";
}