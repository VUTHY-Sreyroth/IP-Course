<template>
  <div class="page-container">
    <HeaderComponent />
    <MenuComponent />
    
    <div class="page-content">
      <h1>Page 2</h1>
      
      <!-- Display message from Page 1 -->
      <p>This message is from Page 1:</p>
      <p><strong>{{ page1Message }}</strong></p>

      <!-- Display the message that the user has entered for Page 2 -->
      <p>This is the current message for Page 2:</p>
      <p><strong>{{ page2Message }}</strong></p>

      <!-- Input for new message on Page 2 -->
       <div class="input-group">
        <label>Enter a new message for Page 2:</label>
      <input v-model="newPage2Message" type="text" placeholder="Enter new message for Page 2" />
       </div>
       <button @click="submitPage2Message">Submit New Message for Page 2</button>
      
    </div>
    
    <FooterComponent />
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useMessageStore } from '../stores/message'; // Import the store
import HeaderComponent from '../components/Header.vue';
import MenuComponent from '../components/Menu.vue';
import FooterComponent from '../components/Footer.vue';

export default {
  components: {
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  },
  setup() {
    const messageStore = useMessageStore(); // Access the store

    // Display the message from Page 1
    const page1Message = ref(messageStore.page1Message);

    // Input for new message on Page 2
    const newPage2Message = ref('');

    // This will show the message that was input for Page 2
    const page2Message = ref(messageStore.page2Message);

    // Submit new message for Page 2 and update the store
    const submitPage2Message = () => {
      messageStore.setPage2Message(newPage2Message.value); // Store the new message for Page 2
      page2Message.value = newPage2Message.value; // Display the new message
      newPage2Message.value = ''; // Clear the input after submission
    };

    // Watch for changes in the store to keep the page up-to-date
    watch(() => messageStore.page2Message, (newMessage) => {
      page2Message.value = newMessage;
    });

    return { page1Message, page2Message, newPage2Message, submitPage2Message };
  },
};
</script>

<style scoped>
.page-container {
  font-family: Arial, sans-serif;
}

.page-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding:10px;
  margin:auto;
  margin-bottom:80px;
  height: 50vh;
  background-color: #f4f4f4;
}

input {
  padding: 10px;
  border:4px solid rgb(212, 205, 205);
  border-radius: 10px;
  margin: auto;
  width: 350px;
  font-size: 16px;
  height:70px;
  margin-top: 10px;
  margin-bottom: 20px;
}
label{
  margin-right: 10px;
  font-size: 16px;
}
.input-group{
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
}

button {
  padding:10px 10px;
  margin: auto;
  border:10px solid rgb(243, 234, 234);
  border-radius: 8px;
  margin-left: 245px;
  height:50px;
  width:450px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  align-items: center;
}

button:hover {
  background-color: black;
}
p{
  margin-bottom: 10px;
}
</style>