import {html, render, nothing} from 'https://unpkg.com/lit-html?module';
import {creatMovie} from '../services/registration.js'
import {Router} from 'https://unpkg.com/@vaadin/router';


const templateAddMovie = (ctx) => html `
<nav-components></nav-components>
    <form class="text-center border border-light p-5" action="/addmovie" method="POST" @submit=${ctx.addMovie}>
    <h1>Add Movie</h1>
    <div class="form-group">
        <label for="title">Movie Title</label>
        <input type="text" class="form-control" placeholder="Title" name="title" value="">
    </div>
    <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea class="form-control" placeholder="Description" name="description"></textarea>
    </div>
    <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
`

export default class AddMovie extends HTMLElement {
    connectedCallback() {
        this.render()
    }

  async addMovie(e) {
        e.preventDefault();
        let formData  = new FormData(e.target)
        let title =  formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let peopleLiked = 0;
        let userLikes = '';

       let result = await creatMovie(title,description,imageUrl,peopleLiked,userLikes)
       .then(res => {  
           Router.go('/')
       })

    
    }

    render() {
        render(templateAddMovie(this), this,{eventContext: this})
    }
}