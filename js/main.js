//MILESTONE 0
//creo un array di oggetti:
const team = [
    {
        'nome_cognome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome_cognome': 'Angela Caroll ',
        'ruolo': 'Chief Editor',
        'foto': 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome_cognome': 'Walter Gordon ',
        'ruolo': 'Office Manager',
        'foto': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome_cognome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome_cognome': 'Scott Estrada',
        'ruolo': 'Develope',
        'foto': 'scott-estrada-developer.jpg'
    },
    {
        'nome_cognome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': 'barbara-ramos-graphic-designer.jpg'
    }
]

// MILESTONE 1
//Array visibile in console
console.log(team);


//MILESTONE 2
//Rendere l'array visibile nella pagina
const cardDom = document.getElementById('card');
for (let i = 0; i < team.length; i++) {
    let member = team[i];

    for(let key in member){
        console.log(key + '-'+ member[key]);
        cardDom.innerHTML += `<div class="member-card"> 
                                <span>${key} ---> </span> 
                                <span>${member[key]}</span>
                             </div>`
    }
}







