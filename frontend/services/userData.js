 
  
export const userData =  () => {
    
    try {
        
        let data = JSON.parse(localStorage.getItem('nickName'))
    
        return {
            email: data.email,
              
        }
    } catch (error) {
        
        return {
            email: ''
        }
    }

    
}

export const  data = {
    movie: [],
}