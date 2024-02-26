<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <FooterPage/>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'; 
import NavBar from './components/NavBar.vue';
import FooterPage from './components/FooterPage.vue';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCzCYDf7wBclL08Am4onLvCjiIyG5yfC70",
  authDomain: "somp-6c983.firebaseapp.com",
  projectId: "somp-6c983",
  storageBucket: "somp-6c983.appspot.com",
  messagingSenderId: "721634702357",
  appId: "1:721634702357:web:142661e00a91dd80390a1c"
};

initializeApp(firebaseConfig);

export default {
  name: 'App',
  components: {
    NavBar,
    FooterPage
  },
  setup() {
    const isLoggedIn = ref(false); // Use a ref to make it reactive

    onMounted(() => {
      const auth = getAuth(); // Get the Firebase Auth instance
      onAuthStateChanged(auth, (user) => {
        isLoggedIn.value = user ? true : false;
      });
    });

    // You can return anything here that needs to be used within the template
    return {
      isLoggedIn
    };
  },
};
</script>

<style>

  * {
    box-sizing: border-box;
    font-family: Arial;
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }

</style>
