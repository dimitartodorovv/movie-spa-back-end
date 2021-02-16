import {deletMovie} from '../services/registration.js'
import {Router} from 'https://unpkg.com/@vaadin/router';


export default class Delete extends HTMLElement {

   async onBeforeEnter(location,commands) {
          
          let result =  await deletMovie(location.params.id);

          try {
              Router.go('/')
          } catch (error) {
              
          }
    }

    connectedCallback() {
      
    }


}