import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { CartItem, Product } from '../types'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>(JSON.parse(localStorage.getItem('vora_cart') || '[]'))
  const subtotal = computed(() => items.value.reduce((sum, i) => sum + i.price * i.quantity, 0))
  const count = computed(() => items.value.reduce((sum, i) => sum + i.quantity, 0))
  const shipping = computed(() => subtotal.value >= 5000 || subtotal.value === 0 ? 0 : 120)
  const tax = computed(() => Math.round(subtotal.value * .14))
  const total = computed(() => subtotal.value + shipping.value + tax.value)
  function persist(){ localStorage.setItem('vora_cart', JSON.stringify(items.value)) }
  function add(product: Product, quantity=1){
    const existing = items.value.find(i => i.id === product.id)
    if(existing) existing.quantity = Math.min(existing.quantity + quantity, product.stock)
    else items.value.push({...product, quantity: Math.min(quantity, product.stock)})
    persist()
  }
  function update(id:string, quantity:number){
    const item=items.value.find(i=>i.id===id)
    if(!item)return
    item.quantity=Math.max(1,Math.min(quantity,item.stock));persist()
  }
  function remove(id:string){items.value=items.value.filter(i=>i.id!==id);persist()}
  function clear(){items.value=[];persist()}
  return {items,subtotal,count,shipping,tax,total,add,update,remove,clear}
})
