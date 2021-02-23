import { html, render } from 'https://unpkg.com/lit-html?module';
import { userData } from '../../services/userData.js'


const templateNav = (ctx) => html`
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a class="navbar-brand text-light" href="/">Movies</a>
        <ul class="navbar-nav ml-auto ">
            ${ctx.name ? html`<li class="nav-item">
                <a class="nav-link">Welcome, ${ctx.name}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/logout">Logout</a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
            </li> -->
            `: html`
            <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
            </li>`}
        </ul>
    </nav>
    `



export default class NavBar extends HTMLElement {
   

    connectedCallback() {
        this.name = userData().username
        this.render();
    }

    render() {
        render(templateNav(this), this)
    }

}



