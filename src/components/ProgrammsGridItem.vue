<template>
    <div class="programm-item">
        <img v-bind:src="programm.imageUrl" />
        <h3 class="programm-name">{{ programm.name }}</h3>
        <!-- <p class="programm-price">{{ programm.price }}</p> -->
        <router-link v-bind:to="'/programms/' + programm.id">
        <button>View Details</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ProgrammsGridItem',
    props: ['programm'],
} 
</script>

<style scoped>
  .programm-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .programm-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
  @media (max-width: 800px) {
    .programm-item {
      width: 48%; /* 2-column layout */
    }
  }

  @media (max-width: 500px) {
    .programm-item {
      width: 100%; /* 1-column layout */
    }
  }
</style>
