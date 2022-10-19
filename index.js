const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const formulaire = document.querySelector("#formulaire");
const tbody = document.getElementById('newRow');
const table = document.getElementById('table');

let nomTemp = "";
let prenomTemp = "";


formulaire.addEventListener("submit", function(e) {
    e.preventDefault();

    let tr = document.createElement('tr');
    tbody.appendChild(tr);
     
    let tdNom = document.createElement('td');
    tr.appendChild(tdNom);
    let tdNomTxt = document.createTextNode(nom.value);
    tdNom.appendChild(tdNomTxt);
    tdNom.setAttribute('class', 'nom');

    let tdPrenom = document.createElement('td');
    tr.appendChild(tdPrenom);
    let tdPrenomTxt = document.createTextNode(prenom.value);
    tdPrenom.appendChild(tdPrenomTxt);
    tdPrenom.setAttribute('class', 'prenom');

    let tdAction = document.createElement('td');
    tr.appendChild(tdAction);
    tdAction.setAttribute('class', 'action');

    let tdModifier = document.createElement('td');
    tdAction.appendChild(tdModifier);
    let tdModifBtn = document.createElement('button');
    tdModifier.appendChild(tdModifBtn);
    let tdModifBtnTxt = document.createTextNode('Modifier');
    tdModifBtn.appendChild(tdModifBtnTxt);
    tdModifBtn.setAttribute('class', 'modifier');

    let tdSupp = document.createElement('td');
    tdAction.appendChild(tdSupp);
    let tdSuppBtn = document.createElement('button');
    tdSupp.appendChild(tdSuppBtn);
    let tdSuppBtnTxt = document.createTextNode('Supprimer');
    tdSuppBtn.appendChild(tdSuppBtnTxt);
    tdSuppBtn.setAttribute('class', 'supp');

    let tdValider = document.createElement('td');
    tdAction.appendChild(tdValider);
    let tdValiderBtn = document.createElement('button');
    tdValider.appendChild(tdValiderBtn);
    let tdValiderBtnTxt = document.createTextNode('Valider');
    tdValiderBtn.append(tdValiderBtnTxt);
    tdValiderBtn.setAttribute('class', 'valider');
    let btnValider = tr.querySelector('.valider');
    btnValider.style.display = "none";


    tdSuppBtn.addEventListener('click', function(e) {
        // let suppBtn = e.currentTarget;
        // suppTr = suppBtn.parentNode.parentNode.parentNode;
        // suppTr.remove();
        e.currentTarget.parentNode.parentNode.parentNode.remove();
    });


    tdModifBtn.addEventListener('click', function(e) {
        let modifBtn = e.currentTarget;
        let modifTr = modifBtn.parentNode.parentNode.parentNode;
        let inputNom = modifTr.querySelector('.nom');
        let inputPrenom = modifTr.querySelector('.prenom');

        nomTemp = modifTr.querySelector('.nom').innerHTML;
        prenomTemp = modifTr.querySelector('.prenom').innerHTML;

        inputNom.innerHTML = '';
        inputPrenom.innerHTML = '';

        let inputNomType = document.createElement('input');
        let inputPrenomType = document.createElement('input');
        inputNomType.setAttribute("type", "text");
        inputPrenomType.setAttribute("type", "text");
        inputNomType.setAttribute("class", "inputNomClass");
        inputPrenomType.setAttribute("class", "inputPrenomClass");
        
        inputNomType.value = nomTemp;
        inputPrenomType.value = prenomTemp;
        inputNom.append(inputNomType);
        inputPrenom.append(inputPrenomType);

        let btnModif = modifTr.querySelector('.modifier');
        btnModif.style.display = "none";
        let btnSupp = modifTr.querySelector('.supp');
        btnSupp.style.display = "none";
        let btnValider = modifTr.querySelector('.valider');
        btnValider.style.display = "block";
    });


    tdValiderBtn.addEventListener('click', function(e){
        let validerBtn = e.currentTarget;
        let validerTr = validerBtn.parentNode.parentNode.parentNode;

        let btnModif = validerTr.querySelector('.modifier');
        btnModif.style.display = "block";
        let btnSupp = validerTr.querySelector('.supp');
        btnSupp.style.display = "block";
        let btnValider = validerTr.querySelector('.valider');
        btnValider.style.display = "none";

        let nomValeur = validerTr.querySelector('.inputNomClass');
        let prenomValeur = validerTr.querySelector('.inputPrenomClass');

        nomTemp = nomValeur.value;
        prenomTemp = prenomValeur.value;

        let modifNom = validerTr.querySelector('.nom');
        let modifPrenom = validerTr.querySelector('.prenom');
        modifNom.innerHTML = '';
        modifPrenom.innerHTML = '';

        let tdNomTxt = document.createTextNode(nomTemp);
        modifNom.appendChild(tdNomTxt);
        modifNom.setAttribute('class', 'nom');
    
        let tdPrenomTxt = document.createTextNode(prenomTemp);
        modifPrenom.appendChild(tdPrenomTxt);
        modifPrenom.setAttribute('class', 'prenom');
    });

    nom.value = "";
    prenom.value = "";
});