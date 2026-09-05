<template><div class="page"><div class="container"><div class="eyebrow">CATEGORY</div><h1 class="h1">{{ title }}</h1><div class="product-grid"><ProductCard v-for="p in categoryProducts" :key="p.id" :product="p" @add="cart.add(p)"/></div><div v-if="!categoryProducts.length" class="empty">No products in this category.</div></div></div></template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '../components/commerce/ProductCard.vue'
import { products } from '../services/mock'
import { useCartStore } from '../stores/cart'
const route=useRoute(),cart=useCartStore()
const title=computed(()=>String(route.params.slug).replace(/-/g,' ').replace(/\b\w/g,m=>m.toUpperCase()))
const categoryProducts=computed(()=>products.filter(p=>p.category.toLowerCase()===String(route.params.slug).toLowerCase()))
</script>
<style scoped>.product-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:30px}@media(max-width:900px){.product-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:520px){.product-grid{grid-template-columns:1fr 1fr;gap:14px}}</style>
