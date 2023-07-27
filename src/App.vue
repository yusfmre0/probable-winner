<template>
  <head>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>

  <Background></Background>
  <Navbar></Navbar>
  <Main></Main>
  <Skills></Skills>
  <Interests></Interests>
  <Contact></Contact>
  <Footer></Footer>
  <Topper></Topper>

 </template>



<script setup>

import Navbar from './components/NavbarComp.vue'
import Main from './components/MainComp.vue'
import Background from './components/BackgroundComp.vue'
import Skills from './components/SkillsComp.vue'
import Interests from './components/İnterestsComp.vue'
import Contact from './components/ContactComp.vue'
import Footer from './components/FooterComp.vue'
import Topper from './components/TopScroller.vue'

</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=VT323&display=swap');

*{
  font-family: 'Poppins', sans-serif;
  transition: .3s ease-out;
  user-select: none;
}

body{
  margin: 0 0;
  max-width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
}

#app{
  min-height: 100vh;
  max-height: 100vh;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: black;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(32, 32, 32);
  border-radius: 5px;
}

</style>