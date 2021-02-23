 
  
export const userData =  () => {
    
    try {
        
        let data = JSON.parse(localStorage.getItem('nickName'))
    
        return {
            username: data.username,
              
        }
    } catch (error) {
        
        return {
            username: ''
        }
    }

    
}

export const  data = {
    movie: [],
}