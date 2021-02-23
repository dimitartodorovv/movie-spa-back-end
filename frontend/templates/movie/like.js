import {Router} from 'https://unpkg.com/@vaadin/router';
import {likeMovie} from "../../services/movieAct.js";



export default class LikeMovie extends HTMLElement {

    onBeforeEnter(location) {
        
        let id = location.params.id;

        let logUser = JSON.parse(localStorage.getItem("us"));
       
        likeMovie(id,logUser.us).then(data => {
            Router.go('/')
        })
    }
}