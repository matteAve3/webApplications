document.getElementById("rimuoviTrofeoBtn").addEventListener("click", function() {
    document.getElementById("formRimuoviTrofeo").style.display = "block";
    document.getElementById("formTrofeo").style.display = "none";
});

function rimuoviTrofeo(event) {
    event.preventDefault();

    const rigo = parseInt(document.getElementById("numeroTrofeo").value);

    const rows =document.getElementById('tabellaTrofei').querySelectorAll('tr');

    if (rigo > 0 && rigo <= rows.length) {
        rows[rigo - 1].remove();
        document.getElementById("formRimuoviTrofeo").style.display = "none";
        document.getElementById("rimuoviTrofeo").reset();
    } else {
        alert("Rigo non valido!");
    }
}


document.querySelectorAll(".deleteButton").forEach(button => {
    button.addEventListener("click", function() {
        const row = button.closest("tr");
        row.parentNode.removeChild(row);
    });
});