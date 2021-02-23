import {html, render} from 'https://unpkg.com/lit-html?module';


let templateCard = (ctx) => html `
        <div class="card mb-4">
        <img class="card-img-top" src="${ctx.data.imageUrl}" alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${ctx.data.title}</h4>
        </div>
        <div class="card-footer">
            <a href="/details/${ctx.data._id}"><button type="button" class="btn btn-info">Details</button></a>
        </div>

        </div>
`

export default class MovieCard extends HTMLElement {
  

    connectedCallback () {
    
       this.render()
    }

    render() {
        render(templateCard(this), this, {eventContext: this})
    }
}        

