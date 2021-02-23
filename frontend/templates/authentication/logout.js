import {Router} from 'https://unpkg.com/@vaadin/router';
import {logout} from "../../services/registration.js";

export default class Logout extends HTMLElement {
  
    
    connectedCallback(){

      logout().then(() =>  {
            localStorage.setItem('nickName', JSON.stringify({uid: ''})) 

            Router.go('/login')
          }).catch((error) =>  {
            console.log(1);
            // An error happened.
          });
           
          
       
       
    }
}