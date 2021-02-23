import {html, render} from 'https://unpkg.com/lit-html?module';
import {getAllMovie} from '../../services/movieAct.js'
import {errHandler} from "../../notification/notification.js";


const templateMovies = (ctx) =>  html `
        <h1 class="text-center">Movies</h1>
        <section>
            <a href="/addmovie" class="btn btn-warning ">Add Movie</a>
            <form class="search float-right">
                <label>Search: </label>
                <input type="text">
                <input type="submit" class="btn btn-info"  value="Search">
            </form>
        </section>
        <div class=" mt-3 ">
    <div class="row d-flex d-wrap">

    <div class="card-deck d-flex justify-content-center">
    ${ctx.movies.map(movie => html`<moviecard-components .data=${movie}></moviecard-components>`)}
    

        </div>
    </div>
</div>
        
        
        `


export default class Movies extends HTMLElement {
    

     connectedCallback(){
       
        getAllMovie().then(data => {

            if(data.error) {
                errHandler("error","errorNot",data.error);
                return
           }
            this.movies = data.data
           
            this.render();  
          });
          
         
           
    }

    render() {
        
         render(templateMovies(this), this, {evenetContext: this})  
    }
}

