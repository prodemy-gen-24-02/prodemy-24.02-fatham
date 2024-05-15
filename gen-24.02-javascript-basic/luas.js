function persegi(x){
    console.log(x*x);
}
   
function segitiga(a,t){
    console.log(0.5*a*t);
}

function lingkaran(r){
    console.log(3.14*r*r);
}

function userInputs(shape) {
    const inputsDiv = document.getElementById('inputs'); //deklarasi variabel sementara untuk tempat menampung user input
    inputsDiv.innerHTML = ''; //membersihkan input sebelumnya

    if (shape === 'Persegi') {
        inputsDiv.innerHTML = `
            <label for="sisi">Sisi: </label>
            <input type="number" id="sisi" name="sisi" /><br />
        `;
    } else if (shape === 'Segitiga') {
        inputsDiv.innerHTML = `
            <label for="alas">Alas: </label>
            <input type="number" id="alas" name="alas" /><br />
            <label for="tinggi">Tinggi: </label>
            <input type="number" id="tinggi" name="tinggi" /><br />
        `;
    } else if (shape === 'Lingkaran') {
        inputsDiv.innerHTML = `
            <label for="r">r: </label>
            <input type="number" id="r" name="r" /><br />
        `;
    }
}


function luas() {
    const selectedShape = document.querySelector('input[name="luas"]:checked').value;//selector css mengembalikan nilai sesuai degan input name"luas" pada form html yang terpilih(check)
    let luas;

    if (selectedShape === 'Persegi') {
        const sisi = document.getElementById('sisi').value;
        luas = persegi(sisi);
    } else if (selectedShape === 'Lingkaran') {
        const r = document.getElementById('r').value;
        luas = lingkaran(r);
    } else if (selectedShape === 'Segitiga') {
        const alas = document.getElementById('alas').value;
        const tinggi = document.getElementById('tinggi').value;
        luas = segitiga(alas, tinggi);
    }
}
