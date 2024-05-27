<template>
  <div class="product-details">
    <App-Navbar/>
    <div class="product-info">
      <button @click="goHome">Вернуться на главную</button>
      <h1>{{ product.name }}</h1>
      <img :src="product.imageUrl" alt="product.name">
      <p><strong>Цена:</strong> {{ product.price }} руб.</p>
      <p v-html="product.description"></p>
        </div>
      <div class="cart-button">
      <button @click="addToCart(product)">Купить</button>
      </div>
    <div v-if="notification" class="notification">
      {{ notification }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';
import AppNavbar from "@/components/App-Navbar.vue";

export default defineComponent({
  name: 'ProductDetailsPage',
  components: { AppNavbar },
  data() {
    return {
      product: {
        id: 0,
        name: '',
        imageUrl: '',
        price: '',
        description: ''
      }
    };
  },
  computed: {
    ...mapGetters(['cartItemCount', 'notification'])
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    ...mapActions(['addToCart', 'clearNotification']),
    async fetchProduct() {
      const storeId = '58958138';
      const token = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD';
      const productId = this.$route.params.id;
      const response = await axios.get(`https://app.ecwid.com/api/v3/${storeId}/products/${productId}?token=${token}`);
      this.product = response.data;
    }
  },
  created() {
    this.fetchProduct();
  }
});
</script>

<style scoped>
.product-details {
  font-family: Mulish, sans-serif;
  max-width: 1750px;
  margin: 0 auto;

}

.product-info {
  padding: 1em;
  font-size: 20px;
  text-align: center;
}

.product-info img {
  width: 60%;
  box-shadow: 2px 0px 20px #000;
}

.product-info button {
  background-color: #000000;
  font-size: 20px;
  border-radius: 20px;
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
}
.notification {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: #333;
  color: #fff;
  padding: 1em;
  border-radius: 5px;
}
button {
  background-color: #000000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 25px;
  cursor: pointer;
}
button:hover {
  background-color: rgba(51, 51, 51, 0.2);
}
.cart-button {
  display: flex;
  justify-content: center;
}
.dsk-product {
  max-width: 1200px;
}
</style>
