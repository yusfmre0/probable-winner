<template>
    <nav>
        <div class="logo">
            <h1>yusfmre.</h1>
        </div>

        <div class="contact">
            <button @click="scroller">Contact</button>
        </div>
    </nav>
</template>


<script setup>

const scroller = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
}

</script>


<style scoped>
nav{
    max-width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 22%;
}

.logo{
    color: whitesmoke;
}

.logo h1{
    font-weight: 600;
    cursor: pointer;
}

.contact button{
    border: none;
    border-radius: 50px;
    padding: 10px 30px;
    font-weight: 600;
    background-color: whitesmoke;
    cursor: pointer;
}

.contact button:hover{
    color: whitesmoke;
    background-color: transparent;
}

@media screen and (max-width:522px) {
    nav{
        align-items: center;
        padding-top: 10px;
    }

    .logo{
        font-size: 14px;
    }

    .contact button{
        padding: 8px 20px;
        font-size: 13px;
    }
}
</style>