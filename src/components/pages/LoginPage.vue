<script>
import { localStorage } from '../../service/localStorage'
import { authToken } from '../../service/api'

export default {
    name: 'Login',
    data() {
        return {
            form: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        sendForm() {
            authToken.login(this.form.username, this.form.password).then((response) => {
                if (response.status == 200) {
                    let responseData = response.data;
                    let token = responseData.accessToken;
                    localStorage.set('accessToken', token);
                    window.location.href('/listar-contatos')

                }
            });
        },
    },
}


</script>

<template>
    <h1 class="logo">MetaWay</h1><br>
    <input type="text" id="username" placeholder="Login">
    <br>
    <input type="password" id="password" placeholder="Password">
    <br>
    <button>Entrar</button>
</template>

<style>

</style>