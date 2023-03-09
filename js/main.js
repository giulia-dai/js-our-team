//MILESTONE 0
//creo un array di oggetti:
const team = [
    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll ',
        'ruolo': 'Chief Editor',
        'foto': 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon ',
        'ruolo': 'Office Manager',
        'foto': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Develope',
        'foto': 'scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': 'barbara-ramos-graphic-designer.jpg'
    }
]

//MILESTONE 1 E 2
//Rendere l'array visibile nella pagina

const cardDom = document.getElementById('card');
for (let i = 0; i < team.length; i++) {
    let member = team[i];
    console.log`(${member.name}, ${member.ruolo}, ${member.foto})`;

    for(let key in member){
        console.log(key + ' '+ member[key]);
        cardDom.innerHTML +=
                            `<div class="member-card"> 
                                <h2>${member.nome}</h2> 
                                <h4>${member.ruolo}</h4>
                                <img src="img/${member.foto}"  alt="${member.name}"/>
                             </div>
                             `;
    }
}







