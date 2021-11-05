// definizione
function nomeFunzione(argomento) {
    console.log('ciao funzione')
    console.log('hai passato come argomento: ', argomento)

    // se è una funzione allora posso fare una call!
    argomento();
}

function altraFunzione() {
    console.log('altra funzione')
}

// chiamata
/*
nomeFunzione()
nomeFunzione(100)
nomeFunzione('pippo')
nomeFunzione({ a: 10, b: 20})
nomeFunzione('arg1', 00, {}, 'altro..')
*/
nomeFunzione(altraFunzione)