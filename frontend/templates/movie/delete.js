import {deletMovie} from '../../services/movieAct.js'
import {Router} from 'https://unpkg.com/@vaadin/router';


export default class Delete extends HTMLElement {

    onBeforeEnter(location) {
          
        let id = location.params.id;
    
            deletMovie(id).then(data => {

                if(data.error){
                    errHandler("error","errorNot",data.error);
                    return
                 }
                 Router.go('/')
              })
         
    }


}