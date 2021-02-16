
import {html, render} from 'https://unpkg.com/lit-html?module';
import {Router} from 'https://unpkg.com/@vaadin/router';
import {singIn} from '../services/registration.js'
import {errHandler} from "../notification/notification.js";


let templateLogin = (ctx) => html `

    <nav-components></nav-components>
<form id="login-form"class="text-center border border-light p-5" action="/" method="POST" @submit=${ctx.loginPost}>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Email" name="email" value="">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Password" name="password" value="">
            </div>
        
            <button type="submit"  class="btn btn-primary">Login</button>
        </form>`


export default class Login extends HTMLElement {
    


    loginPost(e) {
        e.preventDefault();
     let formData  = new FormData(e.target)
     let email =  formData.get('email');
     let password = formData.get('password');
     

        singIn(email,password)
        .then(data => {
            console.log(data);
            if(data.error){
                    errHandler("error","errorNot",data.error);
                return
            }

                Router.go('/')
        })
                
        
    }

    
    connectedCallback(){
        this.render();
    }
    
    

  render(){
        
        render(templateLogin(this), this, {eventContext: this})

     
    }
}


