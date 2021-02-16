
let API = `http://localhost:5050/`

const endpoint = {
        REGISTER: "auth/registration",
        LOGIN: "auth/login",
}

export  async function singIn(email,password) {
    
    let result =  await fetch(`${API}${endpoint.LOGIN}`,{
        headers: {"Content-Type": "application/json" },
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({email,password})}).then(res => res.json())
    .then((data) => {         
           return data
       })
       .catch((error) => {
            return error
       });
       console.log(result);

     localStorage.setItem("nickName", result.email);
    //  localStorage.setItem("tokenMovie", result.token);
    //    document.cookie = `tokenMovie=${result.token}`
       
        return result
   }

   export default async function createUser(email,username,password,rePass) {

  let result =  await fetch(`${API}${endpoint.REGISTER}`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({email,username,password,rePass})}).then(res => res.json())
    .then((data) => {      
       return data
    })
    .catch((error) => {
        return error
    });

    
    return result
}


export async function getAllMovie() {

    let data = await fetch(`${API}`) 
    .then(res => res.json())
    .then(data => {
            return data
    })
    .catch(err => {
        return err
    })

    return Object.keys(data).map(key => ({key, ...data[key]}))
}

export async function creatMovie(title,description,imageUrl,peopleLiked,userLikes) {

    let movie = {
        title,
        description,
        imageUrl,
        peopleLiked,
        userLikes
    }

   let result = await fetch(`${API}/.json`,{method: "POST", body: JSON.stringify(movie)})
    .then(res => res.json())
    .then(data => {return data})
    .catch(err => {return err})

    return result 
}

export async function getOneMovie(id) {

    let data = await fetch(`${API}/${id}/.json`).then(res => res.json())
    .then(data => {return data}) 
    
    return data
}

export async function deletMovie(id) {

    let result = await fetch(`${API}/${id}/.json`,{method: "DELETE"})

    return result
}

export async function editMovie(title,description,imageUrl,id) {

    let movie = {
        title,
        description,
        imageUrl,
    }

    let result = await fetch(`${API}/${id}/.json`, {method: 'PATCH', body: JSON.stringify(movie)})

    return result
}