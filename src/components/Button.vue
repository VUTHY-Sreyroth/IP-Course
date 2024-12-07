<template>
    <div class="Container " :style="{background:bgColor}">
        <span class="text">Shop Now</span> 
        <i id="icon" class="fa-solid fa-arrow-right"></i>
    </div>
</template>

<script>
export default{
    props:{
        bgColor: String,
    }
}

</script>

<style scoped>
    .Container{
        display: flex;
        align-items: center;
        height: 20px;
        width: 70px;
        color: white;
        font-size: 10px;
        font-weight: bold;
        background-color: #3BB77E;
        border-radius: 5px;
        padding:3px 0px;
    }

    .text{
        display: flex;
        align-items: center;
        padding:5px;
    }
    .icon{
        width: 10px;
        color: white;
    }
</style>