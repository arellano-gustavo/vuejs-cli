<template>
<div>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="4">                
                    <b-button @click="this.valid1" variant="success">Otro (local)</b-button>
                    <br/>                    
                    <b-button @click="this.valid2" variant="success">Otro (remoto)</b-button>
                    <br/>
                    <b-button @click="this.valid3" variant="success">Sample (local)</b-button>
                    <br/>
                    <b-button @click="this.valid4" variant="success">Sample (remoto)</b-button>
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
        valid1() {
          this.ok('/otro');
        },
        valid2() {
          this.ok('http://192.168.100.4:8081/otro');
        },
        valid3() {
          this.ok('/sample');
        },
        valid4() {
          this.ok('http://192.168.100.4:8081/sample');
        },
        ok(origen) {
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
