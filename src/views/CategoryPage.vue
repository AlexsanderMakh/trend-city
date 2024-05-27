<template>
  <div class="category-page">
    <App-Navbar/>
    <div class="category-header">
      <button @click="goHome">Вернуться на главную</button>
      <h2>Категория: {{ category.name }}</h2>
    </div>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" @input="searchProducts" placeholder="Поиск продуктов...">
    </div>
    <div class="subcategories-list" v-if="subcategories.length">
      <h2>Подкатегории: </h2>
      <div class="subcategories">
        <div v-for="subcategory in subcategories" :key="subcategory.id" @click="openSubcategory(subcategory.id)">
          <img :src="subcategory.imageUrl" :alt="subcategory.name">
          <h3>Категория: {{ subcategory.name }}</h3>
        </div>
      </div>
    </div>
    <div class="products-list">
      <h2><strong>Продукты: </strong> </h2>
      <div class="products">
        <div v-for="product in products" :key="product.id" @click="openProduct(product.id)">
          <img :src="product.imageUrl" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p>Цена: {{ product.price }} руб.</p>
        </div>
      </div>
    </div>
    <footer>
      <p>&copy; 2024 Trend City. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import AppNavbar from "@/components/App-Navbar.vue";

export default defineComponent({
  name: 'CategoryPage',
  components: {AppNavbar},
  data() {
    return {
      category: { name: '', imageUrl: '' },
      subcategories: [],
      products: [],
      searchQuery: ''
    };
  },
  computed: {
    cartItemCount() {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      return cart.length;
    }
  },


  methods: {
    goHome() {
      this.$router.push('/');
    },
    async fetchCategoryData() {
      const storeId = '58958138';
      const token = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD';
      const categoryId = this.$route.params.id;
      const categoryResponse = await axios.get(`https://app.ecwid.com/api/v3/${storeId}/categories/${categoryId}?token=${token}`);
      this.category = categoryResponse.data;

      const subcategoriesResponse = await axios.get(`https://app.ecwid.com/api/v3/${storeId}/categories?parent=${categoryId}&token=${token}`);
      this.subcategories = subcategoriesResponse.data.items;

      this.searchProducts();
    },
    async searchProducts() {
      const storeId = '58958138';
      const token = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD';
      const categoryId = this.$route.params.id;
      const productsResponse = await axios.get(`https://app.ecwid.com/api/v3/${storeId}/products?categories=${categoryId}&keyword=${this.searchQuery}&token=${token}`);
      this.products = productsResponse.data.items;
    },
    openSubcategory(categoryId: number) {
      this.$router.push(`/category/${categoryId}`);
    },
    openProduct(productId: number) {
      this.$router.push(`/product/${productId}`);
    }
  },
  created() {
    this.fetchCategoryData();
  },
  watch: {
    '$route.params.id': 'fetchCategoryData'
  }
});
</script>

<style scoped>
.category-page {
  font-family: Mulish, sans-serif;
  max-width: 1750px;
  margin: 0 auto;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-color: #333;
  color: #fff;
}

.logo {
  font-size: 1.5em;
}

.auth a {
  color: #fff;
  margin: 0 0.5em;
}

.category-header {
  padding: 1em;
}

.category-header button {
  background-color: #333;
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
  margin-right: 0.5em;
  border-radius: 20px;
}
.category-header h2 {
  font-size: 30px;
}
.search-bar {
  padding: 1em;
  text-align: center;

}

.search-bar input {
  padding: 1em;
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 17px;
  box-shadow: 2px 0px 20px #000;
}

.subcategories-list, .products-list {
  padding: 1em;
  text-align: center;
  font-size: 25px;
}
.subcategories-list h2 {
  text-align: center;
  font-family: Mulish, sans-serif;
  font-size: 35px;
}

.subcategories, .products {
  display: flex;
  flex-wrap: wrap;
}
.subcategories {
  text-align:center;
  font-size: 30px;
}

.subcategories div, .products div {
  flex: 1 1 calc(33.333% - 1em);
  margin: 0.5em;
  cursor: pointer;
}

.subcategories img, .products img {
  width: 65%;
  box-shadow: 2px 0px 20px #000;
}

footer {
  padding: 1em;
  background-color: #000000;
  color: #fff;
  text-align: center;
  font-size: 20px;
  border-radius: 10px;

}
@media only screen and (max-width: 1000px) {
.subcategories div, .products div {
  border-bottom: 2px solid #6e6e6e;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.subcategories img, .products img {
  width: 80%;

}
}
</style>
