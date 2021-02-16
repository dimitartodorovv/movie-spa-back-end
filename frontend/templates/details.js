import {html, render} from 'https://unpkg.com/lit-html?module';
import {getOneMovie} from '../services/registration.js'


let templateDetails = (ctx) => html `
<nav-components></nav-components>
    <div class="container">
                <div class="row bg-light text-dark">
                <h1>Movie title: ${ctx.movie.title}</h1>
                    
                    <div class="col-md-8">
                        <img class="img-thumbnail" src="${ctx.movie.imageUrl}" alt="Movie">
                    </div>
                    <div class="col-md-4 text-center">
                        <h3 class="my-3 ">Movie Description</h3>
                        <p>${ctx.movie.description}</p>
                        <a class="btn btn-danger"  href="/delete/${ctx.key}">Delete</a>
                        <a class="btn btn-warning" href="/edit/${ctx.key}">Edit</a>
                        <a class="btn btn-primary" href="/like/${ctx.key}">Like</a>
                        <span class="enrolled-span">Liked 1</span>
                    </div>
                </div>
            </div>
`

export default class Details extends HTMLElement {


     connectedCallback() {
        let [space,pathname,key] = location.pathname.split('/');

            let result = getOneMovie(key).then(res => {

                this.movie = res;
                this.key = key;
              this.render() 

            });

            
              
              
        }

        render() {
             render(templateDetails(this), this, {eventContext: this})
        }
}