const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const formulaire = document.querySelector("#formulaire");

formulaire.addEventListener("submit", function(e){
    document.getElementById("table").innerHTML = "<tr><td>" + nom.value + "</td><td>" + prenom.value + "</td></tr>"
    e.preventDefault();
    console.log("toto");
}
);

