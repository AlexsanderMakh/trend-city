<template>
  <div class="categories-page">
    <App-Navbar/>
    <div class="banner">
      <img src="@/assets/banner.jpg" alt="Banner">
    </div>
    <div class="categories-list">
      <h2 class="categories-title">Самые популярные<br> категории:</h2>
      <div class="categories">
        <div v-for="category in mainCategories" :key="category.id" @click="openCategory(category.id)">
          <img :src="category.imageUrl" :alt="category.name">
          <h3>{{ category.name }}</h3>
        </div>
      </div>
    </div>
    <AppAboutUs/>
    <footer>
      <p>&copy; 2024 Trend City. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import AppNavbar from '@/components/App-Navbar.vue';
import AppAboutUs from '@/components/App-AboutUs.vue';

interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

export default defineComponent({
  name: 'CategoriesPage',
  components: { AppNavbar, AppAboutUs },
  data() {
    return {
      mainCategories: [] as Category[],
      categories: [] as Category[],
      products: []
    };
  },
  computed: {
    cartItemCount() {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      return cart.length;
    }
  },
  methods: {
    async fetchData() {
      const storeId = '58958138';
      const token = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD';
      const categoriesResponse = await axios.get(`https://app.ecwid.com/api/v3/${storeId}/categories?token=${token}`);
      const categories: Category[] = categoriesResponse.data.items;
      const orderedCategories = ['Шерсть', 'Аксессуары', 'Хлопок'];
      this.mainCategories = orderedCategories
          .map(name => categories.find(category => category.name === name))
          .filter((category): category is Category => category !== undefined);
    },
    openCategory(categoryId: number) {
      this.$router.push(`/category/${categoryId}`);
    }
  },
  created() {
    this.fetchData();
  }
});
</script>

<style scoped>
.categories-page {
  font-family: Mulish, sans-serif;
  max-width: 1750px;
  margin: 0 auto;
}
.banner img {
  border-radius : 20px;
  box-shadow: 0px 9px 60px #000;
}


.auth a {
  color: #fff;
  margin: 0 0.5em;
}

.banner img {
  width: 100%;
}

.categories-list {
  padding: 1em;
}

.categories-title {
  text-align: center;
  font-size: 3em;
  margin-bottom: 1em;

}

.categories {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 20px;
  text-align: center;

}

.categories div {
  flex: 1 1 calc(33.333% - 1em);
  margin: 0.5em;
  cursor: pointer;
  box-shadow: 3px -2px 10px #000000;
  border-radius: 20px;
}

.categories img {
  width: 100%;
  border-radius: 20px;
}

.about-us {
  padding: 1em;
  background-color: #f4f4f4;
  text-align: center;
}

footer {
  padding: 1em;
  background-color: #000000;
  color: #fff;
  text-align: center;
  font-size: 20px;
  border-radius: 10px;
}
</style>
