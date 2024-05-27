// store/index.ts
import { createStore } from 'vuex';

interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    quantity: number;
}

export default createStore({
    state: {
        cart: JSON.parse(localStorage.getItem('cart') || '[]') as Product[],
        notification: ''
    },
    mutations: {
        addToCart(state, product: Product) {
            const item = state.cart.find((item: Product) => item.id === product.id);
            if (item) {
                item.quantity++;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeFromCart(state, index: number) {
            state.cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        incrementQuantity(state, index: number) {
            state.cart[index].quantity++;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        decrementQuantity(state, index: number) {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },
        setNotification(state, message: string) {
            state.notification = message;
        },
        clearNotification(state) {
            state.notification = '';
        },
        clearCart(state) {
            state.cart = [];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        syncCart(state) {
            state.cart = JSON.parse(localStorage.getItem('cart') || '[]');
        }
    },
    actions: {
        addToCart({ commit }, product: Product) {
            commit('addToCart', product);
            commit('setNotification', 'Товар добавлен в корзину!');
            setTimeout(() => {
                commit('clearNotification');
            }, 3000);
        },
        removeFromCart({ commit }, index: number) {
            commit('removeFromCart', index);
        },
        incrementQuantity({ commit }, index: number) {
            commit('incrementQuantity', index);
        },
        decrementQuantity({ commit }, index: number) {
            commit('decrementQuantity', index);
        },
        clearCart({ commit }) {
            commit('clearCart');
        },
        syncCart({ commit }) {
            commit('syncCart');
        }
    },
    getters: {
        cartItemCount(state) {
            return state.cart.reduce((total, item) => total + item.quantity, 0);
        },
        cart(state) {
            return state.cart;
        },
        notification(state) {
            return state.notification;
        }
    }
});
