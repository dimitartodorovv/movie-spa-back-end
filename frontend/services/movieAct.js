

let API = `http://localhost:5050/`

const endpoint = {
        CREATE: "movie/create",
        ALL_MOVIE: "movie/movies",
        ONE_MOVIE: "movie/details",
        EDIT_MOVIE: "movie/edit",
        DELETE_MOVIE: "movie/delete",
        LIKE_MOVIE: "movie/like",
}



export async function getAllMovie() {

    let data = await fetch(`${API}${endpoint.ALL_MOVIE}`,{
        headers: {"Content-Type": "application/json"},
        method: "GET",
        credentials: "include",
    }).then(res => res.json())
    .then(data => {
        return data
    }).catch(err => {
        return err
    })

    return data
   
}

export async function creatMovie(title,description,imageUrl,peopleLiked,userLiked) {

    let movie = {
        title,
        description,
        imageUrl,
        peopleLiked,  
        userLiked
    }

   let result = await fetch(`${API}${endpoint.CREATE}`,{
       headers: {"Content-Type": "application/json"},
        method: "POST", 
        credentials: "include",
        body: JSON.stringify(movie)}).then(res => res.json())
    .then(data => {return data})
    .catch(err => {return err})

    return result 
}

export async function getOneMovie(id) {

    let data = await fetch(`${API}${endpoint.ONE_MOVIE}/${id}`,{
        headers: {"Content-Type": "application/json"},
        method: "GET",
        credentials: "include"
    }).then(res => res.json())
    .then(data => {return data}) 
    .catch(err => {return err})
   
    return data
}

export async function deletMovie(id) {

    let result = await fetch(`${API}${endpoint.DELETE_MOVIE}/${id}`,{
    headers: {"Content-Type": "application/json"},
    method: "DELETE",
    credentials: "include"})

    return result
}

export async function editMovie(title,description,imageUrl,id) {

    let movie = {
        title,
        description,
        imageUrl,
    }
    
    let result = await fetch(`${API}${endpoint.EDIT_MOVIE}/${id}`,{
        headers: {"Content-Type": "application/json"},
         method: "PATCH", 
         credentials: "include",
         body: JSON.stringify(movie)}).then(res => res.json())
     .then(data => {return data})
     .catch(err => {return err})

    return result
}

export async function likeMovie(idMovie,idUser) {

    let result = await fetch(`${API}${endpoint.LIKE_MOVIE}/${idMovie}`, {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        credentials: "include",
        body: JSON.stringify({id: idUser})
    })

    return result
}