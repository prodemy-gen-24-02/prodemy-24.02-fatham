const handleSubmit = async (e) => {
    e.preventDefault();
    // Combine newProduct and additionalImages into one object
    const productData = {
        ...newProduct,
        additionalImages: additionalImages.reduce((acc, img) => {
            acc[img.name] = img.value;
            return acc;
        }, {}),
    };
    // Add the new product to the database
    try {
        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });
        if (!response.ok) {
            throw new Error('Failed to add product');
        }
        alert('Product added successfully!');
        // Reset form
        setNewProduct({
            name: "",
            image: "",
            originalPrice: "",
            discountedPrice: "",
            quantity: "",
            color1: "",
            color2: "",
            link: ""
        });
        setAdditionalImages([]);
    } catch (error) {
        console.error(error);
        alert('Failed to add product');
    }
};