<template>
    <div class="vision">
        <div>
            vision
        </div>
        <span class="buzhidao1"> </span>
        <div class="changepageanimation"> </div>
    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.vision {
    min-height: 100vh;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(0, 0, 0);

    .buzhidao1 {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;
        pointer-events: none;
        touch-action: none;
    }

    .changepageanimation {
        transform: scaleX(1);
        transform-origin: 0px 0px;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
        position: fixed;
        left: 0px;
        pointer-events: none;
        touch-action: none;
        background-color: rgb(233, 105, 93);
        animation: 600ms linear 200ms 1 normal forwards running fWFmgC;
    }

    @keyframes fWFmgC {
        0% {
            transform: scaleX(1);
        }

        100% {
            transform: scaleX(0);
            display: none;
        }


    }
}
</style>