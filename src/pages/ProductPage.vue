<template><div class="page"><div class="container"><div class="product"><div class="gallery"><img :src="product.image" :alt="product.name"/><div class="thumbs"><img v-for="(img,i) in [product.image,...(product.gallery||[])]" :key="i" :src="img" @click="selected=img"/></div></div><div class="details"><div class="eyebrow">{{product.category}}</div><h1 class="h1">{{product.name}}</h1><div class="price">{{format(currentPrice)}} EGP</div><p class="desc">{{product.description}}</p><div v-if="product.variants?.length" class="variant"><b>Variant</b><select v-model="variant" class="select"><option v-for="v in product.variants" :key="v.id" :value="v.id">{{v.name}} — {{v.value}}</option></select></div><div class="stock" :class="{out:!product.stock}"><span/>{{product.stock?'In stock':'Out of stock'}}</div><button class="btn block" :disabled="!product.stock" @click="add">Add to cart</button><div class="specs"><div class="eyebrow">Specifications</div><div v-for="s in product.specifications" :key="s.label" class="spec"><span>{{s.label}}</span><b>{{s.value}}</b></div></div></div></div></div></div></template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../services/mock'
import { useCartStore } from '../stores/cart'
const route=useRoute(),cart=useCartStore(),product=products.find(p=>p.slug===route.params.slug) || products[0],selected=ref(product.image),variant=ref(product.variants?.[0]?.id||'')
const currentPrice=computed(()=>product.variants?.find(v=>v.id===variant.value)?.price||product.price)
const format=(n:number)=>new Intl.NumberFormat('en-EG').format(n)
function add(){cart.add({...product,price:currentPrice.value})}
</script>
<style scoped>
.product{display:grid;grid-template-columns:1.05fr .95fr;gap:70px}.gallery>img{width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:20px;background:#f4f4f2}.thumbs{display:flex;gap:10px;margin-top:12px}.thumbs img{width:68px;height:68px;object-fit:cover;border-radius:8px;cursor:pointer}.details{padding:20px 0}.details .h1{max-width:600px}.price{font-size:22px;font-weight:700;margin:18px 0}.desc{color:var(--vora-muted);line-height:1.7;max-width:520px}.variant{margin:30px 0}.variant b{display:block;margin-bottom:8px}.stock{display:flex;gap:8px;align-items:center;font-size:13px;margin:22px 0}.stock span{width:8px;height:8px;border-radius:50%;background:#51a34f}.stock.out span{background:#c93434}.specs{border-top:1px solid var(--vora-line);margin-top:34px;padding-top:24px}.spec{display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid var(--vora-line)}.spec span{color:var(--vora-muted)}@media(max-width:850px){.product{grid-template-columns:1fr;gap:30px}.details{padding:0}}
</style>
