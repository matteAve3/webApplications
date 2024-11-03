document.getElementById("nuovoFormTrofeo").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene l'invio del form se ci sono errori

    let isValid = true;

    // Recupera i valori del form
    const trofeo = document.getElementById("trofeo").value.trim();
    const anno = document.getElementById("anno").value.trim();
    const squadra = document.getElementById("squadra").value.trim();

    // Resetta i messaggi di errore
    document.getElementById("trofeoError").textContent = "";
    document.getElementById("annoError").textContent = "";
    document.getElementById("squadraError").textContent = "";

    // Validazione per "Trofeo"
    if (trofeo === "") {
        document.getElementById("trofeoError").textContent = "Il campo Trofeo è obbligatorio.";
        isValid = false;
    }

    // Validazione per "Anno" (deve essere un numero tra 1900 e 2024)
    const annoNumero = parseInt(anno);
    if (!anno || annoNumero < 1900 || annoNumero > new Date().getFullYear()) {
        document.getElementById("annoError").textContent = "Inserisci un anno valido (1900 - anno corrente).";
        isValid = false;
    }

    // Validazione per "Squadra"
    if (squadra === "") {
        document.getElementById("squadraError").textContent = "Il campo Squadra è obbligatorio.";
        isValid = false;
    }

    // Se tutti i campi sono validi, invia il form (qui puoi aggiungere la tua logica di inserimento)
    if (isValid) {
        console.log("Form valido. Procedi con l'inserimento dei dati.");
        // Aggiungi la logica per inserire il nuovo trofeo nella tabella, oppure invia il form al server
        // document.getElementById("nuovoFormTrofeo").submit();
    }
});
