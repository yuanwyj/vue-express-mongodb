<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="btn">qwer</button>
  </div>
</template>

<script>
import api from '../api/api'
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    btn() {
      api.getprice()
      .then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>
