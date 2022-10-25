<script>
import {localStorage} from '../service/localStorage'
import {authToken} from '../service/api'

export default {
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
        if(response.status == 200) {
            let responseData = response.data;
            let token = responseData.accessToken;
            localStorage.set('accessToken', token);

        }
      });
    },
}
}


</script>

<template>
    <h1 class="logo">MetaWay</h1><br>
    <input type="text" id="username" placeholder="Login">
    <br>
    <input type="password" id="password" placeholder="Password">
</template>

<style>

</style>