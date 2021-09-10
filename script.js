/**funzione per creare un numero random */
    function getnumeroRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
//inizializzo un array da riempire con di numeri random
    let arrayRandomico = [];
    while (arrayRandomico.length < 5) {
        let numeroRandom = getnumeroRandom(1,50);
        if (!arrayRandomico.includes(numeroRandom)){ // se il numero non è presente
            arrayRandomico.push(numeroRandom);
        }
    }

    // mostro i numeri random
    alert(arrayRandomico)
    
    setTimeout(function() {

        let arrayUtente = []; // array che contiene i numeri scelti dall'utente

                
        while ( arrayUtente.length < 5) {
            let numeroUtente = parseInt(prompt('Inserisci un numero'));

        // se il numeroUtente è diverso dagli altri va inserito
            
            if((!arrayUtente.includes(numeroUtente)) ) {
                arrayUtente.push(numeroUtente);}
        }

        let numeriEsatti = []; // array che contiene i numeri esatti

        for ( let i = 0 ; i < arrayUtente.length ; i++) {
            // se un numero ciclato è contenuto nell'arrayRandomico  
            if (arrayRandomico.includes(arrayUtente[i])){
            // lo inserisco nella lista dei numeriEsatti
                numeriEsatti.push(arrayUtente[i]);
            }
        }
        // infine mostro i numeri esatti con un alert
        alert('Hai indovinato: ' + numeriEsatti.length + ' numeri, che sono: ' + numeriEsatti);
    }
    , 5000);