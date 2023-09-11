 // É uma forma de consumir promises
 // A forma de criar promises não muda


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

// <--------------------------------->
// <--------------------------------->
// <--------------------------------->



 const displayUser = async () =>{
    const user = await loginUser("raiffe@gmail.com", "123456");
    console.log({user});
 };

 //displayUser()

 // por causa do async await o JS espera a primeira linha da promise ser concluida para executar 
 // as proximas linhas 

 // usando o catch seria assim ==>

const displayUser2 = async () =>{
    try{
        const user2 = await loginUser ("raiffe@gmail.com", "123456");
        const videos = await getUserVideos(user2.email);
        const VideosDetails = await getVideoDetails(videos[0]);
        console.log({VideosDetails}); 
    } catch (error){
        console.log({error});
    }
}

displayUser2()