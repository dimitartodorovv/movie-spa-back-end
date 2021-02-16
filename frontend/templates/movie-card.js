import {html, render} from 'https://unpkg.com/lit-html?module';
// import {userData} from '../services/userData.js'


let templateCard = (ctx) => html `
        <div class="card mb-4">
        <img class="card-img-top" src="${ctx.data.imageUrl}" alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${ctx.data.title}</h4>
        </div>
        <div class="card-footer">
            <a href="/details/${ctx.data.key}"><button type="button" class="btn btn-info">Details</button></a>
        </div>

        </div>
`

export default class MovieCard extends HTMLElement {
    constructor() {
        super();
      
    }

    connectedCallback () {
       
         render(templateCard(this), this, {eventContext: this})
    }


}        

