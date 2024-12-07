<template>
  <div class="Wrapper">
    <!-- Categories Section -->
    <div class="Container">
      <CategoryComponent
        v-for="category in categories"
        :key="category.id"
        :color="category.color"
        :name="category.name"
        :quantity="category.productCount"
        :picture="category.image"
      />
    </div>

    <!-- Promotions Section -->
    <div class="PromotionContainer">
      <PromotionComponent
        v-for="promotion in promotions"
        :key="promotion.id"
        :color="promotion.color"
        :text="promotion.title"
        :picture="promotion.image"
        :buttonColor="promotion.buttonColor"      
      />
    </div>
    
    <!-- Router View -->
    <RouterView />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import CategoryComponent from './components/Category.vue';
import PromotionComponent from './components/Promotion.vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  components: {
    CategoryComponent,
    PromotionComponent,
  },

  data() {
    return {
      categories: [],
      promotions: [],
    };
  },

  methods: {
    fetchCategories() {
      axios
        .get('http://localhost:3000/api/categories')
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.error('Error fetching categories:', error);
        });
    },

    fetchPromotions() {
      axios
        .get('http://localhost:3000/api/promotions')
        .then((response) => {
          this.promotions = response.data;
        })
        .catch((error) => {
          console.error('Error fetching promotions:', error);
        });
    },

  //   createPromotions() {
  //     axios.post('http://localhost:3000/api/promotions', {
  //       title: 'Everyday Fresh & Clean with Our Products',
  //       color: '#F0E8D5',
  //       buttonColor: '#3BB77E',
  //       image: 'http://localhost:5173/src/assets/image/Onion.png',
  //     });

  //     axios.post('http://localhost:3000/api/promotions', {
  //       title: 'Make your Breakfast Healthy and Easy',
  //       color: '#F3E8E8',
  //       buttonColor: '#3BB77E',
  //       image: 'http://localhost:5173/src/assets/image/Juice.png',
  //     });

  //     axios.post('http://localhost:3000/api/promotions', {
  //       title: 'The best Organic Products Online',
  //       color: '#E7EAF3',
  //       buttonColor: '#FDC040',
  //       image: 'http://localhost:5173/src/assets/image/OrganicVeggie.png',
  //     });
  //   },

  //   createCategories() {
  //     axios.post('http://localhost:3000/api/categories', {
  //       name: 'Red Apple',
  //       productCount: '68',
  //       color: '#FEEFEA',
  //       image: 'http://localhost:5173/src/assets/image/apple.png',
  //     });

  //     axios.post('http://localhost:3000/api/categories', {
  //       name: 'Snack',
  //       productCount: '34',
  //       color: '#FFF3EB',
  //       image: 'http://localhost:5173/src/assets/image/cereal.png',
  //     });

  //     axios.post('http://localhost:3000/api/categories', {
  //       name: 'Black Plum',
  //       productCount: '25',
  //       color: '#FFF3FF',
  //       image: './src/assets/products/blues.png',
  //     });

  //     axios.post('http://localhost:3000/api/categories', {
  //       name: 'Vegetables',
  //       productCount: '65',
  //       color: '#F2FCE4',
  //       image: 'http://localhost:5173/src/assets/image/cabbage.png',
  //     });

  //     axios.post('http://localhost:3000/api/categories', {
  //       name: 'Headphone',
  //       productCount: '33',
  //       color: '#FFFCEB',
  //       image: 'http://localhost:5173/src/assets/image/headphones.png',
  //     });

  //     axios.post('http://localhost:3000/api/categories', {
  //       name: 'Cake & Milk',
  //       productCount: '54',
  //       color: '#F2FCE4',
  //       image: './src/assets/products/apricot.png',
  //     });

  //     axios.post('http://localhost:3000/api/categories', {
  //       name: 'Orange',
  //       productCount: '63',
  //       color: '#FFF3FF',
  //       image: 'http://localhost:5173/src/assets/image/orange.png',
  //     });
  //   },
   },

  mounted() {
    this.fetchCategories();
    this.fetchPromotions();
  },
});
</script>

<style scoped>
.Wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 0px 20px;
}

.Container {
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
}

.PromotionContainer {
  width: 80%;
  display: flex;
  justify-content: space-evenly;
}
</style>
