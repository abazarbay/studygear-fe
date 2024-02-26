<template>
<div id="nav-bar">
    <router-link to="/home" id="programm-link">
        <h1>Study Gear</h1> 
    </router-link> 
    <router-link to="/programms" id="programm-link">
      <h1>Programs</h1> 
  </router-link> 
    <router-link to="/evaluation" id="programm-link">
      <h1>Evaluation</h1> 
  </router-link> 
  <router-link to="/about" id="programm-link">
    <h1>About Us</h1> 
  </router-link> 
    <router-link to="/sign-in" id="cart-link">
       <button>My Account</button>
    </router-link>
    <button v-if="isLoggedIn" @click="handleSignOut">Sign Out</button>
</div>

</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
export default {
  name: 'NavBar',
  setup() {
    const router = useRouter();
    const isLoggedIn = ref(false);

    // Firebase auth instance
    const auth = getAuth();

    onMounted(() => {
        onAuthStateChanged(auth, (user) => {
            isLoggedIn.value = !!user;
        });
    });

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            router.push("/");
        } catch (error) {
            console.error("Sign out failed", error);
        }
    };

    return {
      isLoggedIn,
      handleSignOut
    }
  }
}
</script>

<style scoped>
  #nav-bar {
    border-bottom: 1px solid #ddd;
    height: 75px;
    width: 100%;
    display: flex; 
    justify-content: space-between;
    align-items: center; 
  }

  #programm-link {
    text-align: center;
    color: black;
    font-size: 1,5vw;
    text-decoration: none;
    margin-left: 32px;
  }

  #programm-link h1 {
      margin: 0;
  }

  #cart-link #evaluation-link, #account-link {
    position: absolute;
    right: 16px;
    top: 16px;
  }
</style>