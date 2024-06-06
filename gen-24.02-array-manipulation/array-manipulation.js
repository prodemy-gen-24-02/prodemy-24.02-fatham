// import product from "./product";

const product =[
    {
        id :1,
        name : 'EcoKnit™ Seamed Sweatshirt',
        originalPrice : 88,
        discountedPrice : 62,
        quantity : 15,
        color : 'Blue',
        link : 'https://unitedbyblue.com/products/mens-bison-ultralight-vest?variant=39541581512776'
    }

];

const createNewProduct = async (id, name, originalPrice, discountedPrice, quantity, color, link) => {
    const newProduct = {
        id,
        name,
        originalPrice,
        discountedPrice,
        quantity,
        color,
        link
    };

    await wait(1000);

    product.push(newProduct);
    console.log('Product created: ', newProduct);
    console.log('Current product list: ', product);
};

const deleteProductById = async(id) => {
    console.log('Before: ', product)
    let isDeleted = false;
    for (let i =0; i<product.length; i++){
        if(product[i].id === id){

            await wait(3000);

            product.splice(i,1);
            isDeleted = true;
            break;
        }
    }
    if(isDeleted){
        console.log(`Product dengan id ${id} dihapus.`);
    }
    else{
        console.log(`Product dengan id ${id} tidak ditemukan.`);
    }
    console.log('After: ', product);
};


const editProductNameById = async (id, newName) => {
    const prod = product.find(p => p.id === id);
    if (prod) {
        prod.name = newName;
        await wait(3000);
        console.log(`Product dengan id ${id} berganti nama menjadi: ${newName}.`);
    } else {
        console.log(`Product dengan id ${id} tidak ditemukan.`);
    }
    console.log(product);
};

const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const arrayManipulation = async() => {
    await createNewProduct(
        2,
        'Bison Ultralight Vest',
        148,
        105,
        15,
        'Black',
        'http'
    )
    
    // Deleting a product by id
    await deleteProductById(2);
    
    // Editing a product name by id
    await editProductNameById(1, 'New EcoKnit™ Seamed Sweatshirt');

}

arrayManipulation();
