import {Router} from 'https://unpkg.com/@vaadin/router';
import Home from './templates/homePage/home.js';
import Login from './templates/authentication/login.js';
import Register from './templates/authentication/register.js'
import Logout from './templates/authentication/logout.js';
import Movies from './templates/movie/movies.js';
import NavBar from './templates/navigation/navigation.js';
import MovieCard from './templates/movie/movie-card.js';
import AddMovie from './templates/movie/addMovie.js';
import Details from './templates/movie/details.js';
import Delete from './templates/movie/delete.js';
import Edit from './templates/movie/edit.js';
import Like from './templates/movie/like.js';


customElements.define('nav-components', NavBar);
customElements.define('home-components',Home);
customElements.define('register-components',Register);
customElements.define('login-components',Login);
customElements.define('logout-components', Logout);
customElements.define('movies-components', Movies);
customElements.define('moviecard-components', MovieCard);
customElements.define('addmovie-components', AddMovie);
customElements.define('details-components', Details);
customElements.define('delete-element', Delete);
customElements.define('edit-components', Edit);
customElements.define('like-movie', Like);

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
  {path: '/edit/:id', component: 'edit-components'},
  {path: '/like/:id', component: 'like-movie'},
]);