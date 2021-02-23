import {html, render} from 'https://unpkg.com/lit-html?module';
import {errHandler} from "../../notification/notification.js";
import {Router} from 'https://unpkg.com/@vaadin/router';

import createUser from '../../services/registration.js'

const templateRegister = (ctx) => html`
<nav-components></nav-components>
    <form class="text-center border border-light p-5" action="/register" method="POST" @submit=${ctx.registerPost}>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" placeholder="Email" name="email" value="">
    </div>
    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" placeholder="Username" name="username" value="">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="Password" name="password" value="">
    </div>

    <div class="form-group">
        <label for="repeatPassword">Repeat Password</label>
        <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="">
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
    </form>`


export default class Register extends HTMLElement {

    registerPost(e) {
        e.preventDefault()
        let formData  = new FormData(e.target)
        let email =  formData.get('email');
        let username = formData.get('username');
        let password = formData.get('password');
        let repeatPass = formData.get('repeatPassword');
     

        if(password != repeatPass){
            errHandler("error","errorNot","The passwords not match!");
        }
        

      createUser(email,username,password,repeatPass)
      .then(data => {
        
        if(data.error){
            errHandler("error","errorNot",data.error);
              return
          }
          errHandler("success","successNot",data.message);

          Router.go("/login")
      })
      
      
          
    }

    connectedCallback() {
        render(templateRegister(this), this, {eventContext: this})
    }
}


