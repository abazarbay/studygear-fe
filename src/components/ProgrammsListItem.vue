<template> 
    <div class="programm-container">
        <img
            class="programm-image"
            :src="programm.imageUrl"
        />
        <div class="details-wrap">
            <h3>{{ programm.name }}</h3>
            <!-- <p>€{{ programm.price }}</p> -->
        </div>
        <button 
        class="remove-button"
        v-on:click="$emit('remove-from-cart', programm.id)"
        >Remove</button>
   </div>
</template>

<script>
export default {
    name: 'ProgrammsListItem',
    props: ['programm'], 
}
</script>

<style scoped>
  .programm-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
    
  }

  .programm-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>