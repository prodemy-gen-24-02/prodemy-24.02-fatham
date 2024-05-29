
//GET Mehtod
const getAllPost = async () => {
    try {
        const response = await axios.get("https://dummyjson.com/comments");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

//getAllPost();


//POST Method
const mycomment = {
    body: "Awesome!",
    postId : 3,
    userId : 5,
}

const addNewComment = async (payload) => {
    try {
        const response = await axios.post('https://dummyjson.com/comments/add', payload);
        console.log(response);
    } catch (error){
        console.log(error);
    }
};

//addNewComment(mycomment);

//PUT Method
const newComment = {
    body : "This is more awesome",
}

const updateMycomment = async (id, payload) => {
    try {
        const response = await axios.put(
            `https://dummyjson.com/comments/${id}`, payload);
        console.log(response);
    } catch(error){
        console.log(error);
    }
};

//updateMycomment(5, newComment);


//DELETE
const deleteMycomment = async (id) => {
    try {
        const response = await axios.put(
            `https://dummyjson.com/comments/${id}`);
        console.log(response);
    } catch(error){
        console.log(error);
    }
};

deleteMycomment(5);