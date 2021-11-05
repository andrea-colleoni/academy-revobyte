// variabili
var numero = 10
var testo = 'Questo è testo'
var altroTesto = "Questo è altro testo...."

// oggetti
var nome = 'Andrea'
var cognome = 'Colleoni'
var email = 'andrea@colleoni.info'

var persona = {
    nome: 'Andrea',
    cognome: 'Colleoni',
    email: 'andrea@colleoni.info',
    altezza: 183,
    peso: 85,
    docente: true
}

console.log(persona)
console.log(persona.email)

// collezioni (array, vettori)
var numeriPrimi = [
    1, 2, 3, 5, 7, 11, 13, 19, 23
]
console.log(numeriPrimi)
console.log(numeriPrimi[3])

// mix
var oggettoComplesso = {
    nome: 'Andrea',
    indirizzo: {
        cap: '24100',
        via: 'via Roma',
        civico: 1
    },
    email: [
        'andrea@colleoni.info',
        'andreacolleoni@gmail.com'
    ],
    amici: [
        {
            nome: 'Luigi',
            cognome: 'Rossi'
        },
        {
            nome: 'Sara',
            cognome: 'Verdi'
        }
    ],
    infoVarie: [
        { numeroScarpe: 43 },
        { 
            auto: {
                marca: 'Toyota',
                modello: 'Auris'
            }
        },
        100,
        'testo',
        [
            1, 2, 3 ,4, 5, 6
        ]
    ]
}
console.log(oggettoComplesso)
oggettoComplesso.nazionalita = 'Italiana'
console.log(oggettoComplesso)