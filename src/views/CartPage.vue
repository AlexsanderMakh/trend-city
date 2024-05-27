<template>
  <div class="cart-page">
    <App-Navbar/>
    <div class="cart-info">
      <h1>Корзина</h1>
      <div v-if="cart.length">
        <div v-for="(item, index) in cart" :key="index" class="cart-item">
          <div class="cart-item__info">
            <img :src="item.imageUrl" :alt="item.name" class="cart-item__image">
            <div class="cart-item__details">
              <h2 class="cart-item__name">{{ item.name }}</h2>
              <p class="cart-item__price">{{ item.price }} ₽</p>
            </div>
          </div>
          <div class="cart-item__controls">
            <div class="quantity-controls">
              <button @click="decrementQuantity(index)" :disabled="item.quantity <= 1">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="incrementQuantity(index)">+</button>
            </div>
            <button @click="removeFromCart(index)" class="remove-button">Удалить</button>
          </div>
        </div>
        <div class="total">
          <h2>Итоговая сумма: {{ totalAmount }} ₽</h2>
        </div>
        <button @click="showOrderForm" class="order-button">Оформить заказ</button>
      </div>
      <div class="order-none" v-else>
        <p>Ваша корзина пуста.</p>
      </div>
    </div>
    <OrderForm :visible="isOrderFormVisible" @close="isOrderFormVisible = false"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import AppNavbar from "@/components/App-Navbar.vue";
import OrderForm from "@/components/OrderForm.vue";

export default defineComponent({
  name: 'CartPage',
  components: { AppNavbar, OrderForm },
  data() {
    return {
      isOrderFormVisible: false
    };
  },
  computed: {
    ...mapGetters(['cart', 'cartItemCount']),
    totalAmount(): number {
      return this.cart.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
    }
  },
  methods: {
    ...mapActions(['removeFromCart', 'incrementQuantity', 'decrementQuantity', 'clearCart', 'syncCart']),
    placeOrder() {
      alert('Поздравляем с покупкой!');
      localStorage.setItem('cart', JSON.stringify([]));
      this.clearCart();
    },
    showOrderForm() {
      this.isOrderFormVisible = true;
    }
  },
  created() {
    this.syncCart();
  }
});
</script>

<style scoped>
.cart-page {
  font-family: Mulish, sans-serif;
  max-width: 1750px;
  margin: 0 auto;
}

.cart-info {
  max-width: 1600px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
}

.cart-item__info {
  display: flex;
  align-items: center;
}

.cart-item__image {
  width: 300px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;
}

.cart-item__details {
  display: flex;
  flex-direction: column;

}

.cart-item__name {
  font-size: 28px;
  font-weight: bold;
  margin: 0;
}

.cart-item__price {
  font-size: 20px;
  color: #666;
}

.cart-item__controls {
  display: flex;
  align-items: center;
}

.quantity-controls {
  display: flex;
  align-items: center;

}
.quantity-controls span {
  font-size: 21px;
}

.quantity-controls button {
  background-color: #000000;
  color: #fff;
  padding: 0.5em;
  border: none;
  cursor: pointer;
  margin: 0 0.5em;
  border-radius: 5px;
  font-size: x-large;
}

.remove-button {
  background-color: #ff4d4d;
  color: #fff;
  width: 150px;
  font-size: 18px;
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
}

.order-button {
  background-color: #000000;
  color: #fff;
  padding: 1em 2em;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  display: block;
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
}
.order-button:hover {
  background-color: #595858;
}

.total {
  text-align: right;
  font-size: 24px;
  font-weight: bold;
  padding-top: 20px;
}
.order-none p {
  font-size: 20px;
}
</style>
