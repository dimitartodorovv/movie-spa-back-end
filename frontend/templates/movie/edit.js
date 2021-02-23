import { html, render, nothing } from 'https://unpkg.com/lit-html?module';
import {Router} from 'https://unpkg.com/@vaadin/router';
import {getOneMovie, editMovie} from '../../services/movieAct.js';

const templateEdit = (ctx) => html`
   <nav-components></nav-components>
   <form class="text-center border border-light p-5"  @submit=${ctx.editMovie}>
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input type="text" class="form-control" placeholder="Movie Title" value="${ctx.movie.data.title}" name="title">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Movie Description..." name="description">${ctx.movie.data.description}</textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input type="text" class="form-control" placeholder="Image Url" value="${ctx.movie.data.imageUrl}" name="imageUrl">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

`




export default class Edit extends HTMLElement {


    editMovie(e) {
        e.preventDefault();

        let [space,pathname,key] = location.pathname.split('/');


        let formData = new FormData(e.target);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        
            
        editMovie(title,description,imageUrl,key).then(res => {
             Router.go('/');
        })
    }

    connectedCallback() {
        let [space,pathname,key] = location.pathname.split('/');
        
        getOneMovie(key).then(res => {
            
            this.movie = res
            
            this.render();
        })

       
            

          

    }

    render() {
        render(templateEdit(this), this, {eventContext: this})
    }

}