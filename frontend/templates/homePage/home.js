import {html, render, nothing} from 'https://unpkg.com/lit-html?module';
import {userData} from '../../services/userData.js'



const templateHome = (ctx) => html`
<nav-components></nav-components>
<div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
<img src="https://s.studiobinder.com/wp-content/uploads/2019/06/Best-M-Night-Shyamalan-Movies-and-Directing-Style-StudioBinder.jpg"
    class="img-fluid" alt="Responsive image">
<h1 class="display-4">Movies</h1>
<p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
</div> 

${ctx.name ? html`
<movies-components></movies-components>
` : html `<p>We dont have movie now</p>`}

`


export default class Home extends HTMLElement {
       
   
        connectedCallback() {
        //     fetch("http://localhost:5050",{
        //         credentials: 'include'
        //     }).then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        const name = userData().username
        this.name = name;
           this.render()            
        }

        render() {
            render(templateHome(this), this, {eventContext: this});
        }
}