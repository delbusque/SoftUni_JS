import loginTemplate from '../templates/loginTemplate.js'
import * as authService from '../services/authService.js'

export function loginView(ctx) {

    const onLoginSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget)
        let email = formData.get('email').trim()
        let password = formData.get('password').trim()
        authService.login(email, password).then(() => {
            ctx.page.redirect('/movies')
        })
    };

    ctx.render(loginTemplate(onLoginSubmit));
}