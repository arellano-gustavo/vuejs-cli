<template>
<div>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="4">                
                    <b-button @click="this.valid" variant="success">ve a la cuarta</b-button>
            </b-col>
            <b-col cols="6"></b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {            
        }
    },
    methods: {
        valid2() {
          this.$router.push('cuarta')
        },
        valid() {
          axios.post('/sample', {
              firstName: 'Fred',
              lastName: 'Flintstone'
          })
          .then(function (response) {
              console.log(response);
              this.$router.push('cuarta')
          })
          .catch(function (error) {
              console.log(error);
          });
        }

    }
}
</script>
