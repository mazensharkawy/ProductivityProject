<template lang="html">
  <div id="header" class="no-print header">

    <div class="ui container">

      <div class="left-part-container">
        <router-link :to="{ name: 'home' }" tag="div">
          <a class="logo">Practical Productivity</a>
        </router-link>
      </div>

      <div class="right-part-container">
        <div class="ui grid">

          <div class="ui two wide column">
            <router-link :to="{ name: 'home' }" tag="div">
              <div class="ui fluid white button">HOME</div>
            </router-link>
          </div>

          <!-- <div class="ui column"></div> -->

          <div class="ui two wide column">
            <router-link :to="{ name: 'reading-booster' }" tag="div">
              <div class="ui white fluid button">READING BOOSTER</div>
            </router-link>
          </div>

          <!-- <div class="ui column"></div> -->

          <div class="ui six wide column item" tag="div">
            <router-link :to="{ name: 'abraham-lincoln-decision-making-tool' }">
              <div class="ui white fluid button">ABRAHAM LINCOLN DECISION MAKING TOOL</div>
            </router-link>
          </div>

      </div>
    </div>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="css">
  .header {
    height: 60px;
    background-color: #fff;
    /*background-color: #dc672c;*/
    -webkit-box-shadow: 0 3px 2px 0 rgba(50, 50, 50, 0.1);
    -moz-box-shadow:    0 3px 2px 0 rgba(50, 50, 50, 0.1);
    box-shadow:         0 3px 2px 0 rgba(50, 50, 50, 0.1);
    padding-top: 5px;
    position: relative;
    z-index: 3;
  }

  .logo {
    font-size: 32px;
    font-family: Satisfy, cursive;
    /*background: linear-gradient(to bottom, #005c97, #363795);*/
    background: linear-gradient(to bottom, #a65bc8, #363795);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .right-part-container {
    float: left;
    padding-top: 5px;
    padding-left: 20px;
  }

  .left-part-container {
    float: left;
    padding-top: 16px;
  }
  ui.white.buttons .button,
  .ui.white.button {
    background-color: #ffffff;
    color: #2185d0;
    text-shadow: none;
    background-image: none;
  }
  .ui.white.button {
    box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
  }
  .ui.white.buttons .button:hover,
  .ui.white.button:hover {
    background-color: #fbfcfc;
    color: #5e46a6;
    text-shadow: none;
  }
  .ui.white.buttons .button:focus,
  .ui.white.button:focus {
    background-color: #ffffff;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.white.buttons .button:active,
  .ui.white.button:active {
    background-color: #ffffff;
    color: #ffffff;
    text-shadow: none;
  }
  .ui.white.buttons .active.button,
  .ui.white.buttons .active.button:active,
  .ui.white.active.button,
  .ui.white.button .active.button:active {
    background-color: #dfe2e6;
    color: #2185d0;
    text-shadow: none;
  }

  /* Basic */
  .ui.basic.white.buttons .button,
  .ui.basic.white.button {
    box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset !important;
    color: rgba(0, 0, 0, 0.6) !important;
  }
  .ui.basic.white.buttons .button:hover,
  .ui.basic.white.button:hover {
    background: transparent !important;
    box-shadow: 0px 0px 0px 2px #fbfcfc inset !important;
    color: #fbfcfc !important;
  }
  .ui.basic.white.buttons .button:focus,
  .ui.basic.white.button:focus {
    background: transparent !important;
    box-shadow: 0px 0px 0px 2px #ffffff inset !important;
  }
  .ui.basic.white.buttons .active.button,
  .ui.basic.white.active.button {
    background: transparent !important;
    box-shadow: 0px 0px 0px 2px #dfe2e6 inset !important;
    color: #ffffff !important;
  }
  .ui.basic.white.buttons .button:active,
  .ui.basic.white.button:active {
    box-shadow: 0px 0px 0px 2px #ffffff inset !important;
    color: #ffffff !important;
  }
  .ui.buttons:not(.vertical) > .basic.white.button:not(:first-child) {
    margin-left: -2px;
  }

  /* Inverted */
  .ui.inverted.white.buttons .button,
  .ui.inverted.white.button {
    background-color: transparent;
    box-shadow: 0px 0px 0px 2px #d4d4d5 inset !important;
    color: #ffffff;
  }
  .ui.inverted.white.buttons .button:hover,
  .ui.inverted.white.button:hover,
  .ui.inverted.white.buttons .button:focus,
  .ui.inverted.white.button:focus,
  .ui.inverted.white.buttons .button.active,
  .ui.inverted.white.button.active,
  .ui.inverted.white.buttons .button:active,
  .ui.inverted.white.button:active {
    box-shadow: none !important;
    color: rgba(0, 0, 0, 0.6);
  }
  .ui.inverted.white.buttons .button:hover,
  .ui.inverted.white.button:hover {
    background-color: #cfd0d2;
  }
  .ui.inverted.white.buttons .button:focus,
  .ui.inverted.white.button:focus {
    background-color: #c7c9cb;
  }
  .ui.inverted.white.buttons .active.button,
  .ui.inverted.white.active.button {
    background-color: #cfd0d2;
  }
  .ui.inverted.white.buttons .button:active,
  .ui.inverted.white.button:active {
    background-color: #c2c4c5;
  }

  /* Inverted Basic */
  .ui.inverted.white.basic.buttons .button,
  .ui.inverted.white.buttons .basic.button,
  .ui.inverted.white.basic.button {
    background-color: transparent;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.white.basic.buttons .button:hover,
  .ui.inverted.white.buttons .basic.button:hover,
  .ui.inverted.white.basic.button:hover {
    box-shadow: 0px 0px 0px 2px #cfd0d2 inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.white.basic.buttons .button:focus,
  .ui.inverted.white.basic.buttons .button:focus,
  .ui.inverted.white.basic.button:focus {
    box-shadow: 0px 0px 0px 2px #c7c9cb inset !important;
    color: #dcddde !important;
  }
  .ui.inverted.white.basic.buttons .active.button,
  .ui.inverted.white.buttons .basic.active.button,
  .ui.inverted.white.basic.active.button {
    box-shadow: 0px 0px 0px 2px #cfd0d2 inset !important;
    color: #ffffff !important;
  }
  .ui.inverted.white.basic.buttons .button:active,
  .ui.inverted.white.buttons .basic.button:active,
  .ui.inverted.white.basic.button:active {
    box-shadow: 0px 0px 0px 2px #c2c4c5 inset !important;
    color: #ffffff !important;
  }

</style>
