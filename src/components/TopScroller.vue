<template>
    <button id="topper" :style="{ opacity: `${opa}` }">
        <i class="fa-solid fa-arrow-up-long"></i>
    </button>
</template>

<script setup>

import { ref,  onMounted} from 'vue';

let opa = ref(0)


onMounted(() => {
    let height = document.body.scrollTop || document.documentElement.scrollTop
    const button = document.querySelector('#topper')
    button.addEventListener('click', scroller)
    window.addEventListener('scroll', () => {
        console.log(button)
        height = document.body.scrollTop || document.documentElement.scrollTop

        if(height<60){
            opa.value = 0
            button.removeEventListener('click', scroller)
            button.style.cursor = 'none'

        } else {
            const button = document.querySelector('#topper')
            opa.value = 1
            button.style.cursor = 'pointer'
            button.addEventListener('click', scroller)
        }
    })
})



const scroller = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>


<style scoped>
button{
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(to right, #ff930f, #fff95b);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    box-shadow: none;
    font-size: 20px;
    font-weight: 200;
    cursor: pointer;
}
</style>