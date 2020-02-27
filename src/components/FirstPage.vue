<template>
<div>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="4">                
                    <b-button @click="this.valid" variant="success">Actualizar</b-button>
            </b-col>
            <b-col cols="6"></b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            pop2: false
        }
    },
    methods: {
        valid() {
          console.log('va...')
          this.$router.push('otra')
        }
    }
}
</script>
