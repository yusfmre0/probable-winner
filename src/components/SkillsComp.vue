<template>
    <section>
        <div class="title">
            <h3>My Skills</h3>
            <p>For 2 years, I have been improving myself by constantly working on certain goals.</p>
        </div>

        <div class="content">
            <div class="scroller">
                <div class="logo">
                    <img src="../assets/python.png" alt="Python Logo">
                </div>

                <div class="logo">
                    <img src="../assets/js.png" alt="Javascript Logo">
                </div>

                <div class="logo">
                    <img src="../assets/node.png" alt="Node.js Logo">
                </div>

                <div class="logo">
                    <img src="../assets/express.png" alt="Express.js Logo">
                </div>

                <div class="logo">
                    <img src="../assets/mongo.png" alt="MongoDB Logo">
                </div>

                <div class="logo">
                    <img src="../assets/sqlite.png" alt="SQLite 3 Logo">
                </div>

                <div class="logo">
                    <img src="../assets/vue.png" alt="Vue.js Logo">
                </div>

                <div class="logo">
                    <img src="../assets/vite.png" alt="Vite.js Logo">
                </div>

                <div class="logo">
                    <img src="../assets/nuxt.png" alt="Nuxt.js Logo">
                </div>

                <div class="logo">
                    <img src="../assets/html.png" alt="HTML 5 Logo">
                </div>

                <div class="logo">
                    <img src="../assets/css.png" alt="CSS 3 Logo">
                </div>





                <div class="logo">
                    <img src="../assets/python.png" alt="Python Logo">
                </div>

                <div class="logo">
                    <img src="../assets/js.png" alt="Javascript Logo">
                </div>

                <div class="logo">
                    <img src="../assets/node.png" alt="Node.js Logo">
                </div>

                <div class="logo">
                    <img src="../assets/express.png" alt="Express.js Logo">
                </div>

                <div class="logo">
                    <img src="../assets/mongo.png" alt="MongoDB Logo">
                </div>

                <div class="logo">
                    <img src="../assets/sqlite.png" alt="SQLite 3 Logo">
                </div>

                <div class="logo">
                    <img src="../assets/vue.png" alt="Vue.js Logo">
                </div>

                <div class="logo">
                    <img src="../assets/vite.png" alt="Vite.js Logo">
                </div>

                <div class="logo">
                    <img src="../assets/nuxt.png" alt="Nuxt.js Logo">
                </div>

                <div class="logo">
                    <img src="../assets/html.png" alt="HTML 5 Logo">
                </div>

                <div class="logo">
                    <img src="../assets/css.png" alt="CSS 3 Logo">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

section{
    max-width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    padding: 20px 22%;
    row-gap: 100px;
}
.title{
    color: transparent;
    text-align: center;
    font-size: 40px;
}

.title h3{
    background-image: linear-gradient(to right, #ff930f, #fff95b);
    background-clip: text;
    -webkit-background-clip: text;
    margin: 0 0;
}

.title p{
    color: rgba(245, 245, 245, 0.541);
    font-size: 12px;
    font-weight: 200;
    letter-spacing: 1px;
}

.content{
    width: 100%;
    overflow: hidden;
    height: 100px;
    position: relative;
}

.content:hover{
    animation-play-state: paused;
}

.scroller{
    display: flex;
    color: whitesmoke;
    gap: 100px;
    justify-content: flex-start;
    animation: scroller 10s linear infinite;
    align-items: center;
}

.scroller:hover{
    animation-play-state: paused;
}

.scroller img{
    width: auto;
    height: 70px;
    cursor: pointer;
    filter: grayscale(100%);
}

.logo img:hover{
    filter: none;
}

@keyframes scroller{
    from{
        transform: translateX(0);
    }

    to{
        transform: translateX(-260%);
    }
}

</style>