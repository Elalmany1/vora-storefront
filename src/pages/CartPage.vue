<template>
	<div class="page">
		<div class="container">
			<div class="eyebrow">YOUR CART</div>
			<h1 class="h1">Cart.</h1>
			<div v-if="cart.items.length" class="cart">
				<div class="items">
					<div v-for="item in cart.items" :key="item.id" class="item">
						<img :src="item.image" :alt="item.name" />
						<div class="item-main">
							<div>
								<div class="muted">{{ item.category }}</div>
								<h3>{{ item.name }}</h3>
								<p>{{ format(item.price) }} EGP</p>
							</div>
							<div class="controls">
								<button @click="cart.update(item.id, item.quantity - 1)">-</button>
								<span>{{ item.quantity }}</span>
								<button @click="cart.update(item.id, item.quantity + 1)">+</button>
								<button class="remove" @click="cart.remove(item.id)">Remove</button>
							</div>
						</div>
					</div>
				</div>
				<aside class="summary card">
					<h3>Summary</h3>
					<div><span>Subtotal</span><b>{{ format(cart.subtotal) }} EGP</b></div>
					<div><span>Shipping</span><b>{{ cart.shipping ? format(cart.shipping) + ' EGP' : 'Free' }}</b></div>
					<div><span>Tax</span><b>{{ format(cart.tax) }} EGP</b></div>
					<div class="total"><span>Total</span><b>{{ format(cart.total) }} EGP</b></div>
					<RouterLink class="btn block" to="/checkout/shipping">Checkout</RouterLink>
				</aside>
			</div>
			<div v-else class="empty">
				Your cart is empty.<br />
				<RouterLink class="btn" to="/shop" style="margin-top: 18px">Start shopping</RouterLink>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">import { RouterLink } from 'vue-router';import { useCartStore } from '../stores/cart';const cart=useCartStore();const format=(n:number)=>new Intl.NumberFormat('en-EG').format(n)</script>
<style scoped>.cart{display:grid;grid-template-columns:1fr 350px;gap:30px}.item{display:flex;gap:18px;padding:18px 0;border-bottom:1px solid var(--vora-line)}.item img{width:130px;height:130px;object-fit:cover;border-radius:12px;background:#f5f5f3}.item-main{display:flex;justify-content:space-between;gap:20px;flex:1}.item h3{margin:8px 0}.item p{margin:0;font-weight:600}.controls{display:flex;align-items:center;gap:10px}.controls button{border:1px solid #ddd;background:#fff;width:32px;height:32px;border-radius:7px}.controls .remove{width:auto;border:0;color:#777}.summary{height:max-content;padding:22px}.summary h3{margin-top:0}.summary>div{display:flex;justify-content:space-between;padding:10px 0}.summary .total{border-top:1px solid var(--vora-line);margin-top:8px;padding-top:18px;font-size:17px}@media(max-width:800px){.cart{grid-template-columns:1fr}.item-main{flex-direction:column}.controls{justify-content:flex-start}}@media(max-width:500px){.item img{width:95px;height:95px}}
</style>
