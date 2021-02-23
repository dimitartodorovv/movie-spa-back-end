import {html, render} from 'https://unpkg.com/lit-html?module';
import {getOneMovie} from '../../services/movieAct.js'
import {errHandler} from "../../notification/notification.js"

let templateDetails = (ctx) => html `
<nav-components></nav-components>
    <div class="container">
                <div class="row bg-light text-dark">
              
                <h1>Movie title: ${ctx.movie.data.title}</h1>
                    
                    <div class="col-md-8">
                        <img class="img-thumbnail" src="${ctx.movie.data.imageUrl}" alt="Movie">
                    </div>
                    <div class="col-md-4 text-center">
                        <h3 class="my-3 ">Movie Description</h3>
                        <p>${ctx.movie.data.description}</p>
                        ${ctx.movie.data.creator == ctx.logUser ? html`
                        <a class="btn btn-danger"  href="/delete/${ctx.key}">Delete</a>
                      
                        <a class="btn btn-warning" href="/edit/${ctx.key}">Edit</a>` : html `
                        ${ctx.likeMovie ? html`<span class="enrolled-span">Liked ${ctx.movie.data.userLiked.length}</span>` : html `
                        <h3>You are like this movie</h3>
                        <a class="btn btn-primary" href="/like/${ctx.key}" disabled>Like</a>`}
                        `}
                    </div>
                </div>
            </div>
`

export default class Details extends HTMLElement {


     connectedCallback() {
        let [space,pathname,key] = location.pathname.split('/');

            let logUser = JSON.parse(localStorage.getItem("us"));
      
           getOneMovie(key).then(data => {
            
               if(data.error){
                   errHandler("error","errorNot",data.error);
                   return
                }
                
                let userLike = data.data.userLiked.some(x => x == logUser.us);
               
                this.likeMovie = userLike;
                this.movie = data;
                this.key = key;
                this.logUser = logUser.us
                
                this.render() 
            });      
              
        }

        render() {
             render(templateDetails(this), this, {eventContext: this})
        }
}