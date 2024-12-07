<template>
    <div class="featured-category">
      <h2 class="title">{{ title }}</h2>
      <div class="category">
        <button
          v-for="(category, index) in category"
          :key="index"
          :class="{ active: selectedCategory === category }"
          @click="selectCategory(category)"
          >
          {{ category }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props: ['title'],
      data() {
          return {
          category: [
              "All",
              "Milks & Dairies",
              "Coffees & Teas",
              "Pet Foods",
              "Meats",
              "Vegetables",
              "Fruits",
          ],
          selectedCategory: "All", 
          };
      },
      methods: {
          selectCategory(category) {
          this.selectedCategory = category;
          this.$emit("categorySelected", category);
          },
      },
  };
  </script>
  
  <style scoped>
  .featured-category {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid #ddd;
  }
  
  .title {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
  }
  
  .category {
      display: flex;
      gap: 16px;
  }
  
  button {
      background: none;
      border: none;
      font-size: 1rem;
      color: #333;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 4px;
      transition: color 0.3s, background-color 0.3s;
  }
  
  button:hover {
      color: #007bff;
  }
  
  button.active {
      font-weight: bold;
      color: white;
      background-color: #007bff;
  }
  </style>