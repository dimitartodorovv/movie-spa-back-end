import {html, render} from 'https://unpkg.com/lit-html?module';
import {getAllMovie} from '../services/registration.js'
import {data} from '../services/userData.js'


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

    ${ctx.movies?.map(movie => html`<moviecard-components .data=${movie}></moviecard-components>`)}
    

        </div>
    </div>
</div>
        
        
        `


export default class Movies extends HTMLElement {
    constructor(){
        super();
                     
    
    }

     connectedCallback(){
       
        getAllMovie().then(movies => {
            this.movies = movies
            data.movie = movies
            this.render();  
          });
          
         
           
    }

    render() {
        
         render(templateMovies(this), this, {evenetContext: this})  
    }
}

