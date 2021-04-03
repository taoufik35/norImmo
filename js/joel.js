// Method 1:  change font color
p1.addEventListener("mouseover", function(event) {
  
  event.target.style.color = "black";
});
p1.addEventListener("mouseout" , function(event){
  event.target.style.color = "turquoise"
}); 

// Method 2:  with text in "let"
let rep = document.getElementById("disp");
detect.addEventListener("mouseover", function(){
  let text = "Réponse 2 - C'est le faux texte standard de l'imprimerie depuis les années 1500.";
  rep.innerText = text;
});
detect.addEventListener("mouseout", function(){
  rep.innerText = "";
});
// Method 3: input with button = answer
var button = document.querySelector("input");
var txt = document.getElementById("quest3");

button.addEventListener("click", function () {
  if (button.value === "Réponse") {
    button.value = "Réponse 3 - Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.";
  } else {
    button.value = "Réponse";
  }
});