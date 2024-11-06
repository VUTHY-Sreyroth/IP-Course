<template>
  <div class="Wrapper">
    <div class="Container">
      <CategoryComponent v-for="category in Categories" :key="category" 
      :color="category.color"  
      :name="category.name"
      :quantity="category.quantity"
      :picture="category.picture"
      />
    </div>

    <div class="PromotionContainer">
      <PromotionComponent v-for="promotion in Promotions" :key="promotion" 
      :color="promotion.color"  
      :text="promotion.text"
      :picture="promotion.picture"
      />
    </div>
  </div>

<RouterView/>
</template>

<script>
  import CategoryComponent from './components/Category.vue';
  import PromotionComponent from './components/Promotion.vue';
  import { RouterView } from 'vue-router';

  export default{
    components: {
        CategoryComponent,
        PromotionComponent
    },

    data() {
    return {
      Categories:[
        {
          color:"#F2FCE4",
          name:"Hamburger",
          quantity:"14 items",    
          picture: (new URL("@/assets/Image/Hamburger.png", import.meta.url))
        },
        {
          color:"#FFFCEB" ,
          name:"Peach",
          quantity:"17 items",    
          picture:(new URL("@/assets/Image/Peach.png", import.meta.url))
        },
        {
          color:"#ECFFEC" ,
          name:"Oganic Kiwi",
          quantity:"21 items",    
          picture:(new URL("@/assets/Image/Kiwi.png", import.meta.url))
        },
        {
          color:"#FEEFEA" ,
          name:"Red Apple",
          quantity:"68 items",    
          picture:(new URL("@/assets/Image/Apple.png", import.meta.url))
        },
        {
          color:"#FFF3EB" ,
          name:"Snack",
          quantity:"34 items",    
          picture:(new URL("@/assets/Image/Snack.png", import.meta.url))
        },
        {
          color:"#FFF3FF" ,
          name:"Black plum",
          quantity:"25 items",    
          picture:(new URL("@/assets/Image/BlackPlum.png", import.meta.url))
        },
        {
          color:"#F2FCE4" ,
          name:"Vegetable",
          quantity:"65 items",    
          picture:(new URL("@/assets/Image/Vegetable.png", import.meta.url))
        },
        {
          color:"#FFFCEB" ,
          name:"Headphone",
          quantity:"33 items",    
          picture:(new URL("@/assets/Image/Headphone.png", import.meta.url))
        },

        {
          color:"#F2FCE4" ,
          name:"Chocolate",
          quantity:"54 items",    
          picture:(new URL("@/assets/Image/Chocolate.png", import.meta.url))
        },
        {
          color:"#FFF3FF" ,
          name:"Orange",
          quantity:"63 items",    
          picture:(new URL("@/assets/Image/Orange.png", import.meta.url))
        }
      ],

      Promotions:[
        {
          color:"#F0E8D5",
          text:"Everyday Fresh & Clean with Our Products",
          picture:(new URL("@/assets/Image/Onion.png", import.meta.url))
        },
        {
          color:"#F3E8E8",
          text:"Make your Breakfast Healthy and Easy",
          picture:(new URL("@/assets/Image/Juice.png", import.meta.url))
        },
        {
          color:"#E7EAF3",
          text:"The best Organic Product Online",
          picture:(new URL("@/assets/Image/OrganicVeggie.png", import.meta.url))
        },
      ],
    };
  },
  };


</script>

<style scoped>
.Wrapper{  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 0px 20px;
}

.Container{
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
}

.PromotionContainer{
  width: 80%;
  display: flex;
  justify-content: space-evenly;
}
</style>
