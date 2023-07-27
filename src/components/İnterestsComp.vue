<template>
    <section>
      <div class="title">
        <h3>My Weapons</h3>
        <p>I'm advanced in these topics and my short term plan is to specialize in these areas.</p>
      </div>
  
      <div class="topics">
        <div v-for="(topic, index) in topicList" :key="index" class="topic">
          <h3>{{ topic.title }}</h3>
          <img :src="require(`@/assets/${topic.icon}`)">
          <p>{{ topic.description }}</p>
        </div>
      </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'

const topicList = [
    {
        title: 'Front-End',
        icon: 'frontend.png',
        description: 'I started my software adventure with front-end. I needed to learn HTML and CSS for this area and these were a great language to start with, just how it started!'
    },

    {
        title: 'Back-End',
        icon: 'backend.png',
        description: 'After learning front-end and a little break, I thought of becoming a fullstack developer and continued on my way with Node.js, namely back-end.'
    },

    {
        title: 'Web Scraping',
        icon: 'scrape.png',
        description: 'I was bored my overworking the back-end and partially did what I was supposed to do. I wanted a diffrence. I also started programming with Python. Then I learned web scraping with the Requests module.'
    },

    {
        title: 'Web Automation',
        icon: 'auto.png',
        description: 'I was fascinated by the practicality of Python. I thought to continue a little longer and continued my web work from where I left off. The next target was web automations with Python Selenium!'
    }
]

onMounted(() => {
    const hoverEffect = document.querySelector('.topics');

    hoverEffect.addEventListener('mousemove', (e) => {
        const mouseX = e.pageX
        const mouseY = e.pageY

        const elementRect = hoverEffect.getBoundingClientRect()
        const elementX = elementRect.left
        const elementY = elementRect.top
        const elementWidth = elementRect.width
        const elementHeight = elementRect.height

        const centerX = elementX + elementWidth / 2
        const centerY = elementY + elementHeight / 2

        const vectorX = mouseX - centerX
        const vectorY = mouseY - centerY

        const distance = Math.sqrt(vectorX * vectorX + vectorY * vectorY)


        const moveX = (distance ) * (vectorX / distance) * -0.01
        const moveY = (distance) * (vectorY / distance) * -0.01
        hoverEffect.style.transform = `translate(${moveX}px, ${moveY}px)`

    })
})
</script>


<style scoped>

section{
    max-width: 100%;
    min-height: 110vh;
    max-height: 220vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 22%;
    padding-top: 100px;
    position: relative;
}

.title{
    text-align: center;
    font-size: 40px;
}

.title h3{
    background-image: linear-gradient(to right, #ff930f, #fff95b);
    background-clip: text;
    -webkit-background-clip: text;
    margin: 0 0;
    color: transparent;
}

.title p{
    color: whitesmoke;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 200;
    opacity: .6;
}
.topics{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
    padding-top: 50px;
    flex-wrap: wrap;
}

.topic{
    width: 220px;
    height: 260px;
    border: 1px solid rgba(85, 84, 84, 0.15);
    border-radius: 10px;

    background-color: rgba(53, 51, 51, 0.15);
    backdrop-filter: blur(5px);
    color: rgb(216, 213, 213);

    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    padding: 20px 30px;
    gap: 10px;
    cursor: pointer;
    position: relative;
}

.topic p{
    font-size: 12px;
    font-weight: 200;
}

.topic h3{
    font-weight: 400;
    font-size: 18px;
    margin: 0 0;
}

.topic img{
    width: 110px;
    height: 100px;
    filter: grayscale(60%);
}

</style>