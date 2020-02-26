<template>
<div>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="4">
                <b-form v-if="show">
                    <b-form-group id="input-group-1" label="Otra:" label-for="input-1" description="">
                        <b-form-input id="input-1" v-model="form.pass1" type="password" required placeholder=""></b-form-input>
                        <b-popover target="input-1" :show.sync="pop1" variant="danger" :content="validPass.passtxt1" triggers="manual">
                        </b-popover>
                    </b-form-group>
                    <b-form-group id="input-group-2" label="Listo:" label-for="input-2">
                        <b-form-input id="input-2" v-model="form.pass2" type="password" required placeholder=""></b-form-input>
                        <b-popover target="input-2" :show.sync="pop2" variant="danger" triggers="manual" :content="validPass.passtxt2">
                        </b-popover>
                    </b-form-group>
                    <b-alert variant="danger" dismissible fade :show="showDismissibleAlert" @dismissed="showDismissibleAlert=false">
                        {{mensajeErr}}
                    </b-alert>
                    <b-button @click="this.valid" variant="success">Actualizar</b-button>
                </b-form>
            </b-col>
            <b-col cols="6"></b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
export default {
    created() {
    },
    data() {
    },
    methods: {
        valid() {
        },
        validUsr() {
        }
    }
}
</script>
