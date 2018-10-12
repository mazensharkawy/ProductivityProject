<template lang="html">
  <div id="LincolnDecisionMakingTool" class="">
    <div class="ui hidden divider"></div>
    <div class="ui two column grid">

    <div class="ui column raised segment blue" @keyup.enter="addCon">
      <div class="ui row">
        <div class="ui massive top attached blue label">Cons</div>
      </div>
      <div class="ui hidden divider">

      </div>
      <div class="ui row no-print">
      <input class="ui input large" v-model="tempConTitle" type="text" title="title" placeholder="Enter a Con">
      <input class="ui input large" v-model="tempConscore" type="number" title="" placeholder="Enter Con Imaginary Score">
      <div class="ui large button teal" @click="addCon" title="Submit">Submit</div>
    </div>
    <div v-for="con in cons" class="ui grid" :key="con.title">
      <p class="ui six wide column">{{con.title}}</p>
      <div class="ui column"></div>
      <p class="ui seven wide column">{{con.score}}</p>
    </div>
    <div class="ui grid">
      <div class="ui four wide column"></div>
      <div class="ui four wide column"></div>
      <div class="ui eight wide column">
        <h1>Total: {{totalCons}}</h1>
      </div>
    </div>
  </div>

  <div class="ui column raised segment purple" @keyup.enter="addPro">
    <div class="ui row">
      <div class="ui massive top attached purple label">Pros</div>
    </div>

    <div class="ui hidden divider"></div>

    <div class="ui row no-print">
    <input class="ui input large" v-model="tempProTitle" type="text" title="title" placeholder="Enter Pro Title">
    <input class="ui input large" v-model="tempProscore" type="number" title="" placeholder="Enter Pro Imaginary Score">
    <div class="ui large button blue" @click="addPro" title="Submit">Submit</div>
  </div>
  <div v-for="pro in pros" class="ui grid" :key="pro.title">
    <p class="ui six wide column">{{pro.title}}</p>
    <div class="ui column"></div>
    <p class="ui seven wide column">{{pro.score}}</p>
  </div>
  <div class="ui grid">
    <div class="ui four wide column"></div>
    <div class="ui four wide column"></div>
    <div class="ui eight wide column">
      <h1>Total: {{totalPro}}</h1>
    </div>
  </div>
  </div>
</div>
<br>
<br>
<br>
  <div class="ui grid no-print">
    <div class="ui seven wide column"></div>
    <div class="ui left pointing red label basic holder visible content">
      We encourage you to print this and hang it where you can see it
    </div>
    <div class="ui massive purple button" @click="print">
      <h1>Print</h1>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Mazen',
      totalCons: 0,
      totalPro: 0,
      tempConTitle: '',
      tempConscore: 0,
      tempProTitle: '',
      tempProscore: 0,
      cons: [
        {title: 'Title', score: 'Con imaginary score'}
      ],
      pros: [
        {title: 'Title', score: 'Pro imaginary score'}
      ]
    }
  },
  methods: {
    addCon: function () {
      if (this.tempConTitle === '') {
        this.cons.push({ title: 'Untitled Con', score: this.tempConscore, quantity: this.tempConQuantity })
      } else {
        this.cons.push({ title: this.tempConTitle, score: this.tempConscore, quantity: this.tempConQuantity })
      }
      this.totalCons += Number(this.tempConscore)
      this.tempConTitle = ''
      this.tempConscore = 0
    },
    addPro: function () {
      if (this.tempProTitle === '') {
        this.pros.push({ title: 'Untitled Pro', score: this.tempProscore, quantity: this.tempProQuantity })
      } else {
        this.pros.push({ title: this.tempProTitle, score: this.tempProscore, quantity: this.tempProQuantity })
      }
      this.totalPro += Number(this.tempProscore)
      this.tempProTitle = ''
    },
    print: function () {
      window.print()
    }
  }
}
</script>

<style lang="css">
  .holder {
    height: 30px
  }
  .holder .middle {
    height: 100%
  }
  @media print
  {
      .no-print, .no-print *
      {
          display: none !important;
      }
  }
  .type {
    font-size: 26px;
  }
</style>
