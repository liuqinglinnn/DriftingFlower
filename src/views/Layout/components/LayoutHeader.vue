<template>
  <div class="header">
    <div class="header_logo">
      <img src="@/assets/vue.svg" alt="">
    </div>
    <div class="header_buttom">
      <div class="header_buttom_module" @click="routerjump('home')">
        renga
      </div>
      <div class="header_buttom_module" @click="routerjump('vision')">
        vision
      </div>
      <div class="header_buttom_module">about</div>
      <div class="header_buttom_module">gallery</div>
      <div class="header_buttom_module">faq</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const routerjump = (a) => {
  console.log(a);
  router.push({
    path: '/' + a
  })
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;

  z-index: 10000;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100vw;
  padding: 0px 32px;
  position: fixed;
  margin-top: 24px;



  .header_logo {
    width: 40%;
    padding: 10px 10px 10px 10px;
  }

  .header_buttom {
    width: 60%;
    display: flex;
    flex-direction: row;

    .header_buttom_module {
      padding: 10px 10px 10px 10px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      margin: 16px;
      height: 24px;
      box-sizing: content-box;
      border-radius: 8px;
      text-transform: uppercase;
      backdrop-filter: blur(12px);

      background-color: rgba(255, 255, 255, 0.4);
      overflow: hidden;
      transition: all 800ms ease 0s;
      cursor: pointer;
    }

    .header_buttom_module::before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: block;
      height: 0px;
      width: 0px;
      border-radius: 100px;
      background-color: rgb(233, 105, 93);
      transition: all 800ms ease 0s;
    }

    .header_buttom_module:hover {
      color: rgb(255, 255, 255);
    }

    .header_buttom_module:hover::before {
      height: 100px;
      width: 120px;
    }
  }
}
</style>