<template>
   <div id="page-wrap">
    <h1>Account</h1>
    <ProgrammsList :programms="cartItems" 
    v-on:remove-from-cart="removeFromCart($event)"
    />
   <h3 id="total-price">Total: €{{ totalPrice }}</h3>
   <button id="checkout-button">Proceed to Checkout</button>
    </div>
</template>

<script>
import axios from 'axios';
import ProgrammsList from '../components/ProgrammsList.vue';

export default {
    name: 'CartPage',
    components: {
      ProgrammsList,
    },
    data() {
        return {
            cartItems: [],
        }
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce(
                (sum, item) => sum + Number(item.price),
                0,
            );
        }
    },
    methods: {
        async removeFromCart(programmId) {
            const result = await axios.delete(`/api/users/12345/cart/${programmId}`);
            this.cartItems = result.data;
        }
    },
    async created() {
      const result = await axios.get('/api/users/12345/cart');
      const cartItems = result.data;
      this.cartItems = cartItems;
    }
}
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  #total-price {
    padding: 16px;
    text-align: right;
  }

  #checkout-button {
    width: 100%;
  }

</style>
