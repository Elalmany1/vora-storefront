export type Product = {
	id: string
	slug: string
	name: string
	category: string
	brand: string
	image: string
	gallery?: string[]
	price: number
	compareAtPrice?: number
	stock: number
	energyRating?: string
	description?: string
	specifications?: { label: string; value: string }[]
	variants?: { id: string; name: string; value: string; price?: number; stock: number }[]
}

export type CartItem = Product & {
	quantity: number
	variantId?: string
}

export type Address = {
	id: string
	fullName: string
	phone: string
	line1: string
	city: string
	governorate: string
	postalCode?: string
}

export type Order = {
	id: string
	status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
	items: CartItem[]
	subtotal: number
	shipping: number
	tax: number
	total: number
	address: Address
	createdAt: string
}

export type ApiError = {
	message: string
	code?: string
}
