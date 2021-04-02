// Method 1:  change font color
p1.addEventListener("mouseover", function(event) {
  
  event.target.style.color = "black";
});
p1.addEventListener("mouseout" , function(event){
  event.target.style.color = "turquoise"
}); 

// Method 2:  with text in "let"
let rep = document.getElementById("b");
a.addEventListener("mouseover", function(){
  let text = "Réponse 2 - C'est le faux texte standard de l'imprimerie depuis les années 1500.";
  rep.innerText = text;
});
a.addEventListener("mouseout", function(){
  rep.innerText = "";
});
