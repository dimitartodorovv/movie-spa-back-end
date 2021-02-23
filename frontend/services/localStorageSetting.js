

export function localStor(data) {
    
    
    const userKey = JSON.stringify({username: data.username})
            localStorage.setItem("nickName", userKey);
            const idUser = JSON.stringify({us: data.id})
            localStorage.setItem("us", idUser);


}