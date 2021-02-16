import {Router} from 'https://unpkg.com/@vaadin/router';


export default class Logout extends HTMLElement {
    constructor() {
        super();
    }

    

    connectedCallback(){

        firebase.auth().signOut().then(function() {
            localStorage.setItem('nickName', JSON.stringify({uid: '', email: ''})) 

            Router.go('/login')
          }).catch(function(error) {
            // An error happened.
          });
           
          
       
       
    }
}