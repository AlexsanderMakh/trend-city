<template>
  <div class="modal" v-if="visible">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Оформление заказа</h2>
      <form @submit.prevent="submitOrder">
        <div class="form-group">
          <label for="fullName">ФИО:</label>
          <input type="text" id="fullName" v-model="fullName" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="phone">Номер телефона:</label>
          <input type="tel" id="phone" v-model="phone" required>
        </div>
        <div class="form-group">
          <label>Способ оплаты:</label>
          <div>
            <input type="radio" id="cash" value="cash" v-model="paymentMethod" required>
            <label for="cash">Оплата при доставке</label>
          </div>
          <div>
            <input type="radio" id="card" value="card" v-model="paymentMethod" required>
            <label for="card">Оплата картой</label>
          </div>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OrderForm',
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      fullName: '',
      email: '',
      phone: '',
      paymentMethod: ''
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    submitOrder() {
      // Обработка заказа
      alert('Заказ отправлен!');
      this.closeModal();
    }
  }
});
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
  text-align: left;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;
  width: 380px;
  font-size: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
}

.form-group input[type="radio"] {
  margin-right: 5px;
}

button {
  background-color: #000000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #333733;
}
</style>
