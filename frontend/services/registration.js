import {localStor} from "./localStorageSetting.js";


let API = `http://localhost:5050/`

const endpoint = {
        REGISTER: "auth/registration",
        LOGIN: "auth/login",
        LOGOUT: "auth/logout",
}

export  async function singIn(email,password) {
    
    let result =  await fetch(`${API}${endpoint.LOGIN}`,{
        headers: {"Content-Type": "application/json" },
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({email,password})}).then(res => res.json())
    .then((data) => {         
            localStor(data)
           return data
       })
       .catch((error) => {
            return error
       });
    
       
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

export async function logout() {

    let result =  await fetch(`${API}${endpoint.LOGOUT}`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        credentials: 'include'}).then(res => res.json())
      .then((data) => {      
         return data
      })
      .catch((error) => {
          return error
      });
  
      
      return result
}
