<template>
    <main>
        <div class="content">
            <p id="greet">Hey, it's</p>
            <code>
                <div>
                <h1 class="typingEffect">
                    yusfmre.
                </h1>
                </div>
            </code>
            <p id="intro">I'm a 16 years old developer and also high school student from Turkey. I'm coding since 2021 and I develop myself in Web Development skills.</p>
        </div>
    </main>
</template>


<script setup>

</script>


<style scoped>

main{
    height: 100vh;
    max-width: 100%;
    min-height: 70vh;
    max-height: 70vh;
    position: relative;
    align-items: center;
}

code {
    display: flex;
    margin-left: -20px;
  }

.content{
    color: whitesmoke;
    padding: 0 22%;
    display:flex;
    justify-content: center;
    flex-direction:column;
    margin-top: 150px;
}

.content h1{
    font-family: 'VT323', monospace;
    text-shadow: 0px 0px 15px#ffffff;
    font-size: 100px;
    margin: 0 0;
    padding-left: 20px;
    padding-bottom: 10px;
}

#greet{
    font-weight: 600;
    font-size: 14px;
    opacity: .4;
}

#intro{
    font-family: 'Fira', monospace;
    width: 70%;
    padding-top: 20px;
}

.typingEffect {
    width: 0;
    overflow: hidden;
    border-right: 2px solid white;
    white-space: nowrap;
    animation: typing 2s steps(30) forwards;
  }

/* The typing animation */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@media screen and (max-width: 522px) {
    .content h1{
        font-size: 80px;
    }

    #intro{
        width: 100%;
        font-size: 14px;
    }
}

</style>