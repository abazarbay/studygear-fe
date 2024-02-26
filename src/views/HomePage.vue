<template>
    <div id="logo-container">
        <img id="logo" src="@/assets/logo.png" alt="Logo"/> 
    </div>
    <div id="main-content">
    <h1>Your way to study in Germany</h1>
    <hr>
    <h1>We'll help you to evaluate your enrollment chances!</h1>
    <p id="description">We'll help you to evaluate your chances of enrolling in a German university. We'll ask you a few questions and then give you a score. You can then use this score to decide whether to apply to a German university or not.</p>
    <router-link to="/evaluation"  id="next-button">
        <button>Evaluate your chances now</button>
    </router-link>

    <hr>
    </div>
</template>
<script>

</script>

<style scoped>
h1 {
    border-bottom: 1 px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16 px;
    text-align: center;
    font-size: 2vw;
    
}
#description {
    margin: 0;
    padding: 16 px;
    text-align: center;
    font-size: 1.5vw;
}

#next-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  }

  #next-button button {
    width: auto;
  }

    #logo-container {
    display: flex;
    justify-content: center;
  }

</style>
