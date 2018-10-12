<template lang="html">
    <div id="booster-panel" class="ui raised segment">

      <div class="ui grid ">

        <div class="ui column"></div>
        <div class="ui large red column button middle aligned content"
              :class="{disabled: secondsPerPage <= 0 || isRunning }"
              @mousedown="decrement('secondsPerPage')" @mouseup="stopInterval">-</div>
        <div class="ui large input four wide column">
          <div class="ui top attached label">SECONDS PER PAGE</div>
          <input class="ui center aligned segment" style="height:100px;" type="text" v-model="secondsPerPage">
        </div>
        <div class="ui large green column button middle aligned content" :class="{disabled: isRunning }"
            @mousedown="increment('secondsPerPage')" @mouseup="stopInterval">+</div>

        <div class="ui column"></div>
        <div class="ui large red column button middle aligned content"
              :class="{disabled: pageNumber<=1 || isRunning }"
              @mousedown="decrement('pageNumber')" @mouseup="stopInterval">-</div>
        <div class="ui large input four wide column">
          <div class="ui top attached label">CURRENT PAGE NUMBER</div>
          <input class="ui center aligned segment" :class="{'massive':isRunning, 'running-text': isRunning}" style="height:100px;" type="text" v-model="pageNumber">
        </div>
        <div class="ui large green column button middle aligned content" :class="{disabled: isRunning }"
            @mousedown="increment('pageNumber')" @mouseup="stopInterval">+</div>
      </div>
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>

      <div class="holder">
      <div class="ui middle aligned grid">
        <div class="ui six wide column"></div>
        <div v-if="!isRunning" class="ui column"></div>
        <div v-if="isRunning" class="ui four wide column" >
           <div class="ui top red basic attached label" dir="rtl">REMAINING SECONDS</div>
          <div class="ui label massive fluid ">
              {{remainingSeconds}}
            </div>
      </div>

        <div class="ui massive button" :class="{primary:!isRunning, red: isRunning}"
        @click="toggleRunningState" >
          <div class="" v-if="!isRunning">START</div>
          <div class="" v-if="isRunning">PAUSE</div>
        </div>
        <br>
        <br>
      </div>
      </div>

    </div>
</template>

<script>
import audioFile from '@/components/base.mp3'
export default {
  data () {
    return {
      secondsPerPage: 45,
      pageNumber: 1,
      remainingSeconds: 0,
      isRunning: false,
      interval: false,
      audio: new Audio(audioFile)
    }
  },
  methods: {
    toggleRunningState: function () {
      if (!this.isRunning) {
        this.start()
      } else {
        this.stopInterval()
      }
      this.isRunning = !this.isRunning
    },
    start: function () {
      const self = this
      self.remainingSeconds = self.secondsPerPage
      if (!this.interval) {
        this.interval = setInterval(function () {
          if (self.remainingSeconds > 0) {
            self.remainingSeconds--
          } else {
            self.remainingSeconds = self.secondsPerPage
            self.pageNumber++
            self.audio.play()
          }
        }, 1000)
      }
    },
    decrement: function (value) {
      const self = this
      if (!this.interval) {
        switch (value) {
          case 'secondsPerPage':
            this.interval = setInterval(function () {
              self.secondsPerPage--
              if (self.secondsPerPage <= 0) {
                self.stopInterval()
              }
            }, 50)
            break
          case 'pageNumber':
            this.interval = setInterval(function () {
              self.pageNumber--
              if (self.pageNumber <= 1) {
                self.stopInterval()
              }
            }, 70)
            break
          default:
        }
      }
    },
    increment: function (value) {
      const self = this
      if (!this.interval) {
        switch (value) {
          case 'secondsPerPage':
            this.interval = setInterval(function () {
              self.secondsPerPage++
              if (self.secondsPerPage <= 0) {
                self.stopInterval()
              }
            }, 50)
            break
          case 'pageNumber':
            this.interval = setInterval(function () {
              self.pageNumber++
              if (self.pageNumber <= 0) {
                self.stopInterval()
              }
            }, 70)
            break
          default:
        }
      }
    },
    stopInterval: function () {
      clearInterval(this.interval)
      this.interval = false
    }
  }
}
</script>

<style lang="css">
  #booster-panel {
    padding-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    min-height: 300px;
  }
  .input-button {
    text-align: center !important;
    display: flex !important;
    align-items: center !important;
  }
  .running-text{
    color: red !important;
  }
  .holder {
    min-height: 60px !important
  }
  .holder .middle {
    height: 100%
  }
</style>
