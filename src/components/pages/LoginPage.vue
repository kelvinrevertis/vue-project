<template>
    <slot>
        <div>Teste</div>
    </slot>
    <div>
        <h1 class="logo">MetaWay</h1><br>
    </div>
    <div>
        <input type="text" id="username" placeholder="Login" required v-model="form.username">
        <br>
        <input type="text" id="password" placeholder="Password" required v-model="form.password">
        <br>
        <button type="submit" @click="sendForm">Entrar</button>
    </div>
    <button @click="changePage">Contatos</button>
    <router-link to="/private">Contatos</router-link>
</template>

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
                if (response.status === 200) {
                    let responseData = response.data;
                    let token = responseData.accessToken;
                    localStorage.set('accessToken', token);
                    window.location.href = '/contatos'
                    //this.$router.push("/listar-contatos");
                }
            });
        },
        changePage(){
            this.$router.push('/private')
            console.log("Teste")
        }
    },
}


</script>


<style>

</style>