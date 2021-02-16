import {Router} from 'https://unpkg.com/@vaadin/router';
import Home from './templates/home.js'
import Login from './templates/login.js';
import Register from './templates/register.js'
import Logout from './templates/logout.js'
import Movies from './templates/movies.js';
import NavBar from './templates/navigation.js'
import MovieCard from './templates/movie-card.js'
import AddMovie from './templates/addMovie.js'
import Details from './templates/details.js';
import Delete from './templates/delete.js'
import Edit from './templates/edit.js'



customElements.define('nav-components', NavBar)
customElements.define('home-components',Home);
customElements.define('register-components',Register);
customElements.define('login-components',Login)
customElements.define('logout-components', Logout)
customElements.define('movies-components', Movies)
customElements.define('moviecard-components', MovieCard)
customElements.define('addmovie-components', AddMovie)
customElements.define('details-components', Details)
customElements.define('delete-element', Delete)
customElements.define('edit-components', Edit)

const outlet = document.getElementById('root');

const router = new Router(outlet);



router.setRoutes([
  {path: '/',component: 'home-components'},
  {path: '/register', component: 'register-components'},
  {path: '/login',  component: 'login-components'},
  {path: '/logout', component: 'logout-components'},
  {path: '/addmovie', component: 'addmovie-components'},
  {path: '/details/:id', component: 'details-components'},
  {path: '/delete/:id', component: 'delete-element'},
  {path: '/edit/:id', component: 'edit-components'}
]);