import {createRouter,createWebHistory} from 'vue-router'
const router=createRouter({history:createWebHistory(),routes:[
 {path:'/',component:()=>import('./components/layouts/PublicLayout.vue'),children:[
  {path:'',component:()=>import('./pages/HomePage.vue')},{path:'shop',component:()=>import('./pages/ShopPage.vue')},
  {path:'search',component:()=>import('./pages/SearchPage.vue')},{path:'category/:slug',component:()=>import('./pages/CategoryPage.vue')},
  {path:'product/:slug',component:()=>import('./pages/ProductPage.vue')},{path:'cart',component:()=>import('./pages/CartPage.vue')},
  {path:'account',component:()=>import('./pages/account/AccountPage.vue')},
  {path:'account/orders',component:()=>import('./pages/account/OrdersPage.vue')},
  {path:'account/:section',component:()=>import('./pages/account/GenericAccountPage.vue')},
  {path:'support',component:()=>import('./pages/account/GenericAccountPage.vue'),meta:{title:'Support'}},
 ]},
 {path:'/checkout',component:()=>import('./pages/checkout/CheckoutLayout.vue'),children:[
  {path:'',redirect:'/checkout/shipping'},{path:'shipping',component:()=>import('./pages/checkout/ShippingPage.vue')},
  {path:'payment',component:()=>import('./pages/checkout/PaymentPage.vue')},{path:'review',component:()=>import('./pages/checkout/ReviewPage.vue')}
 ]},
 {path:'/order/:orderId/success',component:()=>import('./pages/OrderSuccessPage.vue')}
]})
export default router
