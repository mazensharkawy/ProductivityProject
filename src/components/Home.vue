<template lang="html">
  <div class="home">
    <div class="ui hidden divider"></div>
    <div class="ui hidden divider"></div>
    <div class="ui hidden divider"></div>

    <div class="ui primary button" @click="start">
      {{buttonText}}
    </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      buttonText: 'Let\'s get started !!'
    }
  },
  methods: {
    start: function (event) {
      this.buttonText = 'RIGHT ON !'
    }
  }
}
</script>

<style lang="css">
  .home {

  }
</style>
