<template>
  <div>
    <HeaderComponent />
    <MenuComponent />
    
    <div id="home" class="home_page">
      <h1>Welcome to the Home Page</h1>
      <p>Explore the various pages and learn more!</p>
      <router-link 
        :to="{ path: '/page1', query: { section: 'section1' } }" 
        class="btn"
        aria-label="Go to Page 1"
      >
        Go to Page 1
      </router-link>
    </div>
    
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue';
import MenuComponent from '../components/Menu.vue';
import FooterComponent from '../components/Footer.vue';

export default {
  components: {
    HeaderComponent,
    MenuComponent,
    FooterComponent
  }
};
</script>

<style scoped>
/* Styling the home page container */
.home_page {
  display: flex; /* Use flexbox for easy centering */
  flex-direction: column; /* Stack content vertically */
  justify-content: center; /* Vertically center the content */
  align-items: center; /* Horizontally center the content */
  height: 50vh; /* Shortened height */
  padding: 10px;
  background-color: #f4f4f4; /* Light background color */
}

/* Styling for the page title */
.home_page h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

/* Styling for the page description */
.home_page p {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  max-width: 600px; /* Prevent text from stretching too wide */
  line-height: 1.6;
  margin-top: 10px;
}

.home_page .btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: black;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.home_page .btn:hover {
  background-color: black;
}

/* Make sure the header is separate from the home page content */
header {
  margin-bottom: 20px;
}
</style>