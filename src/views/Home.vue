<template>
  <div class="Wrapper">
    <!-- Categories Section -->
    <Menu :title="'Feathured Category'"></Menu>
    <div class="Container">
      <Category
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
      <Promotion
        v-for="promotion in promotions"
        :key="promotion.id"
        :color="promotion.color"
        :text="promotion.title"
        :picture="promotion.image"
        :buttonColor="promotion.buttonColor"      
      />
    </div>
    <!--Menu Section-->
    <Menu :title="' Category'"></Menu>
    <div class="products">
        <Products class="items"
        v-for="(product, index) in products"
        :key="index"
        :name="product.name"
        :rating="product.rating"
        :size="product.size"
        :image="product.image"
        :price="product.price"
        :promotionAsPercentage="product.promotionAsPercentage"
        :categoryId="product.categoryId"
        :instock="product.instock"
        :countSold="product.countSold"
        :group="product.group"
        />
      </div>

    <!--Products Section-->
    <!-- Router View -->
    <RouterView />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Menu from '@/components/Menu.vue';
import Products from '@/components/Products.vue';
import Category from '@/components/Category.vue';
import { RouterView } from 'vue-router';
import Promotion from '@/components/Promotion.vue';
import { mapState } from 'pinia';
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/product';

export default defineComponent({
  components: {
    Menu,
    Products,
    Category,
    Promotion,
  },

  setup() {
      const productStore = useProductStore();
      onMounted(() => {
        productStore.fetchGroups();
        productStore.fetchCategories();
        productStore.fetchPromotions();
        productStore.fetchProducts();
      });
      return { productStore };
    },
    computed:{
      ...mapState(useProductStore, {
        groups: 'groups',
        categories: 'categories',
        promotions: 'promotions',
        products: 'products',
      })
    },
});
</script>

<style scoped>
.Wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.Container {
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}

.PromotionContainer {
  width: 100%;
  display: flex;
  gap: 20px;
}

.menu-products-container {
  width: 100%;
  }

.products{
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
}
.items{
  max-width: 300px;
  flex: 1 1 auto;
  padding: 20px;
}
</style>
