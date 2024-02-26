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
    <router-link to="/cart" id="cart-link">
       <button>My Account</button>
    </router-link>
</div>

</template>

<script>
export default {
  name: 'NavBar',
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