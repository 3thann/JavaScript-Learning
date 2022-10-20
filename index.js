const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const formulaire = document.querySelector("#formulaire");
const tbody = document.getElementById('newRow');

let nomTemp = "";
let prenomTemp = "";


formulaire.addEventListener("submit", function(e) {
    e.preventDefault();

    let tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tdNom = createElement('td', nom, 'nom');
    tr.appendChild(tdNom);

    const tdPrenom = createElement('td', prenom, 'prenom');
    tr.appendChild(tdPrenom);

    const tdAction = createElement('td', null, 'action');
    tr.appendChild(tdAction);

    const tdModifier = createElement('td');
    tdAction.appendChild(tdModifier);
    const tdModifBtn = createElement('button', 'Modifier', 'modifier');
    tdModifier.appendChild(tdModifBtn);

    const tdSupp = document.createElement('td');
    tdAction.appendChild(tdSupp);
    const tdSuppBtn = createElement('button', 'Supprimer', 'supp');
    tdSupp.appendChild(tdSuppBtn);

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
        getTr(e.currentTarget).remove();
    });


    tdModifBtn.addEventListener('click', function(e) {
        let modifTr = getTr(e.currentTarget);
        let inputNom = modifTr.querySelector('.nom');
        let inputPrenom = modifTr.querySelector('.prenom');

        let btnModif = modifTr.querySelector('.modifier');
        btnModif.style.display = "none";
        let btnSupp = modifTr.querySelector('.supp');
        btnSupp.style.display = "none";
        let btnValider = modifTr.querySelector('.valider');
        btnValider.style.display = "inline";

        nomTemp = modifTr.querySelector('.nom').innerHTML;
        prenomTemp = modifTr.querySelector('.prenom').innerHTML;

        inputNom.innerHTML = '';
        inputPrenom.innerHTML = '';

        let inputNomType = createElement('input', nomTemp, 'inputNomClass')
        let inputPrenomType = createElement('input', prenomTemp, 'inputPrenomClass')

        inputNom.append(inputNomType);
        inputPrenom.append(inputPrenomType);
    });


    tdValiderBtn.addEventListener('click', function(e){
        let validerTr = getTr(e.currentTarget);

        let btnModif = validerTr.querySelector('.modifier');
        btnModif.style.display = "inline";
        let btnSupp = validerTr.querySelector('.supp');
        btnSupp.style.display = "inline";
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

        modifNom.innerText = nomTemp
        modifPrenom.innerText = prenomTemp
        modifNom.setAttribute('class', 'nom');
        modifPrenom.setAttribute('class', 'prenom');
    });

    formulaire.reset()
});

function createElement(element, content = null, classe = null, type = 'text') {
    if(element == 'td') {
        return createTd(content, classe);
    }
    if(element == 'button') {
        return createButton(content, classe);
    }
    if(element == 'input') {
        return createInput(content, classe, type);
    }
}

function createTd(nom = null, classe = null) {
    let td = document.createElement("td");
    if(nom != null) {
        td.innerText = nom.value;
    }
    if(classe != null) {
        td.classList.add(classe);
    }
    return td
}

function createButton(nom = null, classe = null) {
    let button = document.createElement("button");
    if(nom != null) {
        button.innerText = nom;
    }
    if(classe != null) {
        button.classList.add(classe);
    }
    return button
}

function createInput(nom = null, classe = null, type = 'text') {
    let input = document.createElement("input");
    if(nom != null) {
        input.value = nom;
    }
    input.setAttribute("type", type);
    if(classe != null) {
        input.classList.add(classe);
    }
    return input
}

function getTr(base) {
    return base.parentNode.parentNode.parentNode
}