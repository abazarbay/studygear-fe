<template>
    <div id="page-wrap" v-if="programm">
        <div id="img-wrap">
            <img v-bind:src="programm.imageUrl" />
        
        <div id="programm-details">
            <h1>{{ programm.name }}</h1>
            <!-- <h3 id="price">€{{ programm.price }}</h3> -->
            <p>Average rating: {{ programm.averageRating }}</p>
            <button 
            id="add-to-cart"
            v-if="!itemIsInCart && !showSuccessMessage"
            v-on:click="addToCart"
            >Add the program</button>
            <button 
            id="add-to-cart"
            class="grey-button"
            v-if="itemIsInCart"
            >Program is already added</button>
            <button 
            id="add-to-cart"
            class="green-button"
            v-if="!itemIsInCart && showSuccessMessage"
            >Successfully added a program</button>
            <h4>Description</h4>
            <p>{{ programm.description }}</p>
        </div>
        </div>
    </div>
    <NotFoundPage v-else />
</template>

<script>
import axios from 'axios';
import NotFoundPage from './NotFoundPage.vue';

export default {
    name: 'ProgrammDetailPage',
    components: {
        NotFoundPage
    },
    data() {
        return {
            programm: {},
            cartItems: [],
            showSuccessMessage: false,
        }
        },
        computed: {
            itemIsInCart() {
                return this.cartItems.some(item => item.id === this.programm.id);
            }
        },
        methods: {
            async addToCart() {
                await axios.post('/api/users/12345/cart', {
                    programmId: this.$route.params.id,
                }); 
                this.showSuccessMessage = true;
                setTimeout(() => {
                  this.$router.push('/programms');
                }, 1500);
            }
        },
        async created() {
          const { data: programm} = await axios.get(`/api/programms/${this.$route.params.id}`);
          this.programm = programm;
          const { data: cartItems } = await axios.get('/api/users/12345/cart');
          this.cartItems = cartItems;
        }
}
</script>

<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
    margin-bottom: 80px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #programm-details {
    padding: 16px;
    position: relative;
   
  }

  #add-to-cart {
    width: 30%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }
  .green-button {
    background-color: green;
  }
  .grey-button {
    background-color: grey;
  }
</style>
