<template>
  <div id="app" style="background: red;">
    <div style="display:block; height:100px; overflow: hidden; background: #ff7">下拉刷新</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>
    <div>xxxxxx</div>

  </div>
</template>

<script>
  import Cell from '../../components/Cell.vue'

  export default {
    name: 'App',
    components: { Cell },
    data () {
      return {
        msg: 'demo'
      }
    },
    mounted () {
      let startY = 0,
        moveLen = 0

      this.$el.addEventListener('touchstart', e => {
        startY = e.touches[0].pageY
      })

      this.$el.addEventListener('touchmove', e => {
        moveLen = e.touches[0].pageY - startY - 100
        // console.log(moveLen)

        // console.log(this.$el)
        this.$el.style.transform = `translateY(${moveLen}px)`
      })

      this.$el.addEventListener('touchend', e => {
        // console.log(e)

        this.$el.style.transform = `translateY(-100px)`
      })
    }
  }
</script>

<style scoped lang='css'>


  /*#app*/
  /*font-family 'Avenir', Helvetica, Arial, sans-serif*/
  /*-webkit-font-smoothing antialiased*/
  /*-moz-osx-font-smoothing grayscale*/
  /*text-align center*/
  /*color #2c3e50*/
  /*margin-top 60px*/

  #app {
    transform: translateY(-100px);
    transition: transform 0s;
  }
</style>
