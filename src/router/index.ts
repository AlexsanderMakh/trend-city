import { createRouter, createWebHistory } from 'vue-router';
import CategoriesPage from '@/views/CategoriesPage.vue';
import CategoryPage from '@/views/CategoryPage.vue';
import ProductDetailsPage from '@/views/ProductDetailsPage.vue';
import CartPage from '@/views/CartPage.vue';

const routes = [
    {
        path: '/',
        name: 'CategoriesPage',
        component: CategoriesPage
    },
    {
        path: '/category/:id',
        name: 'CategoryPage',
        component: CategoryPage
    },
    {
        path: '/product/:id',
        name: 'ProductDetailsPage',
        component: ProductDetailsPage
    },
    {
        path: '/cart',
        name: 'CartPage',
        component: CartPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
