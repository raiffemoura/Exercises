let usuarios = ["Raiffe", "Patricia", "Sophia"];

function inserirUsuario(nome, callBack){
    setTimeout(() => {
        usuarios.push(nome); callBack();
    },1000);
}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Lorena", listarUsuarios);


// -----------------------------------

const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
        const error = false;

        if (error){
            return onError(new Error("error in login!"));
        }
        console.log("user logged!");
        onSuccess({ email });
    }, 1500);
}

const getUserVideos = (email, callback) =>{
    setTimeout(() => {
        callback (["video1", "video2", "video3"]);
    }, 2000);
};

const getVideoDetails =(video, callback) =>{
    setTimeout(() => {
        callback({ title: "video title"})
    }, 3000);
};

const user = loginUser(
    "raiffemoura@gmail.com",
    "12345",
    (user) => {
        getUserVideos(user.email, (videos) =>{
            console.log({videos});
            getVideoDetails(videos[0], (videoDetails) =>{
                console.log( { videoDetails});
            });
        });
    },
    (error) =>{
        console.log({error});
    }
);