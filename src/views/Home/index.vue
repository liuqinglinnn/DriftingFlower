<template>
  <div class="home">
    <div class="layerone" v-bind:style="{ transform: layerone_translate }">
      <img src="@/assets/vue.svg" alt="" style="height: 60vh;">
    </div>
    <div class="layertwo" v-bind:style="{ opacity: layertwo_opacity }">
      <img src="@/assets/vue.svg" alt="" style="height: 60vh;">
    </div>
    <div class="layerthree" v-bind:style="{ transform: layerthree_translate }">
      <img src="@/assets/vue.svg" alt="" style="height: 60vh;">
    </div>
    <div class="layerfour" v-bind:style="{ transform: layerfour_translate }">
      <img src="@/assets/vue.svg" alt="" style="height: 60vh;">
    </div>
  </div>
</template>

<script setup >
import { ref } from 'vue'
//定义ref
let positionlayerone = ref({
  x: 0,
  y: -10,
  z: 0,
})
let positionlayertwo = ref({
  opacity: 1,
  x: 0,
  y: 0,
  z: 0,
})
let positionlayerthree = ref({
  x: 0,
  y: 10,
  z: 0,
})
let positionlayerfour = ref({
  x: -50,
  y: -20,
  z: 0,
})
//定义style
let layerone_translate = ref('translate3d(' + positionlayerone.value.x + '%,' + positionlayerone.value.y + '%,' + positionlayerone.value.z + 'px)')
let layertwo_opacity = ref(positionlayertwo.value.opacity)
let layerthree_translate = ref('translate3d(' + positionlayerthree.value.x + '%,' + positionlayerthree.value.y + '%,' + positionlayerthree.value.z + 'px)')
let layerfour_translate = ref('translate3d(' + positionlayerfour.value.x + '%,' + positionlayerfour.value.y + '%,' + positionlayerfour.value.z + 'px)')

let endTime = new Date();
window.onmousewheel = (e) => {
  console.log(e);
  let deltax = new Date() - endTime
  console.log(deltax);
  if (deltax < 100) {
    console.log("滑动的太快，多余的已被忽略");
    return;
  }
  else {
    //x向下滑动
    if (e.wheelDeltaY < 0) {
      //平移one
      if (100 < deltax < 500 && positionlayerone.value.x < 40) {
        positionlayerone.value.x = 10 + positionlayerone.value.x
        layerone_translate.value = 'translate3d(' + positionlayerone.value.x + '%,' + positionlayerone.value.y + '%,' + positionlayerone.value.z + 'px)'
      }
      //透明two
      else if (100 < deltax < 500 && positionlayertwo.value.opacity > 0.2) {
        console.log('透明度改变');
        positionlayertwo.value.opacity = -0.3 + positionlayertwo.value.opacity
        layertwo_opacity.value = positionlayertwo.value.opacity
      }
      //平移three
      else if (100 < deltax < 500 && positionlayerthree.value.y < 40) {
        positionlayerthree.value.y = 10 + positionlayerthree.value.y
        layerthree_translate.value = 'translate3d(' + positionlayerthree.value.x + '%,' + positionlayerthree.value.y + '%,' + positionlayerthree.value.z + 'px)'
      }
      //平移four
      else if (100 < deltax < 500 && positionlayerfour.value.x < 0) {
        positionlayerfour.value.x = 10 + positionlayerfour.value.x
        layerfour_translate.value = 'translate3d(' + positionlayerfour.value.x + '%,' + positionlayerfour.value.y + '%,' + positionlayerfour.value.z + 'px)'
      }
    }
    //向上
    if (e.wheelDeltaY > 0) {
      // if (100 < deltax < 500) {
      //   positionlayerone.value.x = -10 + positionlayerone.value.x
      //   layerone_translate.value = 'translate3d(' + positionlayerone.value.x + '%,' + positionlayerone.value.y + 'px,' + positionlayerone.value.z + 'px)'
      // }
    }
  }
  endTime = new Date();
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(0, 0, 0);
  background-color: antiquewhite;

  .layerone {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0px;
    left: 0px;
    z-index: 23;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    transition: transform 1s;
  }

  .layertwo {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0px;
    left: 0px;
    z-index: 23;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .layerthree {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0px;
    left: 0px;
    z-index: 23;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    transition: transform 1s;
  }

  .layerfour {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0px;
    left: 0px;
    z-index: 23;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    transition: transform 1s;
  }
}
</style>