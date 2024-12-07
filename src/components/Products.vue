<template>
  <div class="productContainer">
    <p class="percentage">-{{ promotionAsPercentage }}%</p>
    <img class="img" :src="image" alt="product image">
    <img class="description">
    <p class="group">{{ group }}</p>
    <h4 class="name">{{ name }}</h4>
    <p class="rating">&#11088 {{ rating }}</p>
    <p class="size">{{ size }}</p>
    
    <div class="footer">
      <span>${{ price }}</span>
          <button v-if="!isInvisible" class="Btn" @click="quantity">Add +</button>
          <input class="input" v-else type="number" placeholder="1">
    </div>
  </div>
</template>

<script>
export default{
  name: 'product',
  props: ["image", "group", "name", "rating", "size","price", "promotionAsPercentage"],
  data(){
    return{
      isInvisible:false
    }
  },

  methods:{
    quantity(){
      this.isInvisible=ture;
    }
  }

}
</script>

<style scoped>
.productContainer{
  padding: 30px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  border: 1px solid lightgray;

}

.description *{
  margin: -10px;
}
.img{
  max-width: 100%;
  height:50%;
  margin-bottom: 15px;
}
.percentage{
  position: absolute;
  margin-left: -20px;
  background-color: rgb(48, 168, 48);
  color: white;
  width: 40px;
  text-align: center; 
  padding: 5px;   
  border-radius: 0px 15px 15px 0px;
  
}

.footer{
  display: flex;
  justify-content: space-between;
  color: #30a830;
  font-size: 25px;
  font-weight: bold;

}

.Btn{
  padding: 5px;
  width: 70px;
  font-size: 15px;
  height: 30px;
  background-color: #b5e0b5;
  border: none;
  border-radius: 5px;
  color: #30a830;
  font-weight: bold;
  cursor: pointer;
}

.rating{
  color: darkgray;
  font-weight: bold;
}

.group{
  color: darkgray; 
  font-weight: bold;
}

.size{
  color: darkgray;
  font-weight: bold;
}

.input{
  padding: 5px;
  width: 70px;
  font-size: 15px;
  height: 15px;
  border: none;
  border-radius: 5px;
  border: 1px solid #30a830;
  cursor: pointer;
}

</style>