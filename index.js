const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const formulaire = document.querySelector("#formulaire");

formulaire.addEventListener("submit", function(e) {
    e.preventDefault();
    addRow(document.getElementById('table'), nom, prenom);
    nom.value = ""
    prenom.value = ""
    console.log("toto");
});

function addRow(elmt, nom, prenom) {
    let tr = document.createElement('tr');
    elmt.appendChild(tr);
     
    let tdNom = document.createElement('td');
    tr.appendChild(tdNom);
    let tdNomTxt = document.createTextNode(nom.value);
    tdNom.appendChild(tdNomTxt);
    let tdPrenom = document.createElement('td');
    tr.appendChild(tdPrenom);
    let tdPrenomTxt = document.createTextNode(prenom.value);
    tdPrenom.appendChild(tdPrenomTxt);
}