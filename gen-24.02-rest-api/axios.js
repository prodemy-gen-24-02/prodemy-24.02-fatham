
//GET Mehtod
const getAllPosts = () => {
    axios.get("https://dummyjson.com/comments")
        .then(response => {

            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
};


//GET Mehtod by ID
const getPostId = async (id) => {
    try {
        const response = await axios.get(`https://dummyjson.com/comments/${id}`);
        await delay(5000);// Delay of 5 second
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


//POST Method
const mycomment = {
    body: "Awesome!",
    postId: 3,
    userId: 5,
}

const addNewComment = async (payload) => {
    try {
        const response = await axios.post('https://dummyjson.com/comments/add', payload);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};



//PUT Method
const newComment = {
    body: "This is more awesome",
}

const updateMycomment = async (id, payload) => {
    try {
        const response = await axios.put(
            `https://dummyjson.com/comments/${id}`, payload);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};


//DELETE
const deleteMycomment = async (id) => {
    try {
        const response = await axios.put(
            `https://dummyjson.com/comments/${id}`);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

const delay = (ms) => new Promise(resolve => {
    console.log('wait...');
    setTimeout(resolve, ms);
});


const runWithDelay = async () => {
    try {

        const allPosts = getAllPosts();
        const postById = getPostId(1);

        console.log("Fetching by id...");
        console.log(postById); //wait 5 second

        console.log("Fetching all posts..."); // tetap di eksekusi dahulu karena tidak ada await, berjalan secara asinkron
        console.log(allPosts);

        console.log("Add New Comment: ");
        addNewComment(mycomment);
        console.log("Update Comment: ");
        updateMycomment(5, newComment);
        console.log("Delete Comment: ");
        deleteMycomment(5);

    } catch (error) {
        console.log(error);
    }
};

runWithDelay();