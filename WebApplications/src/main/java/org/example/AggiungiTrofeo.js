console.log('HELLO JS');


document.getElementById("aggiungiTrofeo").addEventListener("click", function() {
    document.getElementById("formTrofeo").style.display = "block";
    document.getElementById("formRimuoviTrofeo").style.display = "none";
});

document.getElementById("nuovoFormTrofeo").addEventListener("submit", function(event) {
    event.preventDefault();

    const trofeo = document.getElementById("trofeo").value;
    const anno = document.getElementById("anno").value;
    const squadra = document.getElementById("squadra").value;

    const tableBody = document.getElementById("tabellaTrofei").getElementsByTagName('tbody')[0];


    addNewRowV1(tableBody , trofeo , anno , squadra);

    document.getElementById("formTrofeo").style.display = "none";
    document.getElementById("nuovoFormTrofeo").reset();
});


function addNewRowV1(tableBody , trofeo, anno,squadra){

    const newRowHTML = `
        <tr>
            <td>${trofeo}</td>
            <td>${anno}</td>
            <td>${squadra}</td>
        </tr>
    `;

    tableBody.innerHTML += newRowHTML;

    console.log('Adding new Row , with method 1');
}