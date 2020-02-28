<template>
<div>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="4">                
                    <b-button @click="this.valid" 
variant="success">Axios ve a la cuarta</b-button>
            </b-col>
            <b-col cols="6"></b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import axios from 'axios';

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
          var origen = '/sample';
          origen = 'http://192.168.100.4:8081/sample';
          axios.post(origen, {
              id: 1,
              name: 'Fred',
              salary: 1234567890
          })
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
          this.$router.push('cuarta');
        }

    }
}
</script>
