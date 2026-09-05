<template>
  <div>
    <header class="header">
      <div class="container header-inner">
        <RouterLink to="/" class="logo">VORA<span>.</span></RouterLink>
        <nav class="nav">
          <RouterLink to="/shop">Shop</RouterLink>
          <RouterLink to="/category/lighting">Lighting</RouterLink>
          <RouterLink to="/category/protection">Protection</RouterLink>
          <RouterLink to="/category/switchgear">Switchgear</RouterLink>
        </nav>
        <div class="actions">
          <RouterLink to="/search" aria-label="Search"><Search :size="19"/></RouterLink>
          <RouterLink to="/account" aria-label="Account"><UserRound :size="19"/></RouterLink>
          <RouterLink to="/cart" class="cart-link"><ShoppingBag :size="19"/><b v-if="cart.count">{{ cart.count }}</b></RouterLink>
        </div>
        <button class="menu" @click="mobileOpen=!mobileOpen"><Menu :size="22"/></button>
      </div>
      <div v-if="mobileOpen" class="mobile-nav container">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" @click="mobileOpen=false">{{link.label}}</RouterLink>
      </div>
    </header>
    <main><RouterView/></main>
    <footer class="footer"><div class="container footer-inner"><div><div class="logo">VORA<span>.</span></div><p class="muted">Electrical products built for modern systems.</p></div><div class="footer-links"><RouterLink to="/shop">Shop</RouterLink><RouterLink to="/account">Account</RouterLink><RouterLink to="/support">Support</RouterLink></div></div></footer>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { Menu, Search, ShoppingBag, UserRound } from 'lucide-vue-next'
import { useCartStore } from '../../stores/cart'
const cart=useCartStore(),mobileOpen=ref(false)
const links=[{label:'Shop',to:'/shop'},{label:'Lighting',to:'/category/lighting'},{label:'Protection',to:'/category/protection'},{label:'Switchgear',to:'/category/switchgear'},{label:'Account',to:'/account'}]
</script>
<style scoped>
.header{border-bottom:1px solid var(--vora-line);position:sticky;top:0;background:rgba(255,255,255,.95);backdrop-filter:blur(12px);z-index:20}.header-inner{height:76px;display:flex;align-items:center;gap:42px}.logo{font-size:24px;font-weight:800;letter-spacing:-.06em}.logo span{font-weight:400}.nav{display:flex;gap:24px;font-weight:500;flex:1}.nav a.router-link-active{font-weight:700}.actions{display:flex;align-items:center;gap:18px}.cart-link{display:flex;gap:5px;align-items:center}.cart-link b{font-size:10px;background:#111;color:#fff;min-width:16px;height:16px;border-radius:50%;display:grid;place-items:center}.menu{display:none;border:0;background:none}.mobile-nav{padding:18px 0;display:flex;flex-direction:column;gap:16px}.footer{border-top:1px solid var(--vora-line);padding:44px 0}.footer-inner{display:flex;justify-content:space-between;gap:30px}.footer-links{display:flex;gap:24px}@media(max-width:760px){.nav{display:none}.actions{margin-left:auto}.menu{display:block}.footer-inner{flex-direction:column}.footer-links{flex-wrap:wrap}}
</style>
