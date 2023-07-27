<template>
    <div id="bg">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.4"
        :particlesNumber="120"
        shapeType="circle"
        :particleSize="2"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.2"
        :linesDistance="150"
        :moveSpeed="1"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
      >
      </vue-particles>
    </div>
 </template>

<style scoped>
#bg{
  background-color: black;
  margin-bottom: -100vh;
  z-index: -1;
  min-height: 100%;
  max-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
}
</style>