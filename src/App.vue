<template>
  <div class="Wrapper">
    <div class="Container">
      <CategoryComponent v-for="category in categories" :key="category" 
      :color="category.color"  
      :name="category.name"
      :quantity="category.productCount"
      :picture="category.image"
      />
    </div>

    <div class="PromotionContainer">
      <PromotionComponent v-for="promotion in promotions" :key="promotion" 
      :color="promotion.color"  
      :text="promotion.title"
      :picture="promotion.image"
      :buttonColor="promotion.buttonColor"
      />
    </div>
  </div>

<RouterView/>
</template>

<script>
import axios from 'axios';
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
      categories : [],
      promotions : [],

    
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
  methods: {

      createPromotions(){
      axios.post('http://localhost:3000/api/promotions', {
        "title" : 'Everyday Fresh & Clean with Our Products',
        "url" : 'https://google.com',
        "color" : '#F0E8D5',
        "buttonColor" : '#3BB77E',
        "image" : "http://localhost:5173/src/assets/image/Onion.png",
      }),
      axios.post('http://localhost:3000/api/promotions', {
        "title" : 'Make your Breakfast Healthy and Easy',
        "url" : 'https://google.com',
        "color" : '#F3E8E8',
        "buttonColor" : '#3BB77E',
        "image" : "http://localhost:5173/src/assets/image/Juice.png",
      }),
      axios.post('http://localhost:3000/api/promotions', {
        "title" : 'The best Organic Products Online',
        "url" : 'https://google.com',
        "color" : '#E7EAF3',
        "buttonColor" : '#FDC040',
        "image" : "http://localhost:5173/src/assets/image/OrganicVeggie.png",
      })
    },
      createCategories(){
      axios.post('http://localhost:3000/api/categories', {
        "name" : 'Red Apple',
        "productCount" : '68',
        "color" : '#FEEFEA',
        "image" : 'http://localhost:5173/src/assets/image/apple.png',
      }),
      axios.post('http://localhost:3000/api/categories', {
        "name" : 'Snack',
        "productCount" : '34',
        "color" : '#FFF3EB',
        "image" : 'http://localhost:5173/src/assets/image/cereal.png',
      }),
      axios.post('http://localhost:3000/api/categories', {
        "name" : 'Black Plum',
        "productCount" : '25',
        "color" : '#FFF3FF',
        "image" : './src/assets/products/blues.png',
      }),
      axios.post('http://localhost:3000/api/categories', {
        "name" : 'Vegetables',
        "productCount" : '65',
        "color" : '#F2FCE4',
        "image" : 'http://localhost:5173/src/assets/image/cabbage.png',
      }),
      axios.post('http://localhost:3000/api/categories', {
        "name" : 'Headphone',
        "productCount" : '33',
        "color" : '#FFFCEB',
        "image" : 'http://localhost:5173/src/assets/image/headphones.png',
      }),
      axios.post('http://localhost:3000/api/categories', {
        "name" : 'Cake & Milk',
        "productCount" : '54',
        "color" : '#F2FCE4',
        "image" : './src/assets/products/apricot.png',
      }),
      axios.post('http://localhost:3000/api/categories', {
        "name" : 'Orange',
        "productCount" : '63',
        "color" : '#FFF3FF',
        "image" : 'http://localhost:5173/src/assets/image/orange.png',
      })
    },
    fetchCategories(){
      axios.get('http://localhost:3000/api/categories')
      .then(response => { 
      this.categories = response.data;
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
      
    },
    fetchPromotions(){
      axios.get("http://localhost:3000/api/promotions")
      .then(response => {
        console.log(response);
        this.promotions = response.data;
      })
    }
    },
    
  mounted(){
    // Mounted life cycle - will be executed every time
    // this component is loaded
    //this.createCategories();
    //this.createPromotions()
    this.fetchCategories()
    this.fetchPromotions()
  }
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
