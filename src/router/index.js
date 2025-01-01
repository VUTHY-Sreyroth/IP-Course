import { createRouter, createWebHistory } from 'vue-router';

// Import views
import HomePage from '../views/HomePage.vue';
import Page1 from '../views/Page1.vue';
import Page2 from '../views/Page2.vue';
import Page3 from '../views/Page3.vue';


// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Main landing page
  },
  {
    path: '/page1',
    name: 'Page1',
    component: Page1, // Page 1
    
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2, // Page 2
  },
  {
    path: '/page3',
    name: 'Page3',
    component: Page3, // Page 3
  },
];

// Create router
const router = createRouter({
  // Use HTML5 history mode
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  // Scroll behavior for navigation
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Navigate to the saved position
      return savedPosition;
    }
    if (to.hash) {
      // Navigate to a section using hash
      const element = document.querySelector(to.hash);
      if (element) {
        return {
          el: to.hash,
          behavior: 'smooth', // Smooth scrolling
        };
      }
      // Log invalid hash
      console.warn(`Element with id '${to.hash.substring(1)}' not found.`);
    }
    // Default to top
    return { top: 0 };
  },
});

export default router;