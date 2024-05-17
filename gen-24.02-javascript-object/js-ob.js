const readline = require('readline');

const rl = readline.createInterface({ //interface untuk membaca dan menulis pada terminal
    input: process.stdin, //membaca input
    output: process.stdout //menampilkan output ke terminal
});

let cars = [{
    type: "SUV",
    name: "Pajero",
    merk: "Mitsubishi",
    engine: "3000 cc"
}];

function displayCars(){
    console.log("\nCurrent cars:", cars);
}

function addCar() {
    rl.question('Enter car type: ', (type) => { //r1.question : menampilkan queri dgn menuliskan pada output, menunggu masukan user, lalu memanggil fungsi didalamnya dengan meneruskan input user sebagai argumen (yang diperlukan oleh fungsi didalamnya)
        rl.question('Enter car name: ', (name) => {
            rl.question('Enter car merk: ', (merk) => {
                rl.question('Enter car engine: ', (engine) => {
                    const newCar = { type, name, merk, engine }; //create new obj
                    cars.push(newCar); //push kedalam array obj
                    console.log("New car added:", newCar);
                    displayMenu();
                });
            });
        });
    });
}

function editCar() {
    displayCars();
    rl.question('Enter the index of the car you want to edit (index start at 0): ', (index) => {
        index = parseInt(index); //konversi input dari terminal menjadi int
        if (isNaN(index) || index < 0 || index >= cars.length) {
            console.log("Invalid index.");
            displayMenu();
        } else {
            rl.question('Enter the property you want to edit (type, name, merk, engine): ', (property) => {
                if (!['type', 'name', 'merk', 'engine'].includes(property)) { //cek input user apakah ada dalam properti
                    console.log("Invalid property.");
                    displayMenu();
                } else {
                    rl.question(`Enter new value for ${property}: `, (newValue) => {
                        cars[index][property] = newValue;
                        console.log(`Car at index ${index} updated.`, cars[index]);
                        displayMenu();
                    });
                }
            });
        }
    });
}

function handleUserChoice(choice) {
    switch (choice) {
        case '1':
            addCar();
            break;
        case '2':
            editCar();
            break;
        case '3':
            rl.close();
            break;
        default:
            console.log("Invalid choice. Please enter 1, 2, or 3");
            displayMenu();
            break;
    }
}



function displayMenu() {
    displayCars();
    console.log("\nMenu:");
    console.log("1. Add a new car");
    console.log("2. Edit a car");
    console.log("3. Exit");
    rl.question('Please choose an option (1, 2, or 3): ', handleUserChoice);
}

displayMenu();
