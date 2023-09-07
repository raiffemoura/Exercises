// const loginUser = (email, password, onSucess, onError) => {
//     setTimeout(() => {
//         const error = false;

//         if (error){
//             return onError(new Error("Error in Login!"));
//         }

//         console.log("User Logged!");
//         onSucess({ email });
//     }, 1500);
// };

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if (error) {
            reject(new Error("Error In Login!"));
        }

        console.log("User Logged!");
        resolve({ email });
    });
};

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getUserVideos")
            resolve(["video1", "video2", "video3"]);
        }, 2000);
    })
};

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getVideosDetails")
            resolve({ title: "video title" })
        }, 3000);
    })
};

loginUser("raiffemoura@gmail.com", "1234567")
.then((user) => getUserVideos(user.email))
.then((videos) => getVideoDetails(videos[0]))
.then((videosDetails) => console.log({videosDetails}))
.catch((error) => console.loooooo({ error }));


// promisse.all


const yt = new Promise((resolve) =>{
    setTimeout(() => {
        resolve("videos from youtube");
    }, 5000);
});

const fb = new Promise((resolve) =>{
    setTimeout(() => {
        resolve("Posts from facebook")
    }, 8000);
})

Promise.all([yt, fb]).then((result) =>{
    console.log({result})
})


