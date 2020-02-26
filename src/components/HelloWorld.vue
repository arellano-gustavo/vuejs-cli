<template>
<div>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="4">
                <b-form v-if="show">
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
        return {
            user: '',
            showDismissibleAlert: false,
            form: {
                pass1: '',
                pass2: ''
            },
            validPass: {
                passtxt1: ' ',
                passtxt2: ' '
            },
            show: true,
            token: '',
            pop1: false,
            pop2: false,
            mensajeErr:''
        }
    },
    methods: {
        valid() {
          console.log('va...')
          this.$router.push('/otra')                              
        }
    }
}
</script>
