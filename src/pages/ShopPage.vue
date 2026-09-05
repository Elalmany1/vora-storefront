<template>
<div class="page"><div class="container">
 <div class="top"><div><div class="eyebrow">VORA SHOP</div><h1 class="h1">Electrical essentials.</h1><p class="muted">Explore the complete catalog.</p></div><div class="sort"><label>Sort</label><select v-model="sort" class="select"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div></div>
 <div class="toolbar"><button class="filter-btn" @click="filtersOpen=!filtersOpen"><SlidersHorizontal :size="17"/> Filters</button><span class="muted">{{filtered.length}} products</span></div>
 <div class="shop-layout"><aside :class="{open:filtersOpen}"><div class="filter-head"><b>Filters</b><button @click="filtersOpen=false">×</button></div><label>Brand<input v-model="brand" class="input" placeholder="VORA"/></label><label>Category<select v-model="category" class="select"><option value="">All</option><option>Lighting</option><option>Protection</option><option>Switchgear</option><option>Meters</option></select></label><label class="check"><input type="checkbox" v-model="inStock"/> In stock only</label></aside><div class="product-grid"><ProductCard v-for="p in filtered" :key="p.id" :product="p" @add="cart.add(p)"/></div></div>
</div></div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { SlidersHorizontal } from 'lucide-vue-next'
import ProductCard from '../components/commerce/ProductCard.vue'
import { products } from '../services/mock'
import { useCartStore } from '../stores/cart'
const cart=useCartStore(),sort=ref('featured'),brand=ref(''),category=ref(''),inStock=ref(false),filtersOpen=ref(false)
const filtered=computed(()=>{let a=products.filter(p=>(!brand.value||p.brand.toLowerCase().includes(brand.value.toLowerCase()))&&(!category.value||p.category===category.value)&&(!inStock.value||p.stock>0));if(sort.value==='low')a.sort((x,y)=>x.price-y.price);if(sort.value==='high')a.sort((x,y)=>y.price-x.price);return a})
</script>
<style scoped>
.top{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:35px}.top .h1{margin-bottom:8px}.sort{width:200px}.sort label{display:block;font-size:11px;text-transform:uppercase;letter-spacing:.1em;margin-bottom:7px}.toolbar{display:flex;justify-content:space-between;margin-bottom:20px}.filter-btn{display:none;border:1px solid #ddd;background:#fff;border-radius:9px;padding:9px 13px;gap:8px;align-items:center}.shop-layout{display:grid;grid-template-columns:210px 1fr;gap:28px}.shop-layout aside{border-right:1px solid var(--vora-line);padding-right:22px}.shop-layout aside label{display:block;font-size:12px;font-weight:600;margin-bottom:20px}.shop-layout aside .input,.shop-layout aside .select{margin-top:8px}.check{display:flex!important;gap:8px;align-items:center}.check input{width:auto}.product-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}@media(max-width:800px){.shop-layout{grid-template-columns:1fr}.shop-layout aside{display:none;border:0;padding:20px;background:#fff;box-shadow:var(--shadow);border-radius:14px}.shop-layout aside.open{display:block}.filter-btn{display:flex}.top{align-items:start}.product-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:520px){.top{flex-direction:column}.sort{width:100%}.product-grid{gap:14px}}
</style>
