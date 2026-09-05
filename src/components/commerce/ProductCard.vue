<template>
  <article class="product-card">
    <RouterLink :to="`/product/${product.slug}`" class="image-wrap"><img :src="product.image" :alt="product.name"/><span v-if="!product.stock" class="sold">Out of stock</span></RouterLink>
    <div class="info"><div><p class="category">{{product.category}}</p><RouterLink :to="`/product/${product.slug}`" class="name">{{product.name}}</RouterLink></div><strong>{{format(product.price)}} EGP</strong></div>
    <button v-if="product.stock" class="add" @click="$emit('add',product)">Add to cart <Plus :size="16"/></button>
    <button v-else class="add muted-btn" disabled>Notify me</button>
  </article>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Plus } from 'lucide-vue-next'
import type { Product } from '../../types'
defineProps<{product:Product}>()
defineEmits<{add:[product:Product]}>()
const format=(n:number)=>new Intl.NumberFormat('en-EG').format(n)
</script>
<style scoped>
.product-card{min-width:0}.image-wrap{display:block;position:relative;background:#f4f4f2;aspect-ratio:1/1;overflow:hidden;border-radius:14px}.image-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .35s}.product-card:hover img{transform:scale(1.03)}.sold{position:absolute;top:12px;left:12px;background:#fff;padding:7px 10px;border-radius:999px;font-size:11px}.info{display:flex;justify-content:space-between;gap:12px;padding:14px 2px 10px}.category{margin:0 0 5px;color:var(--vora-muted);font-size:11px;text-transform:uppercase;letter-spacing:.1em}.name{font-weight:600}.info strong{white-space:nowrap}.add{width:100%;border:1px solid #111;background:#111;color:#fff;border-radius:10px;padding:11px;display:flex;justify-content:center;align-items:center;gap:8px;font-weight:600}.muted-btn{background:#eee;color:#888;border-color:#eee}
</style>
