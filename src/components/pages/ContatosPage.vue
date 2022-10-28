<script>
import { api } from "../../service/api";
import { localStorage } from "../../service/localStorage";

export default {
    name: 'ContatosPage',
    components: {
        localStorage
    },
    data() {
        return {
            buscaNome: '',
            buscaID: null,
            contatos: []
        }
    },
    async mounted() {
        await this.buscar();
        let getCurrentAccessToken = localStorageService.get('accessToken');
        if (!getCurrentAccessToken) {
            this.$router.push({ name: 'Login' });
        }
    },
    methods: {
        async buscar() {
            const response = await api.post('/listar/contatos', {
                termo: this.buscaNome
            });

            if (response.status === 200) {
                this.contatos = response.data;
            }
        },
    },
    computed: {
        totalResultados() {
            return this.contatos.length;
        }
    }
}
</script>

<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-12">
                <HeaderComponent />
                <div class="card">
                    <div class="card-header">

                        <div class="mt-4">
                            <h3>Resultados encontrados ({{ totalResultados }})</h3>

                            <div v-if="contatos.length > 0" v-for="contato in contatos" class="card mb-4">
                                <div class="card-body">
                                    <div class="position-absolute end-0 top-0">
                                        <button v-on:click="excluir(contato.id)"
                                            class="btn btn-danger float-right small text-uppercase px-2 py-1 rounded-0">Excluir</button>
                                    </div>

                                    <div class="row">
                                        <div class="col-8">
                                            <h5 class="card-title">#{{ contato.pessoa.id }} {{ contato.pessoa.nome }}
                                            </h5>
                                            <h6 class="card-subtitle mb-2 text-muted">{{ contato.email }}</h6>
                                            <p class="card-text">{{ contato.telefone }}</p>
                                        </div>
                                    </div>

                                    <table class="table table-bordered table-striped rounded-2">
                                        <thead>
                                            <tr>
                                                <th>Endereço</th>
                                                <th>Número</th>
                                                <th>Bairro</th>
                                                <th>Cidade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{{ contato.pessoa.endereco.logradouro }}</td>
                                                <td>{{ contato.pessoa.endereco.numero }}</td>
                                                <td>{{ contato.pessoa.endereco.bairro }}</td>
                                                <td>{{ contato.pessoa.endereco.cidade }} - {{
                                                        contato.pessoa.endereco.estado
                                                }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div v-else>
                                <small>Nenhum resultado encontrado</small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>