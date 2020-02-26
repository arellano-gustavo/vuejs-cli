<template>
<div>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="4">
                <b-form v-if="show">
                    <b-form-group id="input-group-1" label="Nueva Contraseña:" label-for="input-1" description="">
                        <b-form-input id="input-1" v-model="form.pass1" type="password" required placeholder=""></b-form-input>
                        <b-popover target="input-1" :show.sync="pop1" variant="danger" :content="validPass.passtxt1" triggers="manual">
                        </b-popover>
                    </b-form-group>
                    <b-form-group id="input-group-2" label="Confirmar Contraseña:" label-for="input-2">
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
        this.token = this.$route.params.token

        if (this.token === undefined) {
            let datar = JSON.parse(localStorage.getItem('crash'))
            this.token = datar.jwt
            this.user = datar.id
        }
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
            const passV1 = this.form.pass1;
            var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
            var validmask=re.test(passV1);
            console.log(validmask)
            if(!validmask){
                this.showDismissibleAlert = true
                this.mensajeErr ='Mínimo de ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número.'
            }else{
            if (this.form.pass1 === this.form.pass2){
              console.log('Entro')
                this.validUsr()
            } else {
                if (this.form.pass1 != this.form.pass2) {
                    document.getElementById('input-1').style.border = "1px solid red"
                    document.getElementById('input-2').style.border = "1px solid red"
                    this.pop1 = false
                    this.pop2 = false
                    this.showDismissibleAlert = true
                    this.mensajeErr ='Contraseñas no coinciden.'
                }
                if (this.form.pass1.length <= 8) {
                    this.pop1 = true
                    this.validPass.passtxt1 = 'Introduce una contraseña valida.'
                    document.getElementById('input-1').style.border = "1px solid red"
                } else {
                    this.pop1 = false
                    document.getElementById('input-1').style.border = "1px solid green"
                }
                if (this.form.pass2.length <=8) {
                    this.pop2 = true
                    this.validPass.passtxt2 = 'Introduce una contraseña valida.'
                    document.getElementById('input-2').style.border = "1px solid red"
                } else {
                    this.pop2 = false
                    document.getElementById('input-2').style.border = "1px solid green"
                }
            }
            }
        },
        validUsr() {
          
            this.axios.post('/api/chatbot/auth/change-password.json', {
                    password: this.form.pass2,
                    user: this.user
                }, {
                    headers: {
                        'jwt': this.token
                    }
                }).then((response) => {
                    console.log(response)
                })
                .catch((e) => {
                    console.log(e);
                });
                
                        this.pop1 = false
                        this.pop2 = false
                        this.$bvModal.msgBoxOk('Contraseña actualizada.', {
                                title: 'Validación',
                                size: 'sm',
                                buttonSize: 'sm',
                                okVariant: 'success',
                                headerClass: 'p-2 border-bottom-0',
                                footerClass: 'p-2 border-top-0',
                                centered: true
                            })
                            .then()
                            .catch(err => {
                                console.log('data' + err)
                            })
                    
        }
    }
}
</script>
